import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

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
  imports: [RouterLink],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Projects</h1>
          <p class="py-4 text-base-content/70">
            Libraries we are reviving and maintaining for the Angular community.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-4xl space-y-10 px-4 py-12 lg:px-8">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">First cohort</h2>
        <p class="text-base-content/80 leading-7">
          We do not fork every abandoned library, we step in where maintenance
          has stalled and the community still depends on the project. Our first
          step is maintaining the
          <a
            class="link link-primary"
            routerLink="/blog/first-cohort-selected-repositories"
          >
            first cohort
          </a>
          of six ngneat libraries selected for revival, from testing and data
          fetching to state management and developer ergonomics.
        </p>
        <p class="text-base-content/80 leading-7">
          As repositories move under Foundation stewardship, all Foundation
          libraries will be published under the
          <a
            class="link link-primary"
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
          <div class="card bg-base-100 shadow-sm">
            <div class="card-body gap-4 text-base">
                <h2 class="card-title text-xl">{{ project.name }}</h2>
              <p class="text-base-content/70">{{ project.description }}</p>
              <div class="card-actions">
                <a
                  class="btn btn-sm"
                  [href]="'https://github.com/' + project.repo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        }
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Coming next</h2>
        <p class="text-base-content/80 leading-7">
          Once the first cohort is on stable footing, we will keep evaluating
          other abandoned Angular projects. Know a library that needs a new
          home? Read our
          <a class="link link-primary" routerLink="/community/project-intake">
            project intake criteria
          </a>
          or
          <a class="link link-primary" routerLink="/about/contact">
            get in touch
          </a>.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a class="btn btn-sm" routerLink="/community/get-involved">
          Get involved
        </a>
        <a class="btn btn-sm btn-ghost" routerLink="/about/governance">
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
