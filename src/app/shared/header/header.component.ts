import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeSwitchComponent } from '../../core/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ThemeSwitchComponent],
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  links: Array<{ path: string; label: string }> = [
    // { path: '/tutorials', label: 'Tutorials' },
    // { path: '/blog', label: 'Blog' },
    // { path: '/about', label: 'About' },
  ];
}
