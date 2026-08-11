function VenueCard({
  image,
  name,
  category,
  categoryIcon,
  distance,
  score,
  discount,
}: {
  image: string
  name: string
  category: string
  categoryIcon: string
  distance: string
  score: number
  discount: string
}) {
  return (
    <div className="overflow-hidden bg-white shrink-0" style={{ width: "clamp(200px, 18vw, 288px)", height: "clamp(260px, 21vw, 336px)", borderRadius: "clamp(14px, 1.47vw, 24px)", boxShadow: "0px 0px 7.86px 0px #00000052" }}>
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: "clamp(100px, 10vw, 160px)" }}>
        <img src={image} alt={name} className="h-full w-full object-cover" />
        {/* Top action icons */}
        <div className="absolute right-2 top-2 flex gap-2">
          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-gray-500 shadow backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0021 5a3 3 0 10-3 3c.76 0 1.44-.3 1.96-.77l-7.05 4.11c.05.23.09.46.09.7s-.04.47-.09.7l7.05 4.11A2.99 2.99 0 0018 19a3 3 0 003 3 3 3 0 00-3-5.92z" />
            </svg>
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-gray-500 shadow backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
        {/* Score badge */}
        <div className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-xs font-extrabold text-white shadow">
          {score}
        </div>
      </div>

      {/* Card body */}
      <div className="p-3">
        <p className="text-base font-bold text-[#0a1628]">{name}</p>
        <div className="mt-1 flex items-center gap-1 text-base text-gray-400">
          <span>{categoryIcon}</span>
          <span>{category}</span>
        </div>
        <div className="mt-1 flex items-center gap-1 text-base text-gray-400">
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current text-primary" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
          {distance}
        </div>
        {/* Discount + Timer */}
        <div className="mt-2.5 flex items-center justify-between">
          <span className="rounded-md bg-orange-100 px-2 py-0.5 text-base font-bold text-primary">
            {discount}
          </span>
          <span className="flex items-center gap-1 text-base font-semibold text-red-500">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            13:24
          </span>
        </div>
      </div>
    </div>
  )
}

export function ExclusiveDealsSection() {
  return (
    <section className="bg-white pt-8 pb-4 sm:pt-10 sm:pb-6">
      <div className="container-wide grid items-center gap-8 lg:grid-cols-2">

        {/* Left – Text */}
        <div>
          <span className="text-m font-bold uppercase tracking-widest text-primary">
            Exclusive Deals
          </span>
          <h2 className="mt-6 font-bold leading-tight tracking-tight text-[#0a1628]" style={{ fontSize: "clamp(28px, 3vw, 48px)" }}>
            Save  More<br />While You Travel
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed" style={{ fontSize: "clamp(15px, 1.3vw, 20px)", color: "var(--Primary, rgba(21, 34, 63, 1))", fontWeight: 400 }}>
            Access hand-picked deals and promotions from top venues near you.
            Eat, Drink and explore more for less.
          </p>
        </div>

        {/* Right – Venue cards */}
        <div className="flex gap-4 overflow-x-auto pb-2 pl-2 pt-2 sm:pl-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <VenueCard
            image="/image_100.svg"
            name="Austin Grill"
            category="Restaurant"
            categoryIcon="🍽️"
            distance="0.3 Km"
            score={91}
            discount="20% OFF"
          />
          <VenueCard
            image="/image_94.svg"
            name="La trattoria"
            category="Nightlife"
            categoryIcon="🔥"
            distance="0.3 Km"
            score={91}
            discount="20% OFF"
          />
        </div>

      </div>
    </section>
  )
}