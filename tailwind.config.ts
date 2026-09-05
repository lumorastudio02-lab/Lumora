import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#060816',
        'warm-white': '#F6F6F3',
        'primary-white': '#FAFAF8',
        'light-grey': '#ECECE8',
        'border-grey': '#E4E4E2',
        'text-black': '#1F2937',
        'text-secondary': '#64748B',
        primary: '#14D8FF',
        secondary: '#845EF7',
        accent: '#FDBA22',
        'sun-start': '#FDBA22',
        'sun-mid1': '#FB923C',
        'sun-mid2': '#F97316',
        'sun-end': '#EF4444',
        success: '#10B981',
        foreground: '#FFFFFF',
        muted: '#94A3B8',
        border: 'rgba(34, 211, 238, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        subheading: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 40px rgba(20, 216, 255, 0.25)',
        'purple-glow': '0 0 40px rgba(132, 94, 247, 0.25)',
        'sun-glow': '0 0 40px rgba(253, 186, 34, 0.35)',
        'organic-soft': '0 30px 90px rgba(0, 0, 0, 0.12)',
        'card-soft': '0 10px 40px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'organic-lg': '80px',
        'organic-xl': '100px',
      },
    },
  },
  plugins: [],
}
export default config
