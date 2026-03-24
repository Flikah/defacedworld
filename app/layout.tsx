import type { Metadata } from 'next'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://defacedworld.com'),
  title: {
    default: 'DEFACEDWORLD — Free SEO Audit Tool & Digital Growth Agency',
    template: '%s | DEFACEDWORLD',
  },
  description: 'Free instant SEO audit for any website. Enter your URL and get a real report — broken metadata, keyword gaps, local SEO issues, and a priority fix plan. Full implementation from $497.',
  keywords: ['seo audit', 'free seo audit', 'website seo checker', 'seo analysis tool', 'seo agency', 'fix website seo', 'google business profile setup', 'local seo service', 'meta description writer', 'seo consultant'],
  authors: [{ name: 'Spencer Wilkinson', url: 'https://defacedworld.com/about' }],
  creator: 'Spencer Wilkinson',
  publisher: 'DEFACEDWORLD',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://defacedworld.com',
    siteName: 'DEFACEDWORLD',
    title: 'DEFACEDWORLD — Free Instant SEO Audit',
    description: 'Enter your URL. Get an instant SEO audit — every broken signal, missing keyword, and quick win, specific to your business. Free preview. Full report from $497.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DEFACEDWORLD — Free SEO Audit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEFACEDWORLD — Free Instant SEO Audit',
    description: 'Enter your URL. Get a real SEO audit in 30 seconds. Free preview, full report from $497.',
    images: ['/og-image.png'],
    creator: '@defacedworld',
  },
  verification: {
    google: '8enbnBlS1oyXSj7Up2eIN2I97rHUrd7DdGY76KYLphk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://defacedworld.com' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'DEFACEDWORLD',
  url: 'https://defacedworld.com',
  logo: 'https://defacedworld.com/logo.png',
  description: 'SEO audit and digital growth agency. Free instant SEO audit tool, full implementation services, and ongoing SEO management.',
  founder: { '@type': 'Person', name: 'Spencer Wilkinson' },
  address: { '@type': 'PostalAddress', addressLocality: 'Greenville', addressRegion: 'SC', addressCountry: 'US' },
  areaServed: 'US',
  email: 'spencer@flikah.com',
  priceRange: '$497 - $1497',
  serviceType: ['SEO Audit', 'SEO Implementation', 'Local SEO', 'Google Business Profile Setup', 'Website Copywriting'],
  sameAs: ['https://www.linkedin.com/company/defacedworld', 'https://twitter.com/defacedworld'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DEFACEDWORLD',
  url: 'https://defacedworld.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://defacedworld.com/?url={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
