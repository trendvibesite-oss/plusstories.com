import React from 'react';
import Link from 'next/link';
import { ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/ArticleCard';
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog: All Published Articles & In-Depth Guides | PlusStories',
  description: 'Explore all published editorial guides and articles across Business, Technology, Healthcare, Services, and Home Decor on PlusStories.',
  alternates: {
    canonical: 'https://plusstoriescom.shop/blog/',
  },
  openGraph: {
    title: 'Blog: All Published Articles & In-Depth Guides | PlusStories',
    description: 'Explore all published editorial guides and articles across Business, Technology, Healthcare, Services, and Home Decor on PlusStories.',
    url: 'https://plusstoriescom.shop/blog/',
    siteName: 'PlusStories',
    images: [
      {
        url: '/images/hero-banner.jpg',
        width: 1200,
        height: 675,
        alt: 'PlusStories Digital Publishing Hub - All Blog Articles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  // Sort articles by published date descending (latest first)
  const sortedArticles = [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "PlusStories Blog - All Published Articles",
    "description": "Comprehensive index of all published editorial guides, platform reviews, and research articles on PlusStories.",
    "url": "https://plusstoriescom.shop/blog/",
    "hasPart": sortedArticles.map((article) => ({
      "@type": "Article",
      "headline": article.title,
      "datePublished": article.publishedAt,
      "author": {
        "@type": "Person",
        "name": article.author,
      },
      "url": `https://plusstoriescom.shop/${article.slug}/`,
    })),
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Schema.org CollectionPage Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
        <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900">Blog</span>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 border border-brand-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span>Editorial Publishing Archive</span>
          </div>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-white tracking-tight">
            All Published Blog Articles
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Browse our comprehensive collection of thoroughly researched editorial guides, website reviews, domain evaluations, and category insights.
          </p>

          <div className="pt-2 flex items-center space-x-4 text-sm font-semibold text-slate-300">
            <span className="inline-flex items-center space-x-1.5 bg-slate-800 px-3.5 py-1.5 rounded-lg border border-slate-700">
              <BookOpen className="w-4 h-4 text-brand-400" />
              <span>{sortedArticles.length} Articles Published</span>
            </span>
            <span className="text-xs text-slate-400">
              Sorted by Latest Publication Date
            </span>
          </div>
        </div>
      </div>

      {/* 3x3 Grid Manner Articles Display */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Latest Publications ({sortedArticles.length})
          </h2>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Displaying in 3-Column Grid
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Looking for Specific Subject Verticals?</h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Explore our dedicated topic hubs spanning Business, Technology, Healthcare, Services, and Home Decor.
        </p>
        <div className="pt-2">
          <Link
            href="/#categories"
            className="inline-flex items-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
          >
            <span>Explore Content Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
