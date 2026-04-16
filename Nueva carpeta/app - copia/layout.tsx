import type { Metadata } from 'next'
import { Space_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ["latin"]
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'JAGGO - Professional DJ | House, Latin House, Tech House',
  description: 'JAGGO - Premium DJ specializing in House, Latin House, Tech House, and Reggaetón. Available for bookings at exclusive venues across Caracas. Professional DJ press kit and technical rider.',
  generator: 'v0.app',
  openGraph: {
    title: 'JAGGO - Professional DJ',
    description: 'Premium DJ press kit. House, Latin House, Tech House, Reggaetón.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JAGGO - Professional DJ',
    description: 'Premium DJ press kit',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
