import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';

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
  imports: [RouterLink, HlmButtonImports],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Maintainer Candidates</h1>
          <p class="py-4 text-base-content/70">
            Shared maintenance works when people step up to maintain the
            projects the community relies on.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-3xl space-y-10 px-4 py-12 lg:px-8">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Who can apply</h2>
        <p class="text-base-content/80 leading-7">
          Anyone can put themselves forward as a maintainer candidate for a
          project we are currently onboarding. Our focus today is continued
          support for abandoned libraries the community still relies on.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <div class="flex flex-wrap items-center gap-3">
              <h2 class="card-title text-lg">Revived projects</h2>
              <span class="badge badge-primary">Current focus</span>
            </div>
            <p class="text-base-content/70">
              Revived libraries often have existing users and security
              expectations. For these projects, we look for candidates who can
              earn community trust from day one.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body gap-3">
            <div class="flex flex-wrap items-center gap-3">
              <h2 class="card-title text-lg">New projects</h2>
              <span class="badge badge-ghost">Upcoming</span>
            </div>
            <p class="text-base-content/70">
              Proposals for brand-new libraries are not open yet. Once revived
              projects are on stable footing, we plan to support people who
              want to create and maintain new tools for the ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Requirements by scenario</h2>

        <div class="space-y-6">
          <div class="rounded-box border border-base-300 bg-base-100 p-6">
            <div class="flex flex-wrap items-center gap-3">
              <h3 class="text-lg font-semibold">Revived or onboarded projects</h3>
              <span class="badge badge-primary badge-sm">Current focus</span>
            </div>
            <p class="mt-3 text-base-content/80 leading-7">
              Security is mandatory, users must be able to trust that revived
              code is handled responsibly. For established libraries, we
              expect either:
            </p>
            <ul class="mt-3 list-disc space-y-2 pl-6 text-base-content/80 leading-7">
              <li>
                Demonstrated experience maintaining similar open-source
                projects, or
              </li>
              <li>
                A recommendation from a GitHub Star or Angular GDE who has
                worked with you personally and can vouch for your reliability.
              </li>
            </ul>
          </div>

          <div class="rounded-box border border-base-300 bg-base-100 p-6">
            <div class="flex flex-wrap items-center gap-3">
              <h3 class="text-lg font-semibold">New project proposals</h3>
              <span class="badge badge-ghost badge-sm">Upcoming</span>
            </div>
            <p class="mt-3 text-base-content/80 leading-7">
              We are not accepting brand-new library proposals yet. The
              foundation is focused on reviving abandoned projects first. When
              we open this path, no prior maintainer experience will be
              required, we will welcome people with ideas for libraries the
              Angular ecosystem needs.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">How to express interest</h2>
        <p class="text-base-content/80 leading-7">
          When a project enters onboarding, we reach out to previous
          contributors first. If maintainer positions are opened publicly, we
          will announce them on our
          <a class="link link-primary" routerLink="/blog">blog</a>
          and through the project repository.
        </p>
        <p class="text-base-content/80 leading-7">
          You can also reach out proactively through our
          <a class="link link-primary" routerLink="/about/contact">contact page</a>,
          mention the project, your background, and whether you are applying
          for an active onboarding effort or suggesting an abandoned library we
          should revive. Read
          our
          <a class="link link-primary" routerLink="/community/project-intake">
            project intake criteria
          </a>
          to understand what we look for before suggesting a library.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">What we expect from maintainers</h2>
        <ul class="list-disc space-y-2 pl-6 text-base-content/80 leading-7">
          <li>Respond to issues and security reports in a timely manner</li>
          <li>Keep dependencies and Angular versions reasonably current</li>
          <li>Review contributions and document breaking changes</li>
          <li>Follow our
            <a class="link link-primary" routerLink="/community/standards">
              quality standards
            </a>
            and
            <a class="link link-primary" routerLink="/community/security">
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
