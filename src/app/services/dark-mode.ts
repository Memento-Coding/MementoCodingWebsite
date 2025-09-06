import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public darkMode$ = this.darkModeSubject.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.inicializeDarkMode();
  }

  private inicializeDarkMode() {
    if (!this.isBrowser) {
      return;
    }
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  toggleDarkMode() {
    if (!this.isBrowser) {
      return;
    }

    if (this.darkModeSubject.value) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }

  private enableDarkMode() {
    if (!this.isBrowser) {
      return;
    }
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.darkModeSubject.next(true);
  }

  private enableLightMode() {
    if (!this.isBrowser) {
      return;
    }

    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.darkModeSubject.next(false);
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}
