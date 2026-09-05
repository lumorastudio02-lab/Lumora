"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const STATS: StatItem[] = [
  { value: 30, suffix: "+", label: "Brands Delivered", description: "Impactful web & software projects" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Long-term client partnerships" },
  { value: 100, suffix: "%", label: "Responsive", description: "Flawless on every device viewport" },
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing cubic-out for sleek count animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="pt-8 border-t border-slate-200/80 mt-8 w-full max-w-[540px]"
    >
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        {STATS.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-mono tracking-tight flex items-baseline gap-0.5">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                <CountUp end={stat.value} />
              </span>
              <span className="text-blue-600 font-sans text-xl sm:text-2xl font-bold">
                {stat.suffix}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {stat.label}
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-normal hidden sm:block leading-snug mt-0.5">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
