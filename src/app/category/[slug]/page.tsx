import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/ArticleCard';
import { ArrowLeft, Layers } from 'lucide-react';

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) return {};

  return {
    title: `${category.name} Articles & Guides | PlusStories.com Official Category`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = ARTICLES.filter((a) => a.categorySlug === category.slug);

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Category Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-semibold text-brand-400 hover:text-brand-300 uppercase tracking-wider mb-2"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home Hub
        </Link>
        <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 border border-brand-500/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider block w-fit">
          <Layers className="w-3.5 h-3.5" />
          <span>Category Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          {category.name} Content Hub
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Articles Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Published Articles in {category.name}
        </h2>

        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl p-12 text-center text-slate-600 border border-slate-200">
            <p className="text-lg">More {category.name} articles are currently in editorial review and will be published shortly.</p>
          </div>
        )}
      </div>

    </div>
  );
}
