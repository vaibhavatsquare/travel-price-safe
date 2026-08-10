export function AppDownloadSection() {
  return (
    <section
  className="relative bg-[#fff0e8]"
  style={{
    height: "clamp(280px, 33vw, 430px)",
    marginTop: "clamp(60px, 8vw, 140px)",
    marginBottom: "clamp(20px, 5vw, 60px)",
    overflow: "visible",
  }}
>
      <div
        className="container-wide grid items-center h-full lg:grid-cols-2"
        style={{ gap: "clamp(16px, 3vw, 48px)" }}
      >

        {/* Left – Phone mockups image — top overflows, bottom stays inside */}
        <div className="relative flex items-end justify-start h-full">
          <img
            src="/phones-mockup.svg"
            alt="TravelPriceSafe App"
            style={{
              width: "clamp(240px, 38vw, 520px)",
              height: "auto",
              position: "absolute",
              bottom: 0,
              left: 0,
              zIndex: 10,
            }}
          />
        </div>

        {/* Dashed curve path */}
        <img
          src="/Vector__1_.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            // width: "clamp(100px, 14vw, 200px)",
            width: "clamp(140px, 20vw, 280px)",
            height: "auto",
            top: "clamp(80px,14vw, 150px)",
            left: "32%",
            zIndex: 0,
            transform: "rotate(5deg)",
            transformOrigin: "right top",
          }}
        />

        {/* Plane icon */}
        <img
          src="/Vector__2_.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            width: "clamp(18px, 2vw, 34px)",
            // width: "clamp(28px, 3.5vw, 55px)",
            height: "auto",
            top: "clamp(60px, 13vw, 105px)",
            left: "44%",
            zIndex: 1,
          }}
        />

        {/* Right – Copy + buttons */}
        <div className="relative flex flex-col items-center justify-center" style={{ paddingRight: "clamp(8px, 2vw, 32px)" }}>
          <div style={{ maxWidth: "clamp(320px, 45vw, 580px)" }}>
          <h2 className="font-bold leading-tight text-[#0a1628]" style={{ fontSize: "clamp(20px, 2.8vw, 42px)", letterSpacing: "0.03em" }}>
            Your Next Great Discovery<br /> Starts Here.
          </h2>
          <p className="leading-relaxed text-gray-500" style={{ fontSize: "clamp(13px, 1.2vw, 18px)", marginTop: "clamp(12px, 1.5vw, 24px)" }}>
            Download TravelPriceSafe and make every journey<br /> unforgettable.
          </p>
          <div style={{ marginTop: "clamp(20px, 3vw, 48px)", display: "flex", flexWrap: "wrap", gap: "clamp(8px, 1.2vw, 16px)" }}>
            <a
              href="#"
              aria-label="Download on Google Play"
              className="flex items-center bg-[#0a1628] text-white shadow-md transition-transform hover:scale-105"
              style={{ gap: "clamp(6px, 0.8vw, 12px)", borderRadius: "clamp(8px, 0.8vw, 12px)", padding: "clamp(8px, 0.9vw, 14px) clamp(12px, 1.5vw, 22px)" }}
            >
              <svg viewBox="0 0 24 24" className="shrink-0" style={{ width: "clamp(18px, 1.5vw, 26px)", height: "clamp(18px, 1.5vw, 26px)" }} aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.22.98.15l12.85-7.42-2.76-2.76-11.07 10.03z" fill="#EA4335"/>
                <path d="M.44 2.08C.17 2.4 0 2.88 0 3.5v17c0 .62.17 1.1.44 1.42l.08.07 9.52-9.52v-.22L.52 2.01l-.08.07z" fill="#4285F4"/>
                <path d="M20.13 10.26l-2.61-1.51-3.08 3.08 3.08 3.08 2.63-1.52c.75-.43.75-1.13 0-1.56l-.02-.07z" fill="#FBBC05"/>
                <path d="M3.18.24L16.03 7.66l-2.76 2.76L2.2.39C2.5.2 2.9.17 3.18.24z" fill="#34A853"/>
              </svg>
              <div className="text-left">
                <div className="text-gray-400 leading-none" style={{ fontSize: "clamp(8px, 0.8vw, 12px)" }}>Download on the</div>
                <div className="font-bold leading-tight" style={{ fontSize: "clamp(12px, 1.2vw, 18px)" }}>Google Play</div>
              </div>
            </a>
            <a
              href="#"
              aria-label="Download on the App Store"
              className="flex items-center bg-[#0a1628] text-white shadow-md transition-transform hover:scale-105"
              style={{ gap: "clamp(6px, 0.8vw, 12px)", borderRadius: "clamp(8px, 0.8vw, 12px)", padding: "clamp(8px, 0.9vw, 14px) clamp(12px, 1.5vw, 22px)" }}
            >
              <svg viewBox="0 0 24 24" className="shrink-0 fill-current" style={{ width: "clamp(22px, 2vw, 32px)", height: "clamp(22px, 2vw, 32px)" }} aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-gray-400 leading-none" style={{ fontSize: "clamp(8px, 0.8vw, 12px)" }}>Download on the</div>
                <div className="font-bold leading-tight" style={{ fontSize: "clamp(12px, 1.2vw, 18px)" }}>App Store</div>
              </div>
            </a>
          </div>
          </div>
        </div>

      </div>
    </section>
  )
}