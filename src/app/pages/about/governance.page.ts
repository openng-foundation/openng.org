import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { RouteMeta } from "@analogjs/router";
import { HlmButtonImports } from "@spartan-ng/helm/button";
import {
  advisoryBoard,
  team,
  type GovernancePerson,
} from "../../about/governance-people";

export const routeMeta: RouteMeta = {
  title: "Governance",
  meta: [
    {
      name: "description",
      content:
        "How the OpenNG Foundation governs projects, onboard maintainers, and shares maintenance across the Angular community.",
    },
  ],
};

@Component({
  imports: [RouterLink, HlmButtonImports],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Governance</h1>
          <p class="py-4 text-base-content/70">
            Shared maintenance as a community hub, not a single point of
            failure.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-3xl space-y-10 px-4 py-12 lg:px-8">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Community hub, not a takeover</h2>
        <p class="text-base-content/80 leading-7">
          OpenNG was formed because open-source maintenance should not depend on
          one person carrying a project alone. We operate as a community
          organization, sharing responsibility for the projects we maintain and
          directing support where it is needed most.
        </p>
        <p class="text-base-content/80 leading-7">
          We do not fork every abandoned library. We step in when maintenance
          has stalled and the community still depends on the project, with
          transparent governance and room for contributors to participate.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Onboarding maintainers</h2>
        <p class="text-base-content/80 leading-7">
          A core part of our work is finding people to maintain revived
          projects. How we grant maintainer access is still being defined, and
          we expect the approach to vary by project.
        </p>
        <p class="text-base-content/80 leading-7">
          Our current focus is revived libraries. New project proposals are
          upcoming, requirements differ by scenario. See
          <a
            class="link link-primary"
            routerLink="/community/maintainer-candidates"
          >
            maintainer candidates
          </a>
          for the full process and expectations.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Project intake</h2>
        <p class="text-base-content/80 leading-7">
          Not every abandoned repository belongs under OpenNG. We focus on
          libraries with broad community impact and a realistic path to ongoing
          maintenance. Our
          <a class="link link-primary" routerLink="/community/project-intake">
            project intake criteria
          </a>
          define what we look for before reaching out to original maintainers.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Transparency and continuity</h2>
        <p class="text-base-content/80 leading-7">
          When organizations or repositories vanish without warning, downstream
          teams lose visibility and stability. OpenNG aims to provide a durable
          home where project history, issues, and releases stay accessible, and
          where projects can transfer without disrupting the ecosystem.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">The team</h2>
        <p class="text-base-content/80 leading-7">
          OpenNG is run as a community organization. The team coordinates
          project intake, maintainer onboarding, and day-to-day maintenance of
          the projects we revive.
        </p>
        <div class="grid gap-6 sm:grid-cols-2">
          @for (person of team; track person.name) {
            <div
              class="flex flex-col items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-6 text-center"
            >
              <div class="avatar">
                <div class="w-20 rounded-full">
                  <img [src]="person.avatar" />
                </div>
              </div>
              <div>
                <div class="font-semibold">{{ person.name }}</div>
                <div class="text-sm text-base-content/70">
                  {{ person.role }}
                </div>
              </div>
            </div>
          }
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Advisory board</h2>
        <p class="text-base-content/80 leading-7">
          The advisory board brings outside perspective from experienced Angular
          community members. They help guide governance, project intake, and
          long-term direction without day-to-day operational duties.
        </p>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          @for (person of advisoryBoard; track person.name) {
            <div
              class="flex flex-col items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-6 text-center"
            >
              <div class="avatar">
                <div class="w-20 rounded-full">
                  <img [src]="person.avatar" />
                </div>
              </div>
              <div>
                <div class="font-semibold">{{ person.name }}</div>
                <div class="text-sm text-base-content/70">
                  {{ person.role }}
                </div>
              </div>
            </div>
          } @empty {
            <div
              class="flex flex-col items-center gap-6 sm:col-span-2 lg:col-span-3"
            >
              <div class="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
                @for (slot of advisoryBoardPlaceholders; track slot) {
                  <div
                    class="flex flex-col items-center gap-3 rounded-box border border-dashed border-base-300 bg-base-100 px-4 py-6 text-center"
                  >
                    <div class="h-20 w-20 rounded-full bg-base-300"></div>
                    <div class="h-4 w-24 rounded-box bg-base-300"></div>
                    <div class="h-3 w-16 rounded-box bg-base-300"></div>
                  </div>
                }
              </div>
              <p class="text-base-content/70">To be announced</p>
            </div>
          }
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Early stage, open process</h2>
        <p class="text-base-content/80 leading-7">
          The GitHub organization is still new, and governance details will
          evolve as we onboard the first cohort and contributors. We are
          committed to documenting how decisions are made and how people can
          participate as the foundation grows.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a hlmBtn size="sm" routerLink="/community/get-involved">
          Get involved
        </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/about">
          About the foundation
        </a>
      </div>
    </section>
  `,
})
export default class GovernancePage {
  readonly team = team;
  readonly advisoryBoard = advisoryBoard;
  readonly advisoryBoardPlaceholders = [0, 1, 2];

  initials(name: GovernancePerson["name"]): string {
    return name
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }
}
