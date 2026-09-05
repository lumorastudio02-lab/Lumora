'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/animations/Reveal'

function useCounter(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    setValue(0)
    let start = 0
    const totalSteps = Math.ceil(duration / 16)
    let step = 0
    // Ease-out
    const timer = setInterval(() => {
      step++
      const t = step / totalSteps
      const eased = 1 - Math.pow(1 - t, 3) // cubic ease-out
      setValue(Math.min(Math.round(eased * target), target))
      if (step >= totalSteps) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return value
}

function Stat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCounter(value, 1600, inView)

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="text-center md:text-left">
        <div className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-tight text-gray-900 counter-number">
          {count}
          <span className="text-gray-700">{suffix}</span>
        </div>
        <p className="text-gray-500 text-xs mt-2.5 tracking-[0.12em] uppercase">{label}</p>
      </div>
    </Reveal>
  )
}

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* Left: copy */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-gray-800" />
              <span className="text-gray-500 text-xs uppercase tracking-[0.22em]">About Lumora</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,4.5vw,3.5rem)] leading-[1.07] tracking-tight text-gray-900 mb-7">
              We help small brands express their vision through design that{' '}
              <em className="not-italic text-gray-700">actually works.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-5 max-w-[480px]">
              Lumora is a design studio based in India. We work exclusively with small businesses and local brands who deserve world-class creative — without the agency price tag or the corporate runaround.
            </p>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-10 max-w-[480px]">
              Strategy. Storytelling. Digital thinking. We bring all three to every project, no matter how big or small the brand.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-2 mb-10">
              {['Strategy', 'Storytelling', 'Digital thinking'].map(tag => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 tracking-wide bg-gray-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              <span>Learn more about us</span>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="relative z-10">
                <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </Reveal>
        </div>

        {/* Right: image collage + stats */}
        <div className="space-y-8">
          <Reveal delay={0.1} direction="left">
            <div className="relative h-[320px] md:h-[400px]">
              {/* Main image */}
              <div className="absolute top-0 left-0 w-[58%] h-[76%] rounded-2xl overflow-hidden border border-gray-200 shadow-md img-hover">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                  alt="Team collaborating"
                  fill className="object-cover" sizes="320px"
                />
                <div className="absolute inset-0 bg-gray-900/10" />
              </div>
              {/* Secondary image */}
              <div className="absolute bottom-0 right-0 w-[46%] h-[65%] rounded-2xl overflow-hidden border border-gray-200 shadow-md img-hover">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
                  alt="Design process"
                  fill className="object-cover" sizes="240px"
                />
                <div className="absolute inset-0 bg-gray-900/10" />
              </div>
              {/* Floating badge */}
              <div className="absolute top-[38%] left-[52%] -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full shadow-lg shadow-gray-900/20 whitespace-nowrap z-10">
                ✦ Baramati, India
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <Stat value={3} suffix="+" label="Brands transformed" delay={0.1} />
            <Stat value={98} suffix="%" label="Client happiness" delay={0.2} />
            <Stat value={1} suffix="yrs" label="Studio experience" delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  )
}