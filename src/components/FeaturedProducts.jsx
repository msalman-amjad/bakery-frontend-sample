'use client';

import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { initialProducts } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';

export default function FeaturedProducts() {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  
  // Pick the top 4 signature/bestseller items for the Home Page
  const featured = initialProducts.slice(0, 4);

  return (
    <section id="featured-treats" className="py-12 sm:py-16 md:py-24 relative bg-[#FFB7C5] w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#79A03F] border border-[#79A03F]/30 text-[11px] sm:text-xs font-extrabold shadow-xs">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Lahore Favorites</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D1E18] font-display tracking-tight">
              Signature Bestsellers<span className="text-[#79A03F]">.</span>
            </h2>

            <p className="text-xs sm:text-base text-[#2D1E18]/85 font-medium max-w-xl">
              Our most-craved artisanal batches. Baked from scratch with pure Belgian couverture chocolate.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl btn-olive-outline text-xs sm:text-sm font-black shadow-xs cursor-pointer hover:shadow-md transition-all flex-shrink-0"
          >
            <span>View Full Menu & All Treats</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-column mobile, 4-column desktop grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onUpdateQuantity={updateQuantity}
              cartQuantity={getItemQuantity(product.id)}
            />
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#79A03F]/30 p-6 sm:p-8 shadow-md text-center space-y-4">
          <div className="max-w-xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-1 text-[#79A03F] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Looking for Cake Loafs or Custom Boxes?</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-[#2D1E18] font-display">
              Explore Our Complete Artisanal Collection
            </h3>
            <p className="text-xs sm:text-sm text-[#2D1E18]/80 font-medium">
              Discover our espresso chocolate loaf, gluten-free caramel brownies, and 6-pack cinnamon rolls.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl btn-olive text-xs sm:text-sm font-extrabold shadow-md shadow-[#79A03F]/30 hover:shadow-lg cursor-pointer"
          >
            <span>Browse Full Bakery Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
