import ScrollReveal from '@/components/ScrollReveal'

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <div style={{ background: '#05111f', minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 2rem' }}>

          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#4ec9b0', marginBottom: '.6rem' }}>The project</p>
            <h1 className="shimmer-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,5vw,42px)', fontWeight: 600, lineHeight: 1.2, marginBottom: '1rem' }}>
              About this site
            </h1>
          </div>

          <div className="reveal" style={{ borderLeft: '2px solid #1e4d6b', paddingLeft: '1.5rem', marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', lineHeight: 1.85, color: '#a8c8e0', fontStyle: 'italic' }}>
              Ocean & Night Sky is a digital editorial space exploring the science and wonder of deep-sea bioluminescence — where biology meets astronomy, and the living world produces its own starlight.
            </p>
          </div>

          <div className="reveal">
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#91b8d4', marginBottom: '1.5rem' }}>
              We explore the ocean not just as a scientific subject but as a mirror of the night sky above — two vast, dark spaces each filled with their own species of light.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#91b8d4', marginBottom: '1.5rem' }}>
              Content is published via <strong style={{ color: '#7dd3fc', fontWeight: 500 }}>Outstatic CMS</strong>, a Git-based headless CMS that stores posts directly in the GitHub repository — no external database required.
            </p>
          </div>

          <hr style={{ border: 'none', borderTop: '0.5px solid #0f2d44', margin: '2.5rem 0' }} />

          <div className="reveal">
            <p style={{ fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#4ec9b0', marginBottom: '1rem' }}>Built with</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem' }}>
              {[
                ['Next.js 14', 'React framework with App Router'],
                ['Outstatic', 'Git-based headless CMS'],
                ['Tailwind CSS', 'Utility-first styling'],
                ['Vercel', 'Deployment & edge hosting'],
              ].map(([name, desc]) => (
                <div key={name} style={{ background: '#071c2e', border: '0.5px solid #1a3a52', borderRadius: '10px', padding: '1rem' }}>
                  <div style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 600, color: '#4ec9b0', marginBottom: '.25rem' }}>{name}</div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: '12px', color: '#5d8faa' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
