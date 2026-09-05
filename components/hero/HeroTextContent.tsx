"use client";

import React from "react";
import { LayoutGroup, motion } from "framer-motion";
import { Sparkles, CheckCircle2, Zap } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const TRUST_BADGES = [
  { name: "React & Next.js", icon: Zap },
  { name: "SEO Optimized", icon: Sparkles },
  { name: "Fast Delivery", icon: CheckCircle2 },
];

export default function HeroTextContent() {
  return (
    <div className="flex flex-col justify-center space-y-6 z-20 max-w-[600px]">
      {/* 1. Small Minimal Label */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200/60 w-fit"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700 font-mono">
          LUMORA STUDIO
        </span>
      </motion.div>

      {/* 2. Main Headline with Animated TextRotate */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B1220] tracking-tight leading-[1.08] font-sans"
      >
        Build{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          websites
        </span>
        ,{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          software
        </span>{" "}
        &amp;{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          brands
        </span>{" "}
        that people{" "}
        <LayoutGroup>
          <motion.span layout className="inline-flex items-center whitespace-pre">
            <TextRotate
              texts={[
                "remember.",
                "beautiful.",
                "creative.",
                "innovative.",
                "modern.",
              ]}
              mainClassName="overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block rounded-xl py-0 pb-1"
              staggerDuration={0.03}
              staggerFrom="last"
              rotationInterval={3000}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </motion.span>
        </LayoutGroup>
      </motion.h1>

      {/* 3. Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed max-w-[500px]"
      >
        Lumora Studio helps startups and modern brands build premium websites, software, mobile apps, and digital experiences that drive growth.
      </motion.p>

      {/* 4. CTA Buttons */}
      <HeroButtons />

      {/* 5. Minimal Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="pt-1 flex flex-wrap items-center gap-2"
      >
        {TRUST_BADGES.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + idx * 0.08 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 shadow-2xs text-xs font-medium text-slate-600"
            >
              <Icon className="w-3 h-3 text-blue-600" />
              <span>{badge.name}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 6. Minimal Stats Row */}
      <HeroStats />
    </div>
  );
}
