import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeService } from '../services/dark-mode';
import { NgIcon } from '@ng-icons/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { SearchModal } from '../search-modal/search-modal';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgIcon, SearchModal],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit, OnDestroy {
  menuOpen = false;
  isDarkMode = false;
  searchModalOpen = false;

  heroSun = 'heroSun';
  heroMoon = 'heroMoon';
  heroSearch = 'heroMagnifyingGlass';
  heroMenu = 'heroBars3';
  heroX = 'heroXMark';

  private themeSubscription: Subscription = new Subscription();

  constructor(private darkModeService: DarkModeService) {}
  ngOnInit(): void {
    this.themeSubscription = this.darkModeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  toogleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

  openSearch(): void {
    this.searchModalOpen = true;
  }

  closeSearch(): void {
    this.searchModalOpen = false;
  }
}
