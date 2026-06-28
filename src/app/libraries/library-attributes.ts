import { injectContentFiles } from '@analogjs/content';
import type { BadgeVariants } from '@spartan-ng/helm/badge';

export type LibraryStatus =
  | 'candidate'
  | 'triaged'
  | 'accepted'
  | 'refused'
  | 'maintained'
  | 'sunset';

export type LibraryMaintenance = 'active' | 'best-effort' | 'none';

export interface LibraryAttributes {
  name: string;
  slug: string;
  description: string;
  originalPackage: string;
  replacementPackage?: string;
  status: LibraryStatus;
  maintenance?: LibraryMaintenance;
  githubRepo?: string;
  newGithubRepo?: string;
  category?: string;
  triagedAt?: string;
  replacementNote?: string;
  replacementUrl?: string;
  supportedAngularVersions?: string;
  license?: string;
  motivation?: string;
  notes?: string;
  draft?: boolean;
}

export type LibraryRow = LibraryAttributes;

export const LIBRARY_STATUSES: LibraryStatus[] = [
  'candidate',
  'triaged',
  'accepted',
  'refused',
  'maintained',
  'sunset',
];

export const STATUS_BADGE_VARIANT: Record<
  LibraryStatus,
  BadgeVariants['variant']
> = {
  candidate: 'outline',
  triaged: 'secondary',
  accepted: 'secondary',
  refused: 'destructive',
  maintained: 'default',
  sunset: 'secondary',
};

export const MAINTENANCE_LABELS: Record<LibraryMaintenance, string> = {
  active: 'Active maintenance',
  'best-effort': 'Best-effort maintenance',
  none: 'No maintenance',
};

export function injectLibraries(): LibraryRow[] {
  return injectContentFiles<LibraryAttributes>((file) =>
    file.filename.includes('content/libraries/'),
  )
    .filter((lib) => !lib.attributes.draft)
    .map((lib) => ({
      ...lib.attributes,
      slug: lib.attributes.slug || lib.slug,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function githubUrl(library: LibraryRow): string | null {
  const repo = library.newGithubRepo ?? library.githubRepo;
  return repo ? `https://github.com/${repo}` : null;
}

export function originalGithubUrl(library: LibraryRow): string | null {
  return library.githubRepo ? `https://github.com/${library.githubRepo}` : null;
}

export function npmPackageUrl(packageName: string): string {
  return `https://www.npmjs.com/package/${encodeURIComponent(packageName)}`;
}

export function formatCategory(category: string): string {
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const LICENSE_URLS: Record<string, string> = {
  MIT: 'https://opensource.org/licenses/MIT',
  'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
  'BSD-2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
  'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
  'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
  'LGPL-3.0': 'https://opensource.org/licenses/LGPL-3.0',
  ISC: 'https://opensource.org/licenses/ISC',
};

export function licenseUrl(license: string): string | null {
  const key = license.replace(/ License$/i, '').trim();
  return LICENSE_URLS[key] ?? null;
}
