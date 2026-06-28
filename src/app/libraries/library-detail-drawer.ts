import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import type { BadgeVariants } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDrawerImports } from '@spartan-ng/helm/drawer';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import {
  formatCategory,
  githubUrl,
  licenseUrl,
  MAINTENANCE_LABELS,
  npmPackageUrl,
  originalGithubUrl,
  STATUS_BADGE_VARIANT,
  type LibraryMaintenance,
  type LibraryRow,
  type LibraryStatus,
} from './library-attributes';

@Component({
  selector: 'app-library-detail-drawer',
  imports: [
    DatePipe,
    HlmBadgeImports,
    HlmButtonImports,
    HlmDrawerImports,
    HlmSeparatorImports,
  ],
  template: `
    <hlm-drawer
      direction="right"
      [state]="open() ? 'open' : 'closed'"
      (closed)="closed.emit()"
    >
      <hlm-drawer-content *hlmDrawerPortal>
        @if (library(); as lib) {
          <hlm-drawer-header>
            <div class="flex flex-wrap items-center gap-2">
              <h2 hlmDrawerTitle>{{ lib.name }}</h2>
              <span hlmBadge [variant]="statusVariant(lib.status)">
                {{ lib.status }}
              </span>
              @if (lib.maintenance) {
                <span hlmBadge variant="outline">
                  {{ maintenanceLabel(lib.maintenance) }}
                </span>
              }
            </div>
            <p hlmDrawerDescription>{{ lib.description }}</p>
          </hlm-drawer-header>

          <div class="flex flex-col gap-4 overflow-y-auto px-4 pb-4">
            <dl class="grid gap-3 text-sm">
              @if (lib.category) {
                <div class="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-3 gap-y-1">
                  <dt class="text-muted-foreground">Category</dt>
                  <dd>{{ formatCategory(lib.category) }}</dd>
                </div>
              }

              @if (lib.motivation) {
                <div class="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-3 gap-y-1">
                  <dt class="text-muted-foreground">Motivation</dt>
                  <dd class="text-muted-foreground leading-6">{{ lib.motivation }}</dd>
                </div>
              }

              <div class="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-3 gap-y-1">
                <dt class="text-muted-foreground">Original package</dt>
                <dd>
                  <a
                    class="font-medium text-primary underline-offset-4 hover:underline"
                    [href]="npmPackageUrl(lib.originalPackage)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <code>{{ lib.originalPackage }}</code>
                  </a>
                </dd>
              </div>

              @if (lib.replacementPackage) {
                <div class="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-3 gap-y-1">
                  <dt class="text-muted-foreground">Replacement</dt>
                  <dd>
                    <a
                      class="font-medium text-primary underline-offset-4 hover:underline"
                      [href]="npmPackageUrl(lib.replacementPackage)"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <code>{{ lib.replacementPackage }}</code>
                    </a>
                  </dd>
                </div>
              }

              @if (lib.replacementNote) {
                <div class="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-3 gap-y-1">
                  <dt class="text-muted-foreground">Migration</dt>
                  <dd>
                    @if (lib.replacementUrl) {
                      <a
                        class="text-primary underline-offset-4 hover:underline"
                        [href]="lib.replacementUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ lib.replacementNote }}
                      </a>
                    } @else {
                      {{ lib.replacementNote }}
                    }
                  </dd>
                </div>
              }

              @if (lib.license) {
                <div class="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-3 gap-y-1">
                  <dt class="text-muted-foreground">License</dt>
                  <dd>
                    @if (licenseUrl(lib.license); as url) {
                      <a
                        class="text-primary underline-offset-4 hover:underline"
                        [href]="url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ lib.license }}
                      </a>
                    } @else {
                      {{ lib.license }}
                    }
                  </dd>
                </div>
              }

              @if (lib.githubRepo) {
                <div class="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-3 gap-y-1">
                  <dt class="text-muted-foreground">Repository</dt>
                  <dd>
                    <a
                      class="text-primary underline-offset-4 hover:underline"
                      [href]="originalGithubUrl(lib)"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ lib.githubRepo }}
                    </a>
                  </dd>
                </div>
              }

              @if (lib.newGithubRepo) {
                <div class="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-3 gap-y-1">
                  <dt class="text-muted-foreground">OpenNG repo</dt>
                  <dd>
                    <a
                      class="text-primary underline-offset-4 hover:underline"
                      [href]="'https://github.com/' + lib.newGithubRepo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ lib.newGithubRepo }}
                    </a>
                  </dd>
                </div>
              }

              @if (lib.supportedAngularVersions) {
                <div class="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-3 gap-y-1">
                  <dt class="text-muted-foreground">Angular support</dt>
                  <dd>{{ lib.supportedAngularVersions }}</dd>
                </div>
              }

              @if (lib.triagedAt) {
                <div class="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-3 gap-y-1">
                  <dt class="text-muted-foreground">Triaged</dt>
                  <dd>{{ lib.triagedAt | date: 'longDate' }}</dd>
                </div>
              }
            </dl>

            @if (lib.notes) {
              <hlm-separator />
              <div class="flex flex-col gap-1.5 text-sm">
                <h3 class="font-medium">Notes</h3>
                <p class="text-muted-foreground leading-6">{{ lib.notes }}</p>
              </div>
            }
          </div>

          <hlm-drawer-footer>
            @if (githubUrl(lib); as url) {
              <a hlmBtn size="sm" [href]="url" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            }
            <button hlmBtn variant="outline" size="sm" hlmDrawerClose>Close</button>
          </hlm-drawer-footer>
        }
      </hlm-drawer-content>
    </hlm-drawer>
  `,
})
export class LibraryDetailDrawerComponent {
  readonly library = input<LibraryRow | null>(null);
  readonly open = input(false);
  readonly closed = output<void>();

  readonly formatCategory = formatCategory;
  readonly githubUrl = githubUrl;
  readonly licenseUrl = licenseUrl;
  readonly npmPackageUrl = npmPackageUrl;
  readonly originalGithubUrl = originalGithubUrl;

  statusVariant(status: LibraryStatus): BadgeVariants['variant'] {
    return STATUS_BADGE_VARIANT[status];
  }

  maintenanceLabel(maintenance: LibraryMaintenance): string {
    return MAINTENANCE_LABELS[maintenance];
  }
}
