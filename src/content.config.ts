import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TOPIC_IDS } from './data/topics';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Where the post first appeared, if it was republished from elsewhere. */
    originalUrl: z.string().url().optional(),
    originalSite: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/** YAML parses an unquoted full date as a Date; normalize either form to a string. */
const dateString = (pattern: RegExp, message: string) =>
  z
    .union([z.date(), z.string(), z.number()])
    .transform((v) => (v instanceof Date ? v.toISOString().slice(0, 10) : String(v)))
    .pipe(z.string().regex(pattern, message));
/** A partial date: "2026", "2026-05", or "2026-05-14". */
const partialDate = dateString(/^\d{4}(-\d{2}){0,2}$/, 'use YYYY, YYYY-MM, or YYYY-MM-DD');
const fullDate = dateString(/^\d{4}-\d{2}-\d{2}$/, 'use YYYY-MM-DD');

export const RESOURCE_KINDS = [
  'textbook',
  'casebook',
  'open-casebook',
  'study-aid',
  'practitioner-book',
  'monograph',
  'supplement',
  'treatise',
  'online-course',
  'syllabus',
  'website',
  'article',
  'bibliography',
] as const;

export const ACCESS_TYPES = ['open', 'free', 'subscription', 'purchase'] as const;

/** A topic id from the controlled vocabulary in src/data/topics.ts. */
const topicId = z.string().refine((t) => TOPIC_IDS.has(t), (t) => ({ message: `unknown topic "${t}"; add it to src/data/topics.ts or fix the spelling` }));

export const AUDIENCES = ['jd-students', 'non-jd-students', 'faculty', 'practitioners', 'general'] as const;

/**
 * One catalog record per file. The record is neutral and reusable; the
 * curatorial note for a particular list lives on the guide item instead.
 * The file name is the record id that guides reference.
 */
const resources = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.object({ name: z.string() })).default([]),
    /** True when the named people are editors of a collected volume. */
    edited: z.boolean().default(false),
    publisher: z.string().optional(),
    date: partialDate.optional(),
    status: z.enum(['published', 'forthcoming']).default('published'),
    pages: z.number().int().positive().optional(),
    isbn: z.string().optional(),
    kind: z.enum(RESOURCE_KINDS),
    /** open = free and openly licensed; free = free to read, rights reserved. */
    access: z.enum(ACCESS_TYPES),
    /** Subscription platform, e.g. "West Academic Study Aids". */
    via: z.string().optional(),
    license: z.string().optional(),
    /** Free text, e.g. "$65 print". Goes stale; leans on `verified`. */
    price: z.string().optional(),
    url: z.string().url(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    audience: z.array(z.enum(AUDIENCES)).default([]),
    /** Whole-work topics, for resources with no chapter list. Chapters carry their own. */
    topics: z.array(topicId).default([]),
    description: z.string(),
    contents: z
      .array(z.object({ title: z.string(), note: z.string().optional(), topics: z.array(topicId).default([]) }))
      .default([]),
    contentsSource: z.string().url().optional(),
    added: fullDate,
    verified: fullDate,
  }),
});

/**
 * A curated view over the catalog: a flat list of record ids, each with an
 * optional note specific to this list. The page sorts and filters the records;
 * item order in the file is not shown.
 */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string().optional(),
    updated: fullDate,
    draft: z.boolean().default(false),
    items: z.array(z.object({ ref: reference('resources'), note: z.string().optional() })),
  }),
});

/**
 * A course's readings as assigned, class by class. Unlike guides, order matters
 * and readings are not catalog records: most are articles and posts cited once.
 */
const reading = z
  .object({
    level: z.enum(['required', 'optional', 'reference']),
    authors: z.string().optional(),
    title: z.string(),
    /** Venue, citation, or date, as one line. */
    source: z.string().optional(),
    url: z.string().url().optional(),
    /** Extra links for a reading in parts, or a set of alternatives. */
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    /** Which pages or sections, or how to read it. */
    note: z.string().optional(),
  });

const readingLists = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/reading-lists' }),
  schema: z.object({
    title: z.string(),
    course: z.string(),
    institution: z.string().optional(),
    term: z.string(),
    description: z.string(),
    intro: z.string().optional(),
    updated: fullDate,
    draft: z.boolean().default(false),
    sessions: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        /** Estimated time for the required readings. */
        time: z.string().optional(),
        note: z.string().optional(),
        readings: z.array(reading).default([]),
      }),
    ),
  }),
});

export const collections = { blog, resources, guides, readingLists };
