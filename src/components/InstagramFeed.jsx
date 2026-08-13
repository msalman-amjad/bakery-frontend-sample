'use client';

import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { bakeryInfo } from '../data/menuData';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function InstagramFeed() {
  const posts = [
    {
      id: 1,
      image: "/images/chocolate_fudge_brownie.jpg",
      caption: "Fudgy brownie slabs fresh out of the morning oven in Lahore. ✨",
      likes: 342
    },
    {
      id: 2,
      image: "/images/classic_cinnamon_rolls.jpg",
      caption: "Warm cinnamon roll glaze cascading down 6-packs ready for DHA delivery.",
      likes: 418
    },
    {
      id: 3,
      image: "/images/lotus_biscoff_brownie.jpg",
      caption: "Biscoff swirl texture close-up. Who wants the corner slice? 🤤",
      likes: 520
    },
    {
      id: 4,
      image: "/images/espresso_chocolate_loaf.jpg",
      caption: "Eggless espresso loaf slicing test. Pure moisture.",
      likes: 290
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-[#FFB7C5] border-t border-[#2D1E18]/10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white text-[#79A03F] border border-[#79A03F]/30 text-[11px] sm:text-xs font-extrabold shadow-xs">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{bakeryInfo.instagramHandle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#2D1E18] font-display">
              Follow the Baking Journey
            </h3>
          </div>

          <a
            href={`https://instagram.com/${bakeryInfo.instagramHandle.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl btn-olive-outline text-xs font-extrabold shadow-xs cursor-pointer hover:shadow-sm"
          >
            <span>Follow {bakeryInfo.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={`https://instagram.com/${bakeryInfo.instagramHandle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-white border-2 border-[#79A03F]/20 hover:border-[#79A03F] shadow-xs block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-[#2D1E18]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4 text-white">
                <div className="flex justify-end">
                  <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-[11px] sm:text-xs font-bold line-clamp-2 leading-tight">
                  {post.caption}
                </p>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-black text-[#FFCCD5]">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#FFCCD5]" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
