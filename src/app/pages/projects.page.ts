import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import type { BadgeVariants } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { HlmTableImports } from '@spartan-ng/helm/table';
import {
  createAngularTable,
  getCoreRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
} from '@tanstack/angular-table';
import { PageHeroComponent } from '../components/page-hero';
import { LibraryDetailDrawerComponent } from '../libraries/library-detail-drawer';
import {
  injectLibraries,
  LIBRARY_STATUSES,
  STATUS_BADGE_VARIANT,
  type LibraryRow,
  type LibraryStatus,
} from '../libraries/library-attributes';

export const routeMeta: RouteMeta = {
  title: 'Projects',
  meta: [
    {
      name: 'description',
      content:
        'Angular open-source projects maintained or revived by the OpenNG Foundation.',
    },
  ],
};

@Component({
  imports: [
    RouterLink,
    HlmBadgeImports,
    HlmButtonImports,
    HlmSelectImports,
    HlmTableImports,
    LibraryDetailDrawerComponent,
    PageHeroComponent,
  ],
  template: `
    <app-page-hero title="Projects">
      <p class="py-4 text-muted-foreground">
        Libraries we are reviving and maintaining for the Angular community.
        All Foundation repositories live on
        <a
          class="font-medium text-primary underline-offset-4 hover:underline"
          href="https://github.com/openng-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </p>
    </app-page-hero>

    <section class="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 lg:px-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Tracked libraries</h2>
        <p class="text-muted-foreground leading-7">
          We do not fork every abandoned library, we step in where maintenance
          has stalled and the community still depends on the project. The table
          below lists every library we are tracking, from testing and data
          fetching to state management and developer ergonomics. Select a row to
          view full details.
        </p>
        <p class="text-muted-foreground leading-7">
          As repositories move under Foundation stewardship, all Foundation
          libraries will be published under the
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            href="https://www.npmjs.com/org/openng"
            target="_blank"
            rel="noopener noreferrer"
          >
            &#64;openng
          </a>
          npm organization, giving the community a consistent namespace for
          maintained Angular packages.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex w-fit flex-col gap-1.5 text-sm">
          <label class="font-medium" for="status-filter">Filter by status</label>
          <hlm-select
            class="w-52"
            [value]="statusFilter()"
            (valueChange)="onStatusFilterChange($event)"
          >
            <hlm-select-trigger id="status-filter">
              <hlm-select-value placeholder="All statuses" />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal>
              <hlm-select-group>
                <hlm-select-item value="all">All statuses</hlm-select-item>
                @for (status of statuses; track status) {
                  <hlm-select-item [value]="status">{{ status }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </div>

        @defer {
          <div hlmTableContainer>
            <table hlmTable>
              <thead hlmTableHeader>
                @for (headerGroup of table().getHeaderGroups(); track headerGroup.id) {
                  <tr hlmTableRow>
                    @for (header of headerGroup.headers; track header.id) {
                      <th
                        hlmTableHead
                        [class.cursor-pointer]="header.column.getCanSort()"
                        [class.select-none]="header.column.getCanSort()"
                        (click)="header.column.getToggleSortingHandler()?.($event)"
                      >
                        @if (header.isPlaceholder) {
                        } @else {
                          <span class="inline-flex items-center gap-1">
                            {{ header.column.columnDef.header }}
                            @if (header.column.getIsSorted() === 'asc') {
                              <span aria-hidden="true">↑</span>
                            } @else if (header.column.getIsSorted() === 'desc') {
                              <span aria-hidden="true">↓</span>
                            }
                          </span>
                        }
                      </th>
                    }
                  </tr>
                }
              </thead>
              <tbody hlmTableBody>
                @for (row of table().getRowModel().rows; track row.id) {
                  <tr
                    hlmTableRow
                    class="cursor-pointer"
                    tabindex="0"
                    role="button"
                    [attr.aria-label]="'View details for ' + row.original.name"
                    (click)="openLibrary(row.original)"
                    (keydown.enter)="openLibrary(row.original)"
                    (keydown.space)="
                      openLibrary(row.original); $event.preventDefault()
                    "
                  >
                    @for (cell of row.getVisibleCells(); track cell.id) {
                      <td hlmTableCell>
                        @switch (cell.column.id) {
                          @case ('name') {
                            <span class="font-medium">{{ cell.getValue() }}</span>
                          }
                          @case ('originalPackage') {
                            <code class="text-sm">{{ cell.getValue() }}</code>
                          }
                          @case ('replacement') {
                            <span class="text-sm">{{ cell.getValue() }}</span>
                          }
                          @case ('status') {
                            <span
                              hlmBadge
                              [variant]="statusVariant($any(cell.getValue()))"
                            >
                              {{ cell.getValue() }}
                            </span>
                          }
                          @default {
                            {{ cell.getValue() }}
                          }
                        }
                      </td>
                    }
                  </tr>
                } @empty {
                  <tr hlmTableRow>
                    <td hlmTableCell [attr.colspan]="columns.length">
                      <p class="text-muted-foreground py-4 text-center">
                        No libraries match this filter.
                      </p>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>

      <app-library-detail-drawer
        [library]="selectedLibrary()"
        [open]="drawerOpen()"
        (closed)="closeDrawer()"
      />

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Coming next</h2>
        <p class="text-muted-foreground leading-7">
          We will keep evaluating other abandoned Angular projects. Know a
          library that needs a new home? Read our
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/community/project-intake"
          >
            project intake criteria
          </a>
          or
          <a
            class="font-medium text-primary underline-offset-4 hover:underline"
            routerLink="/about/contact"
          >
            get in touch
          </a>.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a
          hlmBtn
          size="sm"
          href="https://github.com/openng-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenNG on GitHub
        </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/community/get-involved">
          Get involved
        </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/about/governance">
          How we govern
        </a>
      </div>
    </section>
  `,
})
export default class ProjectsPage {
  readonly statuses = LIBRARY_STATUSES;

  readonly statusFilter = signal('all');
  readonly sorting = signal<SortingState>([]);
  readonly selectedLibrary = signal<LibraryRow | null>(null);

  readonly drawerOpen = computed(() => this.selectedLibrary() !== null);

  readonly libraries = injectLibraries();

  readonly filteredLibraries = computed(() => {
    const filter = this.statusFilter();
    if (filter === 'all') {
      return this.libraries;
    }
    return this.libraries.filter((lib) => lib.status === filter);
  });

  readonly columns: ColumnDef<LibraryRow>[] = [
    {
      accessorKey: 'name',
      header: 'Project',
      enableSorting: true,
    },
    {
      accessorKey: 'originalPackage',
      header: 'Original package',
    },
    {
      id: 'replacement',
      header: 'Replacement',
      accessorFn: (row) =>
        row.replacementPackage ?? row.replacementNote ?? '—',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      enableSorting: true,
    },
  ];

  readonly table = createAngularTable(() => ({
    data: this.filteredLibraries(),
    columns: this.columns,
    state: {
      sorting: this.sorting(),
    },
    onSortingChange: (updater) => {
      this.sorting.set(
        typeof updater === 'function' ? updater(this.sorting()) : updater,
      );
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  }));

  statusVariant(status: LibraryStatus): BadgeVariants['variant'] {
    return STATUS_BADGE_VARIANT[status];
  }

  openLibrary(library: LibraryRow): void {
    this.selectedLibrary.set(library);
  }

  closeDrawer(): void {
    this.selectedLibrary.set(null);
  }

  onStatusFilterChange(value: string | null | undefined): void {
    this.statusFilter.set(value ?? 'all');
  }
}
