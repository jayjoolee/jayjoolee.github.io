import { getCollection, type CollectionEntry } from 'astro:content';
import type { ArchiveItem, GardenPath } from '../data/types';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
  year: 'numeric',
});

export async function getWritingEntries(
  includeDrafts = import.meta.env.DEV,
): Promise<readonly CollectionEntry<'writing'>[]> {
  const entries = await getCollection('writing');

  return entries
    .filter((entry) => includeDrafts || !entry.data.draft)
    .sort((left, right) => right.data.published.getTime() - left.data.published.getTime());
}

export async function getWritingItems(includeDrafts = import.meta.env.DEV): Promise<readonly ArchiveItem[]> {
  const entries = await getWritingEntries(includeDrafts);

  return entries.map((entry) => {
    const dateTime = entry.data.published.toISOString().slice(0, 10);

    return {
      slug: entry.id,
      title: entry.data.title,
      summary: entry.data.summary,
      href: `/writing/${entry.id}/`,
      kind: entry.data.kind,
      date: dateFormatter.format(entry.data.published),
      dateTime,
      section: 'note',
      featured: entry.data.featured,
    } satisfies ArchiveItem;
  });
}

export function buildArchiveTrail(
  baseItems: readonly ArchiveItem[],
  writingItems: readonly ArchiveItem[],
  limit: number,
): readonly ArchiveItem[] {
  return [...baseItems, ...writingItems]
    .sort((left, right) => right.dateTime.localeCompare(left.dateTime))
    .slice(0, limit);
}

export function withWritingCount(paths: readonly GardenPath[], countLabel: string): readonly GardenPath[] {
  return paths.map((path) => (path.href === '/writing/' ? { ...path, count: countLabel } : path));
}
