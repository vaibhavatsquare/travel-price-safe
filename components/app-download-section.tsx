export function AppDownloadSection() {
  return (
    <section
  className="relative bg-[#fff0e8] h-auto lg:h-[clamp(280px,33vw,430px)]"
  style={{
    marginTop: "clamp(60px, 5vw, 140px)",
    marginBottom: "clamp(20px, 5vw, 60px)",
    overflow: "visible",
  }}
>
      <div
        className="container-wide grid items-center h-full grid-cols-1 lg:grid-cols-2"
        style={{ gap: "clamp(16px, 3vw, 48px)" }}
      >

        {/* Left – Phone mockups image — top overflows, bottom stays inside */}
        <div className="relative flex items-end justify-start h-full">
          <img
            src="/phones-mockup.svg"
            alt="TravelPriceSafe App"
            className="lg:absolute lg:bottom-0 lg:left-0 mx-auto lg:mx-0"
            style={{
              width: "clamp(240px, 38vw, 520px)",
              height: "auto",
              zIndex: 10,
            }}
          />
        </div>

        {/* Dashed curve – mobile only */}
        <img
          src="/Vector__1_.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute lg:hidden"
          style={{
            width: "25vw",
            height: "auto",
            top: "32vw",
            right: "10vw",
            zIndex: 2,
            transform: "rotate(10deg)",
          }}
        />
        {/* Plane – mobile only */}
        <img
          src="/Vector__2_.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute lg:hidden"
          style={{
            width: "5vw",
            height: "auto",
            top: "28vw",
            right: "15vw",
            zIndex: 3,
          }}
        />

        {/* Dashed curve path */}
        <img
          src="/Vector__1_.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute hidden lg:block"
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
          className="pointer-events-none absolute hidden lg:block"
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
        <div className="relative flex flex-col items-center justify-center text-center lg:text-left py-6 lg:py-0" style={{ paddingRight: "clamp(8px, 2vw, 32px)" }}>
          <div style={{ maxWidth: "clamp(320px, 45vw, 580px)" }}>
          <h2 className="font-bold leading-tight text-[#0a1628]" style={{ fontSize: "clamp(20px, 2.8vw, 42px)", letterSpacing: "0.03em" }}>
            Your Next Great Discovery<br /> Starts Here.
          </h2>
          <p className="leading-relaxed" style={{ fontSize: "clamp(13px, 1.2vw, 18px)", marginTop: "clamp(12px, 1.5vw, 24px)", color: "var(--Primary, rgba(21, 34, 63, 1))", fontWeight: 500 }}>
            Download TravelPriceSafe and make every journey<br /> unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start" style={{ marginTop: "clamp(20px, 3vw, 48px)", gap: "clamp(8px, 1.2vw, 16px)", alignItems: "center" }}>
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
                <div className="text-gray-400 leading-none" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 500, fontSize: "clamp(8px, 0.8vw, 12px)" }}>Download on the</div>
                <div style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 500, fontSize: "clamp(18px, 1.2vw, 20px)", lineHeight: "140%" }}>Google Play</div>
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
                <div className="text-gray-400 leading-none" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 500, fontSize: "clamp(8px, 0.8vw, 12px)" }}>Download on the</div>
                <div style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 500, fontSize: "clamp(18px, 1.2vw, 20px)", lineHeight: "140%" }}>App Store</div>
              </div>
            </a>
          </div>
          </div>
        </div>

      </div>
    </section>
  )
}