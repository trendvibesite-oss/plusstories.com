import React from 'react';

export const metadata = {
  title: 'Terms of Service | PlusStories.com Website Usage Terms',
  description: 'Official Terms of Service for browsing and interacting with PlusStories.com.',
};

export default function TermsOfServicePage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          Terms of Service
        </h1>
        <p className="text-slate-500 text-sm mt-2">
          Effective Date: August 31, 2026
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p>
          Welcome to <strong>PlusStories.com</strong>. By accessing <code>https://plusstories.com</code>, you agree to comply with and be bound by the following terms and conditions of use.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">1. Intellectual Property</h2>
        <p>
          Unless otherwise stated, PlusStories.com and/or its licensors own the intellectual property rights for all material on PlusStories.com. All intellectual property rights are reserved.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">2. Educational Disclaimer</h2>
        <p>
          The content published on PlusStories.com is provided for informational and educational purposes only. Articles covering business, finance, healthcare, or technology should not be treated as personalized legal, financial, or medical advice.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">3. External Links</h2>
        <p>
          PlusStories.com may contain links to external websites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
        </p>
      </div>
    </div>
  );
}
