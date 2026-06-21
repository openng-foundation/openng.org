import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'Contact Us',
  meta: [
    {
      name: 'description',
      content:
        'Get in touch with the OpenNG Foundation about maintenance, contributions, and Angular open-source projects.',
    },
  ],
};

@Component({
  imports: [RouterLink],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Contact Us</h1>
          <p class="py-4 text-base-content/70">
            Reach the people behind the OpenNG Foundation.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-3xl space-y-10 px-4 py-12 lg:px-8">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">GitHub</h2>
        <p class="text-base-content/80 leading-7">
          The OpenNG Foundation is a GitHub organization and community hub for
          Angular open-source maintenance. GitHub is the primary place for
          issues, pull requests, and contributions on the projects we maintain.
        </p>
        <a
          class="link link-primary"
          href="https://github.com/openng-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenNG Foundation on GitHub
        </a>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h2 class="card-title text-lg">Contribute or maintain</h2>
            <p class="text-base-content/70 text-base">
              Interested in helping revive abandoned Angular tooling or stepping
              up as a maintainer? We welcome both experienced contributors and
              newcomers, depending on the project.
            </p>
            <div class="card-actions justify-end">
              <a class="btn btn-sm" routerLink="/community/get-involved">
                Get involved
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h2 class="card-title text-lg">Suggest a project</h2>
            <p class="text-base-content/70 text-base">
              Know an unmaintained Angular library the community relies on?
              Share it with us with a new GitHub discussion.
            </p>
            <div class="card-actions justify-end">
              <a class="btn btn-sm" href="https://github.com/openng-foundation/openng.org/discussions" target="_blank" rel="noopener noreferrer">
                Suggest a project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow-sm">
        <div class="card-body gap-4">
          <h2 class="card-title text-xl">Stay updated</h2>
          <p class="text-base-content/70 text-base">
            Our launch announcement explains why the foundation exists, what we
            are not trying to do, and what comes first.
          </p>
          <div class="card-actions">
            <a
              class="btn btn-sm"
              routerLink="/blog/openng-foundation-announcement"
            >
              Read the announcement
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export default class ContactPage {}
