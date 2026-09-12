import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata: Metadata = {
  title: 'Secure Nest Services | Professional Security Company in the UK',
  description:
    'Secure Nest Services provides SIA licensed security across the UK — event security, manned guarding, residential, retail, corporate and construction site protection. Protection you can trust.',
  generator: 'v0.app',
  icons: {
      icon: '/logo.png',
      apple: '/logo.png',
    },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0f1f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <WhatsAppButton />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        
      </body>
    </html>
  )
}
