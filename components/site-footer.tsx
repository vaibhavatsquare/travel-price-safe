import { MapPin, Send, Camera, Globe } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-wide py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                TravelPrice<span className="text-primary">Safe</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Explore Smarter. Spend Wiser.</p>
          <div className="mt-5 flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground">Coming soon on</span>
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="flex h-9 items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="#"
                aria-label="Get it on Google Play"
                className="flex h-9 items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.18 23.76c.3.17.64.22.98.15l12.85-7.42-2.76-2.76-11.07 10.03zM.44 2.08C.17 2.4 0 2.88 0 3.5v17c0 .62.17 1.1.44 1.42l.08.07 9.52-9.52v-.22L.52 2.01l-.08.07zM20.13 10.26l-2.61-1.51-3.08 3.08 3.08 3.08 2.63-1.52c.75-.43.75-1.13 0-1.56l-.02-.07zM3.18.24L16.03 7.66l-2.76 2.76L2.2.39C2.5.2 2.9.17 3.18.24z"/>
                </svg>
                Play Store
              </a>
            </div>
          </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
              Terms &amp; Conditions
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {[
              { icon: Send, label: "Twitter" },
              { icon: Camera, label: "Instagram" },
              { icon: Globe, label: "Website" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 TravelPriceSafe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
