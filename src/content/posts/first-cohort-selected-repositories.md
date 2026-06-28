---
title: First cohort of selected repositories
slug: first-cohort-selected-repositories
description: OpenNG announces the first seven ngneat libraries we will maintain, and how we chose them.
publishedAt: 2026-06-20
author: OpenNG Foundation
---

When the ngneat organization disappeared from GitHub, the Angular community lost more than one library. Teams across the ecosystem suddenly faced broken installs, unanswered issues, and no clear path forward for tools they had built on for years.

Since [introducing OpenNG](/blog/openng-foundation-announcement), we have been working through which projects to take on first. Today we are announcing the **first cohort** of repositories we will maintain:

- [ngneat/cashew](https://github.com/ngneat/cashew), HTTP caching for Angular applications
- [ngneat/spectator](https://github.com/ngneat/spectator), a testing library that simplifies Angular component tests
- [ngneat/query](https://github.com/ngneat/query), TanStack Query bindings for Angular
- [ngneat/elf](https://github.com/ngneat/elf), a reactive, immutable state management library

These four libraries represent a cross-section of the former ngneat ecosystem, from testing and data fetching to state management. Each one still has a meaningful user base and a gap where ongoing maintenance stopped.

### Best-effort maintenance

Two additional libraries are included in this cohort under a different maintenance model:

- [ngneat/until-destroy](https://github.com/ngneat/until-destroy), automatic subscription cleanup for Angular components
- [ngneat/falso](https://github.com/ngneat/falso), a library for generating fake data in tests and development

For these projects, OpenNG will provide **best-effort** maintenance aimed at keeping existing consumers unblocked. That means targeted fixes, compatibility updates, and security patches where needed, not a long-term roadmap of new features. For **until-destroy**, the focus is supporting existing Angular applications through **v22**. For **falso**, the focus is keeping the library usable for projects that still depend on it today.

We also want to be direct about the exit path. These libraries solved real problems when they were widely adopted, but the ecosystem has moved on:

- **until-destroy** consumers should plan to adopt [modern Angular subscription patterns](https://angular.dev/guide/components/lifecycle#unsubscribing-with-takeuntildestroyed) (`takeUntilDestroyed`, `DestroyRef`, and related APIs) rather than relying on the decorator long term
- **falso** consumers should migrate to [Faker.js](https://fakerjs.dev/) for fake data generation

If you depend on either library today, we will do our best to keep it working through v22. After that, we encourage you to move to these alternatives and treat the ngneat packages as transitional support, not a permanent foundation.

## How we selected them

We did not start with a list of every abandoned Angular repository on GitHub. Our intake process focuses on libraries where **maintenance has stalled** and the **community still depends on the project**, the same principles outlined in our [governance](/about/governance) and [standards](/community/standards) pages.

For this first cohort, the criteria were straightforward:

1. **Community impact**, libraries with broad adoption across the Angular ecosystem, not niche experiments
2. **Clear maintenance gap**, projects where issues piled up, releases stopped, and no successor was in sight after ngneat went offline
3. **A realistic path forward**, codebases we can assess, test, and bring back to a healthy state without fragmenting the ecosystem through unnecessary forks
4. **Shared origin**, all seven come from the same former organization, which lets us coordinate maintenance, tooling, and release practices from day one

We also weighed practical factors: existing test coverage, CI setup, documentation quality, and how tightly each library couples to current Angular versions. Projects that met the bar on impact and need, but needed the most urgent attention, rose to the top.

This cohort is intentionally focused. We are not claiming every ngneat library at once, we are starting where the community need is clearest and where we can learn how to maintain projects well before expanding further.

## What happens next

Selecting a repository is only the first step. **Finding maintainers is the work that matters most.**

For each library in this cohort, we will closely look for people to carry day-to-day maintenance, reviewing pull requests, triaging issues, cutting releases, and keeping dependencies current. For established projects with large user bases, we expect to look for contributors with relevant experience, potentially recommended by trusted community members such as Angular GDEs. For smaller or less complex libraries, we are open to people coming forward on their own, that is how many of us started as maintainers in the first place.

In the coming weeks, we will:

- Assess the current state of each repository, tests, CI, open issues, and Angular version compatibility
- Publish per-project contribution guides as repositories come under active maintenance
- Open GitHub Discussions for coordination and maintainer interest
- Share progress on the [projects page](/projects) as work moves forward

If you have experience with any of these libraries, or want to learn by contributing, we want to hear from you. Read our [get involved](/community/get-involved) page and [governance overview](/about/governance) to understand how we onboard maintainers and share maintenance.

## Looking ahead

This cohort is a starting point, not a finish line. Once these projects are on stable footing, we will keep evaluating other abandoned Angular libraries that meet our intake criteria. If you know a project the community relies on that has lost its maintainers, [get in touch](/about/contact).

The goal remains the same: critical Angular tooling should not vanish when the people behind it move on. With this first cohort, we are putting that principle into practice.
