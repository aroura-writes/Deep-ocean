'use client'

import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  description?: string
  publishedAt: string
}

interface BlogPostListProps {
  posts: BlogPost[]
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <div className="reveal-group" style={{ display: 'grid', gap: '1rem' }}>
      {posts.map(post => (
        <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
          <div style={{
            background: '#071c2e',
            border: '0.5px solid #1a3a52',
            borderRadius: '14px',
            padding: '1.75rem',
            transition: 'border-color .3s, box-shadow .3s, transform .3s',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.borderColor = '#2a6a8a'
            el.style.boxShadow = '0 0 22px rgba(56,189,248,.1)'
            el.style.transform = 'translateY(-3px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.borderColor = '#1a3a52'
            el.style.boxShadow = ''
            el.style.transform = ''
          }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '.15em', textTransform: 'uppercase', color: '#2c5470', marginBottom: '.5rem' }}>
              {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 600, color: '#dceeff', marginBottom: '.5rem', lineHeight: 1.3 }}>
              {post.title}
            </h2>
            {post.description && (
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#7dacca', lineHeight: 1.7 }}>
                {post.description}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
