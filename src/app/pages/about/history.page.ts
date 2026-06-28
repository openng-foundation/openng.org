import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { PageHeroComponent } from '../../components/page-hero';
import {
  PageTimelineComponent,
  type PageTimelineItem,
} from '../../components/page-timeline';

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
  imports: [PageHeroComponent, PageTimelineComponent],
  template: `
    <app-page-hero
      title="Foundation history"
      description="Milestones in the OpenNG Foundation story."
    />

    <section class="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <p class="mb-10 text-muted-foreground leading-7">
        The idea for a global organization to help the Angular OSS ecosystem
        had been forming for a while. The disappearance of the ngneat
        organization from GitHub, and the impact on widely used libraries
        across the ecosystem, was the trigger to make it happen.
      </p>

      <app-page-timeline [items]="milestones" />
    </section>
  `,
})
export default class HistoryPage {
  readonly milestones: PageTimelineItem[] = [
    {
      date: 'June 18, 2025',
      title: 'Foundation created',
      description:
        'A group of Angular community members launched the OpenNG Foundation as a community hub to help with maintenance across the Angular open-source ecosystem, starting with reviving abandoned projects and finding people to maintain them.',
      link: {
        label: 'Read the announcement',
        routerLink: '/blog/openng-foundation-announcement',
      },
    },
    {
      date: 'June 20, 2026',
      title: 'First cohort selected',
      description:
        'OpenNG announced the first cohort of six ngneat libraries selected to maintain, cashew, spectator, query, elf, and until-destroy, and began the work of finding maintainers for each.',
      link: {
        label: 'Read the announcement',
        routerLink: '/blog/first-cohort-selected-repositories',
      },
    },
  ];
}
