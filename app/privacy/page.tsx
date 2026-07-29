import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy — TravelPriceSafe",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="pt-32 pb-20 px-4">
        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 border-b border-border pb-10">
            Your privacy matters to us. This policy explains what data TravelPriceSafe
            collects, how we use it, and the choices you have.
          </p>

          <div className="flex flex-col gap-10">

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                a. <span className="font-semibold text-foreground">Account Information:</span> When
                you sign up, we collect your full name, email address, phone number, preferred
                language, and home currency.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                b. <span className="font-semibold text-foreground">Location Data:</span> We collect
                your device location when the App is in use to show nearby venues, calculate
                distances, and personalise your experience. We do not track your location in
                the background.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                c. <span className="font-semibold text-foreground">User-Submitted Content:</span> Reviews,
                experiences, photos, pricing information, and safety reports you submit are
                stored and may be displayed to other users.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">2. How We Use Your Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                a. To provide and improve the App's core features — venue discovery, composite
                scoring, currency conversion, and deal listings.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                b. To personalise your experience based on your preferred language, home
                currency, and saved places.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                c. To send you push notifications about nearby deals and App updates, where
                you have opted in.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                d. To moderate community content and ensure safety and accuracy across
                the platform.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">3. Composite Score Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pricing information, ratings, and experience data you submit contribute to
                the community Composite Score. This data is anonymised before being used in
                score calculations. Your name may appear alongside your public reviews unless
                you request otherwise.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">4. Data Sharing</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We do not sell your personal data to third parties. We may share data with:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                a. <span className="font-semibold text-foreground">Service Providers:</span> Third-party
                services we use to operate the App (e.g. cloud hosting, analytics, currency
                rate APIs). These providers are bound by confidentiality agreements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                b. <span className="font-semibold text-foreground">Legal Requirements:</span> We may
                disclose data if required by law or to protect the rights and safety of our
                users and the public.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">5. Data Retention</h3>
              <p className="text-muted-foreground leading-relaxed">
                We retain your account data for as long as your account is active. If you
                delete your account, your personal information is removed within 30 days.
                Anonymised contribution data used in composite scoring may be retained
                for platform integrity purposes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">6. Your Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Depending on your location, you may have rights including:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                a. The right to access, correct, or delete your personal data.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                b. The right to withdraw consent for location tracking or push notifications
                at any time via App settings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                c. The right to request account deletion directly from the App's settings screen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">7. Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your data,
                including encrypted data transmission and secure storage. However, no method
                of transmission over the internet is 100% secure and we cannot guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">8. Children's Privacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                TravelPriceSafe is not intended for users under 18 years of age. We do not
                knowingly collect personal information from minors. If we become aware that
                a minor has created an account, we will promptly delete their information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">9. Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use Firebase Analytics to understand how users interact with the App.
                This data is aggregated and anonymised and helps us improve features and
                performance. You can opt out of analytics collection via your device settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">10. Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your
                data rights, please contact us at{" "}
                <a
                  href="mailto:privacy@travelprice.safe"
                  className="text-primary font-semibold hover:underline underline-offset-4"
                >
                  privacy@travelprice.safe
                </a>
                .
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
