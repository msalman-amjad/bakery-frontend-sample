'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { dietaryFilters, categoryFilters, initialProducts } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Sparkles, Search, ShieldCheck, RefreshCw } from 'lucide-react';

export default function MenuSection({ products = initialProducts, isStandalonePage = false }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDietary, setSelectedDietary] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered product list
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

  return (
    <section id="menu" className={`py-10 sm:py-16 relative scroll-mt-20 bg-[#FFB7C5] w-full ${isStandalonePage ? 'pt-4 sm:pt-8' : ''}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#79A03F] border border-[#79A03F]/30 text-[11px] sm:text-xs font-extrabold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Small-Batch Menu</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D1E18] font-display tracking-tight">
            All Baked Treats<span className="text-[#79A03F]">.</span>
          </h2>

          <p className="text-xs sm:text-base text-[#2D1E18]/85 font-medium px-2">
            Handcrafted with Belgian chocolates, rich brown sugar caramels, and dedicated gluten-free & egg-free recipes.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border-2 border-[#79A03F]/20 shadow-md mb-6 sm:mb-10 space-y-4 w-full">
          
          {/* Top Row: Search & Category Tabs */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 w-full">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
              {categoryFilters.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs md:text-sm font-extrabold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#79A03F] text-white shadow-sm'
                        : 'bg-[#FFF0F3] text-[#2D1E18] hover:bg-[#FFCCD5] border border-[#2D1E18]/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#2D1E18]/50 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search menu treats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#FFF0F3] border border-[#2D1E18]/15 text-xs sm:text-sm text-[#2D1E18] placeholder-[#2D1E18]/50 focus:outline-none focus:border-[#79A03F] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-black text-[#2D1E18]/60 hover:text-[#2D1E18]"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Bottom Row: Dietary Preference Pills */}
          <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="font-black text-[#2D1E18] flex items-center gap-1 uppercase tracking-wider text-[10px] sm:text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#79A03F]" />
                Dietary:
              </span>
              {dietaryFilters.map((diet) => {
                const isActive = selectedDietary === diet.id;
                return (
                  <button
                    key={diet.id}
                    onClick={() => setSelectedDietary(diet.id)}
                    className={`px-2.5 py-1 rounded-lg sm:rounded-xl font-extrabold text-[10px] sm:text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#79A03F] text-white shadow-xs'
                        : 'bg-[#FFF0F3] text-[#2D1E18] hover:bg-[#FFCCD5] border border-[#2D1E18]/10'
                    }`}
                  >
                    {diet.label}
                  </button>
                );
              })}
            </div>

            {/* Results counter */}
            <div className="text-[11px] sm:text-xs font-extrabold text-[#2D1E18]/70">
              Showing <span className="text-[#79A03F] font-black">{filteredProducts.length}</span> item{filteredProducts.length === 1 ? '' : 's'}
            </div>
          </div>

        </div>

        {/* Product Grid: 2 columns on mobile, 3 columns on desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 w-full">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onUpdateQuantity={updateQuantity}
                cartQuantity={getItemQuantity(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-3xl bg-white border-2 border-dashed border-[#79A03F]/40 max-w-md mx-auto space-y-3 shadow-xs">
            <div className="w-14 h-14 rounded-full bg-[#FFF0F3] text-2xl flex items-center justify-center mx-auto">
              🍪
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-black text-[#2D1E18]">No treats found</h3>
              <p className="text-xs text-[#2D1E18]/70">
                Try clearing your search or choosing another dietary filter.
              </p>
            </div>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl btn-olive text-xs font-bold shadow-xs cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
