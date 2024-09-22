import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
    <div class="relative px-4 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-2xl lg:max-w-5xl">
        <div class="xl:relative">
          <div class="mx-auto max-w-2xl">
            <article class="prose max-w-none dark:prose-invert">
              <header class="not-prose flex flex-col">
                <h1
                  class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  {{ post.attributes.title }}
                </h1>
                <time
                  datetime="2022-07-14"
                  class=" mt-4 flex items-center text-base text-zinc-400 dark:text-zinc-500">
                  <span
                    class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500">
                  </span>
                  <span class="ml-3">July 14, 2022</span>
                </time>
              </header>
              <div class="mt-8">
                <figure>
                  <img [src]="post.attributes.coverImage" />
                </figure>

                <analog-markdown classes="mt-8" [content]="post.content" />
              </div>
            </article>
          </div>
        </div>
      </div>
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
}
