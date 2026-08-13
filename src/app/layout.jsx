import './globals.css';
import { CartProvider } from '../context/CartContext';

export const metadata = {
  title: 'cream. — Artisanal Bakery | Lahore',
  description: 'Small-batch artisanal bakery based in Lahore. Fresh gourmet Belgian brownies, cinnamon rolls, and espresso loaves with dedicated gluten-free and egg-free options.',
  keywords: 'cream bakery, lahore bakery, brownies lahore, gluten free brownies lahore, cinnamon rolls lahore, artisanal bakery lahore',
  openGraph: {
    title: 'cream. — Artisanal Bakery | Lahore',
    description: 'Fresh small-batch artisanal bakery in Lahore. Gourmet brownies, cinnamon rolls, and eggless loaves.',
    type: 'website',
    locale: 'en_US',
    siteName: 'cream.',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧁</text></svg>',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
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
