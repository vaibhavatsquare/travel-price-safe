import { WaitlistForm } from "@/components/waitlist-form"

export function WaitlistSection() {
  return (
    <section id="waitlist" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Be the First to <span className="text-primary">Explore Smarter</span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Join our waitlist and get early access + exclusive launch offers.
          </p>
        </div>
        <WaitlistForm />
      </div>
    </section>
  )
}
