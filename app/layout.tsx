import type { Metadata } from 'next'
import './globals.css'
import PageTransition from '@/components/animations/PageTransition'

export const metadata: Metadata = {
  title: {
    default: 'Lumora — Websites that make small brands shine',
    template: '%s | Lumora Studio',
  },
  description:
    'Lumora is a design studio in Pune, India, crafting websites, brand identities, and digital experiences for small and local businesses.',
  keywords: ['web design pune', 'brand identity pune', 'small business website', 'lumora studio'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://lumora.in',
    siteName: 'Lumora Studio',
    title: 'Lumora — Websites that make small brands shine',
    description: 'Design studio in Pune crafting websites and brand identities for local businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumora Studio',
    description: 'Websites that make small brands shine.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay antialiased">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
