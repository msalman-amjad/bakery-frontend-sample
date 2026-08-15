import React from 'react';
import HowItWorksClient from './HowItWorksClient';

export const metadata = {
  title: 'How It Works & Ordering Process',
  description: 'Learn how to order handcrafted Belgian brownies, cinnamon rolls, and eggless loaves from cream. Artisanal Bakery in Lahore. 2-3 days fresh bake cycle.',
  alternates: {
    canonical: 'https://cream.pk/how-it-works',
  },
  openGraph: {
    title: 'How It Works & Ordering Process | cream. Artisanal Bakery Lahore',
    description: 'Learn how our small-batch fresh bake cycle and Lahore delivery work.',
    url: 'https://cream.pk/how-it-works',
    type: 'website',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://cream.pk',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'How It Works',
      item: 'https://cream.pk/how-it-works',
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HowItWorksClient />
    </>
  );
}
