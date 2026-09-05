"use client";

import React, { useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroButtons() {
  const primaryRef = useRef<HTMLAnchorElement>(null);
  const secondaryRef = useRef<HTMLAnchorElement>(null);

  const [primaryPos, setPrimaryPos] = useState({ x: 0, y: 0 });
  const [secondaryPos, setSecondaryPos] = useState({ x: 0, y: 0 });

  // Magnetic hover handler for Primary Button
  const handlePrimaryMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!primaryRef.current) return;
    const rect = primaryRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.3;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.3;
    setPrimaryPos({ x, y });
  };

  const handlePrimaryMouseLeave = () => {
    setPrimaryPos({ x: 0, y: 0 });
  };

  // Magnetic hover handler for Secondary Button
  const handleSecondaryMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!secondaryRef.current) return;
    const rect = secondaryRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
    setSecondaryPos({ x, y });
  };

  const handleSecondaryMouseLeave = () => {
    setSecondaryPos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-wrap items-center gap-4 pt-2 sm:pt-4"
    >
      {/* Primary Magnetic CTA Button */}
      <motion.div
        animate={{ x: primaryPos.x, y: primaryPos.y }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      >
        <Link
          ref={primaryRef}
          onMouseMove={handlePrimaryMouseMove}
          onMouseLeave={handlePrimaryMouseLeave}
          href="/contact"
          className="group relative inline-flex items-center gap-3 bg-[#0B1220] hover:bg-slate-900 text-white font-semibold text-base sm:text-lg px-7 py-4 rounded-full shadow-[0_12px_35px_rgba(37,99,235,0.25)] hover:shadow-[0_18px_45px_rgba(37,99,235,0.4)] transition-all duration-300 overflow-hidden border border-slate-800"
        >
          {/* Subtle Glow backdrop pulse */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

          {/* Button Text */}
          <span className="relative z-10 tracking-tight">Launch Project</span>

          {/* Sliding Arrow Icon */}
          <div className="relative z-10 w-8 h-8 rounded-full bg-blue-600 group-hover:bg-blue-500 flex items-center justify-center text-white transition-colors duration-300 shadow-md">
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </Link>
      </motion.div>

      {/* Secondary Glass Outline CTA Button */}
      <motion.div
        animate={{ x: secondaryPos.x, y: secondaryPos.y }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      >
        <Link
          ref={secondaryRef}
          onMouseMove={handleSecondaryMouseMove}
          onMouseLeave={handleSecondaryMouseLeave}
          href="/work"
          className="group relative inline-flex items-center gap-2.5 bg-white/70 hover:bg-white/90 backdrop-blur-md border border-slate-300/80 hover:border-blue-400 text-slate-800 hover:text-blue-600 font-semibold text-base sm:text-lg px-7 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          {/* Animated Border Shimmer on Hover */}
          <span className="absolute inset-0 p-[1px] rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <Sparkles className="w-4 h-4 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="relative z-10 tracking-tight">View Our Work</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
