import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { PageHeroComponent } from '../../components/page-hero';

export const routeMeta: RouteMeta = {
  title: 'About',
  meta: [
    {
      name: 'description',
      content:
        'OpenNG is a community hub helping the Angular open-source ecosystem with maintenance, reviving abandoned projects, and finding maintainers.',
    },
  ],
};

@Component({
  imports: [RouterLink, HlmButtonImports, HlmCardImports, PageHeroComponent],
  template: `
    <app-page-hero
      title="About OpenNG Foundation"
      description="A community hub for sustainable maintenance in the Angular open-source ecosystem."
    />

    <section class="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-12 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Our mission</h2>
        <p class="text-muted-foreground leading-7">
          OpenNG is a global organization dedicated to helping the Angular
          open-source ecosystem thrive. We focus on the maintenance effort,
          reviving abandoned projects, connecting them with maintainers, and
          supporting the wider community when help is needed.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">What we are not</h2>
        <p class="text-muted-foreground leading-7">
          We are not here to take over every library by forking it, and we do
          not act as if we know better than existing maintainers. We step in
          when maintenance has stalled and the community still depends on a
          project, not to replace healthy, active open source.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Why we exist</h2>
        <p class="text-muted-foreground leading-7">
          Many open-source projects do not fail because the idea was bad. They
          fail because maintaining them is a lonely journey, and finding a
          successor is incredibly difficult.
        </p>
        <p class="text-muted-foreground leading-7">
          The disappearance of the ngneat organization from GitHub was the
          trigger for OpenNG, an idea that had been forming for a while. When
          widely used libraries vanish overnight, the whole Angular community
          feels the impact.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">How we work</h2>
        <p class="text-muted-foreground leading-7">
          OpenNG acts as a community hub rather than a single-person
          organization. That approach makes it easier to find sponsors, share
          governance responsibilities, and direct support where it is needed
          most, whether that is reviving a project, funding a bounty, or
          connecting a library with new contributors.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Our priorities</h2>
        <ol class="list-decimal pl-6 text-muted-foreground leading-7">
          <li class="mb-3">
            Launch this site, set up GitHub Discussions, and maintain the
            <a
              class="font-medium text-primary underline-offset-4 hover:underline"
              routerLink="/blog/first-cohort-selected-repositories"
            >
              first cohort
            </a>
            of selected ngneat repositories
          </li>
          <li class="mb-3">Keep evaluating other abandoned Angular projects beyond the first cohort</li>
          <li class="mb-3">
            Help the wider ecosystem, promoting quality projects and
            connecting them with contributors and maintainers
          </li>
          <li>
            Attract sponsors to cover governance costs and fund maintenance
            bounties
          </li>
        </ol>
      </div>

      <section hlmCard>
        <div hlmCardHeader>
          <h2 hlmCardTitle>Read the announcement</h2>
        </div>
        <div hlmCardContent>
          <p class="text-muted-foreground">
            Learn more about how the foundation got started and what comes
            next.
          </p>
        </div>
        <div hlmCardFooter class="gap-2">
          <a
            hlmBtn
            size="sm"
            routerLink="/blog/openng-foundation-announcement"
          >
            Introducing the OpenNG Foundation
          </a>
          <a
            hlmBtn
            variant="ghost"
            size="sm"
            routerLink="/blog/first-cohort-selected-repositories"
          >
            First cohort announcement
          </a>
        </div>
      </section>
    </section>
  `,
})
export default class AboutPage {}
