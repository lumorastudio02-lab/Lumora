"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Palette, Code2, Rocket, Sparkles, CheckCircle2, Terminal, Play, ArrowRight, Layers, FileCode, Monitor } from "lucide-react";
import Link from "next/link";

const STAGES = [
  {
    id: 1,
    title: "1. Research & Blueprint",
    tagline: "Mapping product architecture",
    description: "Idea discovery, sticky notes mapping, component scope, and technical wireframe sketch.",
    icon: Search,
    color: "text-cyan-400",
  },
  {
    id: 2,
    title: "2. Wireframe Skeleton",
    tagline: "Grids & Layout Blueprint",
    description: "Gray wireframe UI elements, layout hierarchy, navigation blocks, and component placeholders.",
    icon: Compass,
    color: "text-purple-400",
  },
  {
    id: 3,
    title: "3. Figma UI Design",
    tagline: "Framer/Apple Aesthetics",
    description: "Color tokens, typography, glass cards, 60fps micro-interactions, and Lumora sun gradients.",
    icon: Palette,
    color: "text-[#FDBA22]",
  },
  {
    id: 4,
    title: "4. VS Code & AI Dev",
    tagline: "Full-Stack Engineering",
    description: "Split-screen coding, Next.js React components, API connection lines, and serverless deployment.",
    icon: Code2,
    color: "text-sky-400",
  },
  {
    id: 5,
    title: "5. Production Launch",
    tagline: "Deploy & Telemetry",
    description: "Live 100/100 performance platform, global edge deployment, real-time analytics, and growth scaling.",
    icon: Rocket,
    color: "text-emerald-400",
  },
];

