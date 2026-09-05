"use client";

import React from "react";

interface LumoraLogoProps {
  variant?: "navbar" | "full" | "footer" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LumoraLogo({
  variant = "navbar",
  size = "md",
  className = "",
}: LumoraLogoProps) {
  const sunSize = size === "sm" ? 18 : size === "lg" ? 32 : 24;

  const SunIcon = () => (
    <svg
      width={sunSize}
      height={sunSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block shrink-0 transform group-hover:rotate-45 transition-transform duration-500"
    >
      <defs>
        <linearGradient id="lumoraSunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDBA22" />
          <stop offset="33%" stopColor="#FB923C" />
          <stop offset="66%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <filter id="sunGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Central Ring */}
      <circle
        cx="50"
        cy="50"
        r="22"
        stroke="url(#lumoraSunGrad)"
        strokeWidth="9"
        fill="none"
        filter="url(#sunGlow)"
      />

      {/* 8 Radiating Rays */}
      <rect x="46" y="8" width="8" height="12" rx="2" fill="url(#lumoraSunGrad)" />
      <rect x="46" y="80" width="8" height="12" rx="2" fill="url(#lumoraSunGrad)" />
      <rect x="8" y="46" width="12" height="8" rx="2" fill="url(#lumoraSunGrad)" />
      <rect x="80" y="46" width="12" height="8" rx="2" fill="url(#lumoraSunGrad)" />

      <rect x="21" y="21" width="8" height="12" rx="2" fill="url(#lumoraSunGrad)" transform="rotate(-45 25 27)" />
      <rect x="71" y="21" width="8" height="12" rx="2" fill="url(#lumoraSunGrad)" transform="rotate(45 75 27)" />
      <rect x="21" y="71" width="8" height="12" rx="2" fill="url(#lumoraSunGrad)" transform="rotate(45 25 77)" />
      <rect x="71" y="71" width="8" height="12" rx="2" fill="url(#lumoraSunGrad)" transform="rotate(-45 75 77)" />
    </svg>
  );

  if (variant === "icon") {
    return <SunIcon />;
  }

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      {/* Main Wordmark: Lum + SunIcon + ra */}
      <div className="flex items-center gap-0.5 sm:gap-1 font-heading font-bold text-white tracking-tight leading-none">
        <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-none">Lum</span>
        <SunIcon />
        <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-none">ra</span>
      </div>

      {/* Subtext for Full / Footer Variant */}
      {(variant === "full" || variant === "footer") && (
        <div className="w-full space-y-0.5 pt-0.5">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#FDBA22] to-transparent opacity-60" />
            <span className="text-[10px] sm:text-xs font-mono italic text-slate-400 font-semibold tracking-wider">
              Technologies
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#FDBA22] to-transparent opacity-60" />
          </div>
          <p className="text-[8px] sm:text-[9px] font-sans text-slate-500 tracking-wider text-center">
            Web • Software • Digital Solutions
          </p>
        </div>
      )}

      {variant === "navbar" && (
        <span className="text-[9px] sm:text-[10px] font-mono italic text-[#FB923C] font-bold tracking-widest leading-none mt-0.5 pl-0.5">
          Technologies
        </span>
      )}
    </div>
  );
}
