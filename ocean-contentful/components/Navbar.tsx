'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',        label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/blog',    label: 'Journal' },
  { href: '/about',   label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        background: scrolled ? 'rgba(3,13,26,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '0.5px solid #1a3a52' : '0.5px solid transparent',
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" fill="#2dd4bf" opacity="0.9" />
            <circle cx="12" cy="12" r="6" stroke="#2dd4bf" strokeWidth="0.5" opacity="0.4" />
            <circle cx="12" cy="12" r="9" stroke="#38bdf8" strokeWidth="0.5" opacity="0.2" />
            <circle cx="6"  cy="5"  r="1" fill="#c8dff0" opacity="0.6" />
            <circle cx="17" cy="4"  r="0.7" fill="#c8dff0" opacity="0.5" />
            <circle cx="20" cy="9"  r="0.8" fill="#c8dff0" opacity="0.4" />
          </svg>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '15px',
            color: '#dceeff',
            letterSpacing: '0.02em',
          }}>
            Deep Ocean
          </span>
        </div>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
           className="nav-desktop">
        {links.map(({ href, label }) => {
          const active = pathname === href
          return (
            <Link key={href} href={href} style={{
              textDecoration: 'none',
            }}>
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: active ? '#4ec9b0' : '#7baccc',
                transition: 'color 0.25s',
                borderBottom: active ? '1px solid #4ec9b0' : '1px solid transparent',
                paddingBottom: '2px',
                display: 'inline-block',
              }}
              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#c8dff0' }}
              onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#7baccc' }}
              >
                {label}
              </span>
            </Link>
          )
        })}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="nav-mobile"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#c8dff0', padding: '4px',
        }}
        aria-label="Toggle menu"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open
            ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>
            : <><line x1="3" y1="7"  x2="19" y2="7"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="17" x2="19" y2="17"/></>
          }
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0,
          background: 'rgba(3,13,26,0.96)',
          borderBottom: '0.5px solid #1a3a52',
          padding: '1.5rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              onClick={() => setOpen(false)}
              style={{
                textDecoration: 'none',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: pathname === href ? '#4ec9b0' : '#7baccc',
              }}>
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .nav-mobile { display: none; }
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
