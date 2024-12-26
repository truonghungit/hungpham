import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleContentComponent {
  readonly content = input.required<string>();

  private readonly _domSanitizer = inject(DomSanitizer);

  protected readonly sanitizedContent = computed(() =>
    this._domSanitizer.bypassSecurityTrustHtml(this.content()!),
  );
}
