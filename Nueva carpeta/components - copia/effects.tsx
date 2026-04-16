'use client'

import { ReactNode, useEffect, useRef } from 'react'

/**
 * Animated background gradient component
 * Creates a dynamic gradient background that reacts to mouse movement
 */
export function AnimatedGradientBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.005

      // Clear canvas
      ctx.fillStyle = '#0D0D0D'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `hsl(184, 100%, 50%, ${0.03 + Math.sin(time) * 0.02})`)
      gradient.addColorStop(0.5, 'rgba(13, 13, 13, 0)')
      gradient.addColorStop(1, `hsl(184, 100%, 50%, ${0.03 + Math.cos(time) * 0.02})`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}

/**
 * Glow effect wrapper
 * Adds a glowing effect around elements on hover
 */
export function GlowEffect({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const glowElement = element.querySelector('.glow-effect') as HTMLElement
      if (glowElement) {
        glowElement.style.left = `${x}px`
        glowElement.style.top = `${y}px`
        glowElement.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      const glowElement = element.querySelector('.glow-effect') as HTMLElement
      if (glowElement) {
        glowElement.style.opacity = '0'
      }
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        className="glow-effect pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/30 rounded-full blur-2xl opacity-0 transition-opacity duration-200"
        style={{
          left: '0',
          top: '0',
        }}
      />
      {children}
    </div>
  )
}

/**
 * Scroll indicator component
 * Shows the scroll progress with an animated bar
 */
export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / windowHeight) * 100

      if (progressRef.current) {
        progressRef.current.style.width = `${scrolled}%`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent/50 to-accent z-50 transition-all duration-300"
    />
  )
}

/**
 * Intersection observer hook for animations
 */
export function useIntersectionObserver(callback: (isVisible: boolean) => void) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      callback(entry.isIntersecting)
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [callback])

  return ref
}

/**
 * Number counter animation
 * Animates numbers when they come into view
 */
export function AnimatedCounter({
  value,
  duration = 2000,
}: {
  value: number | string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true

        const element = ref.current
        if (!element) return

        const numValue = parseInt(value.toString())
        if (isNaN(numValue)) {
          element.textContent = value.toString()
          return
        }

        let current = 0
        const increment = numValue / (duration / 16)
        const startTime = Date.now()

        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          current = Math.floor(numValue * progress)

          if (element) {
            element.textContent = current.toString()
          }

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else if (element) {
            element.textContent = value.toString()
          }
        }

        animate()
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [value, duration])

  return <span ref={ref}>{value}</span>
}
