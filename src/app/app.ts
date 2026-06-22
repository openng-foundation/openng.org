import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="drawer">
      <input
        id="mobile-nav-drawer"
        type="checkbox"
        class="drawer-toggle"
      />

      <div class="drawer-content">
        <header class="bg-base-100">
          <nav class="navbar mx-auto max-w-7xl px-4 lg:px-8">
            <div class="navbar-start gap-2 max-lg:w-auto max-lg:flex-1">
              <label
                for="mobile-nav-drawer"
                class="btn btn-ghost btn-square drawer-button lg:hidden"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block size-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
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

            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal gap-1 px-1">
                <li>
                  <details name="navigation">
                    <summary class="font-semibold">About</summary>
                    <ul class="z-1 w-80 bg-base-100 p-2">
                      @for (item of aboutLinks; track item.href) {
                        <li>
                          <a
                            class="flex items-start flex-col gap-1"
                            [routerLink]="item.href"
                            (click)="closeNavigationMenu($event)"
                          >
                            <div class="font-semibold">{{ item.title }}</div>
                            <div class="text-sm text-base-content/60 text-wrap">
                              {{ item.description }}
                            </div>
                          </a>
                        </li>
                      }
                    </ul>
                  </details>
                </li>
                <li>
                  <a routerLink="/projects" class="font-semibold">Projects</a>
                </li>
                <li>
                  <a routerLink="/blog" class="font-semibold">Blog</a>
                </li>
                <li>
                  <details name="navigation">
                    <summary class="font-semibold">Community</summary>
                    <ul class="z-1 w-48 bg-base-100 p-2">
                      @for (section of communitySections; track section.title) {
                        <li class="menu-title">
                          <span>{{ section.title }}</span>
                        </li>
                        @for (link of section.links; track link.href) {
                          <li>
                            @if (link.external) {
                              <a
                                [href]="link.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                (click)="closeNavigationMenu($event)"
                              >
                                {{ link.title }}
                              </a>
                            } @else {
                              <a
                                [routerLink]="link.href"
                                (click)="closeNavigationMenu($event)"
                              >
                                {{ link.title }}
                              </a>
                            }
                          </li>
                        }
                      }
                    </ul>
                  </details>
                </li>
              </ul>
            </div>

            <div class="navbar-end hidden lg:inline-flex">
              <a
                class="btn btn-ghost gap-2"
                [href]="githubOrgUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-5"
                  aria-hidden="true"
                >
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </nav>
        </header>

        <main>
          <router-outlet />
        </main>
      </div>

      <div class="drawer-side z-40 lg:hidden">
        <label
          for="mobile-nav-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul
          class="menu menu-vertical min-h-full w-80 bg-base-100 p-4 text-base-content"
        >
          <li class="menu-title">
            <span>About</span>
          </li>
          @for (item of aboutLinks; track item.href) {
            <li>
              <a [routerLink]="item.href" (click)="closeMobileDrawer()">
                {{ item.title }}
              </a>
            </li>
          }
          <li>
            <div class="divider my-1"></div>
          </li>
          <li>
            <a
              routerLink="/projects"
              class="font-semibold"
              (click)="closeMobileDrawer()"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              routerLink="/blog"
              class="font-semibold"
              (click)="closeMobileDrawer()"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              class="font-semibold"
              [href]="githubOrgUrl"
              target="_blank"
              rel="noopener noreferrer"
              (click)="closeMobileDrawer()"
            >
              GitHub
            </a>
          </li>
          <li>
            <div class="divider my-1"></div>
          </li>
          @for (section of communitySections; track section.title) {
            @if (!$first) {
              <li>
                <div class="divider my-1"></div>
              </li>
            }
            <li class="menu-title">
              <span>{{ section.title }}</span>
            </li>
            @for (link of section.links; track link.href) {
              <li>
                @if (link.external) {
                  <a
                    [href]="link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    (click)="closeMobileDrawer()"
                  >
                    {{ link.title }}
                  </a>
                } @else {
                  <a
                    [routerLink]="link.href"
                    (click)="closeMobileDrawer()"
                  >
                    {{ link.title }}
                  </a>
                }
              </li>
            }
          }
        </ul>
      </div>
    </div>
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

  closeNavigationMenu(event: Event) {
    (event.currentTarget as HTMLElement)
      .closest('details')
      ?.removeAttribute('open');
  }

  closeMobileDrawer() {
    const drawer = document.getElementById(
      'mobile-nav-drawer',
    ) as HTMLInputElement | null;
    if (drawer) {
      drawer.checked = false;
    }
  }
}
