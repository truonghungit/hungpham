import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink],
  template: `

  `,
  styles: [``],
})
export default class CoursesComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/blog')
  );
}
