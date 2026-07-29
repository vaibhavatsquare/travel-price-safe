const tags = [
  { label: "🍜 Restaurants", variant: "default" },
  { label: "🍸 Bars", variant: "default" },
  { label: "☕ Cafés", variant: "default" },
  { label: "🎭 Entertainment", variant: "default" },
  { label: "🔥 Active Deals", variant: "deal" },
  { label: "📍 Nearby Venues", variant: "default" },
  { label: "💱 Currency Conversion", variant: "default" },
  { label: "🌍 Translated Reviews", variant: "score" },
  { label: "🎫 Promotions", variant: "deal" },
  { label: "📸 Traveler Photos", variant: "default" },
  { label: "⭐ Composite Score", variant: "score" },
  { label: "🗺️ Interactive Map", variant: "default" },
]

export function MarqueeTags() {
  const doubled = [...tags, ...tags]

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex w-max gap-3"
        style={{ animation: "marquee 30s linear infinite" }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
        }
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium ${
              tag.variant === "deal"
                ? "border-orange-500/30 bg-orange-500/10 text-orange-400"
                : tag.variant === "score"
                ? "border-accent/30 bg-accent/10 text-accent"
                : "border-border bg-secondary/60 text-muted-foreground"
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  )
}
