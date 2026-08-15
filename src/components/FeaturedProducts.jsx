'use client';

import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { initialProducts } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProducts() {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const featured = initialProducts.slice(0, 4);

  return (
    <section
      id="featured-treats"
      aria-labelledby="featured-heading"
      className="py-10 sm:py-14 md:py-18 w-full bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <header className="flex items-center justify-between gap-4 mb-6 sm:mb-8 pb-1">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#79A03F] block">
              Artisanal Favorites
            </span>
            <h2
              id="featured-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D1E18] font-display"
            >
              Signature Bestsellers
            </h2>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#79A03F] hover:text-[#628233] transition-colors flex-shrink-0"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </header>

        {/* Semantic Product List with Stretched Equal-Height Cards */}
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full items-stretch">
          {featured.map((product) => (
            <li key={product.id} className="h-full flex flex-col">
              <ProductCard
                product={product}
                onAddToCart={addToCart}
                onUpdateQuantity={updateQuantity}
                cartQuantity={getItemQuantity(product.id)}
              />
            </li>
          ))}
        </ul>

        {/* Minimalist, Compact Menu Discovery Link */}
        <nav aria-label="Menu navigation" className="mt-8 sm:mt-10 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full btn-olive text-xs font-bold shadow-xs transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore All 6 Bakes & Boxes</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </nav>

      </div>
    </section>
  );
}
