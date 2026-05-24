import { getPostBySlug, getAllPostSlugs } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs()
    return slugs.map(slug => ({ slug }))
  } catch {
    return []
  }
}

// Rich text render options styled for the ocean aesthetic
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: any, children: any) => (
      <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#91b8d4', marginBottom: '1.25rem' }}>{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_: any, children: any) => (
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 600, color: '#dceeff', margin: '2rem 0 .75rem' }}>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_: any, children: any) => (
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 600, color: '#dceeff', margin: '2rem 0 .75rem' }}>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: any, children: any) => (
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 600, color: '#c8dff0', margin: '1.5rem 0 .5rem' }}>{children}</h3>
    ),
    [BLOCKS.QUOTE]: (_: any, children: any) => (
      <blockquote style={{ borderLeft: '2px solid #1e4d6b', paddingLeft: '1.5rem', margin: '1.5rem 0', fontStyle: 'italic', color: '#a8c8e0' }}>{children}</blockquote>
    ),
    [BLOCKS.UL_LIST]: (_: any, children: any) => (
      <ul style={{ paddingLeft: '1.5rem', color: '#91b8d4', marginBottom: '1.25rem' }}>{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_: any, children: any) => (
      <ol style={{ paddingLeft: '1.5rem', color: '#91b8d4', marginBottom: '1.25rem' }}>{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_: any, children: any) => (
      <li style={{ marginBottom: '.4rem', lineHeight: 1.7 }}>{children}</li>
    ),
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a href={node.data.uri} style={{ color: '#4ec9b0', textDecoration: 'underline' }} target="_blank" rel="noreferrer">{children}</a>
    ),
  },
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div style={{ background: '#05111f', minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 2rem' }}>

        <p style={{ fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '.15em', textTransform: 'uppercase', color: '#2c5470', marginBottom: '1rem' }}>
          {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 600,
          lineHeight: 1.2, marginBottom: '1.5rem',
          background: 'linear-gradient(90deg, #dceeff 0%, #7dd3fc 40%, #dceeff 80%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmerText 4s linear infinite',
        }}>
          {post.title}
        </h1>

        {post.description && (
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '16px', fontStyle: 'italic', color: '#a8c8e0', lineHeight: 1.7, marginBottom: '2.5rem', borderLeft: '2px solid #1e4d6b', paddingLeft: '1.25rem' }}>
            {post.description}
          </p>
        )}

        {post.coverImage && (
          <img src={post.coverImage} alt={post.title}
            style={{ width: '100%', borderRadius: '12px', marginBottom: '2.5rem', border: '0.5px solid #1a3a52', objectFit: 'cover', maxHeight: '340px' }} />
        )}

        <hr style={{ border: 'none', borderTop: '0.5px solid #0f2d44', marginBottom: '2.5rem' }} />

        <div>{post.body ? documentToReactComponents(post.body, renderOptions) : null}</div>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '0.5px solid #0f2d44' }}>
          <a href="/blog" style={{ fontFamily: 'DM Sans', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#4ec9b0', textDecoration: 'none' }}>
            ← Back to Journal
          </a>
        </div>
      </div>
      <style>{`@keyframes shimmerText{0%{background-position:0% center}100%{background-position:200% center}}`}</style>
    </div>
  )
}
