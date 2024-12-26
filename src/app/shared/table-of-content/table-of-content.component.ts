import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, model, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-of-content',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './table-of-content.component.html',
  styleUrl: './table-of-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableOfContentComponent {
  @Input() content: any = '';

  readonly activeAnchorTitle = model<string | undefined>(undefined);

  anchors = signal<{ type: 'H1' | 'H2' | 'H3'; title: string }[]>([]);

  ngOnChanges(): void {
    this.parseContent();
  }

  parseContent(): void {
    if (!this.content || typeof this.content !== 'string') {
      this.anchors.set([]);
      return;
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.content;

    const extractedAnchors: { type: 'H1' | 'H2' | 'H3'; title: string }[] = [];

    tempDiv.querySelectorAll('h1, h2, h3').forEach((element) => {
      const type = element.tagName as 'H1' | 'H2' | 'H3';
      const title = element.textContent?.trim() || '';
      if (title) {
        extractedAnchors.push({ type, title });
      }
    });

    this.anchors.set(extractedAnchors);
  }
}
