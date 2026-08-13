'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowToOrder from '../components/HowToOrder';
import FeaturedProducts from '../components/FeaturedProducts';
import DietarySection from '../components/DietarySection';
import Reviews from '../components/Reviews';
import InstagramFeed from '../components/InstagramFeed';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import { bakeryInfo } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ShoppingBag, MessageCircle, ArrowUp } from 'lucide-react';

export default function HomePage() {
  const { totalCartCount, isCartOpen, setIsCartOpen } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top watcher
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatured = () => {
    const el = document.getElementById('featured-treats');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFB7C5] flex flex-col selection:bg-[#79A03F] selection:text-white w-full overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-1 bg-[#FFB7C5] w-full">
        {/* 1. Hero Section */}
        <Hero onExploreMenu={scrollToFeatured} />

        {/* 2. How to Order / How It Works (Moved ABOVE the items section as requested) */}
        <HowToOrder />

        {/* 3. Featured Products Showcase (Signature Bestsellers with Link to Full /menu) */}
        <FeaturedProducts />

        {/* 4. Dietary & Craftsmanship Spotlight */}
        <DietarySection />

        {/* 5. Customer Reviews from Lahore */}
        <Reviews />

        {/* 6. Instagram Showcase @creampk._ */}
        <InstagramFeed />

        {/* 7. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-3 left-3 sm:bottom-6 sm:left-6 z-40 flex flex-col gap-2">
        {/* WhatsApp Direct Chat Bubble */}
        <a
          href={`https://wa.me/${bakeryInfo.whatsappRaw}?text=Hi%20cream.%20Bakery!%20I%20have%20a%20question%20about%20ordering`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#79A03F] text-white shadow-xl hover:bg-[#628233] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-white"
          aria-label="Direct WhatsApp message"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:block absolute left-full ml-3 px-3 py-1 rounded-xl bg-white text-[#2D1E18] text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-[#2D1E18]/10">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Floating Cart Quick Trigger & Scroll to Top */}
      <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
        {totalCartCount > 0 && !isCartOpen && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full btn-olive shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 relative border-2 border-white cursor-pointer"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="absolute -top-1 -right-1 bg-white text-[#79A03F] text-[9px] sm:text-xs font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-md border border-[#79A03F]">
              {totalCartCount}
            </span>
          </button>
        )}

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#2D1E18] hover:bg-[#FFFDF9] shadow-md flex items-center justify-center transition-all duration-300 hover:scale-105 border border-[#2D1E18]/15 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
