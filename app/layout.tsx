import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lord Shiva Camps - Authentic Camping & Trekking in Chopta, Uttarakhand',
  description: 'Experience authentic camping and thrilling treks in Chopta Village, Uttarakhand. Gateway to Tungnath, Chandrashila Peak, and Deoria Tal. Comfortable tent camping with mountain views, expert trekking guidance, and warm Himalayan hospitality.',
  keywords: [
    'Lord Shiva Camps',
    'Chopta camping',
    'Uttarakhand camping',
    'Tungnath trek',
    'Chandrashila trek',
    'Deoria Tal',
    'Chopta village',
    'Himalayan camping',
    'mountain camping India',
    'trekking base camp',
    'family camping Uttarakhand',
    'tent camping Chopta',
    'Rudraprayag camping'
  ],
  authors: [{ name: 'Lord Shiva Camps' }],
  creator: 'Lord Shiva Camps',
  publisher: 'Lord Shiva Camps',
  openGraph: {
    title: 'Lord Shiva Camps - Authentic Camping & Trekking in Chopta, Uttarakhand',
    description: 'Experience authentic camping and thrilling treks in Chopta Village. Gateway to Tungnath, Chandrashila Peak, and Deoria Tal.',
    url: 'https://lordshivacamps.com',
    siteName: 'Lord Shiva Camps',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Lord Shiva Camps - Chopta Village, Uttarakhand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lord Shiva Camps - Authentic Camping & Trekking in Chopta',
    description: 'Experience authentic camping and thrilling treks in Chopta Village, Uttarakhand.',
    images: ['/images/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
  alternates: {
    canonical: 'https://lordshivacamps.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

