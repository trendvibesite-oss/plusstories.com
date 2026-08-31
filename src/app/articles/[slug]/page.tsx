import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/ArticleCard';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from 'lucide-react';

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | PlusStories.com`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter(
    (a) => a.categorySlug === article.categorySlug && a.slug !== article.slug
  ).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://plusstories.com${article.featuredImage}`,
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": article.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "PlusStories.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://plusstories.com/images/logo.jpg"
      }
    },
    "datePublished": article.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://plusstories.com/articles/${article.slug}`
    }
  };

  return (
    <article className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Schema.org Article Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
        <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/category/${article.categorySlug}`} className="hover:text-brand-600 transition-colors">{article.categoryName}</Link>
        <span>/</span>
        <span className="text-slate-900 truncate max-w-xs">{article.title}</span>
      </div>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="inline-block bg-brand-100 text-brand-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {article.categoryName}
        </div>

        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between border-y border-slate-200 py-4 gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 font-semibold text-slate-900">
              <User className="w-4 h-4 text-brand-600" />
              <span>{article.author} ({article.authorRole})</span>
            </div>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-slate-400" />
              {article.publishedAt}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1 text-slate-400" />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <Image
          src={article.featuredImage}
          alt={`${article.title} - PlusStories.com Article Illustration`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Body Content */}
      <div
        className="prose prose-slate max-w-none text-slate-800 text-base sm:text-lg leading-relaxed space-y-6"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Tags */}
      <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-2">
        <Tag className="w-4 h-4 text-slate-400 mr-2" />
        {article.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="pt-12 border-t border-slate-200 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">
            Related Guides in {article.categoryName}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </div>
      )}

    </article>
  );
}
