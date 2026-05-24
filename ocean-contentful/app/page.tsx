import ScrollReveal from '@/components/ScrollReveal'

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <div className="ocean-page" style={{ background: '#05111f', overflowX: 'hidden' }}>

        {/* ── HERO ── */}
<div style={{ position: 'relative', height: '100vh', minHeight: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
  
  {/* 👇 NOTICE THE '>' AT THE END OF THIS LINE BELOW */}
  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 680 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="680" height="520" fill="#030d1a"/>
            {/* Stars */}
            {[
              [40,30,1,3.1,0],[120,18,.8,2.4,.6],[200,45,1.2,3.8,.2],[310,12,.7,2.9,1],
              [400,28,1,4.1,.4],[490,8,.9,2.7,.8],[560,35,1.1,3.4,.15],[630,20,.8,2.6,.9],
              [75,62,.7,3.6,.35],[155,80,1,2.3,1.2],[260,55,.8,3.9,.05],[370,72,1.2,2.8,.7],
              [450,50,.7,4.3,.55],[540,68,1,3.2,1.1],[620,58,.9,2.5,.3],[85,105,.8,3.7,.5],
              [195,95,1,2.6,.8],[320,88,.7,4,0.1],[430,100,.9,3.3,.65],[570,90,1.1,2.9,.4],
            ].map(([cx,cy,r,dur,del], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="#e8f4ff"
                style={{ animation: `twinkle ${dur}s ${del}s infinite ease-in-out` }}/>
            ))}
            {/* Moon */}
            <circle cx="570" cy="90" r="28" fill="#d6ecff" opacity=".85"
              style={{ animation: 'moonShimmer 4s ease-in-out infinite' }}/>
            <circle cx="580" cy="82" r="22" fill="#0a1f35" opacity=".4"/>
            {/* Ocean */}
            <path d="M0 300 Q170 282 340 300 Q510 318 680 300 L680 520 L0 520 Z" fill="#041323"/>
            <path d="M0 312 Q170 300 340 312 Q510 324 680 312" stroke="#0d3352" strokeWidth=".5" fill="none" opacity=".8"/>
            <path d="M0 318 Q85 308 170 318 Q255 328 340 318 Q425 308 510 318 Q595 328 680 318" stroke="#1d6fa8" strokeWidth="1" fill="none" opacity=".4"/>
            {/* Glow dots */}
            {[
              [90, 325, '#38bdf8', .2],
              [210, 335, '#2dd4bf', .9],
              [350, 322, '#38bdf8', .4],
              [460, 330, '#a78bfa', 1.3],
              [580, 326, '#2dd4bf', .6]
            ].map(([cx, cy, fill, del], i) => (
              <circle key={i} cx={cx} cy={cy} r="2.5" fill={fill as string}
                style={{ animation: `glowPulse 3s ${del as number}s ease-in-out infinite` }}/>
            ))}

            {/* Deep glow */}
            <ellipse cx="340" cy="420" rx="200" ry="90" fill="#0a3a5e" opacity=".3"/>
            {/* Jellyfish */}
            <g style={{ animation: 'jellyFloat 5s ease-in-out infinite' }}>
              <ellipse cx="180" cy="370" rx="20" ry="11" fill="#1a5a8a" opacity=".5"/>
              <path d="M167 381 Q165 402 163 412 M174 383 Q172 406 171 416 M180 383 Q180 408 180 420 M186 383 Q188 406 189 416 M193 381 Q195 402 197 412" stroke="#1e6c9c" strokeWidth=".8" fill="none" opacity=".4"/>
            </g>
            <g style={{ animation: 'jellyFloat 6.5s .8s ease-in-out infinite' }}>
              <ellipse cx="490" cy="400" rx="16" ry="9" fill="#1a4a7a" opacity=".5"/>
              <path d="M479 409 Q478 428 477 436 M484 410 Q483 431 483 439 M490 410 Q490 433 490 441 M496 410 Q497 431 497 439 M501 409 Q502 428 503 436" stroke="#1a5c8a" strokeWidth=".7" fill="none" opacity=".4"/>
            </g>
          </svg>

          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem' }}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '.25em',
              textTransform: 'uppercase', color: '#4ec9b0', marginBottom: '1.25rem',
              opacity: 0, animation: 'fadeUp .9s .3s cubic-bezier(.22,1,.36,1) forwards',
            }}>Deep Ocean &amp; Night Sky</p>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 600,
              color: '#e8f4ff', lineHeight: 1.2, marginBottom: '.75rem',
              opacity: 0, animation: 'fadeUp .9s .55s cubic-bezier(.22,1,.36,1) forwards',
            }}>
              Where stars fall<br />
              <em style={{ fontStyle: 'italic', color: '#7dd3fc' }}>into the sea</em>
            </h1>
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '16px', fontStyle: 'italic', color: '#7baccc',
              opacity: 0, animation: 'fadeUp .9s .8s cubic-bezier(.22,1,.36,1) forwards',
            }}>
              On bioluminescence, depth, and the living light below
            </p>
            <div style={{ marginTop: '2.5rem', opacity: 0, animation: 'fadeUp .9s 1.1s cubic-bezier(.22,1,.36,1) forwards' }}>
              <a href="/explore" style={{
                display: 'inline-block',
                fontFamily: 'DM Sans, sans-serif', fontSize: '11px',
                letterSpacing: '.2em', textTransform: 'uppercase',
                color: '#4ec9b0', textDecoration: 'none',
                border: '0.5px solid #4ec9b0', borderRadius: '4px',
                padding: '.6rem 1.5rem',
                transition: 'background .25s, color .25s',
              }}>
                Dive Deeper →
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
            opacity: 0, animation: 'fadeUp .9s 1.4s cubic-bezier(.22,1,.36,1) forwards',
          }}>
            <span style={{ fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#2c5470' }}>Scroll</span>
            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #2c5470, transparent)' }}/>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '5rem 2rem 4rem' }}>

          <div className="reveal" style={{ borderLeft: '2px solid #1e4d6b', paddingLeft: '1.5rem', marginBottom: '3.5rem' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', lineHeight: 1.85, color: '#a8c8e0', fontStyle: 'italic' }}>
              Look up on a clear night and you see a sky scattered with light. Look beneath the ocean's surface after dark, and you find something that mirrors it — not a reflection, but a living answer. The deep ocean glows from within.
            </p>
          </div>

          <div className="reveal">
            <p style={{ fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#4ec9b0', marginBottom: '.6rem' }}>The parallel worlds</p>
            <h2 className="shimmer-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 600, marginBottom: '1.1rem', lineHeight: 1.3 }}>A sky above, a sky below</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#91b8d4', marginBottom: '1.5rem' }}>The night sky and the deep ocean share the same quality of darkness broken by scattered points of light. But while starlight travels millions of kilometres to reach us, ocean light is made right here — produced by living organisms through <strong style={{ color: '#7dd3fc', fontWeight: 500 }}>bioluminescence</strong>.</p>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#91b8d4', marginBottom: '1.5rem' }}>Scientists estimate that more than 75% of deep-sea organisms are capable of producing their own light. In terms of sheer number of light-producing species, the ocean's depths rival the number of stars visible to the naked eye.</p>
          </div>

          <hr style={{ border: 'none', borderTop: '0.5px solid #0f2d44', margin: '2.5rem 0' }} />

          {/* Fact strip */}
          <div className="reveal" id="factStrip" style={{ background: '#071c2e', border: '0.5px solid #1a3a52', borderRadius: '12px', padding: '1.5rem 1.75rem', margin: '2.5rem 0' }}>
            <p style={{ fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#4ec9b0', marginBottom: '1rem' }}>Key facts</p>
            {[
              ['01', 'The reaction is nearly 100% energy-efficient — almost no heat is wasted. A light bulb loses 90% of its energy as heat.'],
              ['02', 'Most bioluminescent light is blue (440–480 nm) because red wavelengths are absorbed by water within a few metres.'],
              ['03', 'Below 200 metres, sunlight essentially disappears. Bioluminescence is the only light source in this zone.'],
            ].map(([num, text]) => (
              <div key={num} className="fact-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '.9rem', fontSize: '13px', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6, color: '#7dacca', transition: 'opacity .6s ease, transform .6s ease' }}>
                <span style={{ color: '#4ec9b0', fontWeight: 600, minWidth: '28px' }}>{num}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: '0.5px solid #0f2d44', margin: '2.5rem 0' }} />

          {/* Creature cards */}
          <div className="reveal">
            <p style={{ fontFamily: 'DM Sans', fontSize: '10px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#4ec9b0', marginBottom: '.6rem' }}>Living lanterns</p>
            <h2 className="shimmer-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 600, marginBottom: '1.1rem', lineHeight: 1.3 }}>Creatures of the glowing deep</h2>
          </div>

          <div className="reveal-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0 3rem' }}>
            {[
              { name: 'Anglerfish', color: '#38bdf8', desc: 'Uses a bioluminescent lure to attract prey in total darkness. Light produced by symbiotic bacteria inside the lure.' },
              { name: 'Dinoflagellates', color: '#2dd4bf', desc: 'Microscopic plankton behind the "blue wave" effect on coastlines. A wave\'s disturbance triggers their flash.' },
              { name: 'Firefly squid', color: '#a78bfa', desc: 'Thousands of photophores across its body produce a bright blue glow used for camouflage and communication.' },
              { name: 'Vampire squid', color: '#fbbf24', desc: 'Can flash every photophore simultaneously — a defensive dazzle display to confuse predators in the abyss.' },
            ].map(({ name, color, desc }) => (
              <div key={name} style={{
                background: '#071c2e', border: '0.5px solid #1a3a52', borderRadius: '12px',
                padding: '1.25rem 1rem', position: 'relative', overflow: 'hidden',
                transition: 'transform .35s cubic-bezier(.22,1,.36,1), border-color .35s, box-shadow .35s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-5px) scale(1.02)'
                el.style.borderColor = '#2a6a8a'
                el.style.boxShadow = `0 0 22px ${color}22`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = ''
                el.style.borderColor = '#1a3a52'
                el.style.boxShadow = ''
              }}>
                <span style={{
                  display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%',
                  background: color, boxShadow: `0 0 8px ${color}`,
                  animation: 'dotPulse 2.8s ease-in-out infinite', marginBottom: '.75rem',
                }}/>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: '#d0eaff', marginBottom: '.3rem' }}>{name}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#5d8faa', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Depth bars */}
          <div className="reveal" id="depthBars" style={{ margin: '2rem 0 3rem', fontFamily: 'DM Sans, sans-serif' }}>
            <p style={{ fontSize: '10px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#4ec9b0', marginBottom: '1rem' }}>Light by depth</p>
            {[
              ['0 – 200 m', '30%', '30%', '#1d6fa8'],
              ['200 – 1,000 m', '~60%', '60%', '#1a5a9a'],
              ['1,000 – 4,000 m', '~80%', '80%', '#1e4d88'],
              ['4,000 m+ (abyss)', '> 90%', '95%', '#2dd4bf'],
            ].map(([label, pct, w, bg]) => (
              <div key={label as string} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', color: '#5d8faa', minWidth: '120px', textAlign: 'right' }}>{label}</span>
                <div style={{ flex: 1, height: '6px', background: '#0c2236', borderRadius: '3px', overflow: 'hidden' }}>
                  <div className="depth-fill" style={{ height: '100%', borderRadius: '3px', width: 0, transition: 'width 1.2s cubic-bezier(.22,1,.36,1)', background: bg as string, ['--w' as string]: w }}/>
                </div>
                <span style={{ fontSize: '11px', color: '#7baccc', minWidth: '36px' }}>{pct}</span>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div id="pullQuote" style={{ padding: '2rem 0', textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Playfair Display', serif", fontSize: '20px', fontStyle: 'italic',
              color: '#dceeff', lineHeight: 1.6,
              opacity: 0, transform: 'scale(.97)',
              transition: 'opacity .9s ease, transform .9s ease',
            }}>
              "In the abyss, there is no sun.<br />And yet nothing there is truly dark."
            </p>
            <span style={{ display: 'block', marginTop: '.75rem', fontSize: '11px', letterSpacing: '.15em', textTransform: 'uppercase', color: '#4ec9b0', fontFamily: 'DM Sans' }}>
              — on the nature of the deep ocean
            </span>
          </div>

        </div>
      </div>

      <style>{`
        .fact-row { opacity: 0; transform: translateX(-14px); }
        .fact-row.slide-in { opacity: 1 !important; transform: translateX(0) !important; }
        .depth-fill.grow { width: var(--w) !important; }
        #pullQuote.visible p { opacity: 1 !important; transform: scale(1) !important; }
        @keyframes twinkle { 0%,100%{opacity:.7} 50%{opacity:.15} }
        @keyframes glowPulse { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
        @keyframes jellyFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes moonShimmer { 0%,100%{opacity:.85} 50%{opacity:.65} }
        @keyframes dotPulse { 0%,100%{box-shadow:0 0 4px currentColor} 50%{box-shadow:0 0 14px currentColor} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </>
  )
            }
