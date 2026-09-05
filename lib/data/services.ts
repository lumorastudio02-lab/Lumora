export interface Service {
  id: string
  number: string
  title: string
  description: string
  deliverables: string[]
  startingAt: string
}

export const services: Service[] = [
  {
    id: '1',
    number: '01',
    title: 'Website Design',
    description: 'We design websites that look like they cost ten times what you paid — because we believe small brands deserve the same creative ambition as the big ones. Every pixel is intentional, every interaction tells your story.',
    deliverables: [
      'Custom UI/UX design',
      'Mobile-first responsive layouts',
      'Interaction & micro-animation specs',
      'Brand-consistent design system',
      'Figma prototype for review',
    ],
    startingAt: '₹45,000',
  },
  {
    id: '2',
    number: '02',
    title: 'Website Development',
    description: 'Fast, accessible, and built to convert. We develop websites with Next.js or Webflow — optimized for Core Web Vitals, SEO, and real business outcomes. Handoff includes full CMS training.',
    deliverables: [
      'Next.js or Webflow development',
      'CMS integration (Sanity / Webflow)',
      'Contact forms & booking integrations',
      'Google Analytics setup',
      '3 months post-launch support',
    ],
    startingAt: '₹55,000',
  },
  {
    id: '3',
    number: '03',
    title: 'Brand Identity',
    description: 'Your brand is the first thing people feel before they read a word. We craft visual identities that are distinctive, versatile, and built to last — logo, colors, typography, and a brand guide you\'ll actually use.',
    deliverables: [
      'Logo suite (3 variants)',
      'Color palette & typography system',
      'Brand guidelines document',
      'Business card & letterhead design',
      'Social media templates (10)',
    ],
    startingAt: '₹35,000',
  },
]
