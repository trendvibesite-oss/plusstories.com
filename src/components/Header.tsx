"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center">
            <Logo variant="light" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors text-sm"
            >
              Home
            </Link>

            <Link 
              href="/category/business" 
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors text-sm"
            >
              Business
            </Link>

            <Link 
              href="/category/tech" 
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors text-sm"
            >
              Tech
            </Link>

            <Link 
              href="/category/services" 
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors text-sm"
            >
              Services
            </Link>

            <Link 
              href="/about" 
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors text-sm"
            >
              About Us
            </Link>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md shadow-brand-500/20 hover:shadow-lg"
            >
              Contact Us
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

          <Link
            href="/category/business"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Business
          </Link>

          <Link
            href="/category/tech"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tech
          </Link>

          <Link
            href="/category/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <div className="pt-2">
            <Link
              href="/contact"
              className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold px-4 py-2.5 rounded-full transition-all shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
