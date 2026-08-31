import React from 'react';

export const metadata = {
  title: 'Privacy Policy | PlusStories.com Official Domain Guidelines',
  description: 'Official Privacy Policy for PlusStories.com explaining data collection, cookie usage, and user privacy protection.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-sm mt-2">
          Effective Date: August 31, 2026 | Last Updated: August 31, 2026
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p>
          At <strong>PlusStories.com</strong>, reachable from <code>https://plusstories.com</code>, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information collected and recorded by PlusStories.com and how we utilize it.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">1. Log Files</h2>
        <p>
          PlusStories.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">2. Cookies and Web Beacons</h2>
        <p>
          Like any other website, PlusStories.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">3. Third Party Privacy Policies</h2>
        <p>
          PlusStories.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers or analytics partners for more detailed information.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">4. Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
      </div>
    </div>
  );
}
