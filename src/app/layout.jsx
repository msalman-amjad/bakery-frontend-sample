import './globals.css';
import { CartProvider } from '../context/CartContext';
import { bakeryInfo } from '../data/menuData';

export const metadata = {
  metadataBase: new URL('https://cream.pk'),
  title: {
    default: 'cream. — Artisanal Bakery | Lahore',
    template: '%s | cream. Bakery Lahore',
  },
  description: 'Small-batch artisanal bakery based in Lahore. Fresh gourmet Belgian brownies, cinnamon rolls, and espresso loaves with dedicated gluten-free and egg-free options.',
  keywords: [
    'cream bakery',
    'artisanal bakery lahore',
    'belgian brownies lahore',
    'gluten free brownies lahore',
    'cinnamon rolls lahore',
    'eggless cake lahore',
    'fresh bakes lahore',
    'gourmet desserts lahore',
  ],
  authors: [{ name: 'cream. Artisanal Bakery' }],
  creator: 'cream.',
  publisher: 'cream.',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'cream. — Artisanal Bakery | Lahore',
    description: 'Fresh small-batch artisanal bakery in Lahore. Gourmet Belgian brownies, cinnamon rolls, and eggless loaves.',
    url: 'https://cream.pk',
    siteName: 'cream. Artisanal Bakery',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'cream. — Artisanal Bakery | Lahore',
    description: 'Small-batch artisanal bakery in Lahore. Gourmet Belgian chocolate brownies & fresh cinnamon rolls.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧁</text></svg>',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFB7C5',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'cream. Artisanal Bakery',
  description: 'Small-batch artisanal bakery in Lahore specializing in Belgian dark chocolate brownies, fresh cinnamon rolls, and eggless espresso loaves.',
  url: 'https://cream.pk',
  telephone: bakeryInfo.whatsappNumber,
  email: bakeryInfo.email,
  priceRange: '₨₨',
  servesCuisine: ['Bakery', 'Desserts', 'Artisanal Pastries', 'Gluten-Free', 'Egg-Free'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  areaServed: bakeryInfo.deliveryAreas.map((area) => ({
    '@type': 'City',
    name: `${area}, Lahore`,
  })),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FFB7C5] text-[#2D1E18] font-sans antialiased selection:bg-[#79A03F] selection:text-white min-h-screen overflow-x-hidden w-full relative">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
