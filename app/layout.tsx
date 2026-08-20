import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TravelPriceSafe — Explore Smarter. Spend Wiser.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
  },
  description:
    'TravelPriceSafe helps you find nearby restaurants, bars, cafés & entertainment spots — with real prices, traveler reviews, and exclusive deals all in one app. Join the waitlist for early access.',
  generator: 'v0.app',
  openGraph: {
    title: 'TravelPriceSafe — Explore Smarter. Spend Wiser.',
    description:
      'Discover venues, compare real prices, and travel confidently. Join the waitlist for early access and exclusive launch offers.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a1628',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
