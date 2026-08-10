"use client"

import { useState, useEffect } from "react"

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="bg-white"
    >
      <nav className="container-wide flex items-center justify-between py-4">

        {/* ── Logo ── */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="TravelPriceSafe"
            style={{ height: "clamp(48px, 5vw, 72px)", width: "auto" }}
          />
        </a>

        {/* ── Contact Us CTA ── */}
        <a
          href="/#contact"
          className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
        >
          Contact Us
        </a>
      </nav>
    </header>
  )
}