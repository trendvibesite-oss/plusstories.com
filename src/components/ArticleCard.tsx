import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/data/articles';
import { Calendar, Clock, User, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        <Image
          src={article.featuredImage}
          alt={`${article.title} - PlusStories.com ${article.categoryName} Guide`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          {article.categoryName}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
              {article.publishedAt}
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
              {article.readTime}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 mb-2 leading-snug">
            <Link href={`/articles/${article.slug}`}>
              {article.title}
            </Link>
          </h3>
          <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4">
            {article.excerpt}
          </p>
        </div>
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-medium text-slate-700">
            <User className="w-3.5 h-3.5 text-brand-600" />
            <span>{article.author}</span>
          </div>
          <Link
            href={`/articles/${article.slug}`}
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center"
          >
            Read <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
