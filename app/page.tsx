import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { StatsBanner } from "@/components/stats-banner"
import { WaitlistSection } from "@/components/waitlist-section"
import { AdminTeaserSection } from "@/components/admin-teaser-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsBanner />
      <AdminTeaserSection />
      <WaitlistSection />
      <SiteFooter />
    </main>
  )
}
