import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { PageHeroComponent } from '../../components/page-hero';

export const routeMeta: RouteMeta = {
  title: 'Maintainer Candidates',
  meta: [
    {
      name: 'description',
      content:
        'How to apply as a maintainer for OpenNG Foundation projects, currently focused on revived, abandoned libraries.',
    },
  ],
};

@Component({
  imports: [
    RouterLink,
    HlmButtonImports,
    HlmCardImports,
    HlmBadgeImports,
    PageHeroComponent,
  ],
  template: `
    <app-page-hero
      title="Maintainer Candidates"
      description="Shared maintenance works when people step up to maintain the projects the community relies on."
    />

    <section class="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-12 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Who can apply</h2>
        <p class="text-muted-foreground leading-7">
          Anyone can put themselves forward as a maintainer candidate for a
          project we are currently onboarding. Our focus today is continued
          support for abandoned libraries the community still relies on.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <section hlmCard>
          <div hlmCardHeader class="flex-row flex-wrap items-center gap-3">
            <h2 hlmCardTitle>Revived projects</h2>
            <span hlmBadge>Current focus</span>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Revived libraries often have existing users and security
              expectations. For these projects, we look for candidates who can
              earn community trust from day one.
            </p>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader class="flex-row flex-wrap items-center gap-3">
            <h2 hlmCardTitle>New projects</h2>
            <span hlmBadge variant="secondary">Upcoming</span>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Proposals for brand-new libraries are not open yet. Once revived
              projects are on stable footing, we plan to support people who
              want to create and maintain new tools for the ecosystem.
            </p>
          </div>
        </section>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Requirements by scenario</h2>

        <div class="flex flex-col gap-6">
          <div class="rounded-lg border border-border bg-card p-6">
            <div class="flex flex-wrap items-center gap-3">
              <h3 class="text-lg font-semibold">Revived or onboarded projects</h3>
              <span hlmBadge>Current focus</span>
            </div>
            <p class="mt-3 text-muted-foreground leading-7">
              Security is mandatory, users must be able to trust that revived
              code is handled responsibly. For established libraries, we
              expect either:
            </p>
            <ul class="mt-3 list-disc pl-6 text-muted-foreground leading-7">
              <li class="mb-2">
                Demonstrated experience maintaining similar open-source
                projects, or
              </li>
              <li>
                A recommendation from a GitHub Star or Angular GDE who has
                worked with you personally and can vouch for your reliability.
              </li>
            </ul>
          </div>

          <div class="rounded-lg border border-border bg-card p-6">
            <div class="flex flex-wrap items-center gap-3">
              <h3 class="text-lg font-semibold">New project proposals</h3>
              <span hlmBadge variant="secondary">Upcoming</span>
            </div>
            <p class="mt-3 text-muted-foreground leading-7">
              We are not accepting brand-new library proposals yet. The
              foundation is focused on reviving abandoned projects first. When
              we open this path, no prior maintainer experience will be
              required, we will welcome people with ideas for libraries the
              Angular ecosystem needs.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">How to express interest</h2>
        <p class="text-muted-foreground leading-7">
          When a project enters onboarding, we reach out to previous
          contributors first. If maintainer positions are opened publicly, we
          will announce them on our
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/blog"
          >
            blog
          </a>
          and through the project repository.
        </p>
        <p class="text-muted-foreground leading-7">
          You can also reach out proactively through our
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/about/contact"
          >
            contact page
          </a>,
          mention the project, your background, and whether you are applying
          for an active onboarding effort or suggesting an abandoned library we
          should revive. Read our
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/community/project-intake"
          >
            project intake criteria
          </a>
          to understand what we look for before suggesting a library.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">What we expect from maintainers</h2>
        <ul class="list-disc pl-6 text-muted-foreground leading-7">
          <li class="mb-2">Respond to issues and security reports in a timely manner</li>
          <li class="mb-2">Keep dependencies and Angular versions reasonably current</li>
          <li class="mb-2">Review contributions and document breaking changes</li>
          <li>
            Follow our
            <a
              class="font-medium text-primary underline-offset-4 hover:underline"
              routerLink="/community/standards"
            >
              quality standards
            </a>
            and
            <a
              class="font-medium text-primary underline-offset-4 hover:underline"
              routerLink="/community/security"
            >
              security program
            </a>
          </li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-3">
        <a hlmBtn size="sm" routerLink="/about/contact">Contact us</a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/community/get-involved">
          Other ways to contribute
        </a>
      </div>
    </section>
  `,
})
export default class MaintainerCandidatesPage {}
