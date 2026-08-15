'use client';

import React from 'react';
import { ShoppingBag, Flame, Truck } from 'lucide-react';
import { bakeryInfo } from '../data/menuData';

export default function HowToOrder() {
  const steps = [
    {
      number: '01',
      icon: ShoppingBag,
      title: 'Select Treats',
      desc: 'Pick your boxes from our classic, gluten-free, or egg-free recipes.',
    },
    {
      number: '02',
      icon: Flame,
      title: 'Freshly Baked',
      desc: 'Baked from scratch upon order with 100% Belgian chocolate.',
    },
    {
      number: '03',
      icon: Truck,
      title: 'Delivered in Lahore',
      desc: 'Dispatched to DHA, Gulberg, Cantt, Johar Town & all sectors.',
    },
  ];

  return (
    <section
      id="how-to-order"
      aria-labelledby="how-it-works-heading"
      className="py-10 sm:py-14 md:py-18 w-full bg-transparent border-y border-[#2D1E18]/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <header className="text-center max-w-xl mx-auto space-y-1.5 mb-6 sm:mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#79A03F]">
            Order Process
          </span>
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D1E18] font-display"
          >
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-[#2D1E18]/80 font-medium">
            Because freshness matters, we bake exclusively upon order confirmation.
          </p>
        </header>

        {/* Semantic Ordered List */}
        <ol role="list" className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 border-2 border-[#79A03F]/20 hover:border-[#79A03F] shadow-md space-y-2.5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#79A03F] tracking-widest uppercase font-display">
                    Step {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F3] text-[#79A03F] flex items-center justify-center" aria-hidden="true">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#2D1E18] font-display">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#2D1E18]/80 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </li>
            );
          })}
        </ol>

        {/* Delivery Info */}
        <aside aria-label="Delivery Information" className="mt-6 p-3.5 rounded-2xl bg-white/90 border border-[#2D1E18]/10 text-center text-xs text-[#2D1E18]/80 font-medium shadow-xs">
          Standard Lahore delivery: Rs. {bakeryInfo.deliveryFee} · <strong className="text-[#79A03F] font-bold">FREE delivery</strong> on orders over Rs. {bakeryInfo.freeDeliveryThreshold.toLocaleString()}
        </aside>

      </div>
    </section>
  );
}
