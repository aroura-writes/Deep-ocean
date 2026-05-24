import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#030d1a',
      borderTop: '0.5px solid #0f2d44',
      padding: '3rem 2rem',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
        maxWidth: '640px', margin: '0 auto',
      }}>
        {/* Glow dot */}
        <div style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: '#2dd4bf', boxShadow: '0 0 10px #2dd4bf',
        }} />

        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '15px', fontStyle: 'italic', color: '#5d8faa',
        }}>
          "In the abyss, there is no sun. And yet nothing there is truly dark."
        </p>

        <nav style={{ display: 'flex', gap: '2rem' }}>
          {['/', '/explore', '/blog', '/about'].map((href, i) => (
            <Link key={href} href={href} style={{
              textDecoration: 'none',
            }}>
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: '#2c5470',
                transition: 'color 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#4ec9b0'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#2c5470'}
              >
                {['Home', 'Explore', 'Journal', 'About'][i]}
              </span>
            </Link>
          ))}
        </nav>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px', letterSpacing: '0.12em',
          textTransform: 'uppercase', color: '#1a3a52',
        }}>
          Ocean & Night Sky · Deep Biology Series
        </p>
      </div>
    </footer>
  )
}
