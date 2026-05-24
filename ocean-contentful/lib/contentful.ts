import { createClient } from 'contentful'

// Fallbacks to check for all possible naming configurations across Vercel and local setups
const spaceId = process.env.CONTENTFUL_SPACE_ID || process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN || process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

// Defensive Warning: This will explicitly tell you in Vercel logs if the keys are blank 
// instead of letting the Contentful SDK throw a cryptic "TypeError: Expected parameter accessToken"
if (!spaceId || !token) {
  console.warn(`⚠️ Contentful Configuration Missing! SpaceID Found: ${!!spaceId}, Token Found: ${!!token}`);
}

const client = createClient({
  space:       spaceId || 'MISSING_SPACE_ID', 
  accessToken: token || 'MISSING_ACCESS_TOKEN',
})

// ── Types ────────────────────────────────────────────────────────────────────

export interface Post {
  slug:        string
  title:       string
  publishedAt: string
  description: string
  body:        any   // Contentful Rich Text document
  coverImage?: string
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function entryToPost(entry: any): Post {
  const f = entry.fields
  return {
    slug:        f.slug,
    title:       f.title,
    publishedAt: f.publishedAt ?? entry.sys.createdAt,
    description: f.description ?? '',
    body:        f.body,
    coverImage:  f.coverImage?.fields?.file?.url
                   ? `https:${f.coverImage.fields.file.url}`
                   : undefined,
  }
}

// ── API calls ────────────────────────────────────────────────────────────────

/** Fetch all published posts, newest first */
export async function getAllPosts(): Promise<Post[]> {
  const entries = await client.getEntries({
    content_type: 'post',
    order:        ['-fields.publishedAt'],
  })
  return entries.items.map(entryToPost)
}

/** Fetch a single post by slug */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const entries = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    limit: 1,
  })
  if (!entries.items.length) return null
  return entryToPost(entries.items[0])
}

/** Fetch all slugs (used for static generation) */
export async function getAllPostSlugs(): Promise<string[]> {
  const entries = await client.getEntries({
    content_type: 'post',
    select:       ['fields.slug'],
  })
  return entries.items.map((e: any) => e.fields.slug)
}
