"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
          <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
          <p className="text-slate-600 max-w-md mx-auto">
            Thank you for contacting the editorial team at <strong>PlusStories.com</strong>. We review all inquiries within 24-48 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 bg-brand-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-brand-700 transition-colors text-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all text-slate-900 text-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all text-slate-900 text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Inquiry Subject <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Editorial Feedback, Content Inquiry, Verification"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all text-slate-900 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Your Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              placeholder="Provide specific details regarding your inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all text-slate-900 text-sm outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-brand-500/20 flex items-center justify-center space-x-2 text-sm"
          >
            <Send className="w-4 h-4" />
            <span>Submit Inquiry to PlusStories.com</span>
          </button>
        </form>
      )}
    </div>
  );
};
