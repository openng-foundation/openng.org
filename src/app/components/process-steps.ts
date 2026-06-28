import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ProcessStep {
  title: string;
  description: string;
  descriptionAfter?: string;
  link?: {
    label: string;
    routerLink?: string;
    href?: string;
  };
}

@Component({
  selector: 'app-process-steps',
  imports: [RouterLink],
  template: `
    <ol class="flex flex-col gap-8 border-l border-border pl-8">
      @for (step of steps(); track step.title; let index = $index) {
        <li class="relative">
          <div
            class="absolute -left-[calc(2rem+0.75rem)] flex size-6 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground"
          >
            {{ index + 1 }}
          </div>
          <div class="flex flex-col gap-2 text-left">
            <div class="font-semibold">{{ step.title }}</div>
            <p class="text-base text-muted-foreground leading-6">
              {{ step.description }}
              @if (step.link?.routerLink) {
                <a
                  class="font-medium text-primary underline-offset-4 hover:underline"
                  [routerLink]="step.link.routerLink"
                >
                  {{ step.link.label }}
                </a>
              }
              @if (step.descriptionAfter) {
                {{ step.descriptionAfter }}
              }
            </p>
          </div>
        </li>
      }
    </ol>
  `,
})
export class ProcessStepsComponent {
  readonly steps = input.required<ProcessStep[]>();
}
