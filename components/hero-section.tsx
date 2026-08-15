export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* ── Inline Navbar ── */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-4">
        <a href="/">
          <img
            src="/logo.svg"
            alt="TravelPriceSafe"
            fetchPriority="high"
            decoding="sync"
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
      {/* Mobile circles – visible only on mobile, centered */}
      {/* Extra large outer rings to cover full section */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fef9f7] sm:hidden"
        style={{ width: "160vw", height: "160vw", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0 }} />
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fef6f3] sm:hidden"
        style={{ width: "130vw", height: "130vw", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0 }} />
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fdeee7] sm:hidden"
        style={{ width: "100vw", height: "100vw", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0 }} />
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fce3d8] sm:hidden"
        style={{ width: "75vw", height: "75vw", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0 }} />
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fad4c0] sm:hidden"
        style={{ width: "52vw", height: "52vw", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0 }} />
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#f9c8b0] sm:hidden"
        style={{ width: "32vw", height: "32vw", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0 }} />

      {/* Arc 1 – outermost, very faint */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fef6f3] hidden sm:block"
        style={{ width: "105vw", height: "105vw", top: "-1vh", right: "-13.5vw", zIndex: 0 }} />
      {/* Arc 2 – faint */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fdeee7] hidden sm:block"
        style={{ width: "84vw", height: "84vw", top: "18vh", right: "-3vw", zIndex: 0 }} />
      {/* Arc 3 – medium */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fce3d8] hidden sm:block"
        style={{ width: "63vw", height: "63vw", top: "36vh", right: "7.5vw", zIndex: 0 }} />
      {/* Arc 4 – innermost, darkest */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full bg-[#fad4c0] hidden sm:block"
        style={{ width: "42vw", height: "42vw", top: "55vh", right: "18vw", zIndex: 0 }} />

      <div
        className="container-wide relative grid min-h-[90vh] items-center gap-10 pb-16 pt-6 grid-cols-1 lg:grid-cols-[1fr_1.1fr]"
        style={{ zIndex: 1 }}
      >

        {/* ─── Left: Text ─── */}
        <div className="max-w-[520px] mx-auto text-center lg:mx-0 lg:text-left">

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
            className="mt-6 font-bold leading-[1.1] tracking-wide"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)", color: "rgba(21, 34, 63, 1)" }}
          >
            Travel Smarter.<br />
            Discover Better.<br />
            <span className="text-primary">Pay fair.</span>
          </h1>

          {/* Sub-copy */}
          <p className="mt-5 max-w-full lg:max-w-[420px] text-base leading-relaxed" style={{ color: "var(--Primary, rgba(21, 34, 63, 1))", fontWeight: 400 }}>
            Find trusted restaurants, Cafes, bars and local experiences
            with verified prices, exclusive deals, real traveller reviews
            and a unique CRV Score.
          </p>

          {/* App store buttons */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#"
              aria-label="Download on Google Play"
              className="flex items-center gap-3 rounded-2xl bg-[#0a1628] px-5 py-3.5 text-white shadow-md transition-transform hover:scale-105"
              style={{ minWidth: "180px" }}
            >
              <svg viewBox="0 0 24 24" className="shrink-0" style={{ width: "clamp(22px, 2vw, 32px)", height: "clamp(22px, 2vw, 32px)" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.22 0c-.539.26-.92.77-.92 1.434v21.132c0 .664.381 1.174.92 1.434l.054.041L13.35 12.12v-.241L1.274-.041z" fill="#00C4FF"/>
                <path d="M17.435 16.268l-4.086-4.148v-.241l4.087-4.148.093.054 4.843 2.75c1.383.786 1.383 2.073 0 2.86l-4.843 2.75z" fill="#FFBA00"/>
                <path d="M17.527 16.214L13.35 12 1.22 24.13c.457.482 1.211.541 2.062.061z" fill="#FF3A44"/>
                <path d="M17.527 7.786L3.282-.169C2.43-.65 1.677-.59 1.22-.108L13.35 12z" fill="#00F076"/>
              </svg>
              <div className="text-left">
                <div className="text-[11px] leading-none text-white/70">Download on the</div>
                <div style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 400, fontSize: "108%", lineHeight: "140%", letterSpacing: "0%" }}>Google Play</div>
              </div>
            </a>

            <a
              href="#"
              aria-label="Download on the App Store"
              className="flex items-center gap-3 rounded-2xl bg-[#0a1628] px-5 py-3.5 text-white shadow-md transition-transform hover:scale-105"
              style={{ minWidth: "180px" }}
            >
              <svg viewBox="0 0 24 24" className="shrink-0 fill-current" style={{ width: "clamp(26px, 2.4vw, 36px)", height: "clamp(26px, 2.4vw, 36px)" }} aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[11px] leading-none text-white/70">Download on the</div>
                <div style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 400, fontSize: "108%", lineHeight: "140%", letterSpacing: "0%" }}>App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* ─── Right: Photo collage ─── */}
        <div className="relative flex items-center justify-center mt-6 ml-6 lg:mt-0">
          <img
            src="/hero-right.svg"
            alt="Travel collage"
            fetchPriority="high"
            decoding="async"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}