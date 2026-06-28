import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCheck } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';

export interface PageTimelineItem {
  date?: string;
  title: string;
  description: string;
  link?: {
    label: string;
    routerLink?: string;
    href?: string;
  };
}

@Component({
  selector: 'app-page-timeline',
  imports: [RouterLink, NgIcon, HlmButtonImports, HlmCardImports],
  providers: [provideIcons({ lucideCheck, lucideArrowRight })],
  template: `
    <ol class="flex flex-col">
      @for (item of items(); track item.title; let last = $last) {
        <li class="flex gap-5">
          <div class="relative flex w-10 shrink-0 flex-col items-center">
            <div
              class="relative z-10 flex size-9 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary shadow-sm"
              aria-hidden="true"
            >
              <ng-icon name="lucideCheck" class="size-4" />
            </div>
            @if (!last) {
              <div
                class="mt-2 min-h-6 w-px flex-1 bg-border"
                aria-hidden="true"
              ></div>
            }
          </div>

          <div class="min-w-0 flex-1" [class.pb-10]="!last">
            <section hlmCard size="sm" class="shadow-none ring-border/60">
              <div hlmCardContent class="flex flex-col gap-3">
                @if (item.date) {
                  <time
                    class="inline-flex w-fit rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {{ item.date }}
                  </time>
                }

                <h3 class="text-base font-semibold leading-snug">
                  {{ item.title }}
                </h3>

                <p class="text-sm leading-relaxed text-muted-foreground">
                  {{ item.description }}
                </p>

                @if (item.link) {
                  @if (item.link.routerLink) {
                    <a
                      hlmBtn
                      variant="link"
                      class="h-auto w-fit gap-1.5 px-0"
                      [routerLink]="item.link.routerLink"
                    >
                      {{ item.link.label }}
                      <ng-icon name="lucideArrowRight" class="size-4" />
                    </a>
                  } @else if (item.link.href) {
                    <a
                      hlmBtn
                      variant="link"
                      class="h-auto w-fit gap-1.5 px-0"
                      [href]="item.link.href"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ item.link.label }}
                      <ng-icon name="lucideArrowRight" class="size-4" />
                    </a>
                  }
                }
              </div>
            </section>
          </div>
        </li>
      }
    </ol>
  `,
})
export class PageTimelineComponent {
  readonly items = input.required<PageTimelineItem[]>();
}
