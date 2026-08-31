import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/data/categories';
import { ShieldCheck, Mail, Globe, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-12 bg-white/10 rounded-lg p-2 backdrop-blur-sm border border-white/10">
                <Image 
                  src="/images/logo.jpg" 
                  alt="PlusStories.com Official Logo" 
                  fill 
                  className="object-contain p-1"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              <strong>PlusStories.com</strong> is an independent multi-topic digital content publication covering Business, Finance, Technology, Healthcare, Services, and Home Decor. Delivering high-quality structured knowledge and semantic analysis.
            </p>
            <div className="flex items-center space-x-2 text-xs text-brand-400 bg-slate-800/80 px-3 py-1.5 rounded-md w-fit border border-slate-700">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Entity & Independent Digital Publication</span>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Content Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={`/category/${cat.slug}`}
                    className="hover:text-white transition-colors hover:underline"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home Hub</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About PlusStories</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Editorial</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">Frequent Questions</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Trust & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} PlusStories.com. All rights reserved. Content provided for informational purposes.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
