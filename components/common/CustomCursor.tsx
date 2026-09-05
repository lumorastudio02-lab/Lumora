'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run on pointer:fine (desktop) devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId: number

    // Move dot immediately
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`
    }

    // Smooth ring with lerp
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n
    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.1)
      ringY = lerp(ringY, mouseY, 0.1)
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    // Scale ring on hoverable elements — use event delegation instead of
    // querying all elements (works across page navigations too)
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor-hover]')) {
        ring.classList.add('hovered')
      }
    }
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor-hover]')) {
        ring.classList.remove('hovered')
      }
    }

    document.addEventListener('mouseover', onMouseOver, { passive: true })
    document.addEventListener('mouseout', onMouseOut, { passive: true })

    // Hide cursor when it leaves the window
    const onMouseLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    const onMouseEnter = () => {
      dot.style.opacity = '1'
      ring.style.opacity = ''
    }
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
