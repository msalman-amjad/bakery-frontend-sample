'use client';

import React from 'react';
import { ArrowDown, MessageCircle, Star } from 'lucide-react';
import { bakeryInfo } from '../data/menuData';

// Reusable Clean Product Showcase Card
function ProductShowcaseCard({ onExploreMenu, className = "" }) {
  return (
    <div className={`relative w-full max-w-sm mx-auto ${className}`}>
      <figure className="relative rounded-2xl sm:rounded-3xl bg-[#FFFDF9] p-3.5 sm:p-4 shadow-lg border border-[#79A03F]/25 group m-0 transition-all">
        
        {/* Product Photograph Frame */}
        <div className="relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden bg-[#FFF0F3]">
          <img
            src="/images/chocolate_fudge_brownie.jpg"
            alt="Stacked Belgian Fudge Brownies fresh from the bakery"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            width={400}
            height={300}
          />
        </div>

        {/* Clean Details Below Image */}
        <figcaption className="pt-3 pb-1 px-1 flex items-end justify-between gap-2">
          <div className="space-y-0.5 text-left">
            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#79A03F]/15 text-[#79A03F]">
              Signature Batch
            </span>
            
            <h2 className="text-sm sm:text-base font-black text-[#2D1E18] leading-tight">
              Belgian Fudge Brownies
            </h2>
            
            <p className="text-xs font-bold text-[#2D1E18]/80">
              Box of 4 Slabs - Rs. 1,200
            </p>
          </div>

          {/* Simple Solid Green Rounded Button */}
          <button
            onClick={onExploreMenu}
            aria-label="Order Box of Belgian Fudge Brownies"
            className="h-8.5 px-4 rounded-full bg-[#79A03F] hover:bg-[#628233] text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex-shrink-0 active:scale-95"
          >
            Order Box
          </button>
        </figcaption>

      </figure>
    </div>
  );
}

export default function Hero({ onExploreMenu }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-5 pb-8 sm:pt-8 sm:pb-14 md:pt-12 md:pb-18 w-full overflow-hidden bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Actions & Status Badges */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#2D1E18]/10 text-xs font-bold text-[#2D1E18] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#79A03F]" aria-hidden="true" />
              <span>Artisanal Small-Batch · Lahore</span>
            </div>

            {/* Headline & Description */}
            <div className="space-y-2">
              <h1
                id="hero-heading"
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-[#2D1E18] font-display tracking-tight leading-[1.1]"
              >
                Freshly baked, <br />
                <span className="text-[#79A03F] italic font-normal">made to order.</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#2D1E18]/85 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                Handcrafted Belgian chocolate brownies, gooey cinnamon rolls, and espresso loaves in Lahore. Baked exclusively from scratch upon confirmation.
              </p>
            </div>

            {/* Mobile / Tablet View: Brownie Card Placed Above Buttons & Status Badges */}
            <div className="block lg:hidden py-1">
              <ProductShowcaseCard onExploreMenu={onExploreMenu} />
            </div>

            {/* Compact Minimalist Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <button
                onClick={onExploreMenu}
                className="h-10 px-5 rounded-full btn-olive text-xs font-bold inline-flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
              >
                <span>Explore Menu</span>
                <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              <a
                href={`https://wa.me/${bakeryInfo.whatsappRaw}?text=Hi%20cream.%20Bakery!%20I%20would%20like%20to%20place%20an%20order`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-5 rounded-full btn-olive-outline text-xs font-bold inline-flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#79A03F]" aria-hidden="true" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Bottom Status Indicators */}
            <ul
              role="list"
              className="pt-3 sm:pt-4 border-t border-[#2D1E18]/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 text-xs text-[#2D1E18]/80 font-semibold"
            >
              <li className="flex items-center gap-1.5">
                <strong className="text-[#79A03F] font-black">100%</strong>
                <span>Belgian Couverture</span>
              </li>
              <li className="flex items-center gap-1.5">
                <strong className="text-[#79A03F] font-black">GF / Egg-Free</strong>
                <span>Chef Specials</span>
              </li>
              <li className="flex items-center gap-1.5">
                <div className="flex text-[#79A03F]" aria-hidden="true">
                  <Star className="w-3 h-3 fill-[#79A03F]" />
                </div>
                <span>5.0 Rating in Lahore</span>
              </li>
            </ul>

          </div>

          {/* Desktop Column: Brownie Card Showcase */}
          <div className="hidden lg:block lg:col-span-5">
            <ProductShowcaseCard onExploreMenu={onExploreMenu} />
          </div>

        </div>
      </div>
    </section>
  );
}
