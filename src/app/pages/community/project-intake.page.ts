import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

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
  imports: [RouterLink],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Project Intake</h1>
          <p class="py-4 text-base-content/70">
            How we identify abandoned Angular libraries worth reviving under
            shared maintenance.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-3xl space-y-10 px-4 py-12 lg:px-8">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Why we are selective</h2>
        <p class="text-base-content/80 leading-7">
          OpenNG does not fork every unmaintained repository. We focus on
          libraries the community still depends on, where a realistic path to
          ongoing maintenance exists. These criteria help us decide which
          projects to pursue and how to approach their original maintainers.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Eligibility criteria</h2>
        <p class="text-base-content/80 leading-7">
          A project must meet all of the following before we consider
          onboarding it into the foundation:
        </p>
        <ul class="list-disc space-y-3 pl-6 text-base-content/80 leading-7">
          <li>
            <span class="font-medium text-base-content">Open-source license.</span>
            The project must be released under a recognized open-source license
            that allows community maintenance and continued distribution.
          </li>
          <li>
            <span class="font-medium text-base-content">Abandoned or removed.</span>
            The repository has had no meaningful activity for at least one
            year, or the project has been deleted while the community still
            relies on it.
          </li>
          <li>
            <span class="font-medium text-base-content">Still useful.</span>
            The library addresses a real need that is not already covered by
            the Angular framework itself. Where migration is required, we may
            create schematics or guides to help teams adopt a revived version.
          </li>
          <li>
            <span class="font-medium text-base-content">No active alternative.</span>
            There is no maintained replacement or active fork that already
            serves the same purpose for the ecosystem.
          </li>
          <li>
            <span class="font-medium text-base-content">Enterprise relevance.</span>
            The project must address a need in professional or enterprise Angular
            development. A hobby or niche community tool, such as a DnD
            projection-creation app, may be valuable to its users but falls
            outside OpenNG's scope.
          </li>
        </ul>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">What happens next</h2>
        <p class="text-base-content/80 leading-7">
          Once a project matches these criteria, we begin outreach before any
          transfer of the project.
        </p>
        <ul class="steps steps-vertical w-full">
          <li class="step step-neutral">
            <div class="space-y-2 text-left">
              <div class="font-semibold">Contact the creator</div>
              <p class="text-base-content/70 leading-6 text-base">
                For public repositories, we open a GitHub issue to explain
                our intent and ask for permission to revive the project under
                OpenNG. For private or deleted projects, we look for other
                ways to reach the original author or organization.
              </p>
            </div>
          </li>
          <li class="step step-neutral">
            <div class="space-y-2 text-left">
              <div class="font-semibold">Find maintainers</div>
              <p class="text-base-content/70 leading-6 text-base">
                We first contact previous active maintainers and contributors
                to propose joining the revived project. If they decline or are
                unavailable, we open maintainer positions to the wider
                community.
              </p>
            </div>
          </li>
          <li class="step step-neutral">
            <div class="space-y-2 text-left">
              <div class="font-semibold">Onboard and revive</div>
              <p class="text-base-content/70 leading-6 text-base">
                With agreement from the original maintainer and a maintainer in
                place, the project moves under OpenNG governance and follows
                our
                <a class="link link-primary" routerLink="/community/standards">
                  quality standards
                </a>.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Suggest a project</h2>
        <p class="text-base-content/80 leading-7">
          Know a library that fits these criteria? Reach out through our
          <a class="link link-primary" routerLink="/about/contact">contact page</a>
          with the repository URL and why the community still needs it. We
          review every suggestion against the criteria above.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a class="btn btn-sm" routerLink="/community/maintainer-candidates">
          Become a maintainer
        </a>
        <a class="btn btn-sm btn-ghost" routerLink="/projects">View projects</a>
      </div>
    </section>
  `,
})
export default class ProjectIntakePage {}
