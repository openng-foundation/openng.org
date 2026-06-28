import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { PageHeroComponent } from '../../components/page-hero';

export const routeMeta: RouteMeta = {
  title: 'Contact Us',
  meta: [
    {
      name: 'description',
      content:
        'Get in touch with the OpenNG Foundation about maintenance, contributions, and Angular open-source projects.',
    },
  ],
};

@Component({
  imports: [RouterLink, HlmButtonImports, HlmCardImports, PageHeroComponent],
  template: `
    <app-page-hero
      title="Contact Us"
      description="Reach the people behind the OpenNG Foundation."
    />

    <section class="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-12 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">GitHub</h2>
        <p class="text-muted-foreground leading-7">
          The OpenNG Foundation is a GitHub organization and community hub for
          Angular open-source maintenance. GitHub is the primary place for
          issues, pull requests, and contributions on the projects we maintain.
        </p>
        <a
          class="font-medium text-primary underline-offset-4 hover:underline"
          href="https://github.com/openng-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenNG Foundation on GitHub
        </a>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <section hlmCard>
          <div hlmCardHeader>
            <h2 hlmCardTitle>Contribute or maintain</h2>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Interested in helping revive abandoned Angular tooling or stepping
              up as a maintainer? We welcome both experienced contributors and
              newcomers, depending on the project.
            </p>
          </div>
          <div hlmCardFooter class="justify-end">
            <a hlmBtn size="sm" routerLink="/community/get-involved">
              Get involved
            </a>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader>
            <h2 hlmCardTitle>Suggest a project</h2>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Know an unmaintained Angular library the community relies on?
              Share it with us with a new GitHub discussion.
            </p>
          </div>
          <div hlmCardFooter class="justify-end">
            <a hlmBtn size="sm" href="https://github.com/openng-foundation/openng.org/discussions" target="_blank" rel="noopener noreferrer">
              Suggest a project
            </a>
          </div>
        </section>
      </div>

      <section hlmCard>
        <div hlmCardHeader>
          <h2 hlmCardTitle>Stay updated</h2>
        </div>
        <div hlmCardContent>
          <p class="text-muted-foreground">
            Our launch announcement explains why the foundation exists, what we
            are not trying to do, and what comes first.
          </p>
        </div>
        <div hlmCardFooter>
          <a
            hlmBtn
            size="sm"
            routerLink="/blog/openng-foundation-announcement"
          >
            Read the announcement
          </a>
        </div>
      </section>
    </section>
  `,
})
export default class ContactPage {}
