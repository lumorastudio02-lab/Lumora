import Link from 'next/link'
import Reveal from '@/components/animations/Reveal'

export default function CtaSection() {
  return (
    <section className="py-24 md:py-36 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Large editorial CTA */}
        <div className="relative rounded-3xl bg-card border border-white/[0.06] overflow-hidden px-8 md:px-16 py-16 md:py-24 text-center">
          {/* Background accent glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 110%, rgba(200,240,77,0.08), transparent)' }}
          />

          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-muted text-xs uppercase tracking-[0.22em]">Ready to shine?</span>
              <span className="w-8 h-px bg-accent" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display font-bold text-[clamp(2.2rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-foreground mb-10 relative">
              Let&apos;s build something{' '}
              <br className="hidden md:block" />
              <em className="not-italic text-accent">remarkable</em> together.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="pill-btn pill-solid gap-2.5 px-8 py-4 rounded-full bg-accent text-background border border-accent text-sm font-semibold tracking-wide"
              >
                <span>Start a project</span>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="relative z-10">
                  <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="mailto:hello@lumora.in"
                className="pill-btn gap-2.5 px-8 py-4 rounded-full border border-foreground/20 text-sm font-medium text-foreground"
              >
                <span>hello@lumora.in</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
