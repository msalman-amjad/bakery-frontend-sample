import React from 'react';
import MenuClient from './MenuClient';

export const metadata = {
  title: 'Full Bakery Menu & Treats',
  description: 'Explore the complete artisanal bakery menu for cream. in Lahore. Belgian dark chocolate brownies, Lotus Biscoff treats, gluten-free caramel brownies, and cinnamon rolls.',
  alternates: {
    canonical: 'https://cream.pk/menu',
  },
  openGraph: {
    title: 'Full Bakery Menu & Treats | cream. Artisanal Bakery Lahore',
    description: 'Explore gourmet Belgian brownies, gluten-free bakes, cinnamon rolls, and eggless loaves in Lahore.',
    url: 'https://cream.pk/menu',
    type: 'website',
  },
};

const menuJsonLd = {
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
      name: 'Menu',
      item: 'https://cream.pk/menu',
    },
  ],
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <MenuClient />
    </>
  );
}
