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
    color: "text-[#B46A28]",
  },
  {
    id: 2,
    title: "2. Wireframe Skeleton",
    tagline: "Grids & Layout Blueprint",
    description: "Gray wireframe UI elements, layout hierarchy, navigation blocks, and component placeholders.",
    icon: Compass,
    color: "text-[#8C4A1D]",
  },
  {
    id: 3,
    title: "3. Figma UI Design",
    tagline: "Framer/Apple Aesthetics",
    description: "Color tokens, typography, glass cards, 60fps micro-interactions, and Lumora sun gradients.",
    icon: Palette,
    color: "text-[#D97706]",
  },
  {
    id: 4,
    title: "4. VS Code & AI Dev",
    tagline: "Full-Stack Engineering",
    description: "Split-screen coding, Next.js React components, API connection lines, and serverless deployment.",
    icon: Code2,
    color: "text-[#78350F]",
  },
  {
    id: 5,
    title: "5. Production Launch",
    tagline: "Deploy & Telemetry",
    description: "Live 100/100 performance platform, global edge deployment, real-time analytics, and growth scaling.",
    icon: Rocket,
    color: "text-emerald-700",
  },
];

export default function ProcessSection() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <section id="process" className="relative w-full bg-[#FAF8F5] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-10 sm:py-12 lg:py-14 my-3 sm:my-4 border-t border-b border-[#E8DFD3] shadow-[0_20px_60px_rgba(60,40,20,0.06)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Warm Ambient Glow Backdrop */}
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[400px] bg-gradient-to-r from-[#E8D4BE]/25 via-[#F3E5D4]/30 to-[#DFC7AF]/25 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#DFCEBD] text-[#8C4E1D] text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B46A28]" />
            INTERACTIVE BUILD SIMULATOR
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#1F1610] tracking-tight">
            See How Lumora <span className="text-gradient-sun">Builds Digital Products</span>
          </h2>

          <p className="text-lg text-[#6B594C] font-subheading font-normal">
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
                      ? "bg-white border-[#B46A28] shadow-[0_10px_30px_rgba(180,106,40,0.12)] scale-[1.02]"
                      : "bg-white/70 border-[#E8DFD3] hover:border-[#DFCEBD] hover:bg-white text-[#6B594C]"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-[#F4ECE1] border border-[#DFCEBD] flex items-center justify-center shrink-0 mt-0.5 ${s.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-bold font-heading ${isActive ? 'text-[#1F1610]' : 'text-[#3D2C20]'}`}>
                        {s.title}
                      </h3>
                      {isActive && (
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#F4ECE1] text-[#8C4E1D] border border-[#DFCEBD] animate-pulse">
                          RECORDING
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#7D6B5D] font-subheading">
                      {s.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Interactive Floating Screen Recording Browser Window */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-3xl bg-white border border-[#E8DFD3] overflow-hidden shadow-[0_20px_60px_rgba(60,40,20,0.08)] relative">
              
              {/* Screen Bar */}
              <div className="bg-[#FAF8F5] border-b border-[#E8DFD3] px-4 py-3 flex items-center justify-between text-xs font-mono text-[#7D6B5D]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="bg-white border border-[#E8DFD3] px-3 py-1 rounded-full text-[11px] text-[#8C4E1D] flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  lumora.tech/build-session // STAGE_{activeStage}
                </div>
                <span className="text-[#8C4A1D] font-bold">60 FPS LIVE</span>
              </div>

              {/* Dynamic Screen Viewport per Stage */}
              <div className="relative min-h-[380px] bg-[#F7F2EB] p-6 flex flex-col justify-between overflow-hidden">
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
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8C4E1D] font-bold">
                        <Search className="w-4 h-4 text-[#B46A28]" /> // STAGE 1: PRODUCT RESEARCH & BLUEPRINT
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white border border-[#DFCEBD] p-4 rounded-xl space-y-2 shadow-sm">
                          <span className="text-[10px] font-mono text-[#8C4E1D] font-bold">USER GOALS</span>
                          <p className="text-xs text-[#5C4B3E]">Fast 0.2s load speed &amp; AI automation workflow.</p>
                        </div>
                        <div className="bg-white border border-[#DFCEBD] p-4 rounded-xl space-y-2 shadow-sm">
                          <span className="text-[10px] font-mono text-[#B46A28] font-bold">TECH ARCHITECTURE</span>
                          <p className="text-xs text-[#5C4B3E]">Next.js 14 App Router + Tailwind + Serverless APIs.</p>
                        </div>
                      </div>
                      <div className="p-3 bg-[#F4ECE1] border border-[#DFCEBD] rounded-xl text-xs font-mono text-[#8C4E1D]">
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
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8C4A1D] font-bold">
                        <Compass className="w-4 h-4 text-[#B46A28]" /> // STAGE 2: WIREFRAME SKELETON LAYOUT
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-3/4 bg-[#E8DFD3] rounded animate-pulse" />
                        <div className="h-3 w-1/2 bg-[#DFD4C4] rounded" />
                      </div>
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        <div className="h-24 rounded-xl border border-dashed border-[#DFCEBD] bg-white/70 p-2 space-y-2 shadow-sm">
                          <div className="h-2 w-full bg-[#E8DFD3] rounded" />
                          <div className="h-2 w-2/3 bg-[#EFE8DD] rounded" />
                        </div>
                        <div className="h-24 rounded-xl border border-dashed border-[#DFCEBD] bg-white/70 p-2 space-y-2 shadow-sm">
                          <div className="h-2 w-full bg-[#E8DFD3] rounded" />
                          <div className="h-2 w-2/3 bg-[#EFE8DD] rounded" />
                        </div>
                        <div className="h-24 rounded-xl border border-dashed border-[#DFCEBD] bg-white/70 p-2 space-y-2 shadow-sm">
                          <div className="h-2 w-full bg-[#E8DFD3] rounded" />
                          <div className="h-2 w-2/3 bg-[#EFE8DD] rounded" />
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
                      <div className="flex items-center gap-2 text-xs font-mono text-[#B46A28] font-bold">
                        <Palette className="w-4 h-4" /> // STAGE 3: FIGMA UI DESIGN &amp; TOKENS
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-[#DFCEBD] space-y-2 shadow-sm">
                        <div className="flex items-center justify-between text-xs font-bold text-[#1F1610]">
                          <span>Primary Button Token</span>
                          <span className="text-[10px] font-mono text-[#8C4E1D]">Apple &amp; Framer Aesthetics</span>
                        </div>
                        <div className="h-8 rounded-full bg-gradient-to-r from-[#B45309] via-[#C97A32] to-[#8C4A1D] flex items-center justify-center text-xs font-bold text-white shadow-md">
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
                      className="space-y-3 font-mono text-xs text-[#2D1F17] my-auto"
                    >
                      <div className="flex items-center gap-2 text-[#78350F] font-bold border-b border-[#DFCEBD] pb-2">
                        <FileCode className="w-4 h-4" /> // STAGE 4: VS CODE &amp; NEXT.JS COMPILER
                      </div>
                      <div className="bg-[#241A14] text-[#FAF8F5] p-3 rounded-xl border border-[#3E2C20] space-y-1 shadow-md">
                        <p className="text-amber-300">export default function <span className="text-[#C97A32]">LumoraApp</span>() &#123;</p>
                        <p className="pl-3 text-emerald-400">return &lt;HeroSection AI=&#123;true&#125; /&gt;;</p>
                        <p className="text-amber-300">&#125;</p>
                      </div>
                      <div className="text-[10px] text-emerald-700 font-bold">
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
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#B45309] via-[#C97A32] to-[#8C4A1D] p-[1px] mx-auto shadow-[0_0_25px_rgba(180,106,40,0.35)]">
                        <div className="w-full h-full bg-[#FAF8F5] rounded-full flex items-center justify-center text-emerald-700">
                          <CheckCircle2 className="w-7 h-7" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold font-heading text-[#1F1610]">100% Live Production Ready</h3>
                        <p className="text-xs text-[#6B594C] font-subheading">Lighthouse Score 100/100 • 99.99% Uptime Guaranteed</p>
                      </div>

                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#B45309] via-[#C97A32] to-[#8C4A1D] shadow-md hover:shadow-lg transition-all"
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