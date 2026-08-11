export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="container-wide" style={{ paddingTop: "clamp(16px, 2vw, 32px)", paddingBottom: "clamp(16px, 2vw, 32px)" }}>

        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Logo + tagline */}
          <div>
            <a href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="TravelPriceSafe"
                style={{ height: "clamp(40px, 9vw, 92px)", width: "auto" }}
              />
            </a>
            <p className="mt-2" style={{ fontSize: "clamp(13px, 1.2vw, 18px)", color: "var(--Primary, rgba(21, 34, 63, 1))", fontWeight: 500 }}>
              Travel Smarter. Discover better.<br />Pay Fair
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-start sm:items-end gap-2" style={{ fontSize: "clamp(13px, 1.2vw, 18px)" }}>
            <a href="/privacy" className="transition-colors hover:text-primary" style={{ color: "var(--Primary, rgba(21, 34, 63, 1))", fontWeight: 400 }}>
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-primary" style={{ color: "var(--Primary, rgba(21, 34, 63, 1))", fontWeight: 400 }}>
              Terms of Use
            </a>
          </nav>
        </div>

        {/* Divider + copyright */}
        <div className="mt-4 mb-4 border-t border-gray-100 pt-4 text-center text-gray-400" style={{ fontSize: "clamp(12px, 1vw, 16px)" }}>
          © 2026 TravelPriceSafe. All rights reserved.
        </div>

      </div>
    </footer>
  )
}