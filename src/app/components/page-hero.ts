import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  template: `
    <div class="bg-muted">
      <div
        class="mx-auto max-w-3xl px-4 text-center"
        [class]="size() === 'large' ? 'py-16' : 'py-12'"
      >
        <div [class]="size() === 'large' ? 'max-w-3xl' : 'max-w-2xl mx-auto'">
          <h1
            class="text-4xl font-bold"
            [class.lg:text-5xl]="size() === 'large'"
          >
            {{ title() }}
          </h1>
          @if (description()) {
            <p
              class="text-muted-foreground"
              [class]="size() === 'large' ? 'py-6 text-lg' : 'py-4'"
            >
              {{ description() }}
            </p>
          }
          <ng-content />
        </div>
      </div>
    </div>
  `,
})
export class PageHeroComponent {
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly size = input<'default' | 'large'>('default');
}
