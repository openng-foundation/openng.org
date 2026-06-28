import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { PageHeroComponent } from '../../components/page-hero';

export const routeMeta: RouteMeta = {
  title: 'Get Involved',
  meta: [
    {
      name: 'description',
      content:
        'Ways to contribute to the OpenNG Foundation, as a maintainer, contributor, or community member helping Angular open source.',
    },
  ],
};

@Component({
  imports: [RouterLink, HlmButtonImports, HlmCardImports, PageHeroComponent],
  template: `
    <app-page-hero
      title="Get Involved"
      description="Help keep critical Angular tooling alive through shared maintenance."
    />

    <section class="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-12 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Why contribute</h2>
        <p class="text-muted-foreground leading-7">
          OpenNG exists because important Angular libraries should not
          disappear when a single maintainer steps away. Maintenance is a
          lonely journey, by contributing your time and expertise, you help
          the ecosystem stay stable, secure, and up to date.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <section hlmCard>
          <div hlmCardHeader>
            <h2 hlmCardTitle>Become a maintainer</h2>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              We are actively looking for people to maintain revived projects.
              See
              <a
                class="font-medium text-primary underline-offset-4 hover:underline"
                routerLink="/community/maintainer-candidates"
              >
                maintainer candidates
              </a>
              for requirements and how to apply.
            </p>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader>
            <h2 hlmCardTitle>Code and reviews</h2>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Fix bugs, implement features, and review pull requests on revived
              projects. Every contribution reduces the burden on any one person.
            </p>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader>
            <h2 hlmCardTitle>Documentation</h2>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Improve READMEs, migration guides, and examples so teams can
              adopt and upgrade revived libraries with confidence.
            </p>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader>
            <h2 hlmCardTitle>Issue triage</h2>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Help reproduce reports, label issues, and surface security or
              compatibility concerns early in the lifecycle.
            </p>
          </div>
        </section>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Suggest a project</h2>
        <p class="text-muted-foreground leading-7">
          Know an unmaintained Angular library the community relies on? Read
          our
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/community/project-intake"
          >
            project intake criteria
          </a>
          and reach out through GitHub Discussions.
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            href="https://github.com/openng-foundation/openng.org/discussions/new?category=abandoned-projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suggest a project
          </a>
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a
          hlmBtn
          size="sm"
          href="https://github.com/openng-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenNG on GitHub
        </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/projects">View projects</a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/community/standards">
          Our standards
        </a>
      </div>
    </section>
  `,
})
export default class GetInvolvedPage {}
