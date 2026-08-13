import React from 'react';

/**
 * Brand Logo component for "cream."
 * Rendered in Olive Green (#79A03F) with perfect responsive scaling.
 */

export function CreamDripLogoText({ className = "h-8", textColor = "#79A03F" }) {
  return (
    <svg
      viewBox="0 0 240 68"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="cream. bakery logo"
    >
      {/* Letter 'c' with bottom melt drip */}
      <path
        d="M 38 18 C 34 14 28 12 21 12 C 10 12 2 20 2 32 C 2 44 10 52 21 52 C 27 52 32 49 36 45 L 36 53 C 36 58 34.5 61 32 63 C 30 64.5 28 65 25 65 C 23.5 65 23 64 23 62.5 C 23 60 25 58 25 55 C 25 53 23 51 21 51 C 18 51 16 53 16 56 C 16 61 20 68 27 68 C 33 68 40 64 42 56 L 42 41 L 34 41 C 32 43 28 45 23 45 C 16 45 10 39 10 32 C 10 24 16 19 23 19 C 28 19 32 21 34 24 L 38 18 Z"
        fill={textColor}
      />

      {/* Letter 'r' with dripping stem */}
      <path
        d="M 52 14 L 60 14 L 60 21 C 63 15 69 13 75 13 L 75 22 C 68 22 61 26 60 33 L 60 52 C 60 57 58.5 61 56 63.5 C 54 65 52 66 49 66 C 47.5 66 47 65 47 63.5 C 47 61 49 59 49 56 C 49 54 47 52 45 52 C 43 52 41 54 41 57 C 41 62 45 68 51 68 C 58 68 62 63 62 55 L 62 20 L 52 20 L 52 14 Z"
        fill={textColor}
      />

      {/* Letter 'e' */}
      <path
        d="M 97 32 C 97 21 89 12 79 12 C 68 12 60 21 60 32 C 60 44 68 52 80 52 C 87 52 93 48 96 43 L 89 39 C 87 42 84 45 79 45 C 73 45 68 40 67 34 L 97 34 C 97 33.3 97 32.7 97 32 Z M 67 29 C 68 24 73 19 79 19 C 85 19 89 24 90 29 L 67 29 Z"
        fill={textColor}
      />

      {/* Letter 'a' */}
      <path
        d="M 128 14 L 136 14 L 136 49 C 136 51 137 52 139 52 C 140.5 52 142 51 143 50 L 143 52 C 140 54 136.5 54 133 53 C 130 52 128.5 49 128.5 45 C 125 50 119 53 113 53 C 104 53 98 46 98 38 C 98 29 105 23 114 23 C 119 23 124 25 127 28 L 127 25 C 127 19 123 16 116 16 C 111 16 107 18 105 21 L 100 16 C 104 11 110 8 118 8 C 128 8 136 13 136 24 L 136 30 C 136 33 135 37 135 41 C 135 44 136 45 137 45 L 128 45 L 128 14 Z M 127 34 C 124 30 119 29 115 29 C 110 29 106 33 106 38 C 106 43 110 47 115 47 C 120 47 125 44 127 40 L 127 34 Z"
        fill={textColor}
      />

      {/* Letter 'm' with double bottom cream melt drips */}
      <path
        d="M 148 14 L 156 14 L 156 22 C 159 16 165 13 172 13 C 178 13 183 16 186 21 C 190 15 197 13 204 13 C 215 13 222 20 222 32 L 222 52 C 222 57 220 61 217.5 63.5 C 215 65.5 213 66 210.5 66 C 209 66 208.5 65 208.5 63.5 C 208.5 61 210.5 59 210.5 56 C 210.5 54 208.5 52 206.5 52 C 204.5 52 202.5 54 202.5 57 C 202.5 62 206.5 68 212.5 68 C 219.5 68 224 63 224 55 L 224 31 C 224 23 218 19 210 19 C 203 19 197 23 195 29 L 195 52 C 195 57 193.5 61 191 63.5 C 189 65 187 66 184.5 66 C 183 66 182.5 65 182.5 63.5 C 182.5 61 184.5 59 184.5 56 C 184.5 54 182.5 52 180.5 52 C 178.5 52 176.5 54 176.5 57 C 176.5 62 180.5 68 186.5 68 C 193.5 68 197 63 197 55 L 197 31 C 197 23 191 19 183 19 C 176 19 170 23 168 29 L 168 52 C 168 57 166.5 61 164 63.5 C 162 65 160 66 157.5 66 C 156 66 155.5 65 155.5 63.5 C 155.5 61 157.5 59 157.5 56 C 157.5 54 155.5 52 153.5 52 C 151.5 52 149.5 54 149.5 57 C 149.5 62 153.5 68 159.5 68 C 166.5 68 170 63 170 55 L 170 20 L 148 20 L 148 14 Z"
        fill={textColor}
      />

      {/* Trailing Dot '.' */}
      <circle cx="233" cy="46" r="6" fill={textColor} />
    </svg>
  );
}

/**
 * Clean typography & badge logo for "cream."
 */
export default function CreamBrandLogo({ showSubtext = true, className = "" }) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Circle Icon Badge with Olive Green 'c.' */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#79A03F] shadow-sm flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
        <span className="font-extrabold text-base sm:text-xl text-[#79A03F] font-display tracking-tighter leading-none">
          c<span className="text-[#2D1E18]">.</span>
        </span>
      </div>

      <div className="flex flex-col min-w-0">
        <div className="flex items-baseline">
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#79A03F] tracking-tight font-display lowercase leading-none truncate">
            cream<span className="text-[#2D1E18]">.</span>
          </span>
        </div>
        {showSubtext && (
          <span className="hidden xs:block text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest text-[#2D1E18]/70 mt-0.5 truncate">
            Artisanal Bakery • Lahore
          </span>
        )}
      </div>
    </div>
  );
}
