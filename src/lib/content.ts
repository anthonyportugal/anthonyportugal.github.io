import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

type Localized = 'projects' | 'openSource' | 'experience';

/** Entries of one collection in one language, from its `<lang>/` folder. */
export async function getLocalized<C extends Localized>(
  collection: C,
  lang: Lang
): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(collection);
  return entries.filter((entry) => entry.id.startsWith(`${lang}/`));
}

/** Formats an ISO year-month ("2024-03") as "Mar 2024" or "mar 2024". */
export function formatMonth(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1))
  );
}
