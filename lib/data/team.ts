export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  socials: {
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Creative Director & Co-founder',
    bio: 'Ex-JWT designer with 8 years crafting brand identities for startups and local businesses across India. Priya believes every small brand deserves world-class design.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=600&q=80',
    socials: {
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    id: '2',
    name: 'Arjun Mehta',
    role: 'Lead Developer & Co-founder',
    bio: 'Full-stack developer who\'s obsessed with performance and interaction design. Arjun has shipped over 40 websites for small businesses and has a thing for buttery smooth animations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: '3',
    name: 'Meera Joshi',
    role: 'Brand Strategist',
    bio: 'An MBA-turned-storyteller who helps small businesses find their voice. Meera bridges the gap between business goals and creative execution with uncommon clarity.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
    socials: {
      instagram: '#',
      linkedin: '#',
    },
  },
]
