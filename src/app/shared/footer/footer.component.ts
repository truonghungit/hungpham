import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent {
  year = new Date().getFullYear();
  links: Array<{ path: string; label: string }> = [
    // { path: '/tutorials', label: 'Tutorials' },
    // { path: '/blog', label: 'Blog' },
    // { path: '/about', label: 'About' },
  ];
}
