import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import { CardComponent } from '../../shared/card';
import { TableOfContentComponent } from '../../shared/table-of-content';
import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    AsyncPipe,
    MarkdownComponent,
    CardComponent,
    TableOfContentComponent,
  ],
  template: `
    @if (post$ | async; as post) {
    <div class="mt-8 grid grid-cols-12 gap-y-10 lg:gap-x-10">
      <section
        aria-labelledby="article-title"
        class="order-1 col-span-12 grid w-full gap-4 overflow-auto lg:col-span-8">
        <div class="flex items-center text-sm">
          <span class="mr-auto">
            publishDate
            <!-- {{ articleDetails().publishDate | date : 'dd MMM yyyy' }} -->
          </span>

          <div>difficulty</div>
          <!-- <al-difficulty
            class="mr-2 md:mr-10"
            [difficulty]="articleDetails().difficulty"
            color="border" /> -->

          <div class="flex items-center gap-1">
            readingTime
            <!-- <fast-svg name="clock" size="16" />
            {{ articleDetails().readingTime }} min -->
          </div>
        </div>

        <h1 id="article-title" class="flex text-[40px] font-bold">
          {{ post.attributes.title }}
        </h1>

        <div class="flex w-full flex-col gap-10 overflow-hidden">
          <analog-markdown classes="mt-8" [content]="post.content" />

          <app-card alDarkCard class="lg:hidden">
            <div appCardContent>
              share-icons
              <!-- <al-article-share-icons
                [slug]="articleDetails().slug"
                [title]="articleDetails().title"
                [language]="articleDetails().lang" /> -->
            </div>
          </app-card>
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
      </section>
      <aside class="order-3 col-span-12 lg:col-span-4">
        author-card
        <!-- <al-author-card
          [author]="articleDetails().author"
          [clampText]="true"
          [linkable]="true" /> -->

        <div class="sticky top-24 mt-5 hidden flex-col gap-4 lg:flex">
          <!-- @if (articleDetails().anchors.length) {
          <al-card alDarkCard>
            <div alCardContent>
              <al-table-of-contents
                alTableOfContentsScrollSpy
                class="al-scroll block max-h-[50dvh] overflow-auto"
                [anchors]="articleDetails().anchors" />
            </div>
          </al-card>
          } -->

          <app-card alDarkCard>
            <div appCardContent>
              <app-table-of-content [content]="post.content" />
              <!-- <al-table-of-contents
                alTableOfContentsScrollSpy
                class="al-scroll block max-h-[50dvh] overflow-auto"
                [anchors]="articleDetails().anchors" /> -->
            </div>
          </app-card>

          <app-card alDarkCard>
            <div appCardContent>
              share-icons
              <!-- <al-article-share-icons
                [slug]="articleDetails().slug"
                [title]="articleDetails().title"
                [language]="articleDetails().lang" /> -->
            </div>
          </app-card>
        </div>
      </aside>
      <footer class="order-2 col-span-12 lg:order-4 lg:col-span-8">
        <!-- @defer (on viewport(view); on timer(3000ms)) {
        <al-giscus-comments />
        } @placeholder {
        <div class="h-[600px]"></div>
        } -->
        footer
      </footer>
    </div>

    <!-- <div class="relative px-4 sm:px-8 lg:px-12">
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
    </div> -->
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
