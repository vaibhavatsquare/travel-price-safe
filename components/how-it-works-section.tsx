export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">

      {/* ── 01 Map & Discovery ── */}
      <div className="container-wide mb-24 grid items-center gap-16 lg:grid-cols-2">
        {/* Text */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            01 — Search &amp; Discovery
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Find the right venue,<br />exactly where you are.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Open the map and instantly see color-coded venue pins around you. Each pin
            shows a composite score so you know quality before you even tap.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {[
              "Color-coded pins — red, amber, green, grey by score",
              "Filter by distance, price, rating and active deals",
              "Toggle between map view and venue list",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Phone — Map Screen */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[260px]">
            <div className="overflow-hidden rounded-[40px] border border-border bg-[#0a1628] shadow-2xl shadow-black/15">
              {/* Notch */}
              <div className="relative flex justify-center bg-[#0a1628] pt-2 pb-1">
                <div className="h-5 w-20 rounded-full bg-black" />
              </div>
              {/* Screen */}
              <div className="bg-[#0d1b2a]">
                {/* Search bar */}
                <div className="px-4 pt-3 pb-2">
                  <div className="flex items-center gap-2 rounded-xl bg-white/8 px-3 py-2">
                    <svg className="h-3.5 w-3.5 shrink-0 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    <span className="text-[11px] text-white/30">Search venues nearby...</span>
                  </div>
                  <div className="mt-2 flex gap-1.5">
                    <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-white">All</span>
                    <span className="rounded-full bg-white/8 px-2.5 py-1 text-[10px] text-white/40">Deals 🔥</span>
                    <span className="rounded-full bg-white/8 px-2.5 py-1 text-[10px] text-white/40">Open now</span>
                  </div>
                </div>
                {/* Map */}
                <div className="relative mx-4 mb-3 overflow-hidden rounded-2xl" style={{ height: 260 }}>
                  <div className="absolute inset-0 bg-[#1a2744]" />
                  {/* Roads */}
                  <div className="absolute left-0 right-0 top-[40%] h-[2px] bg-white/5" />
                  <div className="absolute left-0 right-0 top-[68%] h-[2px] bg-white/4" />
                  <div className="absolute bottom-0 left-[32%] top-0 w-[2px] bg-white/5" />
                  <div className="absolute bottom-0 left-[66%] top-0 w-[2px] bg-white/4" />
                  {/* Red pin */}
                  <div className="absolute" style={{ top: "14%", left: "18%" }}>
                    <div className="relative flex h-8 w-8 items-center justify-center">
                      <div className="absolute inset-0 rounded-full rounded-bl-none shadow-lg" style={{ background: "#FF4444", transform: "rotate(-45deg)" }} />
                      <span className="relative z-10 font-mono text-[9px] font-bold text-white">91</span>
                    </div>
                  </div>
                  {/* Amber pin */}
                  <div className="absolute" style={{ top: "20%", left: "60%" }}>
                    <div className="relative flex h-8 w-8 items-center justify-center">
                      <div className="absolute inset-0 rounded-full rounded-bl-none shadow-lg" style={{ background: "#FFAA00", transform: "rotate(-45deg)" }} />
                      <span className="relative z-10 font-mono text-[9px] font-bold text-white">76</span>
                    </div>
                  </div>
                  {/* Green pin */}
                  <div className="absolute" style={{ top: "50%", left: "52%" }}>
                    <div className="relative flex h-8 w-8 items-center justify-center">
                      <div className="absolute inset-0 rounded-full rounded-bl-none shadow-lg" style={{ background: "#44CC44", transform: "rotate(-45deg)" }} />
                      <span className="relative z-10 font-mono text-[9px] font-bold text-white">63</span>
                    </div>
                  </div>
                  {/* Grey pin */}
                  <div className="absolute" style={{ top: "62%", left: "16%" }}>
                    <div className="relative flex h-7 w-7 items-center justify-center">
                      <div className="absolute inset-0 rounded-full rounded-bl-none shadow-md" style={{ background: "#888888", transform: "rotate(-45deg)" }} />
                      <span className="relative z-10 font-mono text-[8px] font-bold text-white">42</span>
                    </div>
                  </div>
                  {/* Blue user dot */}
                  <div className="absolute" style={{ top: "43%", left: "40%" }}>
                    <div className="h-4 w-4 rounded-full border-2 border-white bg-blue-500 shadow-lg shadow-blue-500/40" />
                  </div>
                  {/* Pin legend */}
                  <div className="absolute right-2 top-2 flex flex-col gap-1 rounded-xl bg-black/50 px-2 py-1.5 backdrop-blur-sm">
                    {[["#FF4444","85+"],["#FFAA00","70+"],["#44CC44","50+"],["#888888","<50"]].map(([c, l]) => (
                      <div key={l} className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full" style={{ background: c }} />
                        <span className="text-[8px] text-white/60">{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottom venue card */}
                <div className="mx-4 mb-4 rounded-2xl bg-white p-3 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[12px] font-bold text-[#0a1628]">Tanong Seafood</p>
                      <p className="text-[10px] text-gray-400">🍜 Thai · 0.3 km · Open now</p>
                    </div>
                    <span className="rounded-full px-2 py-0.5 font-mono text-[10px] font-bold text-white" style={{ background: "#FF4444" }}>91</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400">Avg price</span>
                    <span className="font-mono text-[11px] font-bold text-primary">฿890 → $24.80</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 02 Currency Conversion ── */}
      <div className="container-wide mb-24 grid items-center gap-16 lg:grid-cols-2">
        {/* Phone — Currency Screen */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-[260px]">
            <div className="overflow-hidden rounded-[40px] border border-border bg-[#0a1628] shadow-2xl shadow-black/15">
              <div className="relative flex justify-center bg-[#0a1628] pt-2 pb-1">
                <div className="h-5 w-20 rounded-full bg-black" />
              </div>
              <div className="bg-[#0b1221] px-5 pt-4 pb-6">
                <p className="mb-1 text-[11px] font-bold text-white/40 uppercase tracking-widest">Price Converter</p>
                <p className="mb-5 text-[13px] font-semibold text-white">Tanong Seafood Restaurant</p>
                {/* From */}
                <div className="rounded-2xl bg-white/6 p-4">
                  <p className="mb-1.5 text-[9px] uppercase tracking-widest text-white/30">Menu price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl">🇹🇭</span>
                    <span className="font-mono text-3xl font-bold text-white">฿ 890</span>
                  </div>
                  <p className="mt-1 text-[10px] text-white/25">Thai Baht · Per person</p>
                </div>
                {/* Arrow */}
                <div className="my-3 flex items-center gap-2 px-1">
                  <div className="h-px flex-1 bg-white/8" />
                  <span className="text-base font-bold text-primary">↕</span>
                  <div className="h-px flex-1 bg-white/8" />
                </div>
                {/* To */}
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                  <p className="mb-1.5 text-[9px] uppercase tracking-widest text-primary/60">That&apos;s about</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-mono text-3xl font-bold text-primary">$ 24.80</span>
                  </div>
                  <p className="mt-1 text-[10px] text-primary/40">1 THB = 0.0279 USD · Live rate</p>
                </div>
                {/* Currency chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[["USD 🇺🇸", true],["EUR 🇪🇺", false],["GBP 🇬🇧", false],["AUD 🇦🇺", false],["JPY 🇯🇵", false]].map(([label, active]) => (
                    <span key={String(label)} className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${active ? "bg-primary text-white" : "bg-white/6 text-white/40"}`}>
                      {String(label)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            02 — Currency Intelligence
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Every price in<br />your currency. Always.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            No more mental maths or nasty surprises. Every venue price is converted
            to your home currency using live exchange rates — before you sit down.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {[
              "Live rates across 135+ currencies",
              "Switch your currency anytime in settings",
              "Converted price shown on every venue card and deal",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── 03 Composite Score ── */}
      <div className="container-wide grid items-center gap-16 lg:grid-cols-2">
        {/* Text */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            03 — Trust &amp; Transparency
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Reviews you can<br />actually trust.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The Composite Score (0–100) combines Value, Safety, Vibe and Distance
            from real traveler data — not paid placements or inflated star ratings.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {[
              "Personalise score weights — prioritise Safety or Value",
              "Auto-translated reviews from every language",
              "Community photos, tips and price submissions",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Phone — CRV/Score Screen */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[260px]">
            <div className="overflow-hidden rounded-[40px] border border-border bg-[#0a1628] shadow-2xl shadow-black/15">
              <div className="relative flex justify-center bg-[#0a1628] pt-2 pb-1">
                <div className="h-5 w-20 rounded-full bg-black" />
              </div>
              <div className="bg-[#0d1b2a] px-5 pt-4 pb-6">
                <p className="mb-0.5 text-[13px] font-bold text-white">Tanong Seafood</p>
                <p className="mb-5 text-[10px] text-white/30">Composite Score · 284 reports</p>
                {/* Big score */}
                <div className="mb-5 flex items-center gap-4 rounded-2xl bg-white/5 p-4">
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
                    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
                      <circle cx="40" cy="40" r="34" fill="none" stroke="#FF4444" strokeWidth="7" strokeDasharray="213.6" strokeDashoffset="47" strokeLinecap="round" />
                    </svg>
                    <div className="text-center">
                      <p className="font-mono text-2xl font-bold text-white leading-none">87</p>
                      <p className="text-[8px] text-white/30">/100</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold" style={{ color: "#FF4444" }}>Excellent</p>
                    <p className="mt-0.5 text-[10px] leading-relaxed text-white/30">Top 10% of venues<br />in this area</p>
                  </div>
                </div>
                {/* Sub scores */}
                <div className="flex flex-col gap-3">
                  {[["Value", 92, "#FF4444"],["Safety", 88, "#FFAA00"],["Vibe", 84, "#44CC44"],["Distance", 76, "#44CC44"]].map(([label, val, color]) => (
                    <div key={String(label)} className="flex items-center gap-3">
                      <span className="w-14 text-[10px] text-white/40">{String(label)}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                        <div className="h-full rounded-full" style={{ width: `${val}%`, background: color }} />
                      </div>
                      <span className="w-6 text-right font-mono text-[10px] font-semibold text-white/50">{val}</span>
                    </div>
                  ))}
                </div>
                {/* Review preview */}
                <div className="mt-4 rounded-2xl bg-white/5 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-[9px] font-bold text-primary">JM</div>
                    <span className="text-[10px] font-semibold text-white/60">James M. 🇬🇧</span>
                    <span className="ml-auto text-[10px] text-amber-400">★ 4.8</span>
                  </div>
                  <p className="text-[10px] leading-relaxed text-white/35">"Prices matched exactly what we paid. Great fresh seafood!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
