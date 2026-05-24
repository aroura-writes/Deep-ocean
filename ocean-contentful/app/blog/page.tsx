import { getAllPosts } from '@/lib/contentful'
import ScrollReveal from '@/components/ScrollReveal'
import BlogPostList from '@/components/BlogPostList'

export const revalidate = 60 // ISR: revalidate every 60 seconds

export default async function BlogPage() {
  let posts: any[] = []
  try {
    posts = await getAllPosts()
  } catch {
    // Contentful not configured yet
  }

  return (
    <>
      <ScrollReveal />
      <div style={{ background: '#05111f', minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 2rem' }}>

          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#4ec9b0', marginBottom: '.6rem' }}>Deep dispatches</p>
            <h1 className="shimmer-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,5vw,42px)', fontWeight: 600, lineHeight: 1.2, marginBottom: '1rem' }}>
              The Journal
            </h1>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#91b8d4' }}>
              Essays, observations, and field notes from the luminous depths.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="reveal" style={{ background: '#071c2e', border: '0.5px solid #1a3a52', borderRadius: '14px', padding: '3rem', textAlign: 'center' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2dd4bf', boxShadow: '0 0 10px #2dd4bf', margin: '0 auto 1.5rem', animation: 'dotPulse 2.5s ease-in-out infinite' }}/>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '16px', fontStyle: 'italic', color: '#5d8faa' }}>
                No posts yet. Add your first entry in{' '}
                <a href="https://app.contentful.com" target="_blank" rel="noreferrer" style={{ color: '#4ec9b0' }}>Contentful</a>.
              </p>
            </div>
          ) : (
            <BlogPostList posts={posts} />
          )}
        </div>
      </div>
      <style>{`@keyframes dotPulse{0%,100%{box-shadow:0 0 4px currentColor}50%{box-shadow:0 0 14px currentColor}}`}</style>
    </>
  )
}
