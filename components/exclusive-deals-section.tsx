function VenueCard({
  image,
  name,
  category,
  distance,
  score,
  discount,
}: {
  image: string
  name: string
  category: string
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4.06217 15.6684C5.30403 15.6684 6.40662 15.0881 7.16103 14.206L15.1345 18.6976C15.1229 18.8485 15.0881 18.9994 15.0881 19.1502C15.0881 21.3902 16.9102 23.2124 19.1502 23.2124C21.3902 23.2124 23.2124 21.3902 23.2124 19.1502C23.2124 16.9102 21.3902 15.0881 19.1502 15.0881C17.9084 15.0881 16.8058 15.6684 16.0514 16.5504L8.07792 12.0588C8.08952 11.908 8.12434 11.7571 8.12434 11.6062C8.12434 11.4553 8.10113 11.3044 8.07792 11.1536L16.0514 6.66196C16.7942 7.54403 17.8968 8.12434 19.1502 8.12434C21.3902 8.12434 23.2124 6.30217 23.2124 4.06217C23.2124 1.82217 21.3902 0 19.1502 0C16.9102 0 15.0881 1.82217 15.0881 4.06217C15.0881 4.21305 15.1113 4.36393 15.1345 4.51481L7.16103 9.00641C6.78328 8.5504 6.30988 8.18302 5.77437 7.93031C5.23885 7.67759 4.65432 7.54572 4.06217 7.54403C1.82217 7.54403 0 9.3662 0 11.6062C0 13.8462 1.82217 15.6684 4.06217 15.6684ZM19.1502 17.4093C20.1135 17.4093 20.8912 18.1869 20.8912 19.1502C20.8912 20.1135 20.1135 20.8912 19.1502 20.8912C18.1869 20.8912 17.4093 20.1135 17.4093 19.1502C17.4093 18.1869 18.1869 17.4093 19.1502 17.4093ZM19.1502 2.32124C20.1135 2.32124 20.8912 3.09886 20.8912 4.06217C20.8912 5.02549 20.1135 5.8031 19.1502 5.8031C18.1869 5.8031 17.4093 5.02549 17.4093 4.06217C17.4093 3.09886 18.1869 2.32124 19.1502 2.32124ZM4.06217 9.86527C5.02549 9.86527 5.8031 10.6429 5.8031 11.6062C5.8031 12.5695 5.02549 13.3471 4.06217 13.3471C3.09886 13.3471 2.32124 12.5695 2.32124 11.6062C2.32124 10.6429 3.09886 9.86527 4.06217 9.86527Z" fill="currentColor"/>
            </svg>
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-gray-500 shadow backdrop-blur-sm">
            <svg width="14" height="13" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12.9834 20.9836C12.5998 21.119 11.9679 21.119 11.5842 20.9836C8.31191 19.8665 1 15.2063 1 7.30765C1 3.82095 3.80967 1 7.2738 1C9.32745 1 11.1441 1.99298 12.2838 3.52757C13.4235 1.99298 15.2515 1 17.2938 1C20.758 1 23.5676 3.82095 23.5676 7.30765C23.5676 15.2063 16.2557 19.8665 12.9834 20.9836Z" stroke="#15223F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
        <div className="mt-1 flex items-center gap-1 text-base text-gray-400 font-medium">
          <span>{category}</span>
        </div>
        <div className="mt-1 flex items-center gap-1 text-base text-gray-400">
          <svg width="12" height="14" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10.3136 0C13.0489 0 15.6723 1.08661 17.6064 3.02079C19.5406 4.95496 20.6272 7.57827 20.6272 10.3136C20.6272 13.8363 18.7066 16.7195 16.6828 18.788C15.6717 19.8102 14.5685 20.737 13.3871 21.5566L12.8989 21.8889L12.6697 22.0413L12.2377 22.3164L11.8526 22.5513L11.3759 22.8286C11.0523 23.0133 10.6862 23.1104 10.3136 23.1104C9.94103 23.1104 9.57489 23.0133 9.25131 22.8286L8.77459 22.5513L8.17869 22.1846L7.95867 22.0413L7.48883 21.7285C6.21433 20.8662 5.0272 19.8813 3.94438 18.788C1.92062 16.7184 0 13.8363 0 10.3136C0 7.57827 1.08661 4.95496 3.02079 3.02079C4.95496 1.08661 7.57827 0 10.3136 0ZM10.3136 6.87574C9.86214 6.87574 9.4151 6.96466 8.99799 7.13743C8.58089 7.3102 8.2019 7.56343 7.88267 7.88267C7.56343 8.2019 7.3102 8.58089 7.13743 8.99799C6.96466 9.41509 6.87574 9.86214 6.87574 10.3136C6.87574 10.7651 6.96466 11.2121 7.13743 11.6292C7.3102 12.0463 7.56343 12.4253 7.88267 12.7445C8.2019 13.0638 8.58089 13.317 8.99799 13.4898C9.4151 13.6626 9.86214 13.7515 10.3136 13.7515C11.2254 13.7515 12.0998 13.3893 12.7446 12.7445C13.3893 12.0998 13.7515 11.2254 13.7515 10.3136C13.7515 9.40183 13.3893 8.52739 12.7446 7.88267C12.0998 7.23794 11.2254 6.87574 10.3136 6.87574Z" fill="#6B7280"/>
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
        <div className="grid grid-cols-1 place-items-center gap-4 sm:flex sm:overflow-x-auto pb-2 pl-2 pt-2 sm:pl-8 sm:[&::-webkit-scrollbar]:hidden sm:[-ms-overflow-style:none] sm:[scrollbar-width:none]">
          <VenueCard
            image="/image_100.svg"
            name="Austin Grill"
            category="Restaurant"
            distance="0.3 Km"
            score={91}
            discount="20% OFF"
          />
          <VenueCard
            image="/image_94.svg"
            name="La trattoria"
            category="Nightlife"
            distance="0.3 Km"
            score={91}
            discount="20% OFF"
          />
        </div>

      </div>
    </section>
  )
}