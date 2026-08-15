'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import MenuSection from '../../components/MenuSection';
import Footer from '../../components/Footer';
import FloatingBakeryItems from '../../components/FloatingBakeryItems';
import { initialProducts, bakeryInfo } from '../../data/menuData';
import { useCart } from '../../context/CartContext';
import { ChevronRight, Home, ShoppingBag, MessageCircle, ArrowUp } from 'lucide-react';

export default function MenuClient() {
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
    <div className="min-h-screen bg-[#FFB7C5] flex flex-col selection:bg-[#79A03F] selection:text-white w-full overflow-x-hidden relative">
      {/* Decorative Subtle Background Animation */}
      <FloatingBakeryItems />

      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Landmark */}
      <main id="main-content" role="main" className="flex-1 bg-transparent w-full relative z-10">
        
        {/* Semantic Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="border-b border-[#2D1E18]/10 py-2.5 sm:py-3.5 bg-[#FFB7C5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            <ol role="list" className="flex items-center gap-1.5 text-xs text-[#2D1E18]/80 font-bold">
              <li>
                <Link href="/" className="hover:text-[#79A03F] flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3 text-[#2D1E18]/40" />
              </li>
              <li>
                <span aria-current="page" className="text-[#2D1E18] font-black">
                  Menu
                </span>
              </li>
            </ol>

            <div className="text-[11px] text-[#2D1E18]/80 font-bold">
              Lahore Delivery · 2-3 Days
            </div>

          </div>
        </nav>

        {/* Complete Menu Catalog */}
        <div className="pb-12 sm:pb-16 bg-transparent">
          <MenuSection
            products={initialProducts}
            isStandalonePage={true}
          />
        </div>

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
            aria-label="Scroll to top of menu"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
