'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Minus, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({
  product,
  onAddToCart,
  onUpdateQuantity,
  cartQuantity,
}) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const [imageSrc, setImageSrc] = useState(product.image);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setImageSrc(product.image);
  }, [product.image]);

  // Compute quantity from prop or CartContext
  const quantity = cartQuantity !== undefined ? cartQuantity : getItemQuantity(product.id);

  const handleImageError = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    if (product.fallbackImage && imageSrc !== product.fallbackImage) {
      setImageSrc(product.fallbackImage);
    } else {
      setImageSrc(
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23FFF0F3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%2379A03F'%3E%F0%9F%A7%81%3C/text%3E%3C/svg%3E"
      );
    }
  };

  const handlePlus = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      addToCart(product);
    }
  };

  const handleMinus = (e) => {
    e.stopPropagation();
    if (quantity <= 0) return; // Prevent going below 0

    const newQty = quantity - 1;
    if (onUpdateQuantity) {
      onUpdateQuantity(product.id, newQty);
    } else {
      updateQuantity(product.id, newQty);
    }
  };

  const getDietaryBadge = (dietary) => {
    switch (dietary) {
      case 'Gluten-Free':
        return (
          <span className="px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[11px] font-black tracking-wide bg-[#79A03F]/20 text-[#496522] border border-[#79A03F]/50 flex items-center gap-1 shadow-xs truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#79A03F] animate-pulse flex-shrink-0" />
            <span className="truncate">Gluten-Free</span>
          </span>
        );
      case 'Egg-Free':
        return (
          <span className="px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[11px] font-black tracking-wide bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-xs truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse flex-shrink-0" />
            <span className="truncate">Egg-Free</span>
          </span>
        );
      default:
        return (
          <span className="px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[11px] font-bold bg-[#FFCCD5] text-[#2D1E18] border border-[#2D1E18]/15 truncate">
            Classic
          </span>
        );
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border-2 border-[#79A03F]/20 hover:border-[#79A03F] p-2.5 xs:p-3 sm:p-5 transition-all duration-300 hover:shadow-xl hover:shadow-[#2D1E18]/10 hover:-translate-y-1 w-full overflow-hidden">
      {/* Top Image Container */}
      <div className="space-y-2 sm:space-y-4">
        <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#FFF0F3] border border-[#2D1E18]/10">
          <img
            src={imageSrc}
            alt={product.name}
            onError={handleImageError}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Top Floating Badges */}
          <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 right-1.5 sm:right-2.5 flex items-center justify-between gap-1 pointer-events-none">
            {/* Dietary Badge */}
            {getDietaryBadge(product.dietary)}

            {/* Signature / pieces badge */}
            {product.badge && (
              <span className="hidden xs:inline-block px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase bg-white/95 text-[#2D1E18] border border-[#2D1E18]/15 shadow-xs truncate">
                {product.badge}
              </span>
            )}
          </div>

          {/* Quick info toggle trigger */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="absolute bottom-1.5 sm:bottom-2.5 right-1.5 sm:right-2.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/90 text-[#2D1E18] hover:text-[#79A03F] hover:bg-white shadow-md flex items-center justify-center transition-all cursor-pointer z-10"
            title="View ingredients"
            aria-label="View ingredients"
          >
            <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Product Details */}
        <div className="space-y-1 sm:space-y-2">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#79A03F] bg-[#79A03F]/10 px-1.5 sm:px-2 py-0.5 rounded truncate">
              {product.category}
            </span>
            <span className="text-[9px] sm:text-[11px] font-bold text-[#2D1E18]/60 truncate">
              {product.pieces || 'Fresh Batch'}
            </span>
          </div>

          <h3 className="text-xs sm:text-base font-black text-[#2D1E18] font-display tracking-tight leading-snug group-hover:text-[#79A03F] transition-colors line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
            {product.name}
          </h3>

          <p className="hidden sm:block text-xs text-[#2D1E18]/80 line-clamp-2 leading-relaxed font-medium">
            {product.description}
          </p>

          {/* Ingredients Collapsible Popup */}
          {showDetails && (
            <div className="mt-1 sm:mt-2 p-2 sm:p-3 rounded-xl bg-[#FFF0F3] border border-[#2D1E18]/10 text-[10px] sm:text-xs text-[#2D1E18] space-y-0.5 animate-in fade-in duration-200">
              <span className="font-extrabold text-[#79A03F] block text-[9px] sm:text-[11px] uppercase tracking-wider">
                Crafted With:
              </span>
              <p className="text-[10px] sm:text-[11px] leading-relaxed text-[#2D1E18]/90 font-medium">
                {product.ingredients}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Price & Compact Action Stepper */}
      <div className="pt-2 sm:pt-4 mt-2 sm:mt-3 border-t border-slate-100 flex items-center justify-between gap-1.5">
        <div className="flex-shrink-0 min-w-0">
          <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#2D1E18]/60 block leading-none mb-0.5">
            Price
          </span>
          <div className="text-xs xs:text-sm sm:text-base md:text-lg font-black text-[#2D1E18] font-display whitespace-nowrap">
            Rs. {product.price.toLocaleString()}
          </div>
        </div>

        {/* Dynamic Stepper: Compact & Snug Together */}
        <div className="flex-shrink-0">
          {quantity > 0 ? (
            <div className="inline-flex items-center gap-0.5 sm:gap-1.5 bg-[#FFF0F3] border-2 border-[#79A03F] rounded-lg sm:rounded-2xl p-0.5 sm:p-1 shadow-2xs">
              <button
                onClick={handleMinus}
                className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-white border border-[#79A03F]/40 text-[#79A03F] hover:bg-[#79A03F] hover:text-white font-black flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs"
                aria-label="Decrease quantity"
                title="Decrease quantity"
              >
                <Minus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              </button>

              <span className="text-[11px] xs:text-xs sm:text-sm font-black text-[#2D1E18] px-1 sm:px-1.5 min-w-[1rem] sm:min-w-[1.2rem] text-center font-display leading-none">
                {quantity}
              </span>

              <button
                onClick={handlePlus}
                className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-[#79A03F] text-white font-black flex items-center justify-center hover:bg-[#628233] transition-colors cursor-pointer active:scale-90 shadow-2xs"
                aria-label="Increase quantity"
                title="Increase quantity"
              >
                <Plus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={handlePlus}
              className="px-2.5 xs:px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl btn-olive text-[10px] xs:text-[11px] sm:text-xs font-black inline-flex items-center justify-center gap-1 shadow-xs cursor-pointer active:scale-95 transition-all whitespace-nowrap"
            >
              <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
