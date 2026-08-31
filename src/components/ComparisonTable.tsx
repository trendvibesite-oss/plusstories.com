import React from 'react';
import { Check, X, HelpCircle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <div className="my-12 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm text-slate-700 border-collapse">
        <thead className="bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider">
          <tr>
            <th className="py-4 px-6 border-b border-slate-800">Platform</th>
            <th className="py-4 px-6 border-b border-slate-800">Primary Core Focus</th>
            <th className="py-4 px-6 border-b border-slate-800">Main Difference vs. PlusStories.com</th>
            <th className="py-4 px-6 border-b border-slate-800 text-center">Public Self-Publishing</th>
            <th className="py-4 px-6 border-b border-slate-800 text-center">Open Reader Access</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr className="bg-brand-50/50 hover:bg-brand-50 transition-colors font-medium">
            <td className="py-4 px-6 text-brand-900 font-bold flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
              <span>PlusStories.com</span>
            </td>
            <td className="py-4 px-6">Multi-topic Digital Content Publication</td>
            <td className="py-4 px-6 text-slate-600">Curated editorial articles spanning Tech, Business, Health, Decor & Services</td>
            <td className="py-4 px-6 text-center text-slate-500 font-normal">Selective / Guidelines</td>
            <td className="py-4 px-6 text-center text-emerald-600 font-semibold flex justify-center items-center">
              <Check className="w-5 h-5" />
            </td>
          </tr>
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="py-4 px-6 font-semibold text-slate-900">Medium</td>
            <td className="py-4 px-6">Blogging & Writer Essays</td>
            <td className="py-4 px-6 text-slate-600">Open self-publishing platform with paywall member program</td>
            <td className="py-4 px-6 text-center text-emerald-600">
              <Check className="w-5 h-5 mx-auto" />
            </td>
            <td className="py-4 px-6 text-center text-amber-600 font-medium">Partial (Paywall)</td>
          </tr>
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="py-4 px-6 font-semibold text-slate-900">WordPress.com</td>
            <td className="py-4 px-6">Personal & Business Websites</td>
            <td className="py-4 px-6 text-slate-600">Full CMS control requiring custom domain, hosting, and design setup</td>
            <td className="py-4 px-6 text-center text-emerald-600">
              <Check className="w-5 h-5 mx-auto" />
            </td>
            <td className="py-4 px-6 text-center text-emerald-600">
              <Check className="w-5 h-5 mx-auto" />
            </td>
          </tr>
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="py-4 px-6 font-semibold text-slate-900">Wattpad</td>
            <td className="py-4 px-6">Fiction & Serialized Stories</td>
            <td className="py-4 px-6 text-slate-600">Dedicated creative writing community focused on novels and fanfiction</td>
            <td className="py-4 px-6 text-center text-emerald-600">
              <Check className="w-5 h-5 mx-auto" />
            </td>
            <td className="py-4 px-6 text-center text-emerald-600">
              <Check className="w-5 h-5 mx-auto" />
            </td>
          </tr>
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="py-4 px-6 font-semibold text-slate-900">Substack</td>
            <td className="py-4 px-6">Email Newsletters</td>
            <td className="py-4 px-6 text-slate-600">Direct creator-to-subscriber email publishing with paid memberships</td>
            <td className="py-4 px-6 text-center text-emerald-600">
              <Check className="w-5 h-5 mx-auto" />
            </td>
            <td className="py-4 px-6 text-center text-amber-600 font-medium">Partial (Subscribers)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
