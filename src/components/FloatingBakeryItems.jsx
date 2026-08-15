'use client';

import React from 'react';

// 🍪 Cute Golden Choco-Chip Cookie
function CookieSvg({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#E89F56" stroke="#2D1E18" strokeWidth="2.5" />
      {/* Chocolate Chips */}
      <circle cx="16" cy="17" r="3" fill="#3D2110" />
      <circle cx="28" cy="15" r="3.5" fill="#3D2110" />
      <circle cx="23" cy="26" r="3.5" fill="#3D2110" />
      <circle cx="33" cy="28" r="3" fill="#3D2110" />
      <circle cx="15" cy="30" r="2.5" fill="#3D2110" />
      <circle cx="29" cy="36" r="2" fill="#3D2110" />
    </svg>
  );
}

// 🍫 Cute Belgian Dark Fudge Brownie Cube
function BrownieSvg({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="10" width="34" height="28" rx="6" fill="#381D0F" stroke="#2D1E18" strokeWidth="2.5" />
      {/* Caramel/Fudge swirl */}
      <path d="M12 16C17 13 22 19 28 15C33 12 37 16 39 15" stroke="#68391A" strokeWidth="3" strokeLinecap="round" />
      {/* Sea salt flakes */}
      <rect x="15" y="24" width="3" height="3" rx="1" fill="#FFFFFF" opacity="0.95" />
      <rect x="27" y="22" width="3" height="3" rx="1" fill="#FFFFFF" opacity="0.95" />
      <rect x="21" y="30" width="2.5" height="2.5" rx="1" fill="#FFFFFF" opacity="0.95" />
    </svg>
  );
}

// 🥚 Cute Farm Fresh Egg
function EggSvg({ className = "w-6 h-7" }) {
  return (
    <svg viewBox="0 0 36 44" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 2C9.5 2 3 14 3 26C3 35 9.7 42 18 42C26.3 42 33 35 33 26C33 14 26.5 2 18 2Z"
        fill="#FFF7E6"
        stroke="#2D1E18"
        strokeWidth="2.5"
      />
      {/* Egg highlight shine */}
      <path
        d="M11 14C10 17 10 22 11 26"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ✨ Cute Bakery Sparkle
function SparkleSvg({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
        fill="#79A03F"
        stroke="#2D1E18"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function FloatingBakeryItems() {
  // Continuous dropping stream across 8 distinct columns
  const fallingItems = [
    {
      id: 1,
      Component: CookieSvg,
      left: '4%',
      animation: 'animate-bakery-fall-1',
      duration: '18s',
      delay: '-2s',
      size: 'w-7 h-7 sm:w-8 sm:h-8',
    },
    {
      id: 2,
      Component: EggSvg,
      left: '16%',
      animation: 'animate-bakery-fall-2',
      duration: '22s',
      delay: '-12s',
      size: 'w-6 h-7 sm:w-7 sm:h-8',
    },
    {
      id: 3,
      Component: BrownieSvg,
      left: '28%',
      animation: 'animate-bakery-fall-3',
      duration: '20s',
      delay: '-6s',
      size: 'w-7 h-7 sm:w-8 sm:h-8',
    },
    {
      id: 4,
      Component: SparkleSvg,
      left: '40%',
      animation: 'animate-bakery-fall-1',
      duration: '16s',
      delay: '-14s',
      size: 'w-5 h-5',
    },
    {
      id: 5,
      Component: CookieSvg,
      left: '52%',
      animation: 'animate-bakery-fall-2',
      duration: '24s',
      delay: '-8s',
      size: 'w-7 h-7 sm:w-8 sm:h-8',
    },
    {
      id: 6,
      Component: EggSvg,
      left: '66%',
      animation: 'animate-bakery-fall-3',
      duration: '19s',
      delay: '-16s',
      size: 'w-6 h-7 sm:w-7 sm:h-8',
    },
    {
      id: 7,
      Component: BrownieSvg,
      left: '80%',
      animation: 'animate-bakery-fall-1',
      duration: '21s',
      delay: '-4s',
      size: 'w-7 h-7 sm:w-8 sm:h-8',
    },
    {
      id: 8,
      Component: SparkleSvg,
      left: '92%',
      animation: 'animate-bakery-fall-2',
      duration: '17s',
      delay: '-10s',
      size: 'w-5 h-5',
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {fallingItems.map((item) => {
        const SvgComp = item.Component;
        return (
          <div
            key={item.id}
            className={`absolute top-0 ${item.animation}`}
            style={{
              left: item.left,
              animationDuration: item.duration,
              animationDelay: item.delay,
            }}
          >
            <SvgComp className={item.size} />
          </div>
        );
      })}
    </div>
  );
}
