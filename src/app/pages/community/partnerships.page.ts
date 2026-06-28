import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';

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
  imports: [RouterLink, HlmButtonImports],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Partnerships</h1>
          <p class="py-4 text-base-content/70">
            Work with OpenNG to keep essential Angular tooling maintained and
            the ecosystem healthy.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-3xl space-y-10 px-4 py-12 lg:px-8">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Why partner with OpenNG</h2>
        <p class="text-base-content/80 leading-7">
          Organizations that depend on Angular open source share a common
          interest: critical libraries should not vanish when maintainers move
          on. As a community hub rather than a single-person effort, OpenNG is
          positioned to attract sponsors and distribute support where it is
          needed most.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h2 class="card-title text-lg">Corporate sponsorship</h2>
            <p class="text-base-content/70">
              Companies can sponsor governance costs, fund maintenance bounties,
              or provide engineering time for libraries their teams rely on
              every day.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h2 class="card-title text-lg">Community organizations</h2>
            <p class="text-base-content/70">
              Meetups, conferences, and other Angular community groups can
              collaborate on outreach, contributor onboarding, and shared
              advocacy for sustainable open source.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h2 class="card-title text-lg">Project maintainers</h2>
            <p class="text-base-content/70">
              Maintainers of at-risk or unmaintained libraries can explore
              transferring projects to OpenNG under transparent governance
              and shared ownership.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <h2 class="card-title text-lg">Ecosystem allies</h2>
            <p class="text-base-content/70">
              Tooling vendors, documentation platforms, and adjacent projects
              can partner on integrations, security practices, and standards
              that benefit the wider Angular ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">How we work together</h2>
        <p class="text-base-content/80 leading-7">
          OpenNG is still early, and formal partnership and sponsorship
          programs are being defined alongside our governance model. We aim for
          clear expectations on contributions, recognition, and how partners
          participate in decisions that affect the projects we maintain.
        </p>
        <p class="text-base-content/80 leading-7">
          Whether you represent a company, a community group, or an existing
          open-source project, we welcome a conversation about how we can
          align on long-term maintenance goals.
        </p>
      </div>

      <div class="card bg-base-100 shadow-sm">
        <div class="card-body gap-4">
          <h2 class="card-title text-xl">Start a conversation</h2>
          <p class="text-base-content/70">
            Tell us about your organization and how you would like to support
            OpenNG. We will follow up as partnership pathways become available.
          </p>
          <div class="card-actions">
            <a hlmBtn size="sm" routerLink="/about/contact">Contact us</a>
          </div>
        </div>
      </div>

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
