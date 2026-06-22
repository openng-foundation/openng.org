import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'Get Involved',
  meta: [
    {
      name: 'description',
      content:
        'Ways to contribute to the OpenNG Foundation, as a maintainer, contributor, or community member helping Angular open source.',
    },
  ],
};

@Component({
  imports: [RouterLink],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Get Involved</h1>
          <p class="py-4 text-base-content/70">
            Help keep critical Angular tooling alive through shared
            maintenance.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-3xl space-y-10 px-4 py-12 lg:px-8">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Why contribute</h2>
        <p class="text-base-content/80 leading-7">
          OpenNG exists because important Angular libraries should not
          disappear when a single maintainer steps away. Maintenance is a
          lonely journey, by contributing your time and expertise, you help
          the ecosystem stay stable, secure, and up to date.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h2 class="card-title text-lg">Become a maintainer</h2>
            <p class="text-base-content/70">
              We are actively looking for people to maintain revived projects.
              See
              <a class="link link-primary" routerLink="/community/maintainer-candidates">
                maintainer candidates
              </a>
              for requirements and how to apply.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h2 class="card-title text-lg">Code and reviews</h2>
            <p class="text-base-content/70">
              Fix bugs, implement features, and review pull requests on revived
              projects. Every contribution reduces the burden on any one person.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h2 class="card-title text-lg">Documentation</h2>
            <p class="text-base-content/70">
              Improve READMEs, migration guides, and examples so teams can
              adopt and upgrade revived libraries with confidence.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h2 class="card-title text-lg">Issue triage</h2>
            <p class="text-base-content/70">
              Help reproduce reports, label issues, and surface security or
              compatibility concerns early in the lifecycle.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Suggest a project</h2>
        <p class="text-base-content/80 leading-7">
          Know an unmaintained Angular library the community relies on? Read
          our
          <a class="link link-primary" routerLink="/community/project-intake">
            project intake criteria
          </a>
          and reach out through GitHub Discussions.
          <a class="link link-primary" href="https://github.com/openng-foundation/openng.org/discussions/new?category=abandoned-projects" target="_blank" rel="noopener noreferrer">
            Suggest a project
          </a>
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a
          class="btn btn-sm"
          href="https://github.com/openng-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenNG on GitHub
        </a>
        <a class="btn btn-sm btn-ghost" routerLink="/projects">View projects</a>
        <a class="btn btn-sm btn-ghost" routerLink="/community/standards">
          Our standards
        </a>
      </div>
    </section>
  `,
})
export default class GetInvolvedPage {}
