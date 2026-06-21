import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';

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
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Q&amp;A</h1>
          <p class="py-4 text-base-content/70">
            Answers to common questions about OpenNG and how we help the Angular
            open-source ecosystem.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <div class="join join-vertical w-full">
        @for (item of faqItems; track item.question; let first = $first) {
          <div class="collapse collapse-arrow join-item border border-base-300 bg-base-100">
            <input
              type="radio"
              name="faq-accordion"
              [checked]="first"
            />
            <div class="collapse-title font-semibold">{{ item.question }}</div>
            <div class="collapse-content text-base-content/80 leading-7">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        }
      </div>
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
