'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqList } from '../data/menuData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-10 sm:py-14 md:py-18 w-full bg-transparent"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <header className="text-center space-y-1.5 mb-6 sm:mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#79A03F]">
            Common Queries
          </span>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D1E18] font-display"
          >
            Questions & Answers
          </h2>
          <p className="text-xs sm:text-sm text-[#2D1E18]/80 font-medium">
            Everything you need to know about ingredients and Lahore delivery.
          </p>
        </header>

        {/* Semantic Definition List */}
        <dl className="space-y-2.5">
          {faqList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const questionId = `faq-question-${idx}`;
            const answerId = `faq-answer-${idx}`;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border-2 border-[#79A03F]/20 hover:border-[#79A03F] overflow-hidden shadow-xs transition-all duration-200"
              >
                <dt>
                  <button
                    id={questionId}
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="w-full min-h-[48px] p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-black text-[#2D1E18] pr-2">
                      {faq.q}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#79A03F] text-white' : 'bg-[#FFF0F3] text-[#79A03F]'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </dt>

                {isOpen && (
                  <dd
                    id={answerId}
                    aria-labelledby={questionId}
                    className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0 text-xs sm:text-sm text-[#2D1E18]/85 leading-relaxed font-medium border-t border-slate-100 animate-in fade-in duration-200 m-0"
                  >
                    <p className="pt-2.5">{faq.a}</p>
                  </dd>
                )}
              </div>
            );
          })}
        </dl>

      </div>
    </section>
  );
}
