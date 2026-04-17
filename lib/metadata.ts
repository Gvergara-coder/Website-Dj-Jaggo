/**
 * Metadata configuration for DJ Landing Page
 * Update these values for your specific DJ profile
 */

export const siteConfig = {
  // DJ Information
  djName: '[TU NOMBRE]',
  djTitle: 'Professional DJ',
  djBio: 'DJ de música electrónica con experiencia en clubes de renombre y festivales internacionales',
  
  // Contact Information
  email: 'booking@tunombre.com',
  phone: '+34 600 000 000',
  
  // Social Media Links
  social: {
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    youtube: 'https://youtube.com',
    soundcloud: 'https://soundcloud.com',
  },
  
  // Career Stats
  stats: {
    events: '500+',
    years: '10+',
    clubs: '50+',
    festivals: '30+',
  },
  
  // Featured Venues
  venues: [
    { name: 'Ibiza Rocks', icon: '🎵' },
    { name: 'Fabric NYC', icon: '🎧' },
    { name: 'Berghain Berlin', icon: '🎼' },
    { name: 'Hï Ibiza', icon: '🎛️' },
    { name: 'Warehouse LA', icon: '🎵' },
    { name: 'Exchange London', icon: '🎧' },
    { name: 'Awakenings', icon: '🎼' },
    { name: 'Tomorrowland', icon: '🎛️' },
  ],
  
  // Equipment
  equipment: [
    { name: 'Pioneer CDJ-3000', icon: '🎛️' },
    { name: 'DJM-900NXS2 Mixer', icon: '🎧' },
    { name: 'Technics SL-1200 Turntables', icon: '📀' },
    { name: 'Pioneer DDJ-1000 Controller', icon: '⚙️' },
    { name: 'Allen & Heath iO|Dock', icon: '📱' },
    { name: 'Monitoreo JBL Professional', icon: '🔊' },
  ],
  
  // Technical Requirements
  requirements: [
    {
      title: 'Sistema de Sonido',
      description: 'Capacidad mínima 5000W RMS con sistemas de PA de calidad profesional'
    },
    {
      title: 'Iluminación',
      description: 'Luces LED sincronizadas con DMX, mínimo 10 fixtures'
    },
    {
      title: 'Conexiones',
      description: 'XLR balanceadas, WiFi de alta velocidad, tomas de corriente'
    },
    {
      title: 'Espacio',
      description: 'DJ Booth de mínimo 2.5m x 2.5m con altura de 1.2m'
    },
  ],
}

/**
 * SEO Metadata
 * Update these for better search engine visibility
 */
export const seoConfig = {
  title: '[TU NOMBRE] - Professional DJ',
  description: 'Professional DJ portfolio. Available for bookings and private events.',
  keywords: ['DJ', 'electronic music', 'techno', 'house', 'events', 'bookings'],
  author: '[TU NOMBRE]',
  canonical: 'https://tunombre.com',
  
  // Open Graph
  ogTitle: '[TU NOMBRE] - Professional DJ',
  ogDescription: 'Professional DJ specializing in electronic music. Available for bookings.',
  ogImage: 'https://tunombre.com/og-image.jpg',
  ogUrl: 'https://tunombre.com',
  ogType: 'website',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: '[TU NOMBRE] - DJ',
  twitterDescription: 'Professional DJ portfolio and booking page.',
  twitterImage: 'https://tunombre.com/twitter-image.jpg',
  twitterHandle: '@tunombre',
}

/**
 * Navigation Menu Configuration
 */
export const navLinks = [
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Giras', href: '#venues' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Rider', href: '#rider' },
  { label: 'Contacto', href: '#contact' },
]

/**
 * Gallery Configuration
 */
export const galleryImages = [
  { 
    id: 1, 
    title: 'Club Performance 2024', 
    src: '/gallery-1.jpg',
    alt: 'DJ performing at nightclub with neon lighting'
  },
  { 
    id: 2, 
    title: 'Festival Stage', 
    src: '/gallery-2.jpg',
    alt: 'DJ on stage at major music festival'
  },
  { 
    id: 3, 
    title: 'Equipment Setup', 
    src: '/gallery-3.jpg',
    alt: 'Professional DJ equipment and turntables'
  },
]
