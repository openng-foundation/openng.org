import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';

import { injectBlogPosts } from '../../blog/post-attributes';

export const routeMeta: RouteMeta = {
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content:
        'News and updates from the OpenNG Foundation on Angular open-source maintenance and the community.',
    },
  ],
};

@Component({
  imports: [DatePipe, RouterLink, HlmButtonImports],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Blog</h1>
          <p class="py-4 text-base-content/70">
            News and updates from the OpenNG Foundation.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <div class="grid gap-6">
        @for (post of posts; track post.slug) {
          <article class="card bg-base-100 shadow-sm">
            <div class="card-body gap-3">
              <div class="text-sm text-base-content/60">
                {{ post.attributes.publishedAt | date: 'longDate' }}
              </div>
              <h2 class="card-title text-2xl">
                <a
                  class="link link-hover"
                  [routerLink]="['/blog', post.attributes.slug]"
                >
                  {{ post.attributes.title }}
                </a>
              </h2>
              <p class="text-base-content/70">
                {{ post.attributes.description }}
              </p>
              <div class="card-actions justify-end">
                <a
                  hlmBtn
                  size="sm"
                  [routerLink]="['/blog', post.attributes.slug]"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
        } @empty {
          <div class="alert">
            <span>No posts published yet.</span>
          </div>
        }
      </div>
    </section>
  `,
})
export default class BlogListPage {
  readonly posts = injectBlogPosts();
}
