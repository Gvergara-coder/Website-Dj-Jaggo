/**
 * Type definitions for DJ Landing Page
 */

export interface GalleryImage {
  id: number
  title: string
  src: string
  alt?: string
}

export interface Venue {
  name: string
  icon: string
}

export interface Equipment {
  name: string
  icon: string
}

export interface Requirement {
  title: string
  description: string
}

export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'youtube' | 'soundcloud'
  url: string
  label: string
  icon?: string
}

export interface BookingRequest {
  name: string
  email: string
  eventName: string
  date?: string
  location?: string
  duration?: string
  budget?: string
  message: string
}

export interface DJProfile {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  avatar?: string
  stats: {
    events: string
    years: string
    clubs: string
    festivals: string
  }
}

export interface NavigationItem {
  label: string
  href: string
  icon?: React.ReactNode
}
