'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import DietarySection from '../components/DietarySection';
import Reviews from '../components/Reviews';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';
import FloatingBakeryItems from '../components/FloatingBakeryItems';
import { bakeryInfo } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ShoppingBag, MessageCircle, ArrowUp } from 'lucide-react';

export default function HomeClient() {
  const { totalCartCount, isCartOpen, setIsCartOpen } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    <div className="min-h-screen bg-[#FFB7C5] flex flex-col selection:bg-[#79A03F] selection:text-white w-full overflow-x-hidden relative">
      {/* Decorative Subtle Background Animation */}
      <FloatingBakeryItems />

      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Content Landmark */}
      <main id="main-content" role="main" className="flex-1 bg-transparent w-full relative z-10">
        {/* 1. Hero Section */}
        <Hero onExploreMenu={scrollToFeatured} />

        {/* 2. Dietary & Craftsmanship */}
        <DietarySection />

        {/* 3. Featured Bestsellers */}
        <FeaturedProducts />

        {/* 4. Instagram Showcase */}
        <InstagramFeed />

        {/* 5. Reviews (Loved in Lahore - above footer) */}
        <Reviews />
      </main>

      {/* 3. Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Floating Action: WhatsApp */}
      <div className="fixed bottom-4 left-4 z-40">
        <a
          href={`https://wa.me/${bakeryInfo.whatsappRaw}?text=Hi%20cream.%20Bakery!%20I%20have%20a%20question%20about%20ordering`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#79A03F] text-white shadow-lg hover:bg-[#628233] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white"
          aria-label="Direct WhatsApp message to cream. bakery"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>

      {/* Floating Actions: Cart & Scroll to Top */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
        {totalCartCount > 0 && !isCartOpen && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="h-11 px-4 rounded-full btn-olive shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
            aria-label={`View shopping cart with ${totalCartCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-white" aria-hidden="true" />
            <span className="text-xs font-bold">
              {totalCartCount} item{totalCartCount > 1 ? 's' : ''}
            </span>
          </button>
        )}

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full bg-white text-[#2D1E18] shadow-md border border-[#2D1E18]/10 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
