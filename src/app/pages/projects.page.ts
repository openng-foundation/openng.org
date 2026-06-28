import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { PageHeroComponent } from '../components/page-hero';

export const routeMeta: RouteMeta = {
  title: 'Projects',
  meta: [
    {
      name: 'description',
      content:
        'Angular open-source projects maintained or revived by the OpenNG Foundation.',
    },
  ],
};

@Component({
  imports: [RouterLink, HlmButtonImports, HlmCardImports, PageHeroComponent],
  template: `
    <app-page-hero title="Projects">
      <p class="py-4 text-muted-foreground">
        Libraries we are reviving and maintaining for the Angular community.
        All Foundation repositories live on
        <a
          class="font-medium text-primary underline-offset-4 hover:underline"
          href="https://github.com/openng-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </p>
    </app-page-hero>

    <section class="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-12 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">First cohort</h2>
        <p class="text-muted-foreground leading-7">
          We do not fork every abandoned library, we step in where maintenance
          has stalled and the community still depends on the project. Our first
          step is maintaining the
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/blog/first-cohort-selected-repositories"
          >
            first cohort
          </a>
          of six ngneat libraries selected for revival, from testing and data
          fetching to state management and developer ergonomics.
        </p>
        <p class="text-muted-foreground leading-7">
          As repositories move under Foundation stewardship, all Foundation
          libraries will be published under the
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            href="https://www.npmjs.com/org/openng"
            target="_blank"
            rel="noopener noreferrer"
          >
            &#64;openng
          </a>
          npm organization, giving the community a consistent namespace for
          maintained Angular packages.
        </p>
      </div>

      <div class="grid gap-6">
        @for (project of firstCohort; track project.repo) {
          <section hlmCard>
            <div hlmCardHeader>
              <h2 hlmCardTitle>{{ project.name }}</h2>
            </div>
            <div hlmCardContent>
              <p class="text-muted-foreground">{{ project.description }}</p>
            </div>
          </section>
        }
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Coming next</h2>
        <p class="text-muted-foreground leading-7">
          Once the first cohort is on stable footing, we will keep evaluating
          other abandoned Angular projects. Know a library that needs a new
          home? Read our
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/community/project-intake"
          >
            project intake criteria
          </a>
          or
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/about/contact"
          >
            get in touch
          </a>.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a
          hlmBtn
          size="sm"
          href="https://github.com/openng-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenNG on GitHub
        </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/community/get-involved">
          Get involved
        </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/about/governance">
          How we govern
        </a>
      </div>
    </section>
  `,
})
export default class ProjectsPage {
  readonly firstCohort = [
    {
      name: 'Cashew',
      repo: 'ngneat/cashew',
      description: 'HTTP caching for Angular applications.',
    },
    {
      name: 'Spectator',
      repo: 'ngneat/spectator',
      description:
        'A testing library that simplifies Angular component tests with a clean API.',
    },
    {
      name: 'Query',
      repo: 'ngneat/query',
      description: 'TanStack Query bindings for Angular.',
    },
    {
      name: 'Elf',
      repo: 'ngneat/elf',
      description: 'A reactive, immutable state management library.',
    },
    {
      name: 'Until Destroy',
      repo: 'ngneat/until-destroy',
      description:
        'Automatic subscription cleanup for Angular components.',
    },
  ];
}
