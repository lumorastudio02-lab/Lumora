"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Layout, Server, Sparkles, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    icon: Cpu,
    title: "AI Powered Solutions",
    description: "Integrated artificial intelligence models, automated code generation, and neural reasoners that accelerate time-to-market.",
    badge: "Next-Gen AI",
  },
  {
    icon: Zap,
    title: "Lightning Fast Development",
    description: "Rapid 2x agile sprints, modular UI design tokens, and CI/CD automated deployments without compromising quality.",
    badge: "2x Delivery Speed",
  },
  {
    icon: Layout,
    title: "Modern UI/UX Systems",
    description: "Apple and Framer standard interfaces, fluid 60fps micro-interactions, responsive grids, and accessible design tokens.",
    badge: "Award-Winning UI",
  },
  {
    icon: Server,
    title: "Scalable Architecture",
    description: "Cloud serverless infrastructures, microservices mesh, 99.99% uptime SLA, and enterprise security compliance.",
    badge: "99.99% Uptime",
  },
];

export default function WhyLumoraSection() {
  return (
    <section id="why-lumora" className="relative w-full bg-[#F4EFEA] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-10 sm:py-12 lg:py-14 my-3 sm:my-4 border-t border-b border-[#E8DFD3] shadow-[0_20px_60px_rgba(60,40,20,0.06)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#DFCEBD] text-[#8C4E1D] text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B46A28]" />
            THE LUMORA ADVANTAGE
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#1F1610] tracking-tight">
            Why <span className="text-gradient-sun">Lumora Technologies?</span>
          </h2>

          <p className="text-lg text-[#6B594C] font-subheading font-normal">
            We fuse futuristic artificial intelligence with engineering craftsmanship to build software that scales effortlessly.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white p-6 border border-[#E8DFD3] shadow-[0_10px_30px_rgba(60,40,20,0.04)] hover:shadow-[0_20px_50px_rgba(60,40,20,0.08)] hover:border-[#B46A28]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon Wrapper with Warm Caramel Brown Palette */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4ECE1] border border-[#DFCEBD] p-1 shadow-sm group-hover:scale-110 transition-transform flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#B46A28]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#F4ECE1] text-[#8C4E1D] border border-[#DFCEBD]">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-[#1F1610] group-hover:text-[#B46A28] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#6B594C] font-subheading leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DFD3] flex items-center gap-2 text-xs font-mono text-[#8C4E1D]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Enterprise Grade</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
