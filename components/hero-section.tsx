export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* ── Inline Navbar ── */}
      <div className="relative z-10 flex items-center justify-between px-8 py-4">
        <a href="/">
          <img
            src="/logo.svg"
            alt="TravelPriceSafe"
            style={{ height: "clamp(48px, 5vw, 72px)", width: "auto" }}
          />
        </a>
        
          <a href="/#contact"
          className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
        >
          Contact Us
        </a>
      </div>

      {/* ── 4 peach arcs – positioned upper-right ── */}
      {/* Arc 1 – outermost, very faint */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fef6f3]"
        style={{ width: "105vw", height: "105vw", top: "-1vh", right: "-13.5vw", zIndex: 0 }} />
      {/* Arc 2 – faint */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fdeee7]"
        style={{ width: "84vw", height: "84vw", top: "18vh", right: "-3vw", zIndex: 0 }} />
      {/* Arc 3 – medium */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fce3d8]"
        style={{ width: "63vw", height: "63vw", top: "36vh", right: "7.5vw", zIndex: 0 }} />
      {/* Arc 4 – innermost, darkest */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fad4c0]"
        style={{ width: "42vw", height: "42vw", top: "55vh", right: "18vw", zIndex: 0 }} />

      <div
        className="container-wide relative grid min-h-[90vh] items-center gap-10 pb-16 pt-6"
        style={{ gridTemplateColumns: "1fr 1.1fr", zIndex: 1 }}
      >

        {/* ─── Left: Text ─── */}
        <div className="max-w-[520px]">

          {/* Explore badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-primary" style={{ boxShadow: "0px 4px 10px 0px rgba(140,140,140,0.1), 0px 18px 18px 0px rgba(140,140,140,0.09), 0px 40px 24px 0px rgba(140,140,140,0.05), 0px 71px 29px 0px rgba(140,140,140,0.01), 0px 111px 31px 0px rgba(140,140,140,0)" }}>
            Explore the world!
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-sm">
              <svg viewBox="0 0 8 8" className="h-3 w-3 fill-current" aria-hidden="true">
                <path d="M2 1l4 3-4 3V1z" />
              </svg>
            </span>
          </span>

          {/* Headline */}
          <h1
            className="mt-6 font-bold leading-[1.1] tracking-wide text-[#0a1628]"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
          >
            Travel Smarter.<br />
            Discover Better.<br />
            <span className="text-primary">Pay fair.</span>
          </h1>

          {/* Sub-copy */}
          <p className="mt-5 max-w-[420px] text-base leading-relaxed text-gray-500">
            Find trusted restaurants, Cafes, bars and local experiences
            with verified prices, exclusive deals, real traveller reviews
            and a unique CRV Score.
          </p>

          {/* App store buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              aria-label="Download on Google Play"
              className="flex items-center gap-3 rounded-2xl bg-[#0a1628] px-5 py-3.5 text-white shadow-md transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.22.98.15l12.85-7.42-2.76-2.76-11.07 10.03z" fill="#EA4335"/>
                <path d="M.44 2.08C.17 2.4 0 2.88 0 3.5v17c0 .62.17 1.1.44 1.42l.08.07 9.52-9.52v-.22L.52 2.01l-.08.07z" fill="#4285F4"/>
                <path d="M20.13 10.26l-2.61-1.51-3.08 3.08 3.08 3.08 2.63-1.52c.75-.43.75-1.13 0-1.56l-.02-.07z" fill="#FBBC05"/>
                <path d="M3.18.24L16.03 7.66l-2.76 2.76L2.2.39C2.5.2 2.9.17 3.18.24z" fill="#34A853"/>
              </svg>
              <div className="text-left">
                <div className="text-[11px] leading-none text-white/70">Download on the</div>
                <div className="text-sm font-bold leading-tight">Google Play</div>
              </div>
            </a>

            <a
              href="#"
              aria-label="Download on the App Store"
              className="flex items-center gap-3 rounded-2xl bg-[#0a1628] px-5 py-3.5 text-white shadow-md transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 fill-current" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[11px] leading-none text-white/70">Download on the</div>
                <div className="text-sm font-bold leading-tight">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* ─── Right: Photo collage ─── */}
        <div className="relative hidden lg:flex items-center justify-center">
          <img
            src="/hero-right.svg"
            alt="Travel collage"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}