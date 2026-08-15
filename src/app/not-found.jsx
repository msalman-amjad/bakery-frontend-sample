'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Home, ShoppingBag, MessageCircle } from 'lucide-react';
import { bakeryInfo } from '../data/menuData';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFB7C5] flex flex-col selection:bg-[#79A03F] selection:text-white w-full overflow-x-hidden">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 w-full bg-[#FFB7C5]">
        <div className="max-w-md w-full text-center space-y-4 bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#79A03F]/20 shadow-xl">
          
          <div className="w-14 h-14 rounded-full bg-[#FFF0F3] flex items-center justify-center mx-auto text-2xl">
            🧁
          </div>

          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-black text-[#2D1E18] font-display">
              Page Not Found
            </h1>
            <p className="text-xs text-[#2D1E18]/70 font-medium">
              The treat you are looking for might have moved or is no longer available.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <Link
              href="/"
              className="h-9 px-4 rounded-full btn-olive text-xs font-bold inline-flex items-center justify-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Back Home</span>
            </Link>

            <Link
              href="/menu"
              className="h-9 px-4 rounded-full btn-olive-outline text-xs font-bold inline-flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>View Menu</span>
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href={`https://wa.me/${bakeryInfo.whatsappRaw}?text=Hi%20cream.%20Bakery!%20I%20hit%20a%20broken%20link%20and%20need%20help`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#79A03F] hover:text-[#628233]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Need help? Message us on WhatsApp</span>
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
