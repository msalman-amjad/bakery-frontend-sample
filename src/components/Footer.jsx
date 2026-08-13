'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Phone, Mail, Heart, Sparkles } from 'lucide-react';
import { bakeryInfo } from '../data/menuData';
import CreamBrandLogo from './CreamLogo';

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

export default function Footer() {
  return (
    <footer className="bg-[#F49EAF] border-t-2 border-[#2D1E18]/10 pt-10 sm:pt-16 pb-8 sm:pb-12 text-[#2D1E18] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-[#2D1E18]/10">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-3.5 sm:space-y-4">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity" aria-label="cream. bakery home">
              <CreamBrandLogo />
            </Link>
            <p className="text-xs sm:text-sm text-[#2D1E18]/85 max-w-sm leading-relaxed font-medium">
              Small-batch artisanal bakery based in Lahore. Dedicated to obsessive craftsmanship, rich Belgian couverture chocolates, and inclusive dietary options.
            </p>
            
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={`https://instagram.com/${bakeryInfo.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white border border-[#2D1E18]/15 flex items-center justify-center text-[#79A03F] hover:bg-[#79A03F] hover:text-white transition-colors shadow-xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href={`https://wa.me/${bakeryInfo.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white border border-[#2D1E18]/15 flex items-center justify-center text-[#79A03F] hover:bg-[#79A03F] hover:text-white transition-colors shadow-xs"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href={`mailto:${bakeryInfo.email}`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white border border-[#2D1E18]/15 flex items-center justify-center text-[#79A03F] hover:bg-[#79A03F] hover:text-white transition-colors shadow-xs"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#2D1E18]">
              Explore
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs font-bold text-[#2D1E18]/80">
              <li>
                <a href="#menu" className="hover:text-[#79A03F] transition-colors">
                  Full Menu & Boxes
                </a>
              </li>
              <li>
                <a href="#how-to-order" className="hover:text-[#79A03F] transition-colors">
                  How Ordering Works
                </a>
              </li>
              <li>
                <a href="#dietary" className="hover:text-[#79A03F] transition-colors">
                  Gluten-Free & Egg-Free
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#79A03F] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#79A03F] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Delivery Zones in Lahore */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#2D1E18]">
              Lahore Zones
            </h4>
            <ul className="space-y-1 text-xs text-[#2D1E18]/80 font-medium">
              <li>• DHA (Phases 1-9)</li>
              <li>• Gulberg & Cantt</li>
              <li>• Model Town & Garden Town</li>
              <li>• Johar Town & Faisal Town</li>
              <li>• Askari & Bahria Town</li>
            </ul>
          </div>

          {/* Bakery Info */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#2D1E18]">
              Kitchen Info
            </h4>
            <div className="space-y-1.5 text-xs text-[#2D1E18]/80 font-medium">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#79A03F] flex-shrink-0 mt-0.5" />
                <span>Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#79A03F] flex-shrink-0 mt-0.5" />
                <span>2-3 Days Fresh Bake Cycle</span>
              </div>
              <div className="flex items-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#79A03F] flex-shrink-0 mt-0.5" />
                <span>100% Belgian Couverture</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#2D1E18]/70 font-semibold text-center sm:text-left">
          <p>© {new Date().getFullYear()} cream. Artisanal Bakery. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Baked with</span>
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600 inline" />
            <span>in Lahore, Pakistan</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
