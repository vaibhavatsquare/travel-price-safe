const steps = [
  {
    number: 1,
    label: " Search",
    desc: "Find the best places around you.",
    color: "bg-white border-gray-200",
    icon: (
      <svg width="48" height="48" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.5 63C50.2401 63 63 50.2401 63 34.5C63 18.7599 50.2401 6 34.5 6C18.7599 6 6 18.7599 6 34.5C6 50.2401 18.7599 63 34.5 63Z" stroke="#497EF5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M66 66L60 60" stroke="#497EF5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: 2,
    label: "Compare",
    desc: "Check prices,\nreviews, deals & CRV\nScore.",
    color: "bg-white border-gray-200",
    noWrap: true,
    icon: (
      <svg width="48" height="48" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58.5 37.5C58.5 33.36 61.86 30 66 30V27C66 15 63 12 51 12H21C9 12 6 15 6 27V28.5C10.14 28.5 13.5 31.86 13.5 36C13.5 40.14 10.14 43.5 6 43.5V45C6 57 9 60 21 60H51C63 60 66 57 66 45C61.86 45 58.5 41.64 58.5 37.5Z" stroke="#FD6D2A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 12L30 60" stroke="#FD6D2A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/>
      </svg>
    ),
  },
  {
    number: 3,
    label: " Save & Go",
    desc: "Save your favourites and get directions.",
    color: "bg-white border-gray-200",
    icon: (
      <svg width="48" height="48" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.5 31.9502H28.5" stroke="#66C736" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50.4609 6H21.5409C15.1509 6 9.96094 11.22 9.96094 17.58V59.85C9.96094 65.25 13.8309 67.53 18.5709 64.92L33.2109 56.79C34.7709 55.92 37.2909 55.92 38.8209 56.79L53.4609 64.92C58.2009 67.56 62.0709 65.28 62.0709 59.85V17.58C62.0409 11.22 56.8509 6 50.4609 6Z" stroke="#66C736" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: 4,
    label: " Share",
    desc: "Share your experience and help travellers.",
    color: "bg-white border-gray-200",
    icon: (
      <svg width="48" height="48" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.1991 18.96L47.6691 10.47C59.0991 6.65997 65.3091 12.9 61.5291 24.33L53.0391 49.8C47.3391 66.93 37.9791 66.93 32.2791 49.8L29.7591 42.24L22.1991 39.72C5.06906 34.02 5.06906 24.69 22.1991 18.96Z" stroke="#9E72EA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30.3281 40.9502L41.0681 30.1802" stroke="#9E72EA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 mt-10">
      <div className="container-wide">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-primary" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 600, fontSize: "135%", lineHeight: "45px", letterSpacing: "0%" }}>
            HOW IT WORKS
          </span>
          <h2 className="mt-10 mb-20 font-bold leading-tight tracking-tight text-[#0a1628]" style={{ fontSize: "clamp(22px, 3vw, 48px)",fontWeight: 700, }}>
            Simple Steps for Smarter Travel
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-2 gap-y-12 sm:grid-cols-4">

          {/* Dashed connector lines (desktop) */}
          <div className="pointer-events-none absolute inset-x-0 top-[2.4rem] hidden items-center sm:flex" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex-1 border-t-2 border-dashed border-gray-200"
                style={{ marginLeft: i === 0 ? "calc(12.5% + 1.5rem)" : 0, marginRight: i === 2 ? "calc(12.5% + 1.5rem)" : 0 }}
              />
            ))}
          </div>

          {steps.map(({ number, label, desc, color, icon, noWrap }) => (
            <div key={number} className="relative flex flex-col items-center gap-4 text-center">
              {/* Icon circle */}
              <div
                className={`relative z-10 flex items-center justify-center rounded-full border-2 ${color}`}
                style={{ width: "clamp(80px, 7vw, 112px)", height: "clamp(80px, 7vw, 112px)" }}
              >
                {icon}
              </div>
              {/* Number + label */}
              <div>
                <p className="text-[#0a1628] text-center pb-3" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "100%", letterSpacing: "0%" }}>
                  {number}. {label}
                </p>
                <p className="mt-1 text-center" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 500, fontSize: "92%", lineHeight: "25px", letterSpacing: "0%", maxWidth: noWrap ? "none" : "clamp(120px, 10vw, 160px)", whiteSpace: noWrap ? "pre-line" : "normal", color: "var(--Primary, rgba(21, 34, 63, 1))" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}