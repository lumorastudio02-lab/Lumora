"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2 } from "lucide-react";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden hidden xl:block">
      {/* Single Ultra-Minimal Glass Chip (Top Right) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: 1,
          y: [-6, 6, -6],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 1 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[8%] right-[5%] z-20 backdrop-blur-md bg-white/60 border border-slate-200/50 p-2.5 px-3.5 rounded-full shadow-sm flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-[11px] font-medium text-slate-700 font-mono tracking-tight">
          Next.js 14 App Router
        </span>
      </motion.div>
    </div>
  );
}
