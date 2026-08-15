'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Runtime error caught by boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FFB7C5] flex flex-col selection:bg-[#79A03F] selection:text-white w-full overflow-x-hidden">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 w-full bg-[#FFB7C5]">
        <div className="max-w-md w-full text-center space-y-4 bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#79A03F]/20 shadow-xl">
          
          <div className="w-14 h-14 rounded-full bg-[#FFF0F3] flex items-center justify-center mx-auto text-2xl">
            🍪
          </div>

          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-black text-[#2D1E18] font-display">
              Something Went Wrong
            </h1>
            <p className="text-xs text-[#2D1E18]/70 font-medium">
              An unexpected error occurred while loading this page.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <button
              onClick={() => reset()}
              className="h-9 px-4 rounded-full btn-olive text-xs font-bold inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="h-9 px-4 rounded-full btn-olive-outline text-xs font-bold inline-flex items-center justify-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
