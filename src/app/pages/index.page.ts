import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'OpenNG Foundation',
  meta: [
    {
      name: 'description',
      content:
        'A community hub helping the Angular open-source ecosystem with maintenance, reviving abandoned projects, and finding maintainers.',
    },
  ],
};

@Component({
  imports: [RouterLink],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-16 text-center">
        <div class="max-w-3xl">
          <h1 class="text-4xl font-bold lg:text-5xl">
            Keeping Angular open source sustainable
          </h1>
          <p class="py-6 text-lg text-base-content/70">
            OpenNG is a community hub that helps where it is needed most, on
            the maintenance effort. We revive abandoned projects, connect them
            with maintainers, and support the wider Angular OSS ecosystem.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <a class="btn btn-neutral" routerLink="/about">Our mission</a>
            <a class="btn btn-ghost" routerLink="/community/get-involved">
              Get involved
            </a>
          </div>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-5xl px-4 py-16 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-semibold">Where we act</h2>
        <p class="mt-4 text-base-content/70 leading-7">
          We step in when maintenance has stalled and the community still depends on a project.
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h3 class="card-title text-lg">Revive abandoned projects</h3>
            <p class="text-base-content/70">
              When maintainers disappear, critical tooling should not vanish
              with them. We help bring projects back to a healthy, maintained
              state.
            </p>
            <div class="card-actions">
              <a class="link link-neutral" routerLink="/projects">View projects</a>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h3 class="card-title text-lg">Find maintainers</h3>
            <p class="text-base-content/70">
              Maintenance is a lonely journey. We connect projects with people
              willing to carry them forward.
            </p>
            <div class="card-actions">
              <a
                class="link link-neutral"
                routerLink="/community/maintainer-candidates"
              >
                Onboarding rules
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h3 class="card-title text-lg">Support the ecosystem</h3>
            <p class="text-base-content/70">
              Beyond our own projects, we help promote quality OSS, connect
              libraries with contributors, and raise the bar on open-source
              standards.
            </p>
            <div class="card-actions">
              <button class="btn btn-sm btn-disabled" disabled>Upcoming</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-semibold">Our priorities</h2>
          <p class="mt-4 text-base-content/70 leading-7">
            OpenNG is in an early stage, and we are building in phases. Here is what we are
            focused on now and what comes next.
          </p>
        </div>

        <ul class="timeline timeline-vertical mt-12 w-full">
          <li>
            <div class="timeline-start timeline-box mb-10 w-full text-base">
              <h3 class="font-semibold">Foundation and first cohort</h3>
              <p class="py-2 text-base-content/70">
                Launch this site with our mission, set up GitHub Discussions,
                and maintain the
                <a
                  class="link link-primary"
                  routerLink="/blog/first-cohort-selected-repositories"
                >
                  first cohort
                </a>
                of six libraries.
              </p>
            </div>
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-end timeline-box mb-10 w-full text-base">
              <h3 class="font-semibold">Beyond the first cohort</h3>
              <p class="py-2 text-base-content/70">
                Keep evaluating other abandoned Angular libraries that the
                community still relies on.
              </p>
            </div>
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start timeline-box mb-10 w-full text-base">
              <h3 class="font-semibold">Help the wider ecosystem</h3>
              <p class="py-2 text-base-content/70">
                Identify ways to help the wider Angular open-source ecosystem.
              </p>
            </div>
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="timeline-end timeline-box w-full text-base">
              <h3 class="font-semibold">Sponsorship</h3>
              <p class="py-2 text-base-content/70">
                Find sponsors to fund maintenance work and governance costs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  `,
})
export default class Home {}
