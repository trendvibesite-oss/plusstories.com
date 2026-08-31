import React from 'react';

export const JsonLdSchema: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PlusStories",
    "url": "https://plusstories.com",
    "logo": "https://plusstories.com/images/logo.jpg",
    "description": "PlusStories.com is a premier multi-topic digital content publication providing in-depth articles across Business, Technology, Healthcare, Services, and Home Decor.",
    "sameAs": [
      "https://twitter.com/plusstories",
      "https://facebook.com/plusstories"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PlusStories.com",
    "url": "https://plusstories.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://plusstories.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};