export default function ProcessSection() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <section id="process" className="relative w-full bg-[#060816] rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] py-20 lg:py-28 my-6 sm:my-10 border-t border-b border-cyan-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Aurora Glow Backdrop */}
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-[#FDBA22]/10 to-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDBA22]/10 border border-[#FDBA22]/30 text-[#FDBA22] text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            INTERACTIVE BUILD SIMULATOR
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            See How Lumora <span className="text-gradient-sun">Builds Digital Products</span>
          </h2>

          <p className="text-lg text-slate-300 font-subheading font-normal">
            Watch an idea transform into a live production product in real time.
          </p>
        </div>

        {/* Interactive Screen Recording Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SIDE: 5 Stages List (Sticky Navigation) */}
          <div className="lg:col-span-5 space-y-4">
            {STAGES.map((s) => {
              const Icon = s.icon;
              const isActive = activeStage === s.id;

              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(s.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 ${
                    isActive
                      ? "glass-card-dark border-[#FDBA22]/50 shadow-[0_0_30px_rgba(253,186,34,0.2)] bg-white/5"
                      : "glass-panel border-white/5 hover:border-white/20 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 ${s.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold font-heading text-white">
                        {s.title}
                      </h3>
                      {isActive && (
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#FDBA22]/20 text-[#FDBA22] border border-[#FDBA22]/40 animate-pulse">
                          RECORDING
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 font-subheading">
                      {s.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Interactive Floating Screen Recording Browser Window */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-3xl glass-card-dark border border-cyan-500/30 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative">
              
              {/* Screen Bar */}
              <div className="bg-[#060816] border-b border-white/10 px-4 py-3 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="bg-white/5 px-3 py-1 rounded-full text-[11px] text-cyan-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  lumora.tech/build-session // STAGE_{activeStage}
                </div>
                <span className="text-purple-400 font-bold">60 FPS LIVE</span>
              </div>

              {/* Dynamic Screen Viewport per Stage */}
              <div className="relative min-h-[380px] bg-[#0A0D24] p-6 flex flex-col justify-between overflow-hidden">
                <AnimatePresence mode="wait">
                  
                  {/* STAGE 1: Research Notes */}
                  {activeStage === 1 && (
                    <motion.div
                      key="stage1"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6 my-auto"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                        <Search className="w-4 h-4" /> // STAGE 1: PRODUCT RESEARCH & BLUEPRINT
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl space-y-2">
                          <span className="text-[10px] font-mono text-amber-400 font-bold">USER GOALS</span>
                          <p className="text-xs text-slate-300">Fast 0.2s load speed &amp; AI automation workflow.</p>
                        </div>
                        <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-xl space-y-2">
                          <span className="text-[10px] font-mono text-cyan-400 font-bold">TECH ARCHITECTURE</span>
                          <p className="text-xs text-slate-300">Next.js 14 App Router + Tailwind + Serverless APIs.</p>
                        </div>
                      </div>
                      <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl text-xs font-mono text-purple-300">
                        &gt; Connecting blueprint nodes... 100% mapped.
                      </div>
                    </motion.div>
                  )}

                  {/* STAGE 2: Wireframe Blueprint */}
                  {activeStage === 2 && (
                    <motion.div
                      key="stage2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 my-auto"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                        <Compass className="w-4 h-4" /> // STAGE 2: WIREFRAME SKELETON LAYOUT
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                        <div className="h-3 w-1/2 bg-slate-800/60 rounded" />
                      </div>
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        <div className="h-24 rounded-xl border border-dashed border-slate-700 p-2 space-y-2">
                          <div className="h-2 w-full bg-slate-800 rounded" />
                          <div className="h-2 w-2/3 bg-slate-800 rounded" />
                        </div>
                        <div className="h-24 rounded-xl border border-dashed border-slate-700 p-2 space-y-2">
                          <div className="h-2 w-full bg-slate-800 rounded" />
                          <div className="h-2 w-2/3 bg-slate-800 rounded" />
                        </div>
                        <div className="h-24 rounded-xl border border-dashed border-slate-700 p-2 space-y-2">
                          <div className="h-2 w-full bg-slate-800 rounded" />
                          <div className="h-2 w-2/3 bg-slate-800 rounded" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STAGE 3: Figma UI Design */}
                  {activeStage === 3 && (
                    <motion.div
                      key="stage3"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 my-auto"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-[#FDBA22]">
                        <Palette className="w-4 h-4" /> // STAGE 3: FIGMA UI DESIGN &amp; TOKENS
                      </div>
                      <div className="bg-gradient-to-r from-[#FDBA22]/20 via-[#FB923C]/20 to-[#EF4444]/20 p-4 rounded-2xl border border-[#FDBA22]/40 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-white">
                          <span>Primary Button Token</span>
                          <span className="text-[10px] font-mono text-[#FDBA22]">Apple Aesthetics</span>
                        </div>
                        <div className="h-8 rounded-full bg-gradient-to-r from-[#FDBA22] via-[#FB923C] to-[#EF4444] flex items-center justify-center text-xs font-bold text-slate-900 shadow-md">
                          Interactive Hover Token
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STAGE 4: Development Split View */}
                  {activeStage === 4 && (
                    <motion.div
                      key="stage4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-3 font-mono text-xs text-slate-300 my-auto"
                    >
                      <div className="flex items-center gap-2 text-sky-400 font-bold border-b border-white/10 pb-2">
                        <FileCode className="w-4 h-4" /> // STAGE 4: VS CODE &amp; NEXT.JS COMPILER
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                        <p className="text-purple-400">export default function <span className="text-cyan-400">LumoraApp</span>() &#123;</p>
                        <p className="pl-3 text-emerald-400">return &lt;HeroSection AI=&#123;true&#125; /&gt;;</p>
                        <p className="text-purple-400">&#125;</p>
                      </div>
                      <div className="text-[10px] text-emerald-400">
                        &#10003; Compiled in 18ms // 0 errors
                      </div>
                    </motion.div>
                  )}

                  {/* STAGE 5: Production Launch */}
                  {activeStage === 5 && (
                    <motion.div
                      key="stage5"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6 text-center my-auto"
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FDBA22] via-[#FB923C] to-[#EF4444] p-[1px] mx-auto shadow-[0_0_30px_rgba(253,186,34,0.5)]">
                        <div className="w-full h-full bg-[#050816] rounded-full flex items-center justify-center text-emerald-400">
                          <CheckCircle2 className="w-7 h-7" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold font-heading text-white">100% Live Production Ready</h3>
                        <p className="text-xs text-slate-300 font-subheading">Lighthouse Score 100/100 • 99.99% Uptime Guaranteed</p>
                      </div>

                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm text-slate-900 bg-gradient-to-r from-[#FDBA22] via-[#FB923C] to-[#EF4444] shadow-lg hover:shadow-xl transition-all"
                      >
                        Launch Your Project <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);
}