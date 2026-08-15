'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { bakeryInfo } from '../data/menuData';

export default function InstagramFeed() {
  const posts = [
    {
      id: 1,
      image: "/images/chocolate_fudge_brownie.jpg",
      caption: "Belgian fudge brownies fresh from the morning bake.",
    },
    {
      id: 2,
      image: "/images/classic_cinnamon_rolls.jpg",
      caption: "Warm cinnamon rolls with vanilla cream glaze.",
    },
    {
      id: 3,
      image: "/images/lotus_biscoff_brownie.jpg",
      caption: "Lotus Biscoff swirl and spiced caramel crumb.",
    },
    {
      id: 4,
      image: "/images/espresso_chocolate_loaf.jpg",
      caption: "Egg-free espresso loaf with rich coffee glaze.",
    }
  ];

  return (
    <section
      aria-labelledby="instagram-heading"
      className="py-10 sm:py-14 md:py-18 w-full bg-transparent border-t border-[#2D1E18]/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <header className="flex items-center justify-between gap-4 mb-5 sm:mb-7">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#79A03F] block">
              Instagram Showcase
            </span>
            <h2
              id="instagram-heading"
              className="text-xl sm:text-2xl font-black text-[#2D1E18] font-display"
            >
              Follow @creampk._
            </h2>
          </div>

          <a
            href={`https://instagram.com/${bakeryInfo.instagramHandle.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#79A03F] hover:text-[#628233] transition-colors"
          >
            <span>Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </header>

        {/* 4 Photo Semantic List */}
        <ul role="list" className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {posts.map((post) => (
            <li key={post.id}>
              <a
                href={`https://instagram.com/${bakeryInfo.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View Instagram post: ${post.caption}`}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-white border-2 border-[#79A03F]/20 hover:border-[#79A03F] shadow-sm block transition-all"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-[#2D1E18]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white">
                  <p className="text-[11px] font-bold leading-tight line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
