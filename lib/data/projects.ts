export interface Project {
  id: string
  slug: string
  title: string
  category: string
  tags: string[]
  year: string
  description: string
  longDescription: string
  image: string
  images: string[]
  color: string
  featured: boolean
  client: string
  services: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'rasa-restaurant',
    title: 'Rasa Restaurant',
    category: 'Website Design',
    tags: ['Web Design', 'Brand Identity', 'Restaurant'],
    year: '2024',
    description: 'A warm, immersive website for a Pune-based farm-to-table restaurant celebrating local flavors.',
    longDescription: 'Rasa needed a digital presence as inviting as their food. We crafted an editorial-style website that puts their ingredients front and center — warm earth tones, generous white space, and storytelling that makes you hungry before you even make a reservation. The booking flow was redesigned from scratch to reduce drop-offs by 40%.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80',
    ],
    color: '#d4a853',
    featured: true,
    client: 'Rasa Restaurant, Koregaon Park',
    services: ['Website Design', 'Brand Identity', 'Photography Direction'],
  },
  {
    id: '2',
    slug: 'bloom-boutique',
    title: 'Bloom Boutique',
    category: 'Brand Identity',
    tags: ['Branding', 'Web Design', 'Fashion'],
    year: '2024',
    description: 'A complete brand refresh for an indie women\'s fashion boutique in Kalyani Nagar.',
    longDescription: 'Bloom came to us with a logo made in Canva and a loyal customer base they were starting to outgrow. We built them a brand identity that matched their ambition — refined, feminine, and unmistakably theirs. The new website launched with a 3x increase in online inquiries within the first month.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558171813-3b75a8cb87c4?w=1200&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80',
    ],
    color: '#e8b4b8',
    featured: true,
    client: 'Bloom Boutique, Kalyani Nagar',
    services: ['Brand Identity', 'Website Design', 'Social Media Templates'],
  },
  {
    id: '3',
    slug: 'glow-salon',
    title: 'Glow Salon',
    category: 'Website Development',
    tags: ['Web Dev', 'Booking System', 'Salon'],
    year: '2024',
    description: 'A sleek booking-first website for a premium hair & beauty salon in Baner.',
    longDescription: 'Glow needed their website to do the heavy lifting — book appointments, showcase artists, and communicate premium quality without feeling sterile. We built a custom booking integration, a stylist portfolio section, and a before/after gallery that drives real conversions. The site now handles 200+ bookings per month without a single missed appointment.',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
    ],
    color: '#9de3d0',
    featured: true,
    client: 'Glow Salon, Baner',
    services: ['Website Development', 'Booking Integration', 'SEO'],
  },
  {
    id: '4',
    slug: 'verde-cafe',
    title: 'Verde Café',
    category: 'Brand Identity',
    tags: ['Branding', 'Print', 'Café'],
    year: '2023',
    description: 'Brand identity for a zero-waste café concept focused on community and sustainability.',
    longDescription: 'Verde was opening with a mission: serve great coffee with zero guilt. We built a brand that wears its values proudly — earthy greens, hand-drawn elements, and a voice that feels like talking to a friend. The brand system extended across packaging, signage, loyalty cards, and a minimal website.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80',
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&q=80',
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200&q=80',
    ],
    color: '#a8c97f',
    featured: false,
    client: 'Verde Café, Viman Nagar',
    services: ['Brand Identity', 'Packaging Design', 'Website Design'],
  },
  {
    id: '5',
    slug: 'aura-wellness',
    title: 'Aura Wellness',
    category: 'Website Design',
    tags: ['Web Design', 'Wellness', 'UX'],
    year: '2023',
    description: 'A calming, conversion-optimized website for a holistic wellness studio in FC Road.',
    longDescription: 'Aura\'s previous website was losing them clients — confusing navigation, no clear path to booking. We reimagined the whole experience around calm and clarity. The redesign reduced bounce rate by 60% and doubled their class bookings within 6 weeks of launch.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
      'https://images.unsplash.com/photo-1552693673-1bf958298935?w=1200&q=80',
    ],
    color: '#c4b5fd',
    featured: false,
    client: 'Aura Wellness Studio, FC Road',
    services: ['Website Design', 'UX Strategy', 'Content Writing'],
  },
  {
    id: '6',
    slug: 'kiran-photography',
    title: 'Kiran Photography',
    category: 'Website Development',
    tags: ['Portfolio', 'Photography', 'Web Dev'],
    year: '2023',
    description: 'A stunning portfolio website for a wedding & lifestyle photographer based in Pune.',
    longDescription: 'Kiran is one of Pune\'s finest wedding photographers. His old website wasn\'t doing his work justice. We built a full-screen, gallery-first portfolio that puts the photography at center stage — fast loading, beautifully organized, and designed to convert inquiries into bookings. Inquiries tripled in the first quarter.',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80',
    ],
    color: '#f59e0b',
    featured: false,
    client: 'Kiran Photography, Pune',
    services: ['Website Development', 'Gallery System', 'Lead Capture'],
  },
]

export const featuredProjects = projects.filter(p => p.featured)
