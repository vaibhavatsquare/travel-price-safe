
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ExclusiveDealsSection } from "@/components/exclusive-deals-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ContactSection } from "@/components/contact-section"
import { AppDownloadSection } from "@/components/app-download-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">

      <HeroSection />
      <FeaturesSection />
      <ExclusiveDealsSection />
      <HowItWorksSection />
      <ContactSection />
      <AppDownloadSection />
      <SiteFooter />
    </main>
  )
}