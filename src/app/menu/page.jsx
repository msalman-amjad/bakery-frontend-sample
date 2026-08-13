'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import MenuSection from '../../components/MenuSection';
import Footer from '../../components/Footer';
import { initialProducts, bakeryInfo } from '../../data/menuData';
import { useCart } from '../../context/CartContext';
import { ChevronRight, Home, ShoppingBag, MessageCircle, ArrowUp, MapPin, Clock } from 'lucide-react';

export default function MenuPage() {
  const { totalCartCount, isCartOpen, setIsCartOpen } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFB7C5] flex flex-col selection:bg-[#79A03F] selection:text-white w-full overflow-x-hidden">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Main Page: Breadcrumb + Products & Search Catalog ONLY */}
      <main className="flex-1 bg-[#FFB7C5] w-full">
        
        {/* Breadcrumb Bar */}
        <div className="bg-[#F49EAF]/50 border-b border-[#2D1E18]/10 py-3.5 sm:py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              {/* Breadcrumb Links */}
              <nav className="flex items-center gap-1.5 text-xs font-bold text-[#2D1E18]/70" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#79A03F] flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#2D1E18]/40" />
                <span className="text-[#79A03F] font-black">Bakery Menu & Treats</span>
              </nav>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold text-[#2D1E18]">
                <span className="inline-flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-full border border-[#2D1E18]/10 shadow-2xs">
                  <MapPin className="w-3 h-3 text-[#79A03F]" />
                  <span>Lahore Delivery</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-full border border-[#2D1E18]/10 shadow-2xs text-[#79A03F]">
                  <Clock className="w-3 h-3" />
                  <span>2-3 Days Fresh Cycle</span>
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Dedicated Complete Product Menu Section with Search, Category Tabs, Dietary Pills & Grid */}
        <div className="pb-16">
          <MenuSection
            products={initialProducts}
            isStandalonePage={true}
          />
        </div>

      </main>

      {/* 3. Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 left-3 sm:bottom-6 sm:left-6 z-40 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${bakeryInfo.whatsappRaw}?text=Hi%20cream.%20Bakery!%20I%20have%20a%20question%20about%20ordering`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#79A03F] text-white shadow-xl hover:bg-[#628233] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-white"
          aria-label="Direct WhatsApp message"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:block absolute left-full ml-3 px-3 py-1 rounded-xl bg-white text-[#2D1E18] text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-[#2D1E18]/10">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Floating Cart Quick Trigger & Scroll to Top */}
      <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        {totalCartCount > 0 && !isCartOpen && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full btn-olive shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 relative border-2 border-white cursor-pointer"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <span className="absolute -top-1 -right-1 bg-white text-[#79A03F] text-[10px] sm:text-xs font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-md border border-[#79A03F]">
              {totalCartCount}
            </span>
          </button>
        )}

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#2D1E18] hover:bg-[#FFFDF9] shadow-md flex items-center justify-center transition-all duration-300 hover:scale-105 border border-[#2D1E18]/15 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
