"use client";

import React, { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, Layers, Cpu, ShieldCheck, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Dedicated Support" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ rotateX, rotateY });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
      className="relative min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#060816]"
    >
      {/* 1. Animated Aurora Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#FDBA22]/15 rounded-full blur-[120px] sm:blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-cyan-500/10 rounded-full blur-[140px] sm:blur-[160px] animate-pulse-glow" />
        <div className="absolute top-1/2 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/10 rounded-full blur-[140px]" />

        <div 
          className="absolute inset-0 opacity-[0.12]" 
          style={{
            backgroundImage: `radial-gradient(rgba(34, 211, 238, 0.4) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 2xl:gap-12 items-center">
          
          {/* LEFT COLUMN: 6 Columns */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            
            {/* AI Powered Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-[#FDBA22]/40 text-[#FDBA22] text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-[0_0_20px_rgba(253,186,34,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#FDBA22] animate-ping" />
              AI POWERED DIGITAL AGENCY
            </motion.div>

            {/* Responsive Fluid Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] 2xl:text-[80px] font-extrabold font-heading text-white tracking-tight leading-[1.06]"
            >
              We Build <br />
              <span className="text-gradient-sun">Future-Ready</span> <br />
              Digital Products.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 font-subheading font-normal max-w-xl leading-relaxed"
            >
              We design websites, software, mobile apps, AI automation and digital experiences that help businesses grow faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-heading font-bold text-sm sm:text-base text-slate-900 bg-gradient-to-r from-[#FDBA22] via-[#FB923C] to-[#EF4444] shadow-[0_0_30px_rgba(253,186,34,0.4)] hover:shadow-[0_0_45px_rgba(249,115,22,0.6)] transition-all duration-300"
              >
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-heading font-semibold text-sm sm:text-base text-slate-200 glass-card-dark hover:border-cyan-400/50 hover:text-white transition-all duration-300"
              >
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 fill-cyan-400" />
                <span>View Portfolio</span>
              </Link>
            </motion.div>

            {/* Trust Badges Underneath */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-400 font-subheading pt-1"
            >
              <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Next.js &amp; React
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-purple-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Apple Level UI/UX
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#FDBA22] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> AI Integrated
              </span>
            </motion.div>

            {/* Statistics Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
              {STATS.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-gradient-sun">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-subheading">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 6 Columns (3D Wireframe Browser Window Reveal) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Orbiting Floating Chip */}
            <div className="absolute -top-4 -right-2 z-30 hidden md:flex items-center gap-2 glass-card-dark p-2 px-3 rounded-xl border border-[#FDBA22]/40 shadow-lg animate-float">
              <span className="w-2 h-2 rounded-full bg-[#FDBA22] animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-slate-200">AI Agent Active</span>
            </div>

            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full max-w-lg lg:max-w-xl 2xl:max-w-2xl rounded-2xl sm:rounded-3xl glass-card-dark border border-cyan-500/30 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] cursor-pointer group"
            >
              {/* Browser Header Bar */}
              <div className="bg-[#060816]/95 border-b border-cyan-500/20 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-0.5 text-[10px] sm:text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FDBA22] animate-pulse" />
                  lumora.tech/app
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </div>

              {/* Blueprint -> Colorful Reality Dashboard Image Container */}
              <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] bg-[#0A0D24] overflow-hidden p-3 sm:p-4">
                
                {/* Visual A: Blueprint Skeleton */}
                <div className={`absolute inset-0 p-4 sm:p-6 flex flex-col justify-between transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2 sm:pb-3">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDBA22]" />
                      <span className="text-[10px] sm:text-xs font-mono text-cyan-300 font-bold">SYSTEM_WIREFRAME_BLUEPRINT</span>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#FDBA22]/20 text-[#FDBA22] border border-[#FDBA22]/40 font-bold">
                      BLUEPRINT
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-4 my-auto">
                    <div className="h-3.5 w-3/4 bg-cyan-500/20 rounded border border-cyan-500/40 animate-pulse" />
                    <div className="h-2.5 w-1/2 bg-cyan-500/10 rounded border border-cyan-500/20" />
                    
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                      <div className="h-16 sm:h-20 rounded-xl bg-cyan-950/40 border border-cyan-500/30 p-2 space-y-1.5">
                        <div className="h-2 w-full bg-cyan-500/30 rounded" />
                        <div className="h-2 w-2/3 bg-cyan-500/20 rounded" />
                      </div>
                      <div className="h-16 sm:h-20 rounded-xl bg-amber-950/40 border border-[#FDBA22]/30 p-2 space-y-1.5">
                        <div className="h-2 w-full bg-[#FDBA22]/30 rounded" />
                        <div className="h-2 w-2/3 bg-[#FDBA22]/20 rounded" />
                      </div>
                      <div className="h-16 sm:h-20 rounded-xl bg-purple-950/40 border border-purple-500/30 p-2 space-y-1.5">
                        <div className="h-2 w-full bg-purple-500/30 rounded" />
                        <div className="h-2 w-2/3 bg-purple-500/20 rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-[10px] sm:text-xs font-mono text-cyan-400/90 animate-bounce pt-1">
                    Hover to Morph Skeleton → Live Dashboard
                  </div>
                </div>

                {/* Visual B: High Fidelity Reality Dashboard */}
                <div className={`absolute inset-0 p-4 sm:p-6 bg-gradient-to-br from-[#0A0D24] via-[#0F173A] to-[#0A0D24] flex flex-col justify-between transition-all duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="flex items-center justify-between border-b border-purple-500/30 pb-2 sm:pb-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      <span className="text-[10px] sm:text-xs font-mono text-purple-300 font-bold">LUMORA AI RUNTIME ENGINE</span>
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                      PRODUCTION READY
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-4 my-auto">
                    <div className="flex items-center justify-between">
                      <div className="text-xs sm:text-sm font-bold font-heading text-white">AI Automation System v5.2</div>
                      <div className="text-[10px] sm:text-xs text-[#FDBA22] font-mono font-bold">+184% Growth</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="bg-white/5 border border-cyan-500/30 p-2.5 sm:p-3 rounded-xl">
                        <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono">NEURAL REASONING</div>
                        <div className="text-sm sm:text-lg font-bold text-cyan-300 font-mono">0.02ms Latency</div>
                        <div className="w-full bg-cyan-500/20 h-1 sm:h-1.5 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-cyan-400 h-full w-4/5" />
                        </div>
                      </div>
                      <div className="bg-white/5 border border-[#FDBA22]/30 p-2.5 sm:p-3 rounded-xl">
                        <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono">LIVE CONVERSIONS</div>
                        <div className="text-sm sm:text-lg font-bold text-[#FDBA22] font-mono">99.98% Accuracy</div>
                        <div className="w-full bg-[#FDBA22]/20 h-1 sm:h-1.5 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-[#FDBA22] h-full w-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-400 font-mono border-t border-white/10 pt-2">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Security Verified
                    </span>
                    <span className="text-cyan-400 font-bold">Explore Platform →</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}