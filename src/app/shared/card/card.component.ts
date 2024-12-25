import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, inject, input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class CardComponent {
  readonly imageSrc = input<string>();

  ref: ElementRef<HTMLElement> = inject(ElementRef);

  @HostBinding('class')
  hostClasses = 'block rounded-lg border shadow-sm overflow-hidden';
}
