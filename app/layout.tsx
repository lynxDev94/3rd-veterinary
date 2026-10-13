import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Figtree } from 'next/font/google'
import { MotionProvider } from '@/components/motion-provider'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-bricolage',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Santakos veterinarija — veterinarijos klinika Kaune, Vilijampolėje',
  description:
    'Smulkių gyvūnų gydymas ir chirurgija, konsultacijos, tyrimai, šunų kraujo bankas ir gyvūnų viešbutis. Tilžės g. 10, Kaunas. Tel. +370 620 41484.',
  robots: { index: false, follow: false },
  icons: {
    icon: '/images/logo-icon.png',
    apple: '/images/logo-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f5c57',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lt" className={`${bricolage.variable} ${figtree.variable} bg-background`}>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
