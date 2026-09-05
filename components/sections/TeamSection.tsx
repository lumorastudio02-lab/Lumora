import Image from 'next/image'
import Link from 'next/link'
import { team } from '@/lib/data/team'
import Reveal from '@/components/animations/Reveal'

export default function TeamSection() {
  return (
    <section className="py-28 border-t border-gray-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Reveal>
              <p className="text-gray-500 text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-gray-800 inline-block" />
                The Team
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.8rem)] leading-[1.05] tracking-tight text-gray-900 max-w-lg">
                Three people. One shared obsession.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="left">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 shrink-0"
            >
              <span>Our story</span>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="relative z-10">
                <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.12}>
              <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-400 transition-colors duration-300 shadow-sm hover:shadow-md">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden img-hover">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-gray-900 font-semibold text-lg leading-tight">{member.name}</h3>
                      <p className="text-gray-700 text-xs tracking-wide mt-0.5">{member.role}</p>
                    </div>
                    {/* Social icons */}
                    <div className="flex gap-2">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors text-xs">
                          in
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a href={member.socials.instagram} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors text-xs">
                          ig
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}