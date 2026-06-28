import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
import { PageHeroComponent } from '../../components/page-hero';

export const routeMeta: RouteMeta = {
  title: 'Q&A',
  meta: [
    {
      name: 'description',
      content:
        'Frequently asked questions about OpenNG, project maintenance, maintainer onboarding, and Angular version support.',
    },
  ],
};

@Component({
  imports: [HlmAccordionImports, PageHeroComponent],
  template: `
    <app-page-hero
      title="Q&amp;A"
      description="Answers to common questions about OpenNG and how we help the Angular open-source ecosystem."
    />

    <section class="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <hlm-accordion type="single">
        @for (item of faqItems; track item.question; let first = $first) {
          <hlm-accordion-item [isOpened]="first">
            <hlm-accordion-trigger>{{ item.question }}</hlm-accordion-trigger>
            <hlm-accordion-content>
              <p class="text-muted-foreground leading-7">{{ item.answer }}</p>
            </hlm-accordion-content>
          </hlm-accordion-item>
        }
      </hlm-accordion>
    </section>
  `,
})
export default class QaPage {
  readonly faqItems = [
    {
      question: 'Does OpenNG fork every abandoned Angular library?',
      answer:
        'No. We help where maintenance is needed, not by taking over every project. We step in when a library has stalled and the community still depends on it, we do not fork healthy, actively maintained open source.',
    },
    {
      question: 'What is OpenNG working on first?',
      answer:
        'Our immediate focus is this website, GitHub Discussions, and maintaining the first cohort of six ngneat libraries, cashew, spectator, query, elf, and until-destroy. See the first cohort announcement for how we selected them. After that cohort is on stable footing, we will evaluate other abandoned projects, then expand to helping the wider ecosystem find contributors and maintainers.',
    },
    {
      question: 'How do people become maintainers?',
      answer:
        'We are still defining the process. For established projects in the first cohort, such as spectator, elf, and query, we expect to look for contributors with relevant experience, potentially recommended by trusted community members such as Angular GDEs. For smaller or less complex libraries, we are open to people coming forward on their own. Details will be published as the foundation grows.',
    },
    {
      question: 'Will OpenNG promote any Angular project that asks?',
      answer:
        'Not without standards. Over the years, many projects have asked for promotion, but a lot lack basic open-source quality, tests, CI, documentation, and responsible maintenance. We plan to publish clear guidelines before promoting projects beyond those we directly maintain.',
    },
    {
      question: 'Will we support AngularJS projects?',
      answer:
        'No, as AngularJS support has officially ended as of January 2022.',
    },
    {
      question: 'Which Angular versions will you support?',
      answer:
        'As soon as we take the lead on an abandoned project, a new version will be released for the latest major version. There is no intent to fill the gap between the last major Angular version the project supported and the current latest one available. After that, we will follow the same support policy as Angular.',
    },
  ];
}
