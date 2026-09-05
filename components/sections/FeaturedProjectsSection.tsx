"use client";

import React, { useState, useRef, MouseEvent, TouchEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, Sliders } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  tags: string[];
  wireframeImg: string;
  finalImg: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    industry: "Retail & FinTech",
    description: "Next-generation multi-vendor e-commerce marketplace featuring real-time AI product recommendations, 0.2s search latency, and global Stripe Checkout.",
    tags: ["Next.js", "Stripe", "AI Recommender", "Tailwind"],
    wireframeImg: "/images/Website_wireframe_skeleton_devel._202609051139.jpeg",
    finalImg: "/images/Website_wireframe_opens_revealin._202609051140.jpeg",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "UI/UX & SaaS",
    industry: "Enterprise AI",
    description: "Real-time AI telemetry dashboard processing over 5M API events daily with automated anomaly detection, custom charts, and role-based access.",
    tags: ["React 19", "Node.js", "PostgreSQL", "Tailwind"],
    wireframeImg: "/images/Wireframe_software_architecture_._202609051140.jpeg",
    finalImg: "/images/Software_architecture_blueprint_._202609051140.jpeg",
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking App",
    category: "App Development",
    industry: "FinTech & Mobile",
    description: "Ultra-secure iOS & Android mobile banking application with biometric authentication, instant p2p transfers, and personal AI financial advice.",
    tags: ["iOS Native", "Android", "Biometrics", "Cloud APIs"],
    wireframeImg: "/images/Smartphone_app_development_wiref._202609051141.jpeg",
    finalImg: "/images/Mobile_app_ecosystem_display_202609051141.jpeg",
  },
];

function BeforeAfterSlider({ wireframeImg, finalImg, title }: { wireframeImg: string; finalImg: string; title: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => (isDragging.current = true)}
      onMouseUp={() => (isDragging.current = false)}
      onMouseLeave={() => (isDragging.current = false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={(e) => handleMove(e.clientX)}
      className="relative w-full h-[260px] bg-[#0A0D24] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-200/80"
    >
      {/* Right Image (Final Production UI) */}
      <img
        src={finalImg}
        alt={`${title} Final UI`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Image (Wireframe Blueprint clipped) */}
      <div
        className="absolute inset-0 overflow-hidden z-10"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={wireframeImg}
          alt={`${title} Wireframe Blueprint`}
          className="absolute inset-0 h-full object-cover max-w-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}
        />
      </div>

      {/* Vertical Slider Line Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(253,186,34,0.8)] z-30"
        style={{ left: `calc(${sliderPos}% - 2px)` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-[#FDBA22] text-white flex items-center justify-center shadow-lg text-xs">
          <Sliders className="w-3.5 h-3.5 text-[#FDBA22]" />
        </div>
      </div>

      {/* Label Tags */}
      <div className="absolute bottom-3 left-3 z-30 bg-[#050816]/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[9px] font-mono text-cyan-300 border border-cyan-500/30">
        BLUEPRINT {Math.round(sliderPos)}%
      </div>
      <div className="absolute bottom-3 right-3 z-30 bg-[#050816]/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[9px] font-mono text-[#FDBA22] border border-[#FDBA22]/30">
        FINAL REALITY
      </div>
    </div>
  );
}

export default function FeaturedProjectsSection() {
  return (
    <section id="portfolio" className="relative w-full bg-[#F6F6F3] rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] py-20 lg:py-28 my-6 sm:my-10 border-t border-b border-[#E4E4E2] shadow-[0_20px_60px_rgba(0,0,0,0.08)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FB923C]/10 border border-[#FB923C]/30 text-[#F97316] text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              PORTFOLIO SHOWCASE
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#1F2937] tracking-tight">
              Featured <span className="text-gradient-sun">Projects</span>
            </h2>

            <p className="text-lg text-[#64748B] font-subheading font-normal">
              Drag the interactive slider below to compare wireframe blueprints against finished production platforms.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm text-slate-900 bg-white border border-[#E4E4E2] hover:border-[#FB923C] transition-all shadow-sm"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Portfolio Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl bg-white p-5 border border-[#E4E4E2] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Interactive Draggable Slider */}
              <BeforeAfterSlider
                wireframeImg={project.wireframeImg}
                finalImg={project.finalImg}
                title={project.title}
              />

              {/* Body Content */}
              <div className="pt-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#F97316]">
                    <span>{project.category}</span>
                    <span className="text-slate-400 font-normal">{project.industry}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#1F2937] group-hover:text-[#F97316] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#64748B] font-subheading leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-heading font-bold text-[#1F2937] group-hover:text-[#F97316] transition-colors">
                      Explore Case Study
                    </span>
                    <ExternalLink className="w-4 h-4 text-[#F97316]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
