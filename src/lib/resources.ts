import type { CollectionEntry } from 'astro:content';

type Resource = CollectionEntry<'resources'>['data'];

const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

/** "2026" → "2026"; "2026-05" → "May 2026"; "2026-09-24" → "Sept. 24, 2026". */
export function formatPartialDate(d: string): string {
  const [y, m, day] = d.split('-');
  if (!m) return y;
  const month = MONTHS[Number(m) - 1];
  return day ? `${month} ${Number(day)}, ${y}` : `${month} ${y}`;
}

export function formatFullDate(d: string): string {
  return new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** "Jane Doe and John Roe, eds." */
export function formatAuthors(r: Resource): string {
  const names = r.authors.map((a) => a.name);
  let s = '';
  if (names.length === 1) s = names[0];
  else if (names.length === 2) s = `${names[0]} and ${names[1]}`;
  else if (names.length > 2) s = `${names.slice(0, -1).join(', ')}, and ${names[names.length - 1]}`;
  if (s && r.edited) s += names.length > 1 ? ', eds.' : ', ed.';
  return s;
}

/** Publisher, date, page count, on one line. */
export function formatPublication(r: Resource): string {
  const parts: string[] = [];
  if (r.publisher) parts.push(r.publisher);
  if (r.date) parts.push(r.status === 'forthcoming' ? `forthcoming ${formatPartialDate(r.date)}` : formatPartialDate(r.date));
  else if (r.status === 'forthcoming') parts.push('forthcoming');
  if (r.pages) parts.push(`${r.pages} pp.`);
  return parts.join(', ');
}

/** Short access word for the ledger column. */
export const ACCESS_LABELS: Record<Resource['access'], string> = {
  open: 'Open',
  free: 'Free to read',
  subscription: 'Subscription',
  purchase: 'Purchase',
};

/** Second line under the access word: license, platform, price. */
export function accessQualifier(r: Resource): string {
  const parts: string[] = [];
  if (r.access === 'open' && r.license) parts.push(r.license);
  if (r.access === 'subscription' && r.via) parts.push(r.via);
  if (r.price) parts.push(r.price);
  return parts.join(' · ');
}

export const KIND_LABELS: Record<Resource['kind'], string> = {
  textbook: 'Textbook',
  casebook: 'Casebook',
  'open-casebook': 'Open casebook',
  'study-aid': 'Study aid',
  'practitioner-book': 'Practitioner book',
  monograph: 'Monograph',
  supplement: 'Supplement',
  treatise: 'Treatise',
  'online-course': 'Online course',
  syllabus: 'Syllabus',
  website: 'Website',
  article: 'Article',
  bibliography: 'Bibliography',
};

/**
 * Filter facets. The twelve kinds roll up into five groups because most kinds
 * have one to three records and would be noise as separate choices.
 */
export const KIND_GROUPS: { id: string; label: string; kinds: Resource['kind'][] }[] = [
  { id: 'casebooks', label: 'Casebooks & textbooks', kinds: ['casebook', 'open-casebook', 'textbook', 'supplement'] },
  { id: 'study-aids', label: 'Study aids', kinds: ['study-aid'] },
  { id: 'practitioner', label: 'Practitioner & general', kinds: ['practitioner-book', 'monograph'] },
  { id: 'reference', label: 'Reference', kinds: ['treatise', 'bibliography', 'article'] },
  { id: 'courses', label: 'Courses & syllabi', kinds: ['online-course', 'syllabus', 'website'] },
];

export function kindGroup(kind: Resource['kind']): string {
  return KIND_GROUPS.find((g) => g.kinds.includes(kind))?.id ?? 'other';
}

export const AUDIENCE_LABELS: Record<string, string> = {
  'jd-students': 'JD students',
  'non-jd-students': 'Non-JD students',
  practitioners: 'Practitioners',
  faculty: 'Faculty',
  general: 'General readers',
};

/** Published facet: forthcoming, the generative-AI era, or before it. Undated records fall outside all three. */
export const PUBLISHED_BUCKETS = [
  { id: 'forthcoming', label: 'Forthcoming' },
  { id: 'recent', label: '2023 or later' },
  { id: 'older', label: 'Before 2023' },
];

export function publishedBucket(r: Resource): string {
  if (r.status === 'forthcoming') return 'forthcoming';
  if (!r.date) return '';
  return Number(r.date.slice(0, 4)) >= 2023 ? 'recent' : 'older';
}

/** Every topic a record carries, from its chapters and its whole-work list. */
export function recordTopics(r: Resource): string[] {
  return [...new Set([...r.topics, ...r.contents.flatMap((c) => c.topics)])];
}

/** Keys the client sorts on. Strings compare lexically, so pad dates to a fixed width. */
export function sortKeys(r: Resource): { date: string; title: string; author: string } {
  // "2026-04" → "2026-04-00" so month-only dates sort inside their year; undated → "0000" sorts last when descending.
  const date = r.date ? (r.date + '-00-00').slice(0, 10) : '0000-00-00';
  const title = r.title.replace(/^(a|an|the)\s+/i, '').toLowerCase();
  const first = r.authors[0]?.name ?? '';
  const author = first
    .replace(/,?\s+(jr\.?|sr\.?|ii|iii)$/i, '')
    .split(/\s+/)
    .pop()!
    .toLowerCase();
  return { date, title, author: author || 'zzz' };
}
