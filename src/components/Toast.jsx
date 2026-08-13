'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

export default function Toast({ toast, onClose, onOpenCart }) {
  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-4 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto sm:max-w-sm">
      <div className="bg-white border-2 border-[#79A03F] rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center gap-2.5 sm:gap-3 w-full">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#79A03F] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
          <Check className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        
        <div className="flex-1 min-w-0 pr-1">
          <p className="text-xs font-black text-[#2D1E18] truncate">{toast.message}</p>
          <p className="text-[10px] sm:text-[11px] text-[#79A03F] font-bold">Added to fresh box</p>
        </div>

        <button
          onClick={onOpenCart}
          className="px-2.5 sm:px-3 py-1.5 rounded-xl btn-olive font-extrabold text-[11px] sm:text-xs whitespace-nowrap transition-colors cursor-pointer flex-shrink-0"
        >
          View Cart
        </button>

        <button
          onClick={onClose}
          className="text-[#2D1E18]/40 hover:text-[#2D1E18] p-1 cursor-pointer flex-shrink-0"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
