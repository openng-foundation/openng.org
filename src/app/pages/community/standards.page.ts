import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';

export const routeMeta: RouteMeta = {
  title: 'Standards',
  meta: [
    {
      name: 'description',
      content:
        'Open-source quality standards for Angular projects maintained by the OpenNG Foundation.',
    },
  ],
};

@Component({
  imports: [RouterLink, HlmButtonImports],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Standards</h1>
          <p class="py-4 text-base-content/70">
            Quality expectations for the projects we maintain.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-3xl space-y-10 px-4 py-12 lg:px-8">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Why standards matter</h2>
        <p class="text-base-content/80 leading-7">
          Before OpenNG takes responsibility for reviving and maintaining
          abandoned projects, we need clear guidelines on what quality looks
          like. These standards define that baseline for every project we
          maintain.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Code quality</h2>
        <p class="text-base-content/80 leading-7">
          Projects we maintain should include automated tests, linting, and CI
          checks that run on every pull request. New contributions are reviewed
          before merge, and breaking changes are documented clearly.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Angular version support</h2>
        <p class="text-base-content/80 leading-7">
          When we take the lead on an abandoned project, the first release
          targets the latest major Angular version. We do not backfill every
          intermediate major version gap. After that initial release, we follow
          the same LTS support policy as per Angular.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Licensing</h2>
        <p class="text-base-content/80 leading-7">
          Projects under OpenNG maintenance remain open source.
          New projects should be released under an open-source license.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Release expectations</h2>
        <ul class="list-disc space-y-2 pl-6 text-base-content/80 leading-7">
          <li>Semantic versioning for public API changes</li>
          <li>Changelogs that explain what changed and why</li>
          <li>Migration notes when upgrades require action</li>
          <li>Regular dependency updates to reduce security drift</li>
        </ul>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Evolving guidelines</h2>
        <p class="text-base-content/80 leading-7">
          Detailed contribution guides and per-project standards will be
          published as repositories join the organization. These principles
          define the baseline every maintained project is expected to meet.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a hlmBtn size="sm" routerLink="/community/get-involved">
          Get involved
        </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/community/security">
          Security program
        </a>
      </div>
    </section>
  `,
})
export default class StandardsPage {}
