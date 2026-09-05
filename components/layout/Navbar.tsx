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
          ? "bg-[#060816]/90 backdrop-blur-2xl border-b border-cyan-500/20 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Lumora Logo */}
        <Link href="#hero" className="group flex items-center">
          <LumoraLogo variant="navbar" size="md" />
        </Link>

        {/* Center Navigation Pills */}
        <nav className="hidden md:flex items-center gap-7 bg-white/[0.05] backdrop-blur-xl px-7 py-2.5 rounded-full border border-white/10 shadow-inner">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-subheading font-medium text-slate-200 hover:text-cyan-400 transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FDBA22] via-[#FB923C] to-[#EF4444] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-bold text-sm text-slate-900 bg-gradient-to-r from-[#FDBA22] via-[#FB923C] to-[#EF4444] shadow-[0_0_25px_rgba(253,186,34,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/10 border border-white/10 text-slate-200 hover:text-white"
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
            className="md:hidden bg-[#060816]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 pt-4 pb-6 space-y-3"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-subheading font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-heading font-bold text-sm text-slate-900 bg-gradient-to-r from-[#FDBA22] via-[#FB923C] to-[#EF4444]"
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