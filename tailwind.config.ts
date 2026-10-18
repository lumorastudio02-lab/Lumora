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
        background: '#FAF8F5',
        'milky': '#FAF8F5',
        'milky-card': '#FFFFFF',
        'milky-warm': '#F4EFEA',
        'milky-dark': '#060816',
        'milky-border': '#E8DFD3',
        'warm-white': '#F4EFEA',
        'primary-white': '#FAF8F5',
        'light-grey': '#EFE8DD',
        'border-grey': '#E8DFD3',
        'text-black': '#1F1610',
        'text-secondary': '#6B594C',
        'espresso': '#1F1610',
        'mocha': '#6B594C',
        'caramel': '#B46A28',
        'cinnamon': '#8C4A1D',
        'latte': '#EFE8DD',
        'taupe': '#9E8C7D',
        primary: '#B46A28',
        secondary: '#8C4A1D',
        accent: '#FDBA22',
        'sun-start': '#FDBA22',
        'sun-mid1': '#FB923C',
        'sun-mid2': '#F97316',
        'sun-end': '#EF4444',
        success: '#10B981',
        foreground: '#1F1610',
        muted: '#6B594C',
        border: '#E8DFD3',
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
        'caramel-glow': '0 0 35px rgba(180, 106, 40, 0.25)',
        'organic-soft': '0 30px 90px rgba(50, 30, 15, 0.08)',
        'card-soft': '0 10px 40px rgba(50, 30, 15, 0.04)',
        'milky-soft': '0 20px 50px rgba(50, 30, 15, 0.05)',
        'milky-elevated': '0 30px 80px rgba(50, 30, 15, 0.08)',
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
