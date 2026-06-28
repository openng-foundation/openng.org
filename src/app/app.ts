import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideMenu } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDrawerImports } from '@spartan-ng/helm/drawer';
import { HlmNavigationMenuImports } from '@spartan-ng/helm/navigation-menu';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    NgIcon,
    HlmNavigationMenuImports,
    HlmDrawerImports,
    HlmButtonImports,
    HlmSeparatorImports,
  ],
  providers: [provideIcons({ lucideMenu, lucideGithub })],
  template: `
    <header class="bg-background border-b border-border">
      <div class="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2 lg:px-8">
        <div class="flex flex-1 items-center gap-2 lg:flex-none">
          <hlm-drawer direction="left" class="lg:hidden">
            <button
              hlmDrawerTrigger
              hlmBtn
              variant="ghost"
              size="icon"
              aria-label="Open menu"
            >
              <ng-icon name="lucideMenu" />
            </button>
            <hlm-drawer-content *hlmDrawerPortal>
              <hlm-drawer-header>
                <h2 hlmDrawerTitle class="font-montserrat">OpenNG Foundation</h2>
              </hlm-drawer-header>
              <nav class="flex flex-col gap-1 overflow-y-auto p-4">
                <p class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  About
                </p>
                @for (item of aboutLinks; track item.href) {
                  <button
                    hlmBtn
                    variant="ghost"
                    hlmDrawerClose
                    class="h-auto w-full justify-start px-2 py-2 font-normal"
                    [routerLink]="item.href"
                  >
                    {{ item.title }}
                  </button>
                }

                <hlm-separator class="my-2" />

                <button
                  hlmBtn
                  variant="ghost"
                  hlmDrawerClose
                  class="w-full justify-start font-semibold"
                  routerLink="/projects"
                >
                  Projects
                </button>
                <button
                  hlmBtn
                  variant="ghost"
                  hlmDrawerClose
                  class="w-full justify-start font-semibold"
                  routerLink="/blog"
                >
                  Blog
                </button>
                <a
                  hlmBtn
                  variant="ghost"
                  class="w-full justify-start font-semibold"
                  [href]="githubOrgUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                @for (section of communitySections; track section.title) {
                  <hlm-separator class="my-2" />
                  <p class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                    {{ section.title }}
                  </p>
                  @for (link of section.links; track link.href) {
                    @if (link.external) {
                      <a
                        hlmBtn
                        variant="ghost"
                        class="h-auto w-full justify-start px-2 py-2 font-normal"
                        [href]="link.href"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ link.title }}
                      </a>
                    } @else {
                      <button
                        hlmBtn
                        variant="ghost"
                        hlmDrawerClose
                        class="h-auto w-full justify-start px-2 py-2 font-normal"
                        [routerLink]="link.href"
                      >
                        {{ link.title }}
                      </button>
                    }
                  }
                }
              </nav>
            </hlm-drawer-content>
          </hlm-drawer>

          <a
            routerLink="/"
            class="flex items-center gap-2 font-montserrat text-lg font-bold whitespace-nowrap sm:text-xl"
          >
            <img
              src="/favicon.svg"
              alt=""
              aria-hidden="true"
              class="size-8 shrink-0"
            />
            OpenNG Foundation
          </a>
        </div>

        <nav hlmNavigationMenu class="mx-auto hidden lg:flex">
          <ul hlmNavigationMenuList>
            <li hlmNavigationMenuItem>
              <button hlmNavigationMenuTrigger>About</button>
              <hlm-navigation-menu-content *hlmNavigationMenuPortal>
                <ul class="grid w-80 gap-1 p-2">
                  @for (item of aboutLinks; track item.href) {
                    <li>
                      <a
                        hlmNavigationMenuLink
                        [routerLink]="item.href"
                        class="flex flex-col items-start gap-1"
                      >
                        <span class="font-semibold">{{ item.title }}</span>
                        <span class="text-sm text-muted-foreground text-wrap">
                          {{ item.description }}
                        </span>
                      </a>
                    </li>
                  }
                </ul>
              </hlm-navigation-menu-content>
            </li>
            <li hlmNavigationMenuItem>
              <a hlmNavigationMenuLink routerLink="/projects" class="font-semibold">
                Projects
              </a>
            </li>
            <li hlmNavigationMenuItem>
              <a hlmNavigationMenuLink routerLink="/blog" class="font-semibold">
                Blog
              </a>
            </li>
            <li hlmNavigationMenuItem>
              <button hlmNavigationMenuTrigger>Community</button>
              <hlm-navigation-menu-content *hlmNavigationMenuPortal>
                <div class="grid w-48 gap-1 p-2">
                  @for (section of communitySections; track section.title) {
                    <p class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                      {{ section.title }}
                    </p>
                    @for (link of section.links; track link.href) {
                      @if (link.external) {
                        <a
                          hlmNavigationMenuLink
                          [href]="link.href"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {{ link.title }}
                        </a>
                      } @else {
                        <a hlmNavigationMenuLink [routerLink]="link.href">
                          {{ link.title }}
                        </a>
                      }
                    }
                  }
                </div>
              </hlm-navigation-menu-content>
            </li>
          </ul>
        </nav>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            hlmBtn
            variant="ghost"
            [href]="githubOrgUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ng-icon name="lucideGithub" />
            GitHub
          </a>
        </div>
      </div>
    </header>

    <main>
      <router-outlet />
    </main>
  `,
})
export class App {
  readonly githubOrgUrl = 'https://github.com/openng-foundation';

  readonly aboutLinks = [
    {
      title: 'Overview',
      description:
        'A community hub helping the Angular OSS ecosystem with maintenance.',
      href: '/about',
    },
    {
      title: 'Governance',
      description:
        'How we share maintenance and onboard maintainers.',
      href: '/about/governance',
    },
    {
      title: 'History',
      description: 'How OpenNG came to be and key milestones.',
      href: '/about/history',
    },
    {
      title: 'Q&A',
      description:
        'Common questions about our mission, maintainers, and support.',
      href: '/about/qa',
    },
    {
      title: 'Contact Us',
      description: 'Reach out about contributions and project proposals.',
      href: '/about/contact',
    },
  ];

  readonly communitySections = [
    {
      title: 'Collaboration',
      links: [
        {
          title: 'GitHub Organization',
          href: 'https://github.com/openng-foundation',
          external: true,
        },
        { title: 'Get Involved', href: '/community/get-involved' },
        { title: 'Partnerships', href: '/community/partnerships' },
        {
          title: 'Code of Conduct',
          href: 'https://github.com/openng-foundation/.github?tab=coc-ov-file',
          external: true,
        },
      ],
    },
    {
      title: 'Programs',
      links: [
        { title: 'Project Intake', href: '/community/project-intake' },
        { title: 'Maintainer Candidates', href: '/community/maintainer-candidates' },
        { title: 'Standards', href: '/community/standards' },
        { title: 'Sustainability', href: '/community/sustainability' },
        { title: 'Security', href: '/community/security' },
      ],
    },
  ];
}
