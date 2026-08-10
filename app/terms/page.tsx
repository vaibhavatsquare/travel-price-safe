import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms & Conditions — TravelPriceSafe",
}

export default function TermsPage() {
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
              Terms Of Condition
            </h1>
          </div>
          <p className="text-muted-foreground mb-2" style={{ fontSize: "clamp(12px, 1vw, 14px)" }}>
            <span className="font-semibold">Last Updated:</span>{" "}
            <span className="text-muted-foreground">July 14, 2026</span>
          </p>
          <div className="border-b border-border mb-10" />

          <div className="flex flex-col gap-10">

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground leading-relaxed">
                By downloading, accessing, or using TravelPriceSafe (the "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the App.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">2. Eligibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 13 years old to use the App. By using the App, you represent that you meet this requirement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">3. Your Account:</h3>
              <div className="flex flex-col gap-1 text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div><span className="font-semibold text-foreground">Requirement. Explanation.</span></div>
                <div>Accuracy: You must provide accurate and complete information</div>
                <div>Security: You are responsible for maintaining the confidentiality of your password</div>
                <div>Responsibility: You are responsible for all activity under your account</div>
                <div>Notification: You must notify us immediately of any unauthorized use</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">4. User Conduct</h3>
              <div className="flex flex-col gap-1 text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div><span className="font-semibold text-foreground">You agree NOT to:</span></div>
                <div>Prohibited Conduct. Example,</div>
                <div>False information Submitting fake prices, reviews, or safety reports</div>
                <div>Harassment Posting abusive, threatening, or harassing content</div>
                <div>Spam Posting repetitive or irrelevant content</div>
                <div>Illegal activity Using the App for any unlawful purpose</div>
                <div>Impersonation Pretending to be someone else</div>
                <div>Reverse engineering Attempting to extract our proprietary CRV Score algorithm</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">5. User Contributions</h3>
              <p className="font-bold text-foreground mb-1" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>5.1 License to Us</p>
              <p className="text-muted-foreground leading-relaxed mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                By submitting content (reviews, prices, photos, safety reports, vibe check-ins) to the App, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute your content in connection with the App.
              </p>
              <p className="font-bold text-foreground mb-1" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>5.2 Your Warranties</p>
              <p className="text-muted-foreground mb-1" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>You represent that:</p>
              <div className="flex flex-col gap-1 text-muted-foreground mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>· You own the content or have permission to submit it</div>
                <div>· Your content is accurate and not misleading</div>
                <div>· Your content does not violate any third-party rights</div>
              </div>
              <p className="font-bold text-foreground mb-1" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>5.3 Verification</p>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                We reserve the right to verify user submissions and remove any content that violates these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">6. CRV Score™</h3>
              <p className="font-bold text-foreground mb-2" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>The CRV Score™ is our proprietary algorithm that combines Value, Safety, Vibe, and Distance scores. You agree that:</p>
              <div className="flex flex-col gap-1 text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>· The CRV Score is provided for informational purposes only</div>
                <div>· We do not guarantee the accuracy of any score</div>
                <div>· You should use your own judgment when visiting any venue</div>
                <div>· The algorithm is our confidential intellectual property</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">7. Third-Party Services</h3>
              <p className="font-bold text-foreground mb-2" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>The App integrates with third-party services including:</p>
              <div className="flex flex-col gap-1 text-muted-foreground mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>Service Purpose</div>
                <div>Google Maps Map display and location services</div>
                <div>Currency API Real-time exchange rates</div>
                <div>Translation API Language translation</div>
              </div>
              <p className="text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                These services have their own terms and privacy policies. We are not responsible for their practices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">8. Disclaimer of Warranties</h3>
              <p className="font-bold text-foreground mb-2" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE." WE DO NOT WARRANT THAT:</p>
              <div className="flex flex-col gap-1 text-muted-foreground mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>· The App will be uninterrupted or error-free</div>
                <div>· CRV Scores or other information are accurate or reliable</div>
                <div>· Any venue is safe or offers the advertised deals</div>
              </div>
              <p className="text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                YOU USE THE APP AT YOUR OWN RISK.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">9. Limitation of Liability</h3>
              <p className="font-bold text-foreground mb-2" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR:</p>
              <div className="flex flex-col gap-1 text-muted-foreground mb-3" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                <div>· Indirect, incidental, or consequential damages</div>
                <div>· Loss of data, profits, or goodwill</div>
                <div>· Injury or property damage related to visiting any venue discovered through the App</div>
              </div>
              <p className="text-muted-foreground" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US (IF ANY) IN THE PAST 12 MONTHS.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">10. Indemnification</h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                You agree to indemnify and hold us harmless from any claims arising from your use of the App or violation of these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">11. Termination</h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                We may suspend or terminate your account if you violate these Terms. You may delete your account at any time in Settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">12. Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                These Terms are governed by the laws of [Your State/Country.]
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">13. Changes to Terms</h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                We may update these Terms. Continued use of the App after changes constitutes acceptance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">14. Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}>
                Email:{" "}
                <a href="mailto:support@travelpricesafe.com" className="text-muted-foreground hover:underline underline-offset-4">
                  support@travelpricesafe.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
