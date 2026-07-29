"use client"

import { Rocket, ArrowRight } from "lucide-react"
import { MarqueeTags } from "@/components/marquee-tags"

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-10 sm:pt-44 sm:pb-14">
      <div className="container-wide text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-semibold text-muted-foreground">
          <Rocket className="h-4 w-4 text-primary" aria-hidden="true" />
          Coming Soon
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Discover Venues.<br />
          Compare Prices.{" "}
          <span className="text-primary">Travel Confidently.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          TravelPriceSafe helps you find nearby restaurants, bars, cafés &amp; entertainment
          spots — with color-coded composite scores, real prices in your currency, translated
          reviews, and exclusive deals all in one app.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollTo("waitlist")}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground transition-transform hover:scale-105 sm:w-auto"
          >
            Join the Waitlist
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo("how-it-works")}
            className="w-full rounded-xl border border-border px-8 py-3.5 text-base font-bold text-foreground transition-colors hover:bg-secondary sm:w-auto"
          >
            See How It Works
          </button>
        </div>

        {/* Marquee tags */}
        <div className="mt-14">
          <MarqueeTags />
        </div>
      </div>
    </section>
  )
}
