import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms & Conditions — TravelPriceSafe",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="pt-32 pb-20 px-4">
        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 border-b border-border pb-10">
            By downloading, installing, or using TravelPriceSafe, you agree to comply with
            and be bound by these Terms and Conditions.
          </p>

          <div className="flex flex-col gap-10">

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this App, you accept and agree to be bound by the terms
                and provisions of this agreement. If you do not agree to these terms, please do
                not use the application.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">2. User Responsibilities</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                a. <span className="font-semibold text-foreground">Age Restriction:</span> You
                must be at least 18 years old to use this App. By using the App, you confirm
                that you are of legal age in your jurisdiction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                b. <span className="font-semibold text-foreground">Accurate Information:</span> You
                agree to provide accurate, current, and complete information during registration
                and to update such information to keep it accurate and complete.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                c. <span className="font-semibold text-foreground">Community Contributions:</span> Any
                reviews, experiences, photos, or pricing information you submit must be honest,
                accurate, and based on genuine personal experience. Fraudulent or misleading
                submissions may result in account suspension.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">3. Use of the App</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                a. <span className="font-semibold text-foreground">Location & Service Data:</span> The
                App uses your device location to show nearby venues and calculate distances.
                You consent to this collection as described in our Privacy Policy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                b. <span className="font-semibold text-foreground">Currency Data:</span> Exchange
                rates are provided for informational purposes only. TravelPriceSafe is not
                responsible for any financial decisions made based on displayed conversions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                c. <span className="font-semibold text-foreground">Prohibited Activities:</span> You
                agree not to engage in any activity that may interfere with the proper
                functioning of the App, including distributing malware, attempting to gain
                unauthorised access, scraping data, or disrupting services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">4. Composite Score (CRV)</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Composite Score displayed within the App is a community-driven metric
                calculated from traveler-submitted data. It is provided as a general guide only
                and does not constitute a professional recommendation or endorsement of any venue.
                Scores may change as new data is submitted.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">5. Privacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your use of the App is governed by our{" "}
                <a href="/privacy" className="text-primary font-semibold hover:underline underline-offset-4">
                  Privacy Policy
                </a>
                , which is incorporated by reference into these Terms and Conditions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">6. Intellectual Property</h3>
              <p className="text-muted-foreground leading-relaxed">
                The App and its original content, features, Composite Score methodology, and
                functionality are owned by TravelPriceSafe and are protected by international
                copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">7. Disclaimer of Warranties</h3>
              <p className="text-muted-foreground leading-relaxed">
                The App is provided "as is." TravelPriceSafe makes no warranties, expressed or
                implied, regarding the accuracy of venue information, pricing data, exchange
                rates, or user-submitted content. Use of the App is at your own risk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">8. Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall TravelPriceSafe be liable for any indirect, incidental,
                special, consequential, or punitive damages, including loss of profits,
                revenues, data, or goodwill, resulting from your use or inability to use
                the App.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">9. Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with
                applicable laws. You irrevocably submit to the exclusive jurisdiction of the
                courts in the relevant location.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">10. Changes to Terms</h3>
              <p className="text-muted-foreground leading-relaxed">
                TravelPriceSafe reserves the right to update these Terms at any time. Continued
                use of the App after changes are posted constitutes your acceptance of the
                revised Terms. We will notify users of significant changes via the App or email.
              </p>
            </div>

          </div>

          <p className="text-sm text-muted-foreground mt-16 pt-8 border-t border-border">
            Last updated: July 2026
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
