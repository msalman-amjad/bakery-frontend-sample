'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { dietaryFilters, categoryFilters, initialProducts } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Search } from 'lucide-react';

export default function MenuSection({ products = initialProducts, isStandalonePage = false }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDietary, setSelectedDietary] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();
      
      const matchDietary =
        selectedDietary === 'all' ||
        product.dietary.toLowerCase() === selectedDietary.toLowerCase() ||
        (selectedDietary === 'Gluten-Free' && product.dietary.includes('Gluten-Free')) ||
        (selectedDietary === 'Egg-Free' && product.dietary.includes('Egg-Free'));

      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.dietary.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchDietary && matchSearch;
    });
  }, [products, selectedCategory, selectedDietary, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedDietary('all');
    setSearchQuery('');
  };

  const HeadingTag = isStandalonePage ? 'h1' : 'h2';

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className={`py-8 sm:py-12 md:py-16 w-full bg-transparent ${isStandalonePage ? 'pt-3 sm:pt-6' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <header className="text-center max-w-xl mx-auto space-y-1 mb-6 sm:mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-[#79A03F]">
            Handcrafted Selection
          </span>
          <HeadingTag
            id="menu-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D1E18] font-display"
          >
            Bakery Menu
          </HeadingTag>
          <p className="text-xs sm:text-sm text-[#2D1E18]/80 font-medium">
            Fresh Belgian chocolate bakes, gluten-free treats, and eggless loaves in Lahore.
          </p>
        </header>

        {/* Minimalist Controls */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-5 border-2 border-[#79A03F]/20 shadow-md space-y-3.5 mb-6 sm:mb-8">
          
          {/* Top Row: Search & Category Pills */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Category Pills */}
            <div
              role="group"
              aria-label="Filter products by category"
              className="flex flex-wrap items-center gap-1.5"
            >
              {categoryFilters.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    aria-pressed={isActive}
                    className={`h-8 px-3.5 rounded-full text-xs font-black transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#79A03F] text-white shadow-xs'
                        : 'bg-[#FFF0F3] text-[#2D1E18] hover:bg-[#FFCCD5] border border-[#2D1E18]/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div role="search" className="relative w-full md:w-60">
              <label htmlFor="menu-search-input" className="sr-only">
                Search bakery treats
              </label>
              <Search
                className="w-3.5 h-3.5 text-[#2D1E18]/50 absolute left-3 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                id="menu-search-input"
                type="search"
                placeholder="Search treats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-8.5 pl-8 pr-7 rounded-full bg-[#FFF0F3] border border-[#2D1E18]/15 text-xs text-[#2D1E18] placeholder-[#2D1E18]/50 focus:outline-none focus:border-[#79A03F] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-black text-[#2D1E18]/60"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Bottom Row: Dietary Options */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
            <div
              role="group"
              aria-label="Filter products by dietary preference"
              className="flex flex-wrap items-center gap-1.5"
            >
              <span className="text-[11px] font-black text-[#2D1E18] mr-0.5">
                Dietary:
              </span>
              {dietaryFilters.map((diet) => {
                const isActive = selectedDietary === diet.id;
                return (
                  <button
                    key={diet.id}
                    onClick={() => setSelectedDietary(diet.id)}
                    aria-pressed={isActive}
                    className={`h-6.5 px-2.5 rounded-full text-[10px] sm:text-[11px] font-black transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#79A03F] text-white shadow-2xs'
                        : 'bg-[#FFF0F3] text-[#2D1E18] hover:bg-[#FFCCD5] border border-[#2D1E18]/10'
                    }`}
                  >
                    {diet.label}
                  </button>
                );
              })}
            </div>

            <div aria-live="polite" className="text-[11px] font-bold text-[#2D1E18]/70">
              Showing <span className="text-[#79A03F] font-black">{filteredProducts.length}</span> item{filteredProducts.length === 1 ? '' : 's'}
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <ul role="list" className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 w-full">
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <ProductCard
                  product={product}
                  onAddToCart={addToCart}
                  onUpdateQuantity={updateQuantity}
                  cartQuantity={getItemQuantity(product.id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-10 px-4 rounded-3xl bg-white border-2 border-dashed border-[#79A03F]/40 max-w-sm mx-auto space-y-2.5">
            <div className="text-2xl" aria-hidden="true">🍪</div>
            <p className="text-xs text-[#2D1E18]/70 font-bold">No treats match your filters.</p>
            <button
              onClick={resetFilters}
              className="h-8 px-4 rounded-full btn-olive text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
