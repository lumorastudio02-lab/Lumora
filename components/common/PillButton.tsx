'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PillButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'outline' | 'solid'
  className?: string
  external?: boolean
}

export default function PillButton({
  href,
  onClick,
  children,
  variant = 'outline',
  className,
  external,
}: PillButtonProps) {
  const baseClass = cn(
    'pill-btn inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300',
    variant === 'outline'
      ? 'border border-foreground/30 text-foreground hover:border-accent'
      : 'bg-accent text-background border border-accent',
    className
  )

  if (href) {
    return (
      <Link
        href={href}
        className={baseClass}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        <span>{children}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="relative z-10 transition-transform group-hover:translate-x-0.5"
        >
          <path
            d="M1 7H13M7 1L13 7L7 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseClass}>
      <span>{children}</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="relative z-10">
        <path
          d="M1 7H13M7 1L13 7L7 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
