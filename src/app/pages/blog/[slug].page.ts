import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import { ArticleContentComponent } from '../../shared/article-content';
import { CardComponent } from '../../shared/card';
import { TableOfContentComponent } from '../../shared/table-of-content';
import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    AsyncPipe,
    ArticleContentComponent,
    CardComponent,
    TableOfContentComponent,
  ],
  template: `
    @if (post$ | async; as post) {
    <div class="mt-8 grid grid-cols-12 gap-y-10 lg:gap-x-10">
      <div
        class="order-1 col-span-12 grid w-full gap-4 overflow-auto lg:col-span-8">
        <article class="prose max-w-none dark:prose-invert">
          <figure>
            <img [src]="post.attributes.coverImage" />
          </figure>

          <h1 id="article-title" class="flex text-[40px] font-bold">
            {{ post.attributes.title }}
          </h1>

          <div class="flex w-full flex-col gap-10 overflow-hidden">
            <app-article-content classes="mt-8" [content]="post.content" />

            <app-card alDarkCard class="lg:hidden">
              <div appCardContent>share-icons</div>
            </app-card>
          </div>
        </article>

        <!-- <al-card alGradientCard #view>
            <al-newsletter alCardContent />
          </al-card> -->

        <!-- @defer (on viewport(view); on timer(5s)) {
          <section>
            <al-related-articles [id]="articleDetails().id" />
          </section>
          } @placeholder {
          <div class="grid grid-cols-2 gap-4">
            <al-article-compact-card-skeleton *alRepeat="2" />
          </div>
          } -->
      </div>

      <aside class="order-3 col-span-12 lg:col-span-4">
        <div class="sticky top-0 hidden flex-col gap-4 lg:flex">
          <app-card>
            <div appCardContent>
              <app-table-of-content [content]="post.content" />
            </div>
          </app-card>

          <app-card>
            <div appCardContent>share this post</div>
          </app-card>
        </div>
      </aside>
    </div>
    }
  `,
  styles: [],
})
export default class BlogPostComponent {
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'blog',
  });

  constructor() {
    this.post$.subscribe((data) => {
      console.log(data);
    });
  }
}
