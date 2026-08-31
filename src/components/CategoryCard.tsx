import React from 'react';
import Link from 'next/link';
import { Category } from '@/data/categories';
import { Cpu, TrendingUp, Briefcase, Home, HeartPulse, ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-7 h-7 text-brand-600" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-emerald-600" />;
      case 'Briefcase': return <Briefcase className="w-7 h-7 text-sky-600" />;
      case 'Home': return <Home className="w-7 h-7 text-amber-600" />;
      case 'HeartPulse': return <HeartPulse className="w-7 h-7 text-rose-600" />;
      default: return <Cpu className="w-7 h-7 text-brand-600" />;
    }
  };

  return (
    <Link
      href={`/category/${category.slug}`}
      className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-brand-50 flex items-center justify-center mb-5 transition-colors">
          {getIcon(category.iconName)}
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
          {category.name}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {category.description}
        </p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
        <span>{category.articleCount} Published Articles</span>
        <span className="text-brand-600 group-hover:translate-x-1 transition-transform flex items-center">
          Explore <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </span>
      </div>
    </Link>
  );
};
