'use client';

import React from 'react';
import { Sparkles, Shield, Heart } from 'lucide-react';

export default function DietarySection() {
  const highlights = [
    {
      icon: Shield,
      title: 'Gluten-Free Recipes',
      desc: 'Crafted with fine blanched almond flour and pure dark chocolate. No wheat flour, zero compromise on fudginess.',
    },
    {
      icon: Heart,
      title: 'Egg-Free Formulations',
      desc: 'Moist and rich loaf cakes made with cultured yogurt, vanilla bean, and freshly extracted espresso.',
    },
    {
      icon: Sparkles,
      title: 'Belgian Couverture',
      desc: 'We use authentic 54-70% Belgian dark chocolate and pure French butter. Zero artificial additives.',
    },
  ];

  return (
    <section
      id="dietary"
      aria-labelledby="dietary-heading"
      className="py-10 sm:py-14 md:py-18 w-full bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <header className="text-center max-w-xl mx-auto space-y-1.5 mb-6 sm:mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#79A03F]">
            Dietary Excellence
          </span>
          <h2
            id="dietary-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D1E18] font-display"
          >
            Crafted for Everyone
          </h2>
          <p className="text-xs sm:text-sm text-[#2D1E18]/80 font-medium">
            Inclusive indulgence with uncompromising quality and taste.
          </p>
        </header>

        {/* Semantic Unordered List */}
        <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 border-2 border-[#79A03F]/20 hover:border-[#79A03F] shadow-md space-y-2.5 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-[#FFF0F3] text-[#79A03F] flex items-center justify-center" aria-hidden="true">
                  <Icon className="w-4 h-4" />
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#2D1E18] font-display">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#2D1E18]/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}
