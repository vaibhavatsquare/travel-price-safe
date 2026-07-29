"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between py-3.5">
        <a href="/" className="flex items-center gap-2">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            TravelPrice<span className="text-primary">Safe</span>
          </span>
        </a>

        <button
          type="button"
          onClick={() => scrollTo("waitlist")}
          className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 sm:px-5"
        >
          Join Waitlist
        </button>
      </nav>
    </header>
  )
}
