'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function DietarySection() {
  const dietaryHighlights = [
    {
      title: 'Gluten-Free Discipline',
      subtitle: 'Dedicated Almond Flour & GF Blends',
      description: 'Our Gluten-Free brownies utilize fine blanched almond flour and pure dark chocolate with zero wheat starch, prepared with sanitized allergen equipment.',
      points: ['Dedicated batch preparation', 'No compromise on fudginess', 'Celiac-conscious ingredients'],
      badge: 'GF Certified Recipes',
    },
    {
      title: '100% Egg-Free Formulations',
      subtitle: 'Moist & Rich Without Eggs',
      description: 'Crafted for vegetarian and egg-sensitive patrons. Our egg-free loaf cakes retain luscious moisture using cultured yogurt and espresso reductions.',
      points: ['Pure vegetarian friendly', 'Rich, silky crumb structure', 'Fresh vanilla bean & espresso'],
      badge: '100% Eggless',
    },
    {
      title: 'The Artisanal Standard',
      subtitle: 'Premium Global Ingredients',
      description: 'We never cut corners with cheap vegetable fat or artificial cocoa. We bake with authentic Belgian couverture chocolate and grass-fed butter.',
      points: ['Belgian dark chocolate (54-70%)', 'Zero artificial preservatives', 'Baked fresh within 48h'],
      badge: 'Gourmet Grade',
    },
  ];

  return (
    <section id="dietary" className="py-8 sm:py-12 lg:py-16 relative scroll-mt-16 bg-[#FFB7C5] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#79A03F] border border-[#79A03F]/30 text-[11px] sm:text-xs font-extrabold shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#79A03F]" />
            <span>Inclusive Indulgence</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D1E18] font-display tracking-tight">
            Crafted for Everyone<span className="text-[#79A03F]">.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#2D1E18]/85 font-medium px-2 max-w-xl mx-auto">
            Whether you are strictly gluten-free, vegetarian/egg-free, or seeking the richest chocolate experience in Lahore, we bake with uncompromising care.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {dietaryHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl sm:rounded-3xl bg-white border-2 border-[#79A03F]/20 hover:border-[#79A03F] p-5 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-2.5 sm:space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-black bg-[#79A03F] text-white shadow-xs">
                    {item.badge}
                  </span>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#79A03F]" />
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-[#2D1E18] font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-[#79A03F]">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#2D1E18]/80 leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Bullet checklist */}
                <ul className="space-y-1 sm:space-y-1.5 pt-1 sm:pt-2">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-bold text-[#2D1E18]">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#79A03F] flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3.5 sm:pt-5 mt-3.5 sm:mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#79A03F]">
                <span>100% Scratch Baked</span>
                <span className="text-[#2D1E18]">Lahore Kitchen</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
