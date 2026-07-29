const stats = [
  { value: "10k+", label: "Curated venues" },
  { value: "50+", label: "Cities at launch" },
  { value: "135+", label: "Currencies supported" },
  { value: "0–100", label: "Composite score system" },
]

export function StatsBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="glass grid grid-cols-2 gap-6 rounded-3xl p-8 sm:p-10 lg:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-3xl font-extrabold text-primary sm:text-4xl">{value}</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
