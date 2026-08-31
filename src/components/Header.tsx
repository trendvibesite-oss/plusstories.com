"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, ChevronDown, BookOpen, Layers } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-44 h-12 flex items-center">
              <Image 
                src="/images/logo.jpg" 
                alt="PlusStories.com Official Logo - Multi-topic Digital Publishing Hub"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors text-sm"
            >
              Home
            </Link>

            {/* Categories Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 text-slate-700 hover:text-brand-600 font-medium transition-colors text-sm py-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Categories</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 font-semibold text-xs text-slate-400 uppercase tracking-wider">
                    Topics & Hubs
                  </div>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="font-medium">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors text-sm"
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors text-sm"
            >
              Contact Us
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/#faq"
              className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md shadow-brand-500/20 hover:shadow-lg"
            >
              Explore FAQs
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 p-2 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <div className="px-3 py-1 font-semibold text-xs text-slate-400 uppercase tracking-wider">
            Categories
          </div>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="block pl-6 pr-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};
