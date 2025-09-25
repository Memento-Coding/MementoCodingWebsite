import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of } from 'rxjs';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Search {
  //BehaviorSubject to store the search results
  private searchResults = new BehaviorSubject<SearchResult[]>([]);
  public searchResults$ = this.searchResults.asObservable();

  //BehaviorSubject to controlle the loading status during the search
  private isSearching = new BehaviorSubject<boolean>(false);
  public isSearching$ = this.isSearching.asObservable();

  private isBrowser: boolean;

  private mockData: SearchResult[] = [
    {
      id: '1',
      title: 'Desarrollo Web',
      description: 'Servicios de desarrollo web con Angular, React y Vue',
      category: 'Servicios',
      url: '/services/web-development',
      icon: 'heroGlobeAlt',
    },
    {
      id: '2',
      title: 'Aplicaciones Móviles',
      description: 'Desarrollo de apps nativas e híbridas',
      category: 'Servicios',
      url: '/services/mobile-apps',
      icon: 'heroDevicePhoneMobile',
    },
    {
      id: '3',
      title: 'Sobre Nosotros',
      description: 'Conoce más sobre Memento Coding',
      category: 'Empresa',
      url: '/about',
      icon: 'heroUsers',
    },
    {
      id: '4',
      title: 'Contacto',
      description: 'Ponte en contacto con nuestro equipo',
      category: 'Empresa',
      url: '/contact',
      icon: 'heroEnvelope',
    },
    {
      id: '5',
      title: 'Blog de Tecnología',
      description: 'Artículos sobre las últimas tendencias tech',
      category: 'Blog',
      url: '/blog',
      icon: 'heroChatBubbleBottomCenterText',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  search(query: string): Observable<SearchResult[]> {
    if (!query.trim()) {
      this.searchResults.next([]);
      return of([]);
    }

    this.isSearching.next(true);

    return of(query).pipe(
      delay(300),
      map((searchTerm: string) => {
        const results = this.mockData.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        this.isSearching.next(false);
        this.searchResults.next(results);
        return results;
      })
    );
  }

  getRecentSearches(): string[] {
    if (!this.isBrowser) return [];

    try {
      const recent = localStorage.getItem('recentSearches');
      return recent ? JSON.parse(recent) : [];
    } catch (e) {
      console.warn('Error reading recent searches from localStorage', e);
      return [];
    }
  }

  addRecentSearch(query: string): void {
    if (!this.isBrowser) return;

    try {
    const recent = this.getRecentSearches();
    const filtered = recent.filter((item) => item !== query);
    const updated = [query, ...filtered].slice(0, 5);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
    } catch (e) {
      console.warn('Error saving recent searches to localStorage', e);
    }
  }

  clearRecentSearches(): void {
    if (!this.isBrowser) return;
    try {
    localStorage.removeItem('recentSearches');
    } catch (e) {
      console.warn('Error clearing recent searches from localStorage', e);
    }
  }
}
