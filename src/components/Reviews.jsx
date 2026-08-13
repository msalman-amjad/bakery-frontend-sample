'use client';

import React from 'react';
import { Star, Heart, MapPin } from 'lucide-react';
import { customerReviews } from '../data/menuData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-8 sm:py-12 lg:py-16 relative scroll-mt-16 bg-[#FFB7C5] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#79A03F] border border-[#79A03F]/30 text-[11px] sm:text-xs font-extrabold shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-[#79A03F]" />
            <span>Community Love</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D1E18] font-display tracking-tight">
            Loved Across Lahore<span className="text-[#79A03F]">.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#2D1E18]/85 font-medium px-2 max-w-xl mx-auto">
            Real feedback from dessert lovers, celiac foodies, and eggless dessert seekers across Lahore.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl sm:rounded-3xl bg-white border-2 border-[#79A03F]/20 hover:border-[#79A03F] p-4 sm:p-5 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-2 sm:space-y-2.5">
                {/* Rating stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-[#79A03F]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#79A03F]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#2D1E18]/60">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#2D1E18] leading-relaxed font-medium">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 sm:pt-3.5 mt-3 sm:mt-3.5 border-t border-slate-100 space-y-0.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-black text-[#2D1E18] font-display">
                    {review.name}
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#79A03F] font-bold">
                  <MapPin className="w-3 h-3" />
                  <span>{review.area}</span>
                </div>
                <div className="text-[10px] text-[#2D1E18]/70 font-semibold truncate pt-0.5">
                  Fav: <span className="text-[#2D1E18] font-bold">{review.favoriteItem}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
