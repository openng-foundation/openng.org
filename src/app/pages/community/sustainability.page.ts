import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { PageHeroComponent } from '../../components/page-hero';

export const routeMeta: RouteMeta = {
  title: 'Sustainability',
  meta: [
    {
      name: 'description',
      content:
        'How the OpenNG Foundation plans for long-term maintenance through shared maintenance, sponsorship, and bounties.',
    },
  ],
};

@Component({
  imports: [RouterLink, HlmButtonImports, PageHeroComponent],
  template: `
    <app-page-hero
      title="Sustainability"
      description="Long-term maintenance built on shared maintenance, not solo maintainers."
    />

    <section class="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-12 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">The maintenance problem</h2>
        <p class="text-muted-foreground leading-7">
          Open-source projects often fail not because the code is bad, but
          because maintenance is a lonely journey. When one person burns out or
          disappears, entire ecosystems lose critical tooling overnight.
        </p>
        <p class="text-muted-foreground leading-7">
          OpenNG was created after the ngneat organization vanished from GitHub,
          leaving a cross-section of widely used libraries without a clear path
          forward. Sustainability is our answer to that pattern.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Community hub model</h2>
        <p class="text-muted-foreground leading-7">
          Instead of relying on a single maintainer, OpenNG distributes
          ownership across a group of Angular community members. Acting as a
          community hub rather than an individual organization makes it easier
          to find sponsors and to distribute resources where they are needed
          most.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Finding maintainers</h2>
        <p class="text-muted-foreground leading-7">
          Sustainability starts with people. Our main focus is reviving abandoned
          projects and connecting them with maintainers, whether experienced
          contributors or newcomers ready to step up. See our
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/about/governance"
          >
            governance page
          </a>
          for how we approach maintainer onboarding.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Sponsorship and bounties</h2>
        <p class="text-muted-foreground leading-7">
          At some point, we plan to seek sponsors to help with governance costs
          and to create bounties that fund maintenance work. As a community
          organization, we aim to put that support where it matters most,
          whether that is a security fix, an Angular version upgrade, or
          onboarding a new maintainer.
        </p>
        <p class="text-muted-foreground leading-7">
          Sponsorship programs are not live yet. If you are interested in
          supporting OpenNG, visit our
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/community/partnerships"
          >
            partnerships page
          </a>.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Keeping projects current</h2>
        <p class="text-muted-foreground leading-7">
          Sustainability means more than keeping the lights on. Revived projects
          receive updates for current Angular versions, refreshed dependencies,
          and documented upgrade paths so teams are not stranded on unsupported
          releases.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a hlmBtn size="sm" routerLink="/community/get-involved">
          Get involved
        </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/about/governance">
          Governance
        </a>
      </div>
    </section>
  `,
})
export default class SustainabilityPage {}
