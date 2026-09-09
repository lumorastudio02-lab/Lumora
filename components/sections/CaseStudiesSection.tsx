"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Award, Activity, Sparkles, CheckCircle2, Layers, Cpu, Smartphone, Code } from "lucide-react";

const PDF_FEATURES = [
  {
    tag: "MULTIPLE",
    title: "Digital Projects",
    description: "Websites, UI/UX & Software Solutions",
    icon: Layers,
    color: "text-amber-400",
    border: "border-amber-500/30",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  {
    tag: "CUSTOM",
    title: "Business Solutions",
    description: "Built Around Real Client Requirements",
    icon: Cpu,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  {
    tag: "MODERN",
    title: "Technology Stack",
    description: "React • Next.js • WordPress • Supabase",
    icon: Code,
    color: "text-purple-400",
    border: "border-purple-500/30",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    tag: "RESPONSIVE",
    title: "Cross-Device Experience",
    description: "Designed for Mobile & Desktop",
    icon: Smartphone,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
];

const METRICS = [
  { label: "Speed Improvement", value: "+340%", subtext: "Lighthouse Performance 99+", icon: Zap, color: "text-cyan-400", border: "border-cyan-500/30" },
  { label: "Conversion Increase", value: "+148%", subtext: "Organic Checkout Conversion", icon: TrendingUp, color: "text-purple-400", border: "border-purple-500/30" },
  { label: "UI Quality Score", value: "99.8%", subtext: "Figma Tokens Consistency", icon: Award, color: "text-pink-400", border: "border-pink-500/30" },
  { label: "Uptime SLA", value: "99.99%", subtext: "Serverless Cloud Mesh Uptime", icon: Activity, color: "text-emerald-400", border: "border-emerald-500/30" },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative my-8 sm:my-12 lg:my-16 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto bg-[#050816] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-20 px-6 sm:px-12 border border-cyan-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative">
        {/* Background Ambient Glow */}
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-[140px] pointer-events-none" />

        <div className="relative z-10">
        
        {/* Section Header (PDF Page 1 Specification) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            PROVEN IMPACT
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            PROVEN <span className="text-gradient-cyan-purple">WORK</span>
          </h2>

          <p className="text-xl sm:text-2xl text-cyan-300 font-semibold font-heading">
            Projects Built for Real Businesses
          </p>
        </div>

        {/* 4 Feature Highlights Cards (From PDF Page 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PDF_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl glass-card p-6 border ${feat.border} flex flex-col justify-between space-y-4 hover:border-cyan-400/50 transition-colors`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${feat.color}`} />
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${feat.badgeBg}`}>
                    ✦ {feat.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-subheading mt-1 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Verified Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl glass-card p-6 border ${metric.border} flex flex-col justify-between space-y-4`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    VERIFIED
                  </span>
                </div>

                <div>
                  <div className={`text-4xl font-extrabold font-mono ${metric.color} tracking-tight`}>
                    {metric.value}
                  </div>
                  <div className="text-base font-bold font-heading text-white mt-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {metric.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full-width Case Study Blueprint Breakdown Container */}
        <div className="rounded-3xl glass-panel border border-cyan-500/30 p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                FEATURED CASE STUDY // FINTECH PLATFORM
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                How We Re-engineered FinTech SaaS to Handle 5M+ Daily Transactions
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 pt-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Problem:</strong> Slow legacy codebase causing 4.2s page load latencies and high drop-offs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Solution:</strong> Migrated to Next.js App Router, edge API functions, and serverless vector caching.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#050816] rounded-2xl border border-cyan-500/30 p-6 font-mono text-xs text-slate-300 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-cyan-400 font-bold">
                <span>// PERFORMANCE BENCHMARK</span>
                <span className="text-emerald-400">PASSED 100%</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between"><span>First Contentful Paint:</span> <span className="text-emerald-400 font-bold">0.18s</span></div>
                <div className="flex justify-between"><span>Time to Interactive:</span> <span className="text-emerald-400 font-bold">0.42s</span></div>
                <div className="flex justify-between"><span>Cumulative Layout Shift:</span> <span className="text-emerald-400 font-bold">0.000</span></div>
                <div className="flex justify-between"><span>Lighthouse Security:</span> <span className="text-cyan-400 font-bold">100/100</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);
}
