import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | PlusStories.com Editorial & Reader Inquiries',
  description: 'Get in touch with the editorial team at PlusStories.com for inquiries, feedback, and editorial submissions.',
};

export default function ContactPage() {
  return (
    <div className="py-12 space-y-12">
      
      {/* Contact Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Contact <span className="text-brand-400">PlusStories.com</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We value feedback from our readers, researchers, and prospective contributors. Reach out to our editorial desk.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Editorial Contact Information
              </h2>
              
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Official Domain</div>
                    <div className="text-slate-600">https://plusstories.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Inquiry Types</div>
                    <div className="text-slate-600">Editorial Feedback, Corrections, Contributor Guidelines, Safety Verification</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Response Window</div>
                    <div className="text-slate-600">24 – 48 Business Hours</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
                <strong>Notice:</strong> PlusStories.com does not request sensitive financial credentials or password data via email forms.
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
