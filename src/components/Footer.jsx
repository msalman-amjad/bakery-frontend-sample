'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#F49EAF] border-t-2 border-[#2D1E18]/10 pt-10 pb-8 sm:pt-14 sm:pb-10 text-[#2D1E18] w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-6 border-b border-[#2D1E18]/10">
          
          {/* Brand Info */}
          <div className="space-y-2.5">
            <Link href="/" className="inline-block" aria-label="cream. bakery home">
              <CreamBrandLogo showSubtext={false} />
            </Link>
            <p className="text-xs text-[#2D1E18]/85 max-w-sm leading-relaxed font-medium">
              Small-batch artisanal bakery based in Lahore. Gourmet Belgian brownies, cinnamon rolls, and eggless loaves baked fresh upon order.
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Quick Links" className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#2D1E18]">
              Explore
            </h3>
            <ul role="list" className="space-y-1 text-xs font-bold text-[#2D1E18]/80">
              <li>
                <Link href="/menu" className="hover:text-[#79A03F] transition-colors">
                  Bakery Menu
                </Link>
              </li>
              <li>
                <a href="/#how-to-order" className="hover:text-[#79A03F] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#dietary" className="hover:text-[#79A03F] transition-colors">
                  Dietary Standards
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-[#79A03F] transition-colors">
                  FAQ & Delivery
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact & Address */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#2D1E18]">
              Kitchen Info
            </h3>
            
            <address className="not-italic text-xs text-[#2D1E18]/80 space-y-1 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#79A03F]" aria-hidden="true" />
                <span>Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#79A03F]" aria-hidden="true" />
                <span>2-3 Days Fresh Bake Cycle</span>
              </div>
            </address>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={`https://instagram.com/${bakeryInfo.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#79A03F] hover:bg-[#79A03F] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Visit cream. on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${bakeryInfo.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#79A03F] hover:bg-[#79A03F] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Chat with cream. on WhatsApp"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${bakeryInfo.email}`}
                className="w-8 h-8 rounded-full bg-white text-[#79A03F] hover:bg-[#79A03F] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Send email to cream. bakery"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#2D1E18]/70 font-semibold">
          <p>© {new Date().getFullYear()} cream. Artisanal Bakery. Lahore, Pakistan.</p>
          <p>Handcrafted with pure Belgian chocolate.</p>
        </div>

      </div>
    </footer>
  );
}
