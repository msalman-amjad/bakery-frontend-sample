'use client';

import React from 'react';
import { ShoppingBag, Flame, Truck, Clock, MapPin } from 'lucide-react';
import { bakeryInfo } from '../data/menuData';

export default function HowToOrder() {
  const steps = [
    {
      number: '01',
      icon: ShoppingBag,
      title: 'Pick Your Treats',
      description: 'Select your preferred boxes from our menu. Choose Classic, Gluten-Free, or Egg-Free recipes based on your cravings.',
    },
    {
      number: '02',
      icon: Flame,
      title: 'Baked Fresh to Order',
      description: 'We do not sell stale pre-baked stock. Your treats are baked from scratch within our 2-3 day freshness cycle.',
    },
    {
      number: '03',
      icon: Truck,
      title: 'Dispatched in Lahore',
      description: 'Hand-delivered via climate-safe couriers straight to your door across DHA, Gulberg, Model Town, Johar Town & Cantt.',
    },
  ];

  return (
    <section id="how-to-order" className="py-8 sm:py-12 lg:py-16 relative bg-[#FFB7C5] border-y border-[#2D1E18]/10 scroll-mt-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#79A03F] border border-[#79A03F]/30 text-[11px] sm:text-xs font-extrabold shadow-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>2-3 Days Artisan Processing</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D1E18] font-display tracking-tight">
            How It Works<span className="text-[#79A03F]">.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#2D1E18]/85 font-medium px-2 max-w-xl mx-auto">
            Because artisanal quality takes patience, we bake exclusively upon confirmation. Here is how your box reaches you.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl sm:rounded-3xl bg-white border-2 border-[#79A03F]/20 hover:border-[#79A03F] p-5 sm:p-7 space-y-3.5 sm:space-y-5 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Step Index & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-black text-[#79A03F] font-display">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFF0F3] border border-[#79A03F]/30 flex items-center justify-center text-[#79A03F] group-hover:bg-[#79A03F] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-[#2D1E18] font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D1E18]/80 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Progress bar line */}
                <div className="w-full h-1 sm:h-1.5 bg-[#FFF0F3] rounded-full overflow-hidden">
                  <div className="h-full bg-[#79A03F] w-full origin-left group-hover:scale-x-105 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Lahore Delivery Localities Ribbon */}
        <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#79A03F]/30 p-4 sm:p-6 shadow-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-6">
            <div className="space-y-0.5 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#79A03F]" />
                <h4 className="text-xs sm:text-base font-black text-[#2D1E18]">
                  Delivering to all Lahore Localities
                </h4>
              </div>
              <p className="text-[11px] sm:text-xs text-[#2D1E18]/75 font-medium">
                Standard delivery: Rs. {bakeryInfo.deliveryFee} • <strong className="text-[#79A03F]">FREE Delivery</strong> on orders over Rs. {bakeryInfo.freeDeliveryThreshold.toLocaleString()}
              </p>
            </div>

            {/* Area Badges */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-1.5 sm:gap-2 max-w-xl">
              {bakeryInfo.deliveryAreas.map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded-lg sm:rounded-xl bg-[#FFF0F3] text-[#2D1E18] border border-[#2D1E18]/10 text-[10px] sm:text-xs font-extrabold"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
