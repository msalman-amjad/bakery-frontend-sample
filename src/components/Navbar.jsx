'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import CreamBrandLogo from './CreamLogo';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalCartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Dietary', href: '/#dietary' },
    { name: 'Reviews', href: '/#reviews' },
  ];

  return (
    <header
      role="banner"
      className={`sticky top-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-[#FFB7C5]/95 backdrop-blur-md border-b border-[#2D1E18]/10 shadow-xs py-2.5 sm:py-3'
          : 'bg-[#FFB7C5] py-3.5 sm:py-4'
      }`}
    >
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#79A03F] focus:text-white focus:rounded-full focus:text-xs focus:font-bold focus:shadow-md"
      >
        Skip to main content
      </a>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none flex-shrink-0"
          aria-label="cream. bakery - Return to home"
        >
          <CreamBrandLogo />
        </Link>

        {/* Desktop Semantic Nav */}
        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul role="list" className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-wider text-[#2D1E18] hover:text-[#79A03F] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label={`Shopping Cart, ${totalCartCount} item${totalCartCount === 1 ? '' : 's'}`}
            className="relative h-9 px-3.5 sm:px-4 rounded-full bg-white text-[#2D1E18] border-2 border-[#79A03F] shadow-xs flex items-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 group hover:bg-[#FFFDF9]"
          >
            <div className="relative flex items-center" aria-hidden="true">
              <ShoppingBag className="w-4 h-4 text-[#79A03F] group-hover:scale-105 transition-transform" />
              {totalCartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#79A03F] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {totalCartCount}
                </span>
              )}
            </div>
            <span className="text-xs font-bold text-[#2D1E18]">
              {totalCartCount > 0 ? `Cart (${totalCartCount})` : 'Cart'}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden w-9 h-9 rounded-full bg-white border border-[#2D1E18]/15 text-[#2D1E18] hover:text-[#79A03F] flex items-center justify-center transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#2D1E18]/10 shadow-lg animate-in slide-in-from-top-2 duration-200 w-full"
        >
          <ul role="list" className="max-w-6xl mx-auto px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 text-sm font-bold text-[#2D1E18] hover:text-[#79A03F] hover:bg-[#FFF0F3] rounded-xl transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2D1E18]/40" aria-hidden="true" />
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full btn-olive text-xs font-bold text-center shadow-xs"
              >
                <span>View All Treats</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
