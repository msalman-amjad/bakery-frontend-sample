'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import CreamBrandLogo from './CreamLogo';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalCartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
    { name: 'How to Order', href: '/#how-to-order' },
    { name: 'Dietary & Craft', href: '/#dietary' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-[#FFB7C5]/95 backdrop-blur-md shadow-sm border-b border-[#2D1E18]/10 py-2.5 sm:py-3'
          : 'bg-[#FFB7C5] py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        
        {/* Logo Area */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none flex-shrink-0"
          aria-label="cream. bakery home"
        >
          <CreamBrandLogo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-extrabold text-[#2D1E18] hover:text-[#79A03F] transition-colors relative py-1 group/link"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#79A03F] transition-all duration-300 group-hover/link:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Actions: Cart Trigger & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 sm:px-3.5 sm:py-2 rounded-full bg-white text-[#2D1E18] border-2 border-[#79A03F] shadow-xs hover:bg-[#FFFDF9] hover:shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95 group"
            aria-label="Shopping Cart"
          >
            <div className="relative flex items-center">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#79A03F] group-hover:scale-110 transition-transform" />
              {totalCartCount > 0 && (
                <span className="absolute -top-2.5 -right-2.5 bg-[#79A03F] text-white text-[10px] sm:text-[11px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-xs animate-pulse">
                  {totalCartCount}
                </span>
              )}
            </div>
            <span className="hidden md:inline text-xs font-black text-[#2D1E18]">
              Cart {totalCartCount > 0 ? `(${totalCartCount})` : ''}
            </span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white border border-[#2D1E18]/15 text-[#2D1E18] hover:text-[#79A03F] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#2D1E18]/15 shadow-xl animate-in slide-in-from-top-2 duration-200 w-full">
          <div className="max-w-7xl mx-auto px-5 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-2 text-sm font-extrabold text-[#2D1E18] hover:text-[#79A03F] hover:bg-[#FFF0F3] rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl btn-olive text-xs font-black text-center"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
