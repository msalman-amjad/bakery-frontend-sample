'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { RefreshCw, Home, AlertCircle } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log runtime error details safely
    console.error('Runtime error caught by boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FFB7C5] flex flex-col selection:bg-[#79A03F] selection:text-white w-full overflow-x-hidden">
      {/* Header with Clickable Logo */}
      <Navbar />

      {/* Main Error Body */}
      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-md w-full text-center space-y-6 bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 border-2 border-[#79A03F]/30 shadow-2xl animate-in zoom-in-95 duration-300">
          
          {/* Bakery Error Icon */}
          <div className="relative inline-block">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFF0F3] border-2 border-dashed border-amber-400 flex items-center justify-center mx-auto text-4xl sm:text-5xl shadow-inner">
              🍪
            </div>
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1 rounded-full shadow-md">
              <AlertCircle className="w-4 h-4" />
            </div>
          </div>

          {/* Error Copy */}
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#2D1E18] font-display tracking-tight leading-snug">
              Something Got a Little Crispy in the Oven!
            </h1>
            <p className="text-xs sm:text-sm text-[#2D1E18]/80 font-medium leading-relaxed">
              An unexpected glitch occurred while baking this page. Don’t worry, no chocolate was harmed!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl btn-olive text-xs sm:text-sm font-extrabold shadow-md cursor-pointer transition-all active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl btn-olive-outline text-xs sm:text-sm font-extrabold shadow-xs cursor-pointer transition-all hover:shadow-md"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
