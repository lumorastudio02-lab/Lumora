'use client'

import Link from 'next/link'
import Image from 'next/image'
import { featuredProjects } from '@/lib/data/projects'
import Reveal from '@/components/animations/Reveal'

function PortfolioCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const isLarge = index === 0

  return (
    <Reveal delay={index * 0.08}>
      <Link
        href={`/work/${project.slug}`}
        className={`portfolio-card group block relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card ${isLarge ? 'md:col-span-2' : ''}`}
      >
        {/* Image */}
        <div className={`relative overflow-hidden img-hover ${isLarge ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes={isLarge ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          />
          {/* Base overlay */}
          <div className="absolute inset-0 bg-background/25 transition-opacity duration-500 group-hover:bg-background/10" />

          {/* Accent color stripe */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: project.color }}
          />

          {/* Hover: title marquee strip */}
          <div className="absolute inset-x-0 bottom-0 overflow-hidden h-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85), transparent)' }}>
            <div className="portfolio-marquee-inner text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              {Array(16).fill(project.title + ' · ').map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>

          {/* Top-right arrow */}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 group-hover:bg-accent">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Card info */}
        <div className="p-5 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-muted text-[10px] uppercase tracking-[0.18em] mb-1">{project.category}</p>
            <h3 className="text-foreground font-semibold text-lg leading-tight truncate group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <div className="shrink-0 flex flex-wrap justify-end gap-1.5">
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[9px] text-muted/60 border border-border/50 rounded-full px-2 py-0.5 uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export default function FeaturedWorkSection() {
  return (
    <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-accent" />
              <span className="text-muted text-xs uppercase tracking-[0.22em]">Featured Work</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,4.5vw,3.5rem)] leading-[1.07] tracking-tight text-foreground max-w-xl">
              Projects we&apos;re proud to put our name on.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.15} direction="left">
          <Link
            href="/work"
            className="pill-btn gap-2.5 px-6 py-3 rounded-full border border-foreground/20 text-sm font-medium text-foreground shrink-0"
          >
            <span>View all work</span>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="relative z-10">
              <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </Reveal>
      </div>

      {/* Grid: first card spans 2 cols */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {featuredProjects.map((project, i) => (
          <PortfolioCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
