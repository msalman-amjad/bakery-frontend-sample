'use client';

import React from 'react';
import { ArrowDown, Sparkles, Star, ShieldCheck, ChefHat, Check } from 'lucide-react';

export default function Hero({ onExploreMenu }) {
  return (
    <section className="relative overflow-hidden pt-4 pb-10 sm:pt-10 sm:pb-20 md:pt-14 md:pb-24 bg-[#FFB7C5] w-full">
      {/* Decorative subtle background accents (contained with overflow-hidden) */}
      <div className="absolute top-10 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-white/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-52 sm:w-80 h-52 sm:h-80 bg-[#79A03F]/12 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy, Badges & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Top Badges: Lahore & Processing Time */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold bg-white text-[#2D1E18] border border-[#2D1E18]/15 shadow-2xs">
                <span>📍</span>
                <span>Lahore based</span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold bg-white text-[#79A03F] border border-[#79A03F]/40 shadow-2xs">
                <span>⏳</span>
                <span>Order Processing: 2-3 Days</span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold bg-[#79A03F] text-white shadow-2xs">
                <Sparkles className="w-3 h-3" />
                <span>Small Batch Artisan</span>
              </span>
            </div>

            {/* Main Hero Heading */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-[#2D1E18] font-display tracking-tight leading-[1.15]">
                Freshly Baked Goodness, <br className="hidden xs:inline" />
                <span className="text-[#79A03F] underline decoration-wavy decoration-[#79A03F]/40">
                  Crafted Just for You.
                </span>
              </h1>

              <p className="text-xs sm:text-base text-[#2D1E18]/90 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Handcrafted small-batch brownies, gooey cinnamon rolls, and rich espresso loaves in Lahore. 
                Baked from scratch upon order with 100% Belgian couverture chocolate and pure French butter.
              </p>
            </div>

            {/* Prominent Dietary Tags Badge Bar */}
            <div className="p-3 sm:p-4 rounded-2xl bg-white/90 border border-[#2D1E18]/10 shadow-xs space-y-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-between text-xs font-bold text-[#2D1E18]/80">
                <span className="flex items-center gap-1 text-[#2D1E18] uppercase tracking-wider text-[10px] sm:text-[11px] font-black">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#79A03F]" />
                  Dietary Inclusivity
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#79A03F]">Dedicated Preparation</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[10px] sm:text-xs font-extrabold bg-[#FFCCD5] text-[#2D1E18] border border-[#2D1E18]/10 flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#79A03F]" />
                  Normal / Classic
                </span>
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[10px] sm:text-xs font-extrabold bg-[#79A03F]/15 text-[#628233] border border-[#79A03F]/40 flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#79A03F]" />
                  Gluten-Free Options
                </span>
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[10px] sm:text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#79A03F]" />
                  Egg-Free Options
                </span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 rounded-2xl btn-olive text-xs sm:text-base font-extrabold flex items-center justify-center gap-2 shadow-md shadow-[#79A03F]/30 hover:shadow-lg cursor-pointer transition-all active:scale-98 group"
              >
                <span>Explore the Menu</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/923001234567?text=Hi%20cream.%20Bakery!%20I%20would%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-7 py-3 sm:py-4 rounded-2xl btn-olive-outline text-xs sm:text-base font-extrabold flex items-center justify-center gap-2 shadow-xs cursor-pointer hover:shadow-sm transition-all"
              >
                <span>WhatsApp Order</span>
                <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-[#79A03F]/15 text-[#79A03F] font-bold">Fast</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-2.5 sm:pt-3 border-t border-[#2D1E18]/15 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-base sm:text-2xl font-black text-[#2D1E18] font-display">500+</div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#2D1E18]/70">Boxes Delivered</div>
              </div>
              <div className="text-center lg:text-left border-x border-[#2D1E18]/15 px-1 sm:px-2">
                <div className="text-base sm:text-2xl font-black text-[#79A03F] font-display flex items-center justify-center lg:justify-start gap-0.5 sm:gap-1">
                  <span>5.0</span>
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#79A03F] text-[#79A03F]" />
                </div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#2D1E18]/70">Lahore Ratings</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-base sm:text-2xl font-black text-[#2D1E18] font-display">100%</div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#2D1E18]/70">Fresh Baked</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Featured Desserts */}
          <div className="lg:col-span-5 relative flex flex-col items-center w-full max-w-sm sm:max-w-md mx-auto pt-2 sm:pt-0">
            
            {/* Top Review badge */}
            <div className="w-full flex justify-start -mb-3 z-20 px-2 sm:px-0">
              <div className="bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-md border-2 border-[#79A03F] inline-flex items-center gap-2 max-w-full">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#79A03F]/15 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm">
                  🧁
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-0.5 text-[#79A03F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#79A03F] text-[#79A03F]" />
                    ))}
                    <span className="text-[9px] sm:text-[10px] font-black ml-1 text-[#2D1E18]">5.0</span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-[#2D1E18] leading-tight truncate">
                    &ldquo;Best brownies in Lahore!&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Main Featured Dessert Card */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl bg-white p-3.5 sm:p-5 shadow-xl border-2 border-[#79A03F]/30 hover:border-[#79A03F] transition-all duration-300">
              
              {/* Product Image */}
              <div className="relative h-48 xs:h-56 sm:h-64 md:h-72 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 group">
                <img
                  src="/images/chocolate_fudge_brownie.jpg"
                  alt="Belgian Chocolate Brownies"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                
                {/* Badges on image */}
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black bg-[#79A03F] text-white shadow-md">
                    ★ Signature Batch
                  </span>
                </div>

                <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-200 uppercase tracking-wider block">
                    Fresh Belgian Couverture
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg font-black leading-tight text-white drop-shadow-md truncate">
                    Classic Chocolate Fudge Brownies
                  </h3>
                </div>
              </div>

              {/* Card Bottom Details */}
              <div className="pt-3 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#2D1E18]/60 block leading-none mb-0.5">Box of 4 Slabs</span>
                    <div className="text-lg sm:text-2xl font-black text-[#2D1E18] font-display leading-tight">
                      Rs. 1,200
                    </div>
                  </div>

                  <a
                    href="#menu"
                    className="px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl btn-olive text-[11px] sm:text-xs font-black flex items-center gap-1 shadow-xs whitespace-nowrap flex-shrink-0 cursor-pointer"
                  >
                    <span>View Box</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs text-[#2D1E18]/80 font-bold gap-1">
                  <span className="flex items-center gap-1 truncate">
                    <ChefHat className="w-3.5 h-3.5 text-[#79A03F] flex-shrink-0" />
                    <span className="truncate">Pure French Butter</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#79A03F] flex-shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Zero Preservatives</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Dispatch note - cleanly integrated below the card */}
            <div className="w-full flex justify-end -mt-2.5 z-20 px-2 sm:px-0">
              <div className="bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 shadow-md border border-[#2D1E18]/15 inline-flex items-center gap-1.5 max-w-full">
                <span className="text-sm sm:text-base">🛵</span>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-black text-[#2D1E18] block leading-none">Lahore Dispatches</span>
                  <span className="text-[8px] sm:text-[10px] font-bold text-[#79A03F] block leading-tight truncate">DHA • Gulberg • Cantt • Johar</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
