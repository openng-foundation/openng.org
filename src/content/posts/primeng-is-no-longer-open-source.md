---
title: PrimeNG is no longer open source
slug: primeng-is-no-longer-open-source
description: PrimeTek archived the PrimeNG repository on June 29, 2026 and is moving future major versions to a commercial license. OpenNG Foundation is considering taking the lead on a community fork of the last MIT release.
publishedAt: 2026-06-29
author: OpenNG Foundation
---

PrimeTek has announced [the next chapter of its UI libraries](https://primeui.dev/nextchapter): **PrimeUI**, a unified commercial licensing model for PrimeNG, PrimeReact, and PrimeVue. The product names stay the same, but the open-source model that built PrimeNG's global adoption is changing.

For Angular developers, the headline is this: **future major versions of PrimeNG will no longer be open source.** On June 29, 2026, the [PrimeNG GitHub repository](https://github.com/primefaces/primeng) was **archived**, closing the door on community contributions to the open-source codebase.

## What PrimeTek announced

PrimeTek is introducing PrimeUI as the licensing brand for its core UI libraries. PrimeNG, PrimeReact, and PrimeVue keep their names, package names, and imports. What changes is how future releases are licensed and distributed.

The company cites the scale of maintaining four major UI libraries across four platforms, dozens of components, thousands of APIs, accessibility work, framework compatibility, security updates, documentation, and enterprise-grade support expectations. The add-on store model that once funded development, templates, blocks, theme tooling, support services, no longer matches that engineering load.

Under the new model:

- **Community license** remains free for eligible users: organizations with less than $1M in annual revenue, fewer than 5 developers, fewer than 10 employees, and less than $3M in venture capital funding. Community licenses require annual eligibility confirmation.
- **Commercial Suite** is the professional license for teams that do not qualify for Community or prefer a perpetual license without annual key rotation. Launch pricing is **$599 per developer** through the end of 2026, with **$799 per developer** as the standard price starting in 2027. Update access can be extended for **$399 per developer per year** after the first year.
- **PrimeUI PRO** introduces premium components such as Scheduler, Text Editor, Task Board, and Charts, with more advanced components planned.

## What this means for existing PrimeNG users

The change is **not retroactive**.

All existing MIT-licensed versions of PrimeNG remain MIT forever. If you are on PrimeNG 21 or earlier, your rights under the MIT license do not change. The source repository is now read-only: archived on June 29, 2026, with no further pull requests, issues, or releases expected from PrimeTek on GitHub.

The new license applies only to **future major versions**:

- **PrimeNG 22**
- PrimeReact 11
- PrimeVue 5

Those versions will be distributed as compiled npm packages under the PrimeUI license. License verification is designed to be offline-first, but missing or invalid keys may trigger license notices according to the applicable terms.

For many teams, the practical decision is straightforward: stay on the last MIT release, upgrade under a Community or Commercial license, or evaluate alternatives before the next major version lands.

## Why this matters to the Angular ecosystem

PrimeNG is one of the most widely used UI libraries in Angular. Hundreds of millions of downloads across the PrimeTek ecosystem reflect how deeply these components are embedded in applications, from internal tools to enterprise products.

A licensing shift at this scale is not a minor packaging change. It affects procurement, compliance, long-term maintenance planning, and how teams think about dependency risk. Some organizations will qualify for the free Community tier. Others will budget for Commercial licenses. Some will stay on MIT versions indefinitely. Others will migrate to different component libraries.

What is clear is that PrimeNG's role in the ecosystem is changing from a broadly open-source default to a commercially licensed product for its next generation.

## What OpenNG Foundation is considering

OpenNG exists to help the Angular open-source ecosystem when maintenance gaps appear. We have already started that work with the [first cohort of ngneat libraries](/blog/first-cohort-selected-repositories), projects where the original maintainers stepped away and the community still depended on the code.

PrimeNG presents a different situation. PrimeTek is not abandoning the library as a product. The company is changing its licensing model for future releases and has archived the open-source repository. That distinction matters: PrimeNG continues commercially, but the public GitHub project is closed.

With the repository archived on June 29, 2026, the **last MIT-licensed major version of PrimeNG will receive no further updates from PrimeTek** as development moves to PrimeNG 22 and beyond. Teams that want to stay on open source will need a maintained fork of that final MIT release, or they will need to move on.

**OpenNG Foundation is considering taking the lead on maintaining a community fork of the last MIT-licensed version of PrimeNG.** This is not a final decision. We are evaluating whether we can host and coordinate that effort responsibly, and whether enough experienced volunteers would commit to making it viable.

If we move forward, that would mean community-driven maintenance of the forked open-source line: security fixes, Angular compatibility updates, bug fixes, and coordinated releases, the same kind of sustained effort we are building for abandoned ngneat libraries. It is not a small undertaking. PrimeNG is a large codebase with broad surface area, and doing this well requires experienced contributors who can commit real time to the work.

If you have deep experience with PrimeNG, Angular component libraries, or large-scale OSS maintenance, and want to help us assess this option or express interest in maintaining a fork, [get in touch](/about/contact) or read how we onboard maintainers on our [get involved](/community/get-involved) page.

## Looking ahead

PrimeTek's decision reflects a broader tension in open source: libraries that reach global scale often outgrow the funding models that made them possible. Whether you agree with the change or not, it is now part of the landscape Angular teams must navigate.

For OpenNG, the question is practical: when a widely used Angular dependency moves away from open source, can the community organize to preserve what remains freely available?

We are actively considering a fork as one path forward. Whether we proceed depends on volunteer interest and our ability to sustain the work. If you want to help us figure that out, we are listening.
