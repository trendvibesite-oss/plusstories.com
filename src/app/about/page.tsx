import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Target, Award, Users, BookOpen, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Us | PlusStories.com Official Platform Mission & Editorial Team',
  description: 'Learn about the mission, editorial standards, entity definition, and category scope behind PlusStories.com.',
};

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* About Hero Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-300 border border-brand-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            <span>Independent Editorial Publication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            About <span className="text-brand-400">PlusStories.com</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering structured, accessible, and high-value informational guides across Technology, Business, Healthcare, Services, and Home Decor.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Our Mission & Platform Identity
          </h2>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            <strong>PlusStories.com</strong> was founded with a clear directive: to provide readers with well-researched, structured, and easy-to-digest articles on modern digital trends, practical business operational guides, healthcare wellness, and lifestyle improvements.
          </p>
          <p className="text-slate-700 leading-relaxed text-base">
            While the brand name naturally suggests digital storytelling, our editorial team focuses on building comprehensive category hubs that address real reader questions and help users navigate unfamiliar topics with confidence.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Topical Clarity</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We break down complex topics in Technology, AI, Finance, and Healthcare into clear, actionable guides for everyday readers.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Editorial Standards</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every published piece undergoes editorial review to ensure factual accuracy, proper author attribution, and clear entity context.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Reader First</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our content is 100% free to access without mandatory paywalls, subscription requirements, or hidden reader fees.
            </p>
          </div>
        </div>

        {/* Editorial Notice */}
        <div className="bg-brand-50 border-l-4 border-brand-600 p-8 rounded-r-3xl space-y-3">
          <h3 className="text-xl font-bold text-brand-900">
            Contacting the PlusStories Editorial Team
          </h3>
          <p className="text-brand-800 text-sm leading-relaxed">
            Have questions, feedback, or content inquiries? Reach out to our editorial desk directly through our official contact page.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-bold text-brand-600 hover:text-brand-700 pt-2"
          >
            Visit Contact Page <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </section>

    </div>
  );
}
