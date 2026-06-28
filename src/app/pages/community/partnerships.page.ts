import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { PageHeroComponent } from '../../components/page-hero';

export const routeMeta: RouteMeta = {
  title: 'Partnerships',
  meta: [
    {
      name: 'description',
      content:
        'Partner with the OpenNG Foundation to support Angular open-source maintenance, sponsorship, and community involvement.',
    },
  ],
};

@Component({
  imports: [
    RouterLink,
    HlmButtonImports,
    HlmCardImports,
    PageHeroComponent,
  ],
  template: `
    <app-page-hero
      title="Partnerships"
      description="Work with OpenNG to keep essential Angular tooling maintained and the ecosystem healthy."
    />

    <section class="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-12 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Why partner with OpenNG</h2>
        <p class="text-muted-foreground leading-7">
          Organizations that depend on Angular open source share a common
          interest: critical libraries should not vanish when maintainers move
          on. As a community hub rather than a single-person effort, OpenNG is
          positioned to attract sponsors and distribute support where it is
          needed most.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <section hlmCard>
          <div hlmCardHeader>
            <h2 hlmCardTitle>Corporate sponsorship</h2>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Companies can sponsor governance costs, fund maintenance bounties,
              or provide engineering time for libraries their teams rely on
              every day.
            </p>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader>
            <h2 hlmCardTitle>Community organizations</h2>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Meetups, conferences, and other Angular community groups can
              collaborate on outreach, contributor onboarding, and shared
              advocacy for sustainable open source.
            </p>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader>
            <h2 hlmCardTitle>Project maintainers</h2>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Maintainers of at-risk or unmaintained libraries can explore
              transferring projects to OpenNG under transparent governance
              and shared ownership.
            </p>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader>
            <h2 hlmCardTitle>Ecosystem allies</h2>
          </div>
          <div hlmCardContent>
            <p class="text-muted-foreground">
              Tooling vendors, documentation platforms, and adjacent projects
              can partner on integrations, security practices, and standards
              that benefit the wider Angular ecosystem.
            </p>
          </div>
        </section>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">How we work together</h2>
        <p class="text-muted-foreground leading-7">
          OpenNG is still early, and formal partnership and sponsorship
          programs are being defined alongside our governance model. We aim for
          clear expectations on contributions, recognition, and how partners
          participate in decisions that affect the projects we maintain.
        </p>
        <p class="text-muted-foreground leading-7">
          Whether you represent a company, a community group, or an existing
          open-source project, we welcome a conversation about how we can
          align on long-term maintenance goals.
        </p>
      </div>

      <section hlmCard>
        <div hlmCardHeader>
          <h2 hlmCardTitle>Start a conversation</h2>
        </div>
        <div hlmCardContent>
          <p class="text-muted-foreground">
            Tell us about your organization and how you would like to support
            OpenNG. We will follow up as partnership pathways become available.
          </p>
        </div>
        <div hlmCardFooter>
          <a hlmBtn size="sm" routerLink="/about/contact">Contact us</a>
        </div>
      </section>

      <div class="flex flex-wrap gap-3">
        <a hlmBtn size="sm" routerLink="/community/sustainability">
          Sustainability
        </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/community/get-involved">
          Get involved
        </a>
      </div>
    </section>
  `,
})
export default class PartnershipsPage {}
