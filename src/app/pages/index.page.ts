import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { PageHeroComponent } from '../components/page-hero';

interface Priority {
  title: string;
  description: string;
  link?: {
    label: string;
    routerLink: string;
  };
}

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
  imports: [
    RouterLink,
    NgIcon,
    HlmButtonImports,
    HlmCardImports,
    PageHeroComponent,
  ],
  providers: [provideIcons({ lucideGithub })],
  template: `
    <app-page-hero
      size="large"
      title="Keeping Angular open source sustainable"
      description="OpenNG is a community hub that helps where it is needed most, on the maintenance effort. We revive abandoned projects, connect them with maintainers, and support the wider Angular OSS ecosystem."
    >
      <div class="flex flex-wrap justify-center gap-3">
        <a hlmBtn routerLink="/about">Our mission</a>
        <a hlmBtn variant="ghost" routerLink="/community/get-involved">
          Get involved
        </a>
        <a
          hlmBtn
          variant="ghost"
          href="https://github.com/openng-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ng-icon name="lucideGithub" />
          GitHub
        </a>
      </div>
    </app-page-hero>

    <section class="mx-auto max-w-5xl px-4 py-16 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-semibold">Where we act</h2>
        <p class="mt-4 text-muted-foreground leading-7">
          We step in when maintenance has stalled and the community still depends on a project.
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <section hlmCard>
          <div hlmCardHeader>
            <h3 hlmCardTitle>Revive abandoned projects</h3>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              When maintainers disappear, critical tooling should not vanish
              with them. We help bring projects back to a healthy, maintained
              state.
            </p>
          </div>
          <div hlmCardFooter>
            <a hlmBtn variant="link" routerLink="/projects">View projects</a>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader>
            <h3 hlmCardTitle>Find maintainers</h3>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Maintenance is a lonely journey. We connect projects with people
              willing to carry them forward.
            </p>
          </div>
          <div hlmCardFooter>
            <a hlmBtn variant="link" routerLink="/community/maintainer-candidates">
              Onboarding rules
            </a>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader>
            <h3 hlmCardTitle>Support the ecosystem</h3>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Beyond our own projects, we help promote quality OSS, connect
              libraries with contributors, and raise the bar on open-source
              standards.
            </p>
          </div>
          <div hlmCardFooter>
            <button hlmBtn size="sm" disabled>Upcoming</button>
          </div>
        </section>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-semibold">Our priorities</h2>
          <p class="mt-4 text-muted-foreground leading-7">
            OpenNG is in an early stage, and we are building in phases. Here is what we are
            focused on now and what comes next.
          </p>
        </div>

        <ol class="mx-auto mt-12 flex max-w-2xl list-decimal flex-col gap-6 pl-6">
          @for (item of priorities; track item.title) {
            <li class="ps-2">
              <h3 class="font-semibold">{{ item.title }}</h3>
              <p class="mt-1 text-muted-foreground leading-7">
                {{ item.description }}
              </p>
              @if (item.link) {
                <a
                  hlmBtn
                  variant="link"
                  class="mt-1 h-auto px-0"
                  [routerLink]="item.link.routerLink"
                >
                  {{ item.link.label }}
                </a>
              }
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export default class Home {
  readonly priorities: Priority[] = [
    {
      title: 'Foundation and first cohort',
      description:
        'Launch this site with our mission, set up GitHub Discussions, and maintain the first cohort of six libraries.',
      link: {
        label: 'Read about the first cohort',
        routerLink: '/blog/first-cohort-selected-repositories',
      },
    },
    {
      title: 'Beyond the first cohort',
      description:
        'Keep evaluating other abandoned Angular libraries that the community still relies on.',
    },
    {
      title: 'Help the wider ecosystem',
      description:
        'Identify ways to help the wider Angular open-source ecosystem.',
    },
    {
      title: 'Sponsorship',
      description:
        'Find sponsors to fund maintenance work and governance costs.',
    },
  ];
}
