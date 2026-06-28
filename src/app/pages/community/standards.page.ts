import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { PageHeroComponent } from '../../components/page-hero';

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
  imports: [RouterLink, HlmButtonImports, PageHeroComponent],
  template: `
    <app-page-hero
      title="Standards"
      description="Quality expectations for the projects we maintain."
    />

    <section class="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-12 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Why standards matter</h2>
        <p class="text-muted-foreground leading-7">
          Before OpenNG takes responsibility for reviving and maintaining
          abandoned projects, we need clear guidelines on what quality looks
          like. These standards define that baseline for every project we
          maintain.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Code quality</h2>
        <p class="text-muted-foreground leading-7">
          Projects we maintain should include automated tests, linting, and CI
          checks that run on every pull request. New contributions are reviewed
          before merge, and breaking changes are documented clearly.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Angular version support</h2>
        <p class="text-muted-foreground leading-7">
          When we take the lead on an abandoned project, the first release
          targets the latest major Angular version. We do not backfill every
          intermediate major version gap. After that initial release, we follow
          the same LTS support policy as per Angular.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Licensing</h2>
        <p class="text-muted-foreground leading-7">
          Projects under OpenNG maintenance remain open source.
          New projects should be released under an open-source license.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Release expectations</h2>
        <ul class="list-disc pl-6 text-muted-foreground leading-7">
          <li class="mb-2">Semantic versioning for public API changes</li>
          <li class="mb-2">Changelogs that explain what changed and why</li>
          <li class="mb-2">Migration notes when upgrades require action</li>
          <li>Regular dependency updates to reduce security drift</li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Evolving guidelines</h2>
        <p class="text-muted-foreground leading-7">
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
