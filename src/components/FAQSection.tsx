"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What is PlusStories.com?",
    answer: "PlusStories.com is an active multi-topic digital content publication that provides articles across major categories including Business, Finance, Education, Healthcare, Technology, Services, and Home Decor."
  },
  {
    question: "Is PlusStories.com a fiction storytelling platform?",
    answer: "While the name 'PlusStories' suggests digital storytelling, the actual public website operates primarily as a broad online publication covering non-fiction topics, business strategies, and technology trends rather than serialized fiction."
  },
  {
    question: "What main content categories are featured on PlusStories.com?",
    answer: "PlusStories.com covers Technology (AI, software, digital trends), Business (growth, marketing, finance), Services (B2B solutions, professional guides), Home Decor (interior design, living), and Healthcare (wellness, preventive health)."
  },
  {
    question: "Is PlusStories.com free to read?",
    answer: "Yes, visitors can browse and read publicly available articles on PlusStories.com without any mandatory payment or paid subscription wall."
  },
  {
    question: "Does reading articles on PlusStories.com require an account?",
    answer: "No, general article reading on PlusStories.com does not require user registration or personal account creation."
  },
  {
    question: "Can I publish my own story or article on PlusStories.com?",
    answer: "PlusStories.com functions as an editorial multi-topic publication. It does not currently provide an open public self-publishing dashboard. Contributors should look for explicit contributor guidelines before preparing submissions."
  },
  {
    question: "Can writers earn money by writing for PlusStories.com?",
    answer: "There is no publicly advertised creator monetization or revenue-sharing program on the website. Writers should verify explicit terms and written agreements before assuming payment models exist."
  },
  {
    question: "Is PlusStories.com safe to browse?",
    answer: "PlusStories.com operates over secure HTTPS encryption. As with any online publication, visitors should practice standard digital security: verify domain spelling, avoid downloading unexpected files, and protect personal credentials."
  },
  {
    question: "Is PlusStories.com legitimate?",
    answer: "Yes, PlusStories.com is an active web publication with publicly accessible articles and structured author attribution. As with all informational websites, critical readers should cross-verify high-stakes financial or medical topics with primary sources."
  },
  {
    question: "How does PlusStories.com compare to Medium?",
    answer: "Medium is an open blogging platform where any user can register and publish immediately under a member paywall. PlusStories.com operates as a curated content publication focusing on structured categorical guides."
  },
  {
    question: "How does PlusStories.com compare to Wattpad?",
    answer: "Wattpad is a dedicated creative writing community focused on serialized fiction, novels, and fanfiction. PlusStories.com covers non-fiction articles across tech, business, decor, services, and health."
  },
  {
    question: "Does PlusStories.com cover Artificial Intelligence (AI) and SEO?",
    answer: "Yes, technology and digital marketing articles on PlusStories.com frequently explore AI innovations, semantic search, and SEO content strategies."
  },
  {
    question: "Who is the primary audience for PlusStories.com?",
    answer: "The platform serves general readers, working professionals, entrepreneurs, digital marketers, home decor enthusiasts, and health-conscious individuals looking for clear, structured insights."
  },
  {
    question: "How can I contact the editorial team of PlusStories.com?",
    answer: "You can reach out to the editorial team through the official Contact Us page at plusstories.com/contact for inquiries, feedback, or editorial questions."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Construct JSON-LD Schema for Google FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-16 bg-slate-50 border-t border-slate-200">
      
      {/* Schema.org FAQPage Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-800 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know About <span className="text-brand-600">PlusStories.com</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base max-w-2xl mx-auto">
            Comprehensive answers addressing navigational search intent, safety checks, category offerings, publishing guidelines, and platform comparisons.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
