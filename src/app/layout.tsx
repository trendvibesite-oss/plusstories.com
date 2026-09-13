import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLdSchema } from '@/components/JsonLdSchema';

export const metadata: Metadata = {
  metadataBase: new URL('https://plusstories.com'),
  title: 'PlusStories.com: Digital Content Platform & Multi-Topic Publishing Hub',
  description: 'PlusStories.com is an independent multi-topic digital content website publishing guides on Technology, Business, Healthcare, Services, and Home Decor.',
  keywords: [
    'plusstories.com',
    'plusstories com',
    'plusstories',
    'what is plusstories.com',
    'plusstories.com digital publishing',
    'plusstories categories',
    'plusstories safety check'
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://plusstories.com',
  },
  openGraph: {
    title: 'PlusStories.com: Digital Content Platform & Multi-Topic Publishing Hub',
    description: 'Comprehensive guide to PlusStories.com, its digital publishing model, category offerings, safety evaluation, and platform comparisons.',
    url: 'https://plusstories.com',
    siteName: 'PlusStories.com',
    images: [
      {
        url: '/images/hero-banner.jpg',
        width: 1200,
        height: 675,
        alt: 'PlusStories.com Digital Publishing Ecosystem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlusStories.com: Digital Content Platform & Multi-Topic Publishing Hub',
    description: 'Explore what PlusStories.com is, what it offers, and key considerations for readers and content creators.',
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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <JsonLdSchema />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-white text-slate-800">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
