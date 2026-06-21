import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'History',
  meta: [
    {
      name: 'description',
      content:
        'Key milestones in the OpenNG Foundation story, from its creation to ongoing maintenance of Angular open-source projects.',
    },
  ],
};

@Component({
  imports: [RouterLink],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Foundation history</h1>
          <p class="py-4 text-base-content/70">
            Milestones in the OpenNG Foundation story.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <p class="mb-10 text-base-content/80 leading-7">
        The idea for a global organization to help the Angular OSS ecosystem
        had been forming for a while. The disappearance of the ngneat
        organization from GitHub, and the impact on widely used libraries
        across the ecosystem, was the trigger to make it happen.
      </p>

      <ul class="timeline timeline-vertical timeline-snap-icon">
        <li>
          <div class="timeline-start mb-10 text-sm text-base-content/60">
            June 18, 2025
          </div>
          <div class="timeline-middle text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box mb-10 text-base">
            <h2 class="font-semibold">Foundation created</h2>
            <p class="py-2 text-base-content/80">
              A group of Angular community members launched the OpenNG Foundation
              as a community hub to help with maintenance across the Angular
              open-source ecosystem, starting with reviving abandoned projects
              and finding people to maintain them.
            </p>
            <a
              class="link link-primary text-sm"
              routerLink="/blog/openng-foundation-announcement"
            >
              Read the announcement
            </a>
          </div>
          <hr />
        </li>
        <li>
          <div class="timeline-start mb-10 text-sm text-base-content/60">
            June 20, 2026
          </div>
          <div class="timeline-middle text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box mb-10 text-base">
            <h2 class="font-semibold">First cohort selected</h2>
            <p class="py-2 text-base-content/80">
              OpenNG announced the first cohort of six ngneat libraries selected
              to maintain, cashew, spectator, query, elf, and
              until-destroy, and began the work of finding maintainers for
              each.
            </p>
            <a
              class="link link-primary text-sm"
              routerLink="/blog/first-cohort-selected-repositories"
            >
              Read the announcement
            </a>
          </div>
        </li>
      </ul>
    </section>
  `,
})
export default class HistoryPage {}
