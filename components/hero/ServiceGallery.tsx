"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard, { ServiceItem } from "./ServiceCard";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "website-dev",
    number: "01",
    title: "Website Development",
    category: "Web Engineering",
    description:
      "High-speed, SEO-optimized landing pages and full-scale web platforms built with React, Next.js, and TypeScript.",
    tags: ["Next.js", "React", "Tailwind", "SEO"],
    accentColor: "#2563EB",
    bgGradient: "from-blue-600 to-indigo-600",
  },
  {
    id: "software-dev",
    number: "02",
    title: "Software Development",
    category: "Full Stack Systems",
    description:
      "Scalable SaaS products, serverless microservices, cloud architectures, and robust API infrastructure for growing enterprises.",
    tags: ["SaaS", "APIs", "Node.js", "Cloud"],
    accentColor: "#4F46E5",
    bgGradient: "from-indigo-600 to-purple-600",
  },
  {
    id: "graphic-design",
    number: "03",
    title: "Graphic Design",
    category: "Brand & Identity",
    description:
      "Memorable visual identities, custom typography, brand style guides, marketing assets, and graphic design systems.",
    tags: ["Branding", "Vector", "Identity", "Posters"],
    accentColor: "#7C3AED",
    bgGradient: "from-purple-600 to-pink-600",
  },
  {
    id: "ui-ux",
    number: "04",
    title: "UI/UX Design",
    category: "Design Systems",
    description:
      "User-first Figma design systems, wireframes, interactive prototypes, and accessible user interface journeys.",
    tags: ["Figma", "Wireframes", "Design System", "Prototypes"],
    accentColor: "#0284C7",
    bgGradient: "from-sky-500 to-blue-600",
  },
  {
    id: "website-design",
    number: "05",
    title: "Website Design",
    category: "Editorial Design",
    description:
      "Stunning, responsive homepage layouts, editorial grid structures, and interactive web aesthetics that captivate visitors.",
    tags: ["Editorial", "Responsive", "Grids", "Animation"],
    accentColor: "#2563EB",
    bgGradient: "from-blue-600 to-indigo-600",
  },
  {
    id: "app-dev",
    number: "06",
    title: "App Development",
    category: "Mobile Native",
    description:
      "Cross-platform iOS and Android applications built with sleek interfaces, smooth gestures, and lightning-fast speed.",
    tags: ["iOS", "Android", "React Native", "Mobile UI"],
    accentColor: "#6D28D9",
    bgGradient: "from-violet-600 to-indigo-700",
  },
];

interface ServiceGalleryProps {
  onCardHoverChange?: (isHovered: boolean) => void;
}

export default function ServiceGallery({ onCardHoverChange }: ServiceGalleryProps) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const handleCardHoverStart = (id: string) => {
    setHoveredCardId(id);
    if (onCardHoverChange) onCardHoverChange(true);
  };

  const handleCardHoverEnd = () => {
    setHoveredCardId(null);
    if (onCardHoverChange) onCardHoverChange(false);
  };

  // Divide services into 2 columns for vertical infinite parallax scroll on desktop
  const col1 = [SERVICES_DATA[0], SERVICES_DATA[2], SERVICES_DATA[4]];
  const col2 = [SERVICES_DATA[1], SERVICES_DATA[3], SERVICES_DATA[5]];

  // Double items for seamless infinite marquee loop
  const col1Duplicated = [...col1, ...col1];
  const col2Duplicated = [...col2, ...col2];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* ─────────────────────────────────────────────────────────────
          DESKTOP & TABLET: Dual Vertical Infinite Scrolling Marquee
         ───────────────────────────────────────────────────────────── */}
      <div className="hidden sm:grid grid-cols-2 gap-4 lg:gap-6 w-full max-h-[85vh] lg:max-h-[92vh] overflow-hidden py-4 px-2 select-none relative">
        {/* Column 1 (Scrolls Upward) */}
        <div className="relative overflow-hidden h-[750px] lg:h-[850px] rounded-3xl">
          <motion.div
            animate={{
              y: hoveredCardId ? "0%" : ["0%", "-50%"],
            }}
            transition={{
              y: {
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex flex-col gap-4 lg:gap-6"
          >
            {col1Duplicated.map((service, idx) => (
              <ServiceCard
                key={`col1-${service.id}-${idx}`}
                service={service}
                index={idx % 3}
                isHovered={hoveredCardId === service.id}
                onHoverStart={() => handleCardHoverStart(service.id)}
                onHoverEnd={handleCardHoverEnd}
              />
            ))}
          </motion.div>
        </div>

        {/* Column 2 (Scrolls Upward with Offset Speed & Offset Delay for Depth) */}
        <div className="relative overflow-hidden h-[750px] lg:h-[850px] rounded-3xl pt-8 sm:pt-12">
          <motion.div
            animate={{
              y: hoveredCardId ? "0%" : ["-50%", "0%"],
            }}
            transition={{
              y: {
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex flex-col gap-4 lg:gap-6"
          >
            {col2Duplicated.map((service, idx) => (
              <ServiceCard
                key={`col2-${service.id}-${idx}`}
                service={service}
                index={idx % 3}
                isHovered={hoveredCardId === service.id}
                onHoverStart={() => handleCardHoverStart(service.id)}
                onHoverEnd={handleCardHoverEnd}
              />
            ))}
          </motion.div>
        </div>

        {/* Gradient Fade Overlays top & bottom */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F8FAFC] to-transparent pointer-events-none z-30" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none z-30" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE: Horizontal Swipe Snap Gallery
         ───────────────────────────────────────────────────────────── */}
      <div className="block sm:hidden w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-2">
        <div className="flex gap-4 w-max px-2">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={`mobile-${service.id}`}
              className="w-[85vw] max-w-[320px] snap-center shrink-0"
            >
              <ServiceCard
                service={service}
                index={idx}
                isHovered={hoveredCardId === service.id}
                onHoverStart={() => handleCardHoverStart(service.id)}
                onHoverEnd={handleCardHoverEnd}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
