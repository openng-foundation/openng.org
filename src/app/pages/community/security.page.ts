import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';

export const routeMeta: RouteMeta = {
  title: 'Security',
  meta: [
    {
      name: 'description',
      content:
        'Security practices and vulnerability reporting for Angular projects maintained by the OpenNG Foundation.',
    },
  ],
};

@Component({
  imports: [RouterLink, HlmButtonImports],
  template: `
    <div class="hero bg-base-200">
      <div class="hero-content py-12 text-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold">Security</h1>
          <p class="py-4 text-base-content/70">
            Keeping revived Angular projects secure, updated, and responsibly
            maintained.
          </p>
        </div>
      </div>
    </div>

    <section class="mx-auto max-w-3xl space-y-10 px-4 py-12 lg:px-8">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Security as a baseline</h2>
        <p class="text-base-content/80 leading-7">
          Unmaintained projects accumulate vulnerable dependencies and unpatched
          issues. A core reason OpenNG exists is to revive abandoned tooling
          and ensure it stays secure and updated, not frozen in time.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Dependency hygiene</h2>
        <p class="text-base-content/80 leading-7">
          Projects we maintain monitor dependencies for known vulnerabilities and
          apply updates on a regular cadence. Automated tooling helps surface
          outdated packages early, and security-related upgrades are prioritized
          in release planning.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Vulnerability reporting</h2>
        <p class="text-base-content/80 leading-7">
          If you discover a security issue in a project maintained by OpenNG,
          report it through the project's GitHub repository once it is live.
          For sensitive disclosures, use GitHub's private vulnerability
          reporting where available.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Response expectations</h2>
        <ul class="list-disc space-y-2 pl-6 text-base-content/80 leading-7">
          <li>Acknowledge valid reports in a timely manner</li>
          <li>Assess severity and affected versions</li>
          <li>Release fixes or mitigations with clear upgrade guidance</li>
          <li>Credit reporters when they wish to be acknowledged</li>
        </ul>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Aligned with Angular practices</h2>
        <p class="text-base-content/80 leading-7">
          We follow Angular's version support policy for maintained libraries and
          encourage consumers to stay on supported Angular releases. Security
          work is part of our
          <a class="link link-primary" routerLink="/community/standards">
            project standards
          </a>, not an afterthought.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a hlmBtn size="sm" routerLink="/community/standards">Standards</a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/community/get-involved">
          Get involved
        </a>
      </div>
    </section>
  `,
})
export default class SecurityPage {}
