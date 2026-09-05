"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={handleScrollClick}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: [0.4, 1, 0.4], y: 0 }}
      transition={{
        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 0.8, delay: 1 },
      }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-1.5 cursor-pointer group focus:outline-none"
      aria-label="Scroll down to explore"
    >
      {/* Animated Mouse Shell */}
      <div className="w-5 h-8 rounded-full border-2 border-slate-400 group-hover:border-blue-600 flex justify-center p-1 transition-colors">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-1.5 rounded-full bg-slate-500 group-hover:bg-blue-600 transition-colors"
        />
      </div>

      {/* Label & Bouncing Arrow */}
      <div className="flex items-center gap-1">
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-600 transition-colors">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-600 transition-colors" />
        </motion.div>
      </div>
    </motion.button>
  );
}
