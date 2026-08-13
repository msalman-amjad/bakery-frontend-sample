'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Home, ArrowRight, Sparkles, MessageCircle, ShoppingBag } from 'lucide-react';
import { bakeryInfo } from '../data/menuData';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFB7C5] flex flex-col selection:bg-[#79A03F] selection:text-white w-full overflow-x-hidden">
      {/* Header with clickable Logo */}
      <Navbar />

      {/* 404 Main Container */}
      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl w-full text-center space-y-6 bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-[#79A03F]/30 shadow-2xl animate-in zoom-in-95 duration-300">
          
          {/* Playful Bakery Illustration / 404 Badge */}
          <div className="relative inline-block">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FFF0F3] border-2 border-dashed border-[#79A03F] flex items-center justify-center mx-auto text-5xl sm:text-6xl shadow-inner">
              🧁
            </div>
            <span className="absolute -bottom-2 right-0 bg-[#79A03F] text-white text-xs sm:text-sm font-black px-3 py-0.5 rounded-full shadow-md font-display">
              404
            </span>
          </div>

          {/* Error Message */}
          <div className="space-y-2.5">
            <h1 className="text-2xl sm:text-4xl font-black text-[#2D1E18] font-display tracking-tight leading-tight">
              Oops! This Treat Crumbled Away<span className="text-[#79A03F]">.</span>
            </h1>
            <p className="text-xs sm:text-base text-[#2D1E18]/80 font-medium max-w-md mx-auto leading-relaxed">
              We couldn’t find the page you’re looking for. It might have been devoured fresh from the morning oven or moved.
            </p>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl btn-olive text-xs sm:text-sm font-extrabold shadow-md shadow-[#79A03F]/25 hover:shadow-lg cursor-pointer transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl btn-olive-outline text-xs sm:text-sm font-extrabold shadow-xs cursor-pointer hover:shadow-md transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Browse Full Menu</span>
            </Link>
          </div>

          {/* Quick WhatsApp Help */}
          <div className="pt-4 border-t border-slate-100">
            <a
              href={`https://wa.me/${bakeryInfo.whatsappRaw}?text=Hi%20cream.%20Bakery!%20I%20hit%20a%20broken%20link%20and%20need%20help`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#79A03F] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Need help finding something? Ask us on WhatsApp</span>
            </a>
          </div>

        </div>
      </main>

      {/* Footer with clickable Logo */}
      <Footer />
    </div>
  );
}
