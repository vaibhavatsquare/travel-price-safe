import { Map, Coins, Star, Tag, Languages, Camera } from "lucide-react"

const features = [
  {
    icon: Map,
    title: "Interactive Map & Venue Discovery",
    desc: "Explore restaurants, bars, cafés and entertainment spots around you on a live, interactive map.",
  },
  {
    icon: Coins,
    title: "Real-Time Currency Conversion",
    desc: "See every price in your home currency instantly, so you always know exactly what you'll pay.",
  },
  {
    icon: Star,
    title: "CRV Score & Traveler Ratings",
    desc: "Our Cost-Rating-Value score blends price and reviews into one trustworthy number.",
  },
  {
    icon: Tag,
    title: "Active Deals & Promotions",
    desc: "Unlock exclusive discounts and limited-time offers from venues near you.",
  },
  {
    icon: Languages,
    title: "Translated Reviews",
    desc: "Read authentic local reviews auto-translated into your language for total confidence.",
  },
  {
    icon: Camera,
    title: "Community Photos & Pricing Tips",
    desc: "Real photos and pricing tips shared by fellow travelers — no surprises at the table.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Everything you need to <span className="text-primary">explore smarter</span>
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Powerful tools built for travelers who want transparency, value, and confidence on every trip.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="glass group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
