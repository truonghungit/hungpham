import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
})
export class ThemeSwitchComponent implements OnInit {
  themeService = inject(ThemeService);
  theme = this.themeService.theme;

  constructor() {}

  ngOnInit() {}

  toggleThemeMode() {
    this.themeService.theme.update((theme) => {
      const mode = !this.themeService.isDark ? 'dark' : 'light';
      return { ...theme, mode: mode };
    });
  }
}
