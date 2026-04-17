'use client'

import { useEffect, useRef } from 'react'

/**
 * Reusable animation component for parallax scroll effects
 * Used to add depth and visual interest to sections
 */
export function ParallaxSection({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY
        const elementOffsetTop = ref.current.offsetTop
        const distance = scrollY - elementOffsetTop

        if (distance > -window.innerHeight && distance < window.innerHeight) {
          ref.current.style.transform = `translateY(${distance * 0.5}px)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div ref={ref}>{children}</div>
}

/**
 * Glowing orb background effect
 * Creates an animated gradient orb for visual enhancement
 */
export function GlowingOrb({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-20 animate-pulse-glow ${className}`} />
  )
}

/**
 * Animated text reveal on scroll
 * Text appears with animation when it enters viewport
 */
export function RevealText({ children, className = '' }: { children: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-up')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

/**
 * Animated button with glow effect
 */
export function GlowButton({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 font-bold rounded transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 transform hover:scale-105 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 rounded opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <span className="relative">{children}</span>
    </button>
  )
}
