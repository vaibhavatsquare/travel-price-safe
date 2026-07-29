import { LayoutDashboard, Store, BarChart3, BadgePercent } from "lucide-react"

const perks = [
  { icon: Store, label: "Manage venue listings & business hours" },
  { icon: BadgePercent, label: "Publish deals & promotions" },
  { icon: BarChart3, label: "Track engagement & insights" },
  { icon: LayoutDashboard, label: "Moderate reviews & experiences" },
]

export function AdminTeaserSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="glass grid items-center gap-8 rounded-3xl p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent">
            <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
            For Partners
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            One dashboard to manage it all
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Venues and partners get a centralized admin panel to manage listings, business hours,
            deals, and moderate traveler reviews — reaching confident travelers right when
            they&apos;re deciding where to go.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {perks.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-semibold text-foreground">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
