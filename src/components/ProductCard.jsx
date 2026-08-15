'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({
  product,
  onAddToCart,
  onUpdateQuantity,
  cartQuantity,
}) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const [imageSrc, setImageSrc] = useState(product.image);

  useEffect(() => {
    setImageSrc(product.image);
  }, [product.image]);

  const quantity = cartQuantity !== undefined ? cartQuantity : getItemQuantity(product.id);

  const handleImageError = () => {
    if (product.fallbackImage && imageSrc !== product.fallbackImage) {
      setImageSrc(product.fallbackImage);
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
    if (quantity <= 0) return;
    const newQty = quantity - 1;
    if (onUpdateQuantity) {
      onUpdateQuantity(product.id, newQty);
    } else {
      updateQuantity(product.id, newQty);
    }
  };

  return (
    <article
      aria-label={`${product.name} - Rs. ${product.price.toLocaleString()}`}
      className="group h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white p-3.5 sm:p-4 border-2 border-[#79A03F]/20 hover:border-[#79A03F] shadow-md hover:shadow-xl transition-all duration-300 w-full overflow-hidden"
    >
      {/* Top Image and Details Section */}
      <div className="flex flex-col space-y-2.5 flex-1">
        {/* Image Frame */}
        <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#FFF0F3] flex-shrink-0">
          <img
            src={imageSrc}
            alt={`Freshly baked ${product.name} by cream. Lahore`}
            onError={handleImageError}
            className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
            loading="lazy"
            width={300}
            height={300}
          />

          {/* Minimal Tag */}
          <div className="absolute top-2 left-2">
            {product.dietary !== 'Normal' ? (
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black bg-[#79A03F] text-white shadow-2xs">
                {product.dietary}
              </span>
            ) : product.badge ? (
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-white/95 text-[#2D1E18] shadow-2xs">
                {product.badge}
              </span>
            ) : null}
          </div>
        </div>

        {/* Content Details: Aligned Hierarchy */}
        <header className="flex flex-col flex-1 justify-between pt-1">
          {/* Subtitle / Pieces tag */}
          <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#79A03F] mb-1">
            {product.pieces || product.category}
          </p>

          {/* Title with uniform 2-line height for perfect row alignment */}
          <h3 className="text-xs sm:text-sm md:text-base font-black text-[#2D1E18] leading-tight group-hover:text-[#79A03F] transition-colors min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center">
            {product.name}
          </h3>
        </header>
      </div>

      {/* Card Footer: Always Pinned at Bottom */}
      <footer className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5 flex-shrink-0">
        <div className="text-xs sm:text-sm md:text-base font-black text-[#2D1E18]">
          <span className="sr-only">Price: </span>
          <span>Rs. {product.price.toLocaleString()}</span>
        </div>

        {/* Compact, Small Stepper */}
        <div>
          {quantity > 0 ? (
            <div
              role="group"
              aria-label={`Quantity selector for ${product.name}`}
              className="inline-flex items-center bg-[#FFF0F3] rounded-full p-0.5 border border-[#79A03F]"
            >
              <button
                onClick={handleMinus}
                className="w-6 h-6 rounded-full bg-white text-[#2D1E18] hover:text-[#79A03F] flex items-center justify-center transition-colors cursor-pointer shadow-2xs active:scale-90"
                aria-label={`Decrease quantity of ${product.name}`}
              >
                <Minus className="w-2.5 h-2.5" aria-hidden="true" />
              </button>

              <span
                aria-live="polite"
                aria-atomic="true"
                className="text-xs font-black text-[#2D1E18] px-1.5 min-w-[1.1rem] text-center"
              >
                {quantity}
              </span>

              <button
                onClick={handlePlus}
                className="w-6 h-6 rounded-full bg-[#79A03F] text-white flex items-center justify-center hover:bg-[#628233] transition-colors cursor-pointer shadow-2xs active:scale-90"
                aria-label={`Increase quantity of ${product.name}`}
              >
                <Plus className="w-2.5 h-2.5" aria-hidden="true" />
              </button>
            </div>
          ) : (
            <button
              onClick={handlePlus}
              aria-label={`Add ${product.name} to cart`}
              className="h-7 sm:h-8 px-3 rounded-full btn-olive text-[11px] sm:text-xs font-bold inline-flex items-center gap-1 shadow-2xs cursor-pointer active:scale-95"
            >
              <Plus className="w-3 h-3" aria-hidden="true" />
              <span>Add</span>
            </button>
          )}
        </div>
      </footer>

    </article>
  );
}
