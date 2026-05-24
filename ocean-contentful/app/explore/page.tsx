import ScrollReveal from '@/components/ScrollReveal'

const creatures = [
  { name: 'Anglerfish', depth: '200–2,000 m', glow: '#38bdf8', fact: 'Lures prey with a bacteria-filled bioluminescent organ called an esca, dangling above its jaws like a fishing rod.' },
  { name: 'Dinoflagellates', depth: '0–200 m', glow: '#2dd4bf', fact: 'Single-celled plankton that flash blue when disturbed by waves or boats — they create entire bioluminescent coastlines.' },
  { name: 'Firefly Squid', depth: '0–400 m', glow: '#a78bfa', fact: 'Each squid has 4,000+ tiny photophores. They gather in vast spawning swarms that turn Toyama Bay, Japan, deep blue every spring.' },
  { name: 'Vampire Squid', depth: '600–900 m', glow: '#f472b6', fact: 'Not actually a squid — it occupies its own order, Vampyromorphida. It releases bioluminescent clouds as decoys when threatened.' },
  { name: 'Comb Jellies', depth: '0–1,000 m', glow: '#fbbf24', fact: 'Their cilia scatter light into rainbow bands. When threatened, many species produce blue-green bioluminescent pulses.' },
  { name: 'Flashlight Fish', depth: '40–400 m', glow: '#4ade80', fact: 'Carries pouches of glowing bacteria beneath its eyes and can "blink" them by rotating the pouch inward.' },
]

export default function ExplorePage() {
  return (
    <>
      <ScrollReveal />
      <div style={{ background: '#05111f', minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 2rem' }}>

          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#4ec9b0', marginBottom: '.6rem' }}>Field guide</p>
            <h1 className="shimmer-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,5vw,42px)', fontWeight: 600, lineHeight: 1.2, marginBottom: '1rem' }}>
              Explore the living lights
            </h1>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#91b8d4' }}>
              A curated field guide to the ocean's most remarkable bioluminescent organisms — from the sunlit surface to the crushing darkness of the abyss.
            </p>
          </div>

          <div className="reveal-group" style={{ display: 'grid', gap: '1rem' }}>
            {creatures.map(({ name, depth, glow, fact }) => (
              <div key={name} style={{
                background: '#071c2e', border: '0.5px solid #1a3a52', borderRadius: '14px',
                padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr auto',
                gap: '1rem', alignItems: 'start',
                transition: 'border-color .3s, box-shadow .3s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#2a6a8a'
                el.style.boxShadow = `0 0 24px ${glow}18`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#1a3a52'
                el.style.boxShadow = ''
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '.5rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: glow, boxShadow: `0 0 8px ${glow}`, display: 'inline-block', animation: 'dotPulse 2.8s ease-in-out infinite' }}/>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', fontWeight: 600, color: '#dceeff' }}>{name}</span>
                  </div>
                  <p style={{ fontFamily: 'DM Sans', fontSize: '13px', lineHeight: 1.7, color: '#7dacca' }}>{fact}</p>
                </div>
                <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: '#2c5470', letterSpacing: '.05em', whiteSpace: 'nowrap', marginTop: '4px' }}>{depth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes dotPulse { 0%,100%{box-shadow:0 0 4px currentColor} 50%{box-shadow:0 0 14px currentColor} }
      `}</style>
    </>
  )
}
