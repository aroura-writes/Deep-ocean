'use client'

import { useEffect, useRef } from 'react'

export default function ScrollReveal() {
  const init = useRef(false)

  useEffect(() => {
    if (init.current) return
    init.current = true

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target as HTMLElement

        if (el.classList.contains('reveal') || el.classList.contains('reveal-group')) {
          el.classList.add('visible')
        }
        if (el.id === 'factStrip') {
          el.querySelectorAll<HTMLElement>('.fact-row').forEach((r, i) => {
            setTimeout(() => r.classList.add('slide-in'), i * 140)
          })
        }
        if (el.id === 'depthBars') {
          setTimeout(() => {
            el.querySelectorAll<HTMLElement>('.depth-fill').forEach(f => f.classList.add('grow'))
          }, 150)
        }
        if (el.id === 'pullQuote') el.classList.add('visible')

        io.unobserve(el)
      })
    }, { threshold: 0.15 })

    document.querySelectorAll('.reveal, .reveal-group, #factStrip, #depthBars, #pullQuote')
      .forEach(el => io.observe(el))

    return () => io.disconnect()
  }, [])

  return null
}
