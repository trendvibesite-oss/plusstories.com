import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLdSchema } from '@/components/JsonLdSchema';

export const metadata: Metadata = {
  metadataBase: new URL('https://plusstoriescom.shop'),
  title: 'PlusStories: Digital Content Platform & Multi-Topic Publishing Hub',
  description: 'PlusStories is an independent multi-topic digital content website publishing guides on Technology, Business, Healthcare, Services, and Home Decor.',
  keywords: [
    'plusstoriescom.shop',
    'plusstories.com',
    'plusstories com',
    'plusstories',
    'what is plusstories.com',
    'plusstories digital publishing',
    'plusstories categories',
    'plusstories safety check'
  ],
  verification: {
    google: 'aZRSqwKJUtYBlBJqf940PgoMwqCWnkHdDVO8Cn52sm8',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://plusstoriescom.shop',
  },
  openGraph: {
    title: 'PlusStories: Digital Content Platform & Multi-Topic Publishing Hub',
    description: 'Comprehensive guide to PlusStories, its digital publishing model, category offerings, safety evaluation, and platform comparisons.',
    url: 'https://plusstoriescom.shop',
    siteName: 'PlusStories',
    images: [
      {
        url: '/images/hero-banner.jpg',
        width: 1200,
        height: 675,
        alt: 'PlusStories Digital Publishing Ecosystem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlusStories: Digital Content Platform & Multi-Topic Publishing Hub',
    description: 'Explore what PlusStories is, what it offers, and key considerations for readers and content creators.',
    images: ['/images/hero-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="aZRSqwKJUtYBlBJqf940PgoMwqCWnkHdDVO8Cn52sm8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <JsonLdSchema />

        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MBFGT1V8KN" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-MBFGT1V8KN');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-white text-slate-800">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
