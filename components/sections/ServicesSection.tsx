"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Terminal, Palette, Layers, Monitor, Smartphone, Sparkles } from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  skeletonImg: string;
  revealImg: string;
  icon: any;
}

const SERVICES: ServiceItem[] = [
  {
    id: "website-dev",
    number: "01",
    title: "Website Development",
    category: "Web Platforms",
    description: "High-performance, SEO-optimized landing pages and full-scale web platforms built with React, Next.js, and TypeScript.",
    skeletonImg: "/images/Website_wireframe_skeleton_devel._202609051139.jpeg",
    revealImg: "/images/Website_wireframe_opens_revealin._202609051140.jpeg",
    icon: Globe,
  },
  {
    id: "software-dev",
    number: "02",
    title: "Software Development",
    category: "Custom Systems",
    description: "Scalable SaaS products, serverless microservices, cloud backend architectures, and AI API integrations.",
    skeletonImg: "/images/Wireframe_software_architecture_._202609051140.jpeg",
    revealImg: "/images/Software_architecture_blueprint_._202609051140.jpeg",
    icon: Terminal,
  },
  {
    id: "graphic-design",
    number: "03",
    title: "Graphic Design",
    category: "Brand & Visuals",
    description: "Creative visual brand identities, custom typography, brand style guides, marketing assets, and vector design systems.",
    skeletonImg: "/images/Skeleton_design_tools_reveal_studio_202609051141.jpeg",
    revealImg: "/images/3D_skeleton_design_workspace_202609051141.jpeg",
    icon: Palette,
  },
  {
    id: "ui-ux-design",
    number: "04",
    title: "UI/UX Design",
    category: "User Experience",
    description: "Figma wireframes, design tokens, high-fidelity prototypes, and human-centered design systems built to convert.",
    skeletonImg: "/images/Modern_website_design_blueprint_202609051141.jpeg",
    revealImg: "/images/Modern_website_design_blueprint_._202609051141.jpeg",
    icon: Layers,
  },
  {
    id: "website-design",
    number: "05",
    title: "Website Design",
    category: "Editorial Aesthetics",
    description: "Stunning homepage layouts, grid structures, micro-interactions, and editorial aesthetics that tell your brand story.",
    skeletonImg: "/images/Modern_website_design_blueprint_202609051141.jpeg",
    revealImg: "/images/Modern_website_design_blueprint_._202609051141.jpeg",
    icon: Monitor,
  },
  {
    id: "app-development",
    number: "06",
    title: "Mobile App Development",
    category: "iOS & Android",
    description: "Cross-platform mobile applications with native gestures, sleek interfaces, 60fps animations, and cloud sync.",
    skeletonImg: "/images/Smartphone_app_development_wiref._202609051141.jpeg",
    revealImg: "/images/Mobile_app_ecosystem_display_202609051141.jpeg",
    icon: Smartphone,
  },
];

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="relative w-full bg-[#050816] rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] py-20 lg:py-28 my-6 sm:my-10 border-t border-b border-cyan-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            OUR CORE EXPERTISE
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            What&apos;s the <span className="text-gradient-sun italic">catch?</span>
          </h2>

          <p className="text-lg text-slate-300 font-subheading font-normal">
            There isn&apos;t one. Explore our core services built to transform your business.
          </p>
        </div>

        {/* 2x3 Glass Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-3xl glass-card border border-cyan-500/20 overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                {/* Image Container with Skeleton -> Reality Morph */}
                <div className="relative w-full h-[240px] bg-[#0A0D24] overflow-hidden">
                  
                  {/* Default Skeleton Image */}
                  <img
                    src={service.skeletonImg}
                    alt={`${service.title} Skeleton`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? "opacity-0 scale-105" : "opacity-90 scale-100"
                    }`}
                  />

                  {/* Hover Reveal Image */}
                  <img
                    src={service.revealImg}
                    alt={`${service.title} Final Reveal`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  />

                  {/* Overlay Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#050816]/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {isHovered ? "REVEAL MODE" : "BLUEPRINT"}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20 font-mono text-xs font-bold text-slate-400">
                    {service.number}
                  </div>
                </div>

                {/* Card Body Info */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Card CTA Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-heading font-semibold text-cyan-400 group-hover:text-white transition-colors">
                      Learn More
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-cyan-400 group-hover:text-slate-900 flex items-center justify-center text-slate-300 transition-all transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
}