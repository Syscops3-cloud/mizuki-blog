import { d as defineCollection } from './_astro_content_nJCuh7Be.mjs';
import { o as objectType, s as stringType, i as booleanType, j as arrayType, k as dateType } from './astro/server_CFIJpBV_.mjs';

defineCollection({
  schema: objectType({
    title: stringType(),
    published: dateType(),
    updated: dateType().optional(),
    draft: booleanType().optional().default(false),
    description: stringType().optional().default(""),
    image: stringType().optional().default(""),
    tags: arrayType(stringType()).optional().default([]),
    category: stringType().optional().nullable().default(""),
    lang: stringType().optional().default(""),
    pinned: booleanType().optional().default(false),
    author: stringType().optional().default(""),
    sourceLink: stringType().optional().default(""),
    licenseName: stringType().optional().default(""),
    licenseUrl: stringType().optional().default(""),
    /* Page encryption fields */
    encrypted: booleanType().optional().default(false),
    password: stringType().optional().default(""),
    /* For internal use */
    prevTitle: stringType().default(""),
    prevSlug: stringType().default(""),
    nextTitle: stringType().default(""),
    nextSlug: stringType().default("")
  })
});
defineCollection({
  schema: objectType({})
});
