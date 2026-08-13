'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqList } from '../data/menuData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-8 sm:py-12 lg:py-16 relative scroll-mt-16 bg-[#FFB7C5] w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#79A03F] border border-[#79A03F]/30 text-[11px] sm:text-xs font-extrabold shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#2D1E18] font-display tracking-tight">
            Frequently Asked Questions<span className="text-[#79A03F]">.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#2D1E18]/85 font-medium px-2 max-w-xl mx-auto">
            Everything you need to know about our ingredients, ordering schedule, and Lahore delivery.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl bg-white border-2 border-[#79A03F]/20 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base md:text-lg font-black text-[#2D1E18] font-display pr-2 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#79A03F] text-white' : 'bg-[#FFF0F3] text-[#79A03F]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#2D1E18]/85 leading-relaxed font-medium border-t border-slate-100 animate-in fade-in duration-200">
                    <p className="pt-2.5">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
