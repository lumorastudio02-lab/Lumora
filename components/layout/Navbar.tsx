"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import LumoraLogo from "@/components/common/LumoraLogo";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-2xl border-b border-[#E8DFD3] py-3.5 shadow-[0_10px_35px_rgba(60,40,20,0.06)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Lumora Logo */}
        <Link href="#hero" className="group flex items-center">
          <LumoraLogo variant="navbar" size="md" />
        </Link>

        {/* Center Navigation Pills */}
        <nav className="hidden md:flex items-center gap-7 bg-white/85 backdrop-blur-xl px-7 py-2.5 rounded-full border border-[#E8DFD3] shadow-[0_4px_20px_rgba(60,40,20,0.04)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-subheading font-medium text-[#5C4B3E] hover:text-[#B46A28] transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#B46A28] via-[#C97A32] to-[#8C4A1D] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#B45309] via-[#C97A32] to-[#8C4A1D] shadow-[0_4px_20px_rgba(180,106,40,0.3)] hover:shadow-[0_6px_25px_rgba(180,106,40,0.5)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/80 border border-[#E8DFD3] text-[#2D1F17] hover:text-[#B46A28]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF8F5]/98 backdrop-blur-2xl border-b border-[#E8DFD3] px-6 pt-4 pb-6 space-y-3"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-subheading font-medium text-[#5C4B3E] hover:text-[#B46A28] py-2 border-b border-[#E8DFD3]/60"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#B45309] via-[#C97A32] to-[#8C4A1D]"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}