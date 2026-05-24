"use client";
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ocean & Night Sky — Bioluminescence',
  description: 'Where stars fall into the sea. Exploring bioluminescence, deep-sea life, and the living light of the ocean.',
  openGraph: {
    title: 'Ocean & Night Sky',
    description: 'Where stars fall into the sea.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
