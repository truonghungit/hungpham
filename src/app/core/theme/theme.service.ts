import {
  afterNextRender,
  Inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { effect } from '@angular/core';
import { Theme } from './theme.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme = signal<Theme>({ mode: 'light', color: 'base' });

  private isBrowser!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    afterNextRender(() => {
      this.loadTheme();
    });

    effect(() => {
      this.setTheme();
    });
  }

  private loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.theme.set(JSON.parse(theme));
    }
  }

  private setTheme() {
    if (this.isBrowser) {
      localStorage.setItem('theme', JSON.stringify(this.theme()));
      this.setThemeClass();
    }
  }

  public get isDark(): boolean {
    return this.theme().mode == 'dark';
  }

  private setThemeClass() {
    document.querySelector('html')!.className = this.theme().mode;

    document
      .querySelector('html')!
      .setAttribute('data-theme', this.theme().color);
  }
}
