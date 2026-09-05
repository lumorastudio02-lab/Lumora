import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/data/projects'
import Reveal from '@/components/animations/Reveal'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Browse Lumora\'s portfolio of websites, brand identities, and digital projects for local businesses in Pune.',
}

const categories = ['All', 'Website Design', 'Website Development', 'Brand Identity']

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-[1400px] mx-auto px-6 md:px-10 bg-white">
        <Reveal>
          <p className="text-gray-500 text-xs uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-800 inline-block" />
            Our Work
          </p>
        </Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <Reveal delay={0.1}>
            <h1 className="font-display font-bold text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-tight text-gray-900 max-w-2xl">
              Projects we&apos;re proud{' '}
              <span className="italic text-gray-700">to show.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} direction="left">
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs md:text-right">
              {projects.length} projects across website design, development, and brand identity for local Pune businesses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter row */}
      <section className="border-t border-gray-200 py-5 sticky top-16 z-30 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest border transition-colors duration-200 ${
                cat === 'All'
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'border-gray-300 text-gray-600 hover:border-gray-700 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 md:px-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="group block relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-400 transition-colors duration-300 img-hover shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gray-900/10 transition-opacity duration-300 group-hover:opacity-40" />

                  {/* Hover marquee */}
                  <div className="absolute inset-x-0 bottom-0 h-10 flex items-center overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="portfolio-marquee-inner text-gray-300 text-xs uppercase tracking-[0.2em] font-medium">
                      {Array(12).fill(project.title).map((t, idx) => (
                        <span key={idx}>{t}&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{project.category} · {project.year}</p>
                    <h3 className="text-gray-900 font-semibold text-xl group-hover:text-gray-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-1">{project.description}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}