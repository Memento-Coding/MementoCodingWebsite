import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { Search, SearchResult } from '../services/search';

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgIcon],
  templateUrl: './search-modal.html',
  styleUrl: './search-modal.css',
})
export class SearchModal implements OnInit, OnDestroy {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @ViewChild('searchInput') searchInput!: ElementRef;

  searchQuery = '';
  searchResults: SearchResult[] = [];
  recentSearches: string[] = [];
  selectedIndex = -1;
  isSearching = false;

  private isBrowser: boolean;
  private searchSubject = new Subject<string>();
  private subscriptions = new Subscription();

  heroMagnifyingGlass = 'heroMagnifyingGlass';
  heroXMark = 'heroXMark';
  heroClockRotateLeft = 'heroClock';
  heroDocumentText = 'heroDocumentText';
  heroArrowUpRight = 'heroArrowUpRight';

  constructor(
    private searchService: Search,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((query) => {
        this.searchService.search(query).subscribe();
      })
    );

    this.subscriptions.add(
      this.searchService.searchResults$.subscribe((results) => {
        this.searchResults = results;
        this.selectedIndex = results.length > 0 ? 0 : -1;
      })
    );

    this.subscriptions.add(
      this.searchService.isSearching$.subscribe((isSearching) => (this.isSearching = isSearching))
    );

    if (this.isBrowser) {
      this.loadRecentSearches();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnchanges(): void {
    if (this.isOpen) {
      setTimeout(() => {
        this.focusInput();
      }, 100);
    } else {
      this.resetSearch();
    }
  }

  onSearchInput(event: any): void {
    const query = event.target.value;
    this.searchQuery = query;
    this.searchSubject.next(query);
  }

  navigateResults(direction: 'up' | 'down'): void {
    const maxIndex =
      this.searchResults.length > 0
        ? this.searchResults.length - 1
        : this.recentSearches.length - 1;

    if (direction === 'down') {
      this.selectedIndex = this.selectedIndex < maxIndex ? this.selectedIndex + 1 : 0;
    } else {
      this.selectedIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : maxIndex;
    }
  }

  selectResult(): void {
    if (this.searchResults.length > 0 && this.selectedIndex >= 0) {
      this.selectSearchResult(this.searchResults[this.selectedIndex]);
    }
  }

  selectSearchResult(result: SearchResult): void {
    this.searchService.addRecentSearch(this.searchQuery);
    this.router.navigate([result.url]);
    this.closeSearch();
  }

  searchFromRecent(query: string): void {
    this.searchQuery = query;
    this.searchSubject.next(query);
  }

  clearRecent(): void {
    this.searchService.clearRecentSearches();
    this.loadRecentSearches();
  }

  closeSearch(): void {
    this.closeModal.emit();
  }
  private loadRecentSearches(): void {
    this.recentSearches = this.searchService.getRecentSearches();
  }

  private focusInput(): void {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }

  private resetSearch(): void {
    this.searchQuery = '';
    this.searchResults = [];
    this.selectedIndex = -1;
    this.loadRecentSearches();
  }
}
