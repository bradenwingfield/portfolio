import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import { Analytics } from '@vercel/analytics/react' // ✅ NEW

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://bradenwingfield.com'),
  title: 'Braden Wingfield | Portfolio',
  description: 'Portfolio website of Braden Wingfield',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Braden Wingfield',
    description: 'Portfolio website for Braden Wingfield.',
    url: 'https://bradenwingfield.com',
    siteName: 'Braden Wingfield',
    images: [
      {
        url: '/avatar.png',
        width: 1200,
        height: 630,
        alt: 'Braden Wingfield Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braden Wingfield',
    description: 'Portfolio website for Braden Wingfield.',
    images: ['/avatar.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
