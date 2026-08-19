import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy — TravelPriceSafe",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />
      <section className="pt-10 pb-20 px-4 bg-white">
        <div className="mx-auto max-w-full px-8">

          <div className="flex items-center gap-3 mb-2">
            <a href="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
            </a>
            <h1 className="font-bold text-foreground" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>
              Privacy Policy
            </h1>
          </div>
          <p className="text-muted-foreground mb-2" style={{ fontSize: "clamp(12px, 1vw, 14px)" }}>
            <span className="font-semibold">Last Updated:</span>{" "}
            <span className="text-muted-foreground">July 14, 2026</span>
          </p>
          <div className="border-b border-border mb-10" />

          <div className="flex flex-col gap-2">

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>1. Introduction</h3>
              <p className="text-muted-foreground leading-relaxed mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                Welcome to TravelPriceSafe ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                Please read this Privacy Policy carefully. By using the App, you consent to the practices described in this policy.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>2. Information We Collect</h3>
              <p className="font-semibold text-foreground mb-2" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>2.1 Information You Provide to Us:</p>
              <div className="flex flex-col gap-1 mb-4 text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>Category Examples</div>
                <div>Account Information Name, email address, phone number (optional), password</div>
                <div>Profile Information Profile photo, preferences, saved places</div>
                <div>User Contributions Reviews, ratings, price submissions, photos, safety reports, vibe check-ins, tips</div>
                <div>Communications Messages you send to our support team</div>
              </div>
              <p className="font-semibold text-foreground mb-2" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>2.2 Information Collected Automatically:</p>
              <div className="flex flex-col gap-1 mb-4 text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>Category Examples</div>
                <div>Device Information Device model, operating system, unique device identifiers</div>
                <div>Location Information Approximate location (based on IP address) and precise location (with your permission)</div>
                <div>Usage Data App features used, time spent, searches, clicks</div>
                <div>Transaction Data Deals viewed, saved, or redeemed</div>
              </div>
              <p className="font-semibold text-foreground mb-2" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>2.3 Information from Third Parties:</p>
              <div className="flex flex-col gap-1 text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>Source Examples</div>
                <div>Social Media If you choose to connect social media accounts (future feature)</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>3. How We Use Your Information</h3>
              <div className="flex flex-col gap-1 text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>Purpose Explanation</div>
                <div>To provide and maintain the App Display venues, deals, CRV scores, maps, and translations</div>
                <div>To personalize your experience Show venues in your language and currency</div>
                <div>To calculate CRV Scores Price submissions, safety reports, and vibe check-ins feed into our proprietary scoring algorithm</div>
                <div>To communicate with you Send notifications about deals, updates, and support responses</div>
                <div>To improve the App Analyze usage patterns and fix bugs</div>
                <div>To ensure safety and security Monitor for fraudulent activity, verify user submissions</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>4. How We Share Your Information</h3>
              <div className="flex flex-col gap-1 mb-3 text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>Recipient Information Shared Purpose</div>
                <div>Venue Partners Aggregated ratings and reviews (not personally identifiable) Help venues understand user feedback</div>
                <div>Service Providers Necessary data (e.g., cloud hosting, analytics, maps) To operate the App</div>
                <div>Legal Requirements As required by law To comply with legal obligations</div>
                <div>Business Transfers In case of merger or acquisition To facilitate business transition</div>
              </div>
              <p className="text-muted-foreground mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                We do NOT sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>5. Your Rights and Choices</h3>
              <div className="flex flex-col gap-1 text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>Right How to Exercise</div>
                <div>Access your data Request a copy of your information via support@travelpricesafe.com</div>
                <div>Correct your data Edit your profile in the App</div>
                <div>Delete your account Go to Settings → Delete Account</div>
                <div>Opt out of notifications Adjust notification preferences in Settings</div>
                <div>Disable location tracking Change device permissions in your phone settings</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>6. Data Security</h3>
              <p className="text-muted-foreground leading-relaxed mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                We implement reasonable security measures to protect your information, including encryption, secure API connections, and access controls. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>7. Data Retention</h3>
              <p className="text-muted-foreground leading-relaxed mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                We retain your information as long as your account is active. If you delete your account, we will delete your personal information within 30 days, except where we are required to retain it for legal purposes.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>8. Children's Privacy</h3>
              <p className="text-muted-foreground leading-relaxed mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                The App is not intended for children under 13. We do not knowingly collect information from children under 13.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>9. International Data Transfers</h3>
              <p className="text-muted-foreground leading-relaxed mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                Your information may be transferred to and processed in countries other than your own. We take steps to ensure your data is protected in accordance with this Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>10. Changes to This Privacy Policy</h3>
              <p className="text-muted-foreground leading-relaxed mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                We may update this Privacy Policy from time to time. We will notify you of material changes via the App or email.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>11. Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2 mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                Email:{" "}
                <a href="mailto:support@travelpricesafe.com" className="text-muted-foreground hover:underline underline-offset-4">
                  support@travelpricesafe.com
                </a>
              </p>
            </div>

          </div>

          

        </div>
      </section>
      {/* <SiteFooter /> */}
    </main>
  )
}
