'use client'

import { cn } from '@/lib/utils'

interface MarqueeProps {
  items: string[]
  reverse?: boolean
  separator?: string
  className?: string
  itemClassName?: string
}

export default function Marquee({
  items,
  reverse = false,
  separator = '✦',
  className,
  itemClassName,
}: MarqueeProps) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className={cn('overflow-hidden flex', className)} aria-hidden="true">
      <div
        className={cn(
          'marquee-track flex items-center gap-8 shrink-0',
          reverse && 'marquee-track-reverse'
        )}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              'flex items-center gap-8 whitespace-nowrap select-none',
              itemClassName ?? 'text-sm font-medium tracking-widest uppercase text-foreground/40'
            )}
          >
            {item}
            <span style={{ color: 'var(--accent)', opacity: 0.7 }}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
