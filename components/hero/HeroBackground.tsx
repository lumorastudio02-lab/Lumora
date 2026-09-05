"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#F8FAFC]">
      {/* Pure Ambient Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/8 via-indigo-500/4 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />

      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.25]" 
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft Animated Blur Blob */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] left-[10%] w-96 h-96 rounded-full bg-blue-400/5 blur-[120px]"
      />
    </div>
  );
}
