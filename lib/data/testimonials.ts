export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Anita Kulkarni',
    role: 'Owner',
    company: 'Rasa Restaurant',
    text: 'Lumora completely transformed how our restaurant looks online. Within two weeks of the new site going live, our reservations doubled. They understood our brand better than we did — and made it beautiful.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sneha Raut',
    role: 'Founder',
    company: 'Bloom Boutique',
    text: 'I was nervous investing in branding, but Lumora made the process feel effortless. The logo, the colors, the fonts — everything just clicks. My customers notice the difference and compliment it constantly.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Rahul Deshmukh',
    role: 'Head Stylist',
    company: 'Glow Salon',
    text: 'We went from manually tracking appointments in a notebook to having a website that books 200 clients a month on autopilot. Arjun and the team were incredible throughout. Worth every rupee.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Neha Gokhale',
    role: 'Founder',
    company: 'Verde Café',
    text: 'Priya just gets it. She asked three questions, went quiet for a week, and came back with a brand identity that made me cry. It\'s exactly us — warm, real, and a little bit playful.',
    rating: 5,
  },
]
