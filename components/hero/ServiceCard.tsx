"use client";

import React, { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Globe, 
  Terminal, 
  Palette, 
  Layers, 
  Monitor, 
  Smartphone, 
  Sparkles,
  ExternalLink,
  CheckCircle2,
  LayoutGrid
} from "lucide-react";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  accentColor: string;
  bgGradient: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  isHovered?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export default function ServiceCard({
  service,
  index,
  isHovered = false,
  onHoverStart,
  onHoverEnd,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [localHover, setLocalHover] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const activeHover = isHovered || localHover;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setLocalHover(true);
    if (onHoverStart) onHoverStart();
  };

  const handleMouseLeave = () => {
    setLocalHover(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    if (onHoverEnd) onHoverEnd();
  };

  const getIcon = () => {
    switch (service.id) {
      case "website-dev": return <Globe className="w-4 h-4 text-blue-600" />;
      case "software-dev": return <Terminal className="w-4 h-4 text-indigo-600" />;
      case "graphic-design": return <Palette className="w-4 h-4 text-purple-600" />;
      case "ui-ux": return <Layers className="w-4 h-4 text-sky-600" />;
      case "website-design": return <Monitor className="w-4 h-4 text-blue-600" />;
      case "app-dev": return <Smartphone className="w-4 h-4 text-violet-600" />;
      default: return <Sparkles className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        transformStyle: "preserve-3d",
        transform: activeHover
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      }}
      className={`relative w-full rounded-[24px] overflow-hidden transition-all duration-300 cursor-pointer border ${
        activeHover
          ? "border-blue-500/40 shadow-[0_16px_40px_rgba(37,99,235,0.12)] bg-white"
          : "border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white/95"
      }`}
    >
      {/* Card Header Info */}
      <div className="p-4 sm:p-5 pb-3 flex items-center justify-between z-20 relative">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-slate-100/90 border border-slate-200/60 flex items-center justify-center">
            {getIcon()}
          </div>
          <div>
            <div className="text-[9px] font-bold tracking-widest text-blue-600 uppercase">
              {service.category}
            </div>
            <h3 className="text-sm font-bold text-slate-900">
              {service.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-slate-400">
            {service.number}
          </span>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
            activeHover ? "bg-blue-600 text-white translate-x-0.5" : "bg-slate-100 text-slate-500"
          }`}>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Card Main Visual Container */}
      <div className="relative w-full h-[210px] overflow-hidden bg-slate-950 z-20 flex items-center justify-center">
        {/* Wireframe Skeleton Reveal on Hover (500-700ms clip-path sequence) */}
        <AnimatePresence>
          {activeHover && (
            <motion.div
              initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
              exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-30 bg-slate-950 p-4 flex flex-col justify-between border-t border-slate-800"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-400">WIRE_LAYOUT_REVEAL</span>
                </div>
                <span className="text-[9px] font-mono text-blue-400">
                  FIGMA &#8594; CODE
                </span>
              </div>

              {/* Service Wireframe Layout */}
              <div className="my-auto space-y-2">
                {service.id === "website-dev" && (
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-2/3 bg-slate-800 rounded animate-pulse" />
                    <div className="h-2 w-1/3 bg-slate-800/60 rounded" />
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="h-10 rounded bg-slate-900 border border-slate-800 p-1.5 space-y-1">
                        <div className="h-1.5 w-full bg-blue-500/40 rounded" />
                      </div>
                      <div className="h-10 rounded bg-slate-900 border border-slate-800 p-1.5 space-y-1">
                        <div className="h-1.5 w-full bg-indigo-500/40 rounded" />
                      </div>
                    </div>
                  </div>
                )}

                {service.id === "software-dev" && (
                  <div className="font-mono text-[9px] space-y-1 text-slate-400 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <p className="text-purple-400">&gt; LumoraArchitect.buildSystem()</p>
                    <p className="text-emerald-400">&#10003; Serverless API Online</p>
                  </div>
                )}

                {service.id === "graphic-design" && (
                  <div className="flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-800">
                    <div className="w-5 h-5 rounded-full bg-purple-500/30 border border-purple-400/40" />
                    <div className="h-2 w-20 bg-slate-700 rounded" />
                  </div>
                )}

                {service.id === "ui-ux" && (
                  <div className="p-2 border border-dashed border-slate-800 rounded-lg space-y-1">
                    <div className="h-2 w-full bg-slate-800 rounded" />
                    <div className="h-2 w-2/3 bg-slate-800 rounded" />
                  </div>
                )}

                {service.id === "website-design" && (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-slate-900 border border-slate-800 rounded p-1 space-y-1">
                      <div className="h-1.5 w-full bg-blue-500/30 rounded" />
                    </div>
                    <div className="h-12 bg-slate-900 border border-slate-800 rounded p-1 space-y-1">
                      <div className="h-1.5 w-full bg-indigo-500/30 rounded" />
                    </div>
                  </div>
                )}

                {service.id === "app-dev" && (
                  <div className="w-20 mx-auto h-14 bg-slate-900 border border-slate-800 rounded-lg p-1 flex flex-col justify-between items-center">
                    <div className="w-4 h-0.5 bg-slate-700 rounded-full" />
                    <div className="text-[9px] text-blue-400 font-mono">iOS UI</div>
                    <div className="w-4 h-0.5 bg-slate-700 rounded-full" />
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-slate-800 pt-1">
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3 h-3" /> Ready
                </span>
                <span className="text-blue-400 font-semibold">Explore &#8594;</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* High Fidelity UI Graphic */}
        <div className="absolute inset-0 w-full h-full bg-slate-950 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 px-1">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 rounded-full bg-green-500/70" />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-full px-2.5 py-0.5 text-[9px] font-mono text-slate-400">
              lumora.studio/{service.id}
            </div>
            <ExternalLink className="w-3 h-3 text-slate-600" />
          </div>

          <div className="relative flex-1 my-1.5 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 p-2.5 flex flex-col justify-center">
            {service.id === "website-dev" && (
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-400" /> Web Platform
                </div>
                <div className="h-1.5 w-full bg-blue-500/20 rounded overflow-hidden">
                  <div className="bg-blue-500 h-full w-3/4" />
                </div>
              </div>
            )}

            {service.id === "software-dev" && (
              <div className="font-mono text-[9px] space-y-1">
                <p className="text-purple-400">export async function deploy() &#123;</p>
                <p className="pl-2 text-emerald-400">return system.optimize();</p>
                <p className="text-purple-400">&#125;</p>
              </div>
            )}

            {service.id === "graphic-design" && (
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-white">LUMORA BRAND</div>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  L
                </div>
              </div>
            )}

            {service.id === "ui-ux" && (
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-white flex items-center gap-1">
                  <LayoutGrid className="w-3 h-3 text-sky-400" /> Design System Tokens
                </div>
                <div className="h-1.5 w-full bg-sky-500/20 rounded" />
              </div>
            )}

            {service.id === "website-design" && (
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-white flex items-center gap-1">
                  <Monitor className="w-3 h-3 text-blue-400" /> Editorial Layout
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="h-4 bg-blue-600/30 rounded" />
                  <div className="h-4 bg-indigo-600/30 rounded" />
                </div>
              </div>
            )}

            {service.id === "app-dev" && (
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-violet-400" />
                <div>
                  <div className="text-xs font-bold text-white">iOS Native App</div>
                  <div className="text-[9px] text-slate-400">60 FPS Smooth UI</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Text */}
      <div className="p-4 pt-2.5 bg-white border-t border-slate-100 z-20 relative">
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {service.description}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-1">
          {service.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
