'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { customerReviews } from '../data/menuData';

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-10 sm:py-14 md:py-18 w-full bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <header className="text-center max-w-xl mx-auto space-y-1.5 mb-6 sm:mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#79A03F]">
            Lahore Patrons
          </span>
          <h2
            id="reviews-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D1E18] font-display"
          >
            Loved in Lahore
          </h2>
          <p className="text-xs sm:text-sm text-[#2D1E18]/80 font-medium">
            Real feedback from dessert lovers across the city.
          </p>
        </header>

        {/* Semantic Testimonial List */}
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {customerReviews.map((review) => (
            <li key={review.id}>
              <figure className="h-full rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-5 border-2 border-[#79A03F]/20 hover:border-[#79A03F] shadow-md flex flex-col justify-between space-y-3 m-0 transition-all">
                <div className="space-y-2">
                  {/* 5-star rating */}
                  <div
                    className="flex gap-0.5 text-[#79A03F]"
                    aria-label={`Rating: ${review.rating} out of 5 stars`}
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#79A03F]" aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className="text-xs sm:text-sm text-[#2D1E18] leading-relaxed font-medium m-0">
                    &ldquo;{review.comment}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="pt-2.5 border-t border-slate-100">
                  <cite className="not-italic block text-xs font-black text-[#2D1E18]">
                    {review.name}
                  </cite>
                  <span className="text-[11px] text-[#79A03F] font-bold">
                    {review.area}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
