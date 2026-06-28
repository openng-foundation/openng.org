import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { PageHeroComponent } from '../../components/page-hero';
import {
  ProcessStepsComponent,
  type ProcessStep,
} from '../../components/process-steps';

export const routeMeta: RouteMeta = {
  title: 'Project Intake',
  meta: [
    {
      name: 'description',
      content:
        'Criteria for identifying abandoned Angular open-source projects eligible for onboarding by the OpenNG Foundation.',
    },
  ],
};

@Component({
  imports: [RouterLink, HlmButtonImports, PageHeroComponent, ProcessStepsComponent],
  template: `
    <app-page-hero
      title="Project Intake"
      description="How we identify abandoned Angular libraries worth reviving under shared maintenance."
    />

    <section class="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-12 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Why we are selective</h2>
        <p class="text-muted-foreground leading-7">
          OpenNG does not fork every unmaintained repository. We focus on
          libraries the community still depends on, where a realistic path to
          ongoing maintenance exists. These criteria help us decide which
          projects to pursue and how to approach their original maintainers.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Eligibility criteria</h2>
        <p class="text-muted-foreground leading-7">
          A project must meet all of the following before we consider
          onboarding it into the foundation:
        </p>
        <ul class="list-disc pl-6 text-muted-foreground leading-7">
          <li class="mb-3">
            <span class="font-medium text-foreground">Open-source license.</span>
            The project must be released under a recognized open-source license
            that allows community maintenance and continued distribution.
          </li>
          <li class="mb-3">
            <span class="font-medium text-foreground">Abandoned or removed.</span>
            The repository has had no meaningful activity for at least one
            year, or the project has been deleted while the community still
            relies on it.
          </li>
          <li class="mb-3">
            <span class="font-medium text-foreground">Still useful.</span>
            The library addresses a real need that is not already covered by
            the Angular framework itself. Where migration is required, we may
            create schematics or guides to help teams adopt a revived version.
          </li>
          <li class="mb-3">
            <span class="font-medium text-foreground">No active alternative.</span>
            There is no maintained replacement or active fork that already
            serves the same purpose for the ecosystem.
          </li>
          <li>
            <span class="font-medium text-foreground">Enterprise relevance.</span>
            The project must address a need in professional or enterprise Angular
            development. A hobby or niche community tool, such as a DnD
            projection-creation app, may be valuable to its users but falls
            outside OpenNG's scope.
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">What happens next</h2>
        <p class="text-muted-foreground leading-7">
          Once a project matches these criteria, we begin outreach before any
          transfer of the project.
        </p>
        <app-process-steps [steps]="intakeSteps" />
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Suggest a project</h2>
        <p class="text-muted-foreground leading-7">
          Know a library that fits these criteria? Reach out through our
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/about/contact"
          >
            contact page
          </a>
          with the repository URL and why the community still needs it. We
          review every suggestion against the criteria above.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a hlmBtn size="sm" routerLink="/community/maintainer-candidates">
          Become a maintainer
        </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/projects">View projects</a>
      </div>
    </section>
  `,
})
export default class ProjectIntakePage {
  readonly intakeSteps: ProcessStep[] = [
    {
      title: 'Contact the creator',
      description:
        'For public repositories, we open a GitHub issue to explain our intent and ask for permission to revive the project under OpenNG. For private or deleted projects, we look for other ways to reach the original author or organization.',
    },
    {
      title: 'Find maintainers',
      description:
        'We first contact previous active maintainers and contributors to propose joining the revived project. If they decline or are unavailable, we open maintainer positions to the wider community.',
    },
    {
      title: 'Onboard and revive',
      description:
        'With agreement from the original maintainer and a maintainer in place, the project moves under OpenNG governance and follows our ',
      link: { label: 'quality standards', routerLink: '/community/standards' },
      descriptionAfter: '.',
    },
  ];
}
