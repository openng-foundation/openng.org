import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { injectBlogPosts } from '../../blog/post-attributes';
import { PageHeroComponent } from '../../components/page-hero';

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
  imports: [
    DatePipe,
    RouterLink,
    HlmButtonImports,
    HlmCardImports,
    PageHeroComponent,
  ],
  template: `
    <app-page-hero
      title="Blog"
      description="News and updates from the OpenNG Foundation."
    />

    <section class="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <div class="grid gap-6">
        @for (post of posts; track post.slug) {
          <article hlmCard>
            <div hlmCardHeader>
              <p class="text-sm text-muted-foreground">
                {{ post.attributes.publishedAt | date: 'longDate' }}
              </p>
              <h2 hlmCardTitle class="text-2xl">
                <a
                  class="hover:underline"
                  [routerLink]="['/blog', post.attributes.slug]"
                >
                  {{ post.attributes.title }}
                </a>
              </h2>
            </div>
            <div hlmCardContent>
              <p class="text-muted-foreground">
                {{ post.attributes.description }}
              </p>
            </div>
            <div hlmCardFooter class="justify-end">
              <a
                hlmBtn
                size="sm"
                [routerLink]="['/blog', post.attributes.slug]"
              >
                Read more
              </a>
            </div>
          </article>
        } @empty {
          <p class="text-muted-foreground">No posts published yet.</p>
        }
      </div>
    </section>
  `,
})
export default class BlogListPage {
  readonly posts = injectBlogPosts();
}
