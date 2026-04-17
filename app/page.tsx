'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Play, Download, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const venues = [
    { name: 'Estadio Monumental Simón Bolívar', category: 'Arena' },
    { name: 'LeClub Caracas', category: 'Club' },
    { name: 'Cervezadas Polar', category: 'Festival' },
    { name: 'Quinta Esmeralda', category: 'Venue' },
    { name: 'Caracas Country Club', category: 'Club' },
    { name: 'Hotel Intercontinental', category: 'Luxury' },
    { name: 'Microteatro Venezuela', category: 'Theater' },
  ]

  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/jaggomusic/', icon: 'instagram' },
    { name: 'YouTube', url: 'https://youtube.com/@jaggomusic-official', icon: 'youtube' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@jaggomusic', icon: 'tiktok' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/jaggomusic', icon: 'soundcloud' },
  ]

  const equipment = [
    { name: '2x Pioneer CDJ-3000', type: 'Turntable' },
    { name: 'Pioneer DJM-900NXS2', type: 'Mixer' },
  ]

  const mediaGalleryImages = [
    '/MEDIA-GALLERY-1.jpg',
    '/MEDIA-GALLERY-5.jpg',
    '/MEDIA-GALLERY-3.jpg',
    '/MEDIA-GALLERY-4.jpg',
    '/MEDIA-GALLERY-2.jpg',
    '/MEDIA-GALLERY-6.jpeg',
    '/MEDIA-GALLERY-7.jpeg',
    '/MEDIA-GALLERY-8.jpeg',
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-red-900/30' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center justify-center hover:text-red-600 transition-colors min-h-[3rem]"
            aria-label="Ir al inicio"
          >
            <img
              src="/LOGO-JAGGO.png"
              alt="Logo JAGGO"
              width={180}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('about')} className="text-sm uppercase tracking-wider hover:text-red-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-sm uppercase tracking-wider hover:text-red-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('media')} className="text-sm uppercase tracking-wider hover:text-red-600 transition-colors">
              Media
            </button>
            <button onClick={() => scrollToSection('rider')} className="text-sm uppercase tracking-wider hover:text-red-600 transition-colors">
              Rider
            </button>
            <button onClick={() => window.location.href = "mailto:jaggo.contact@gmail.com?subject=Booking Inquiry"} className="px-6 py-2 bg-red-900/80 hover:bg-red-800 text-white transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:text-red-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-red-900/30 p-6 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-sm uppercase tracking-wider hover:text-red-600 transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-sm uppercase tracking-wider hover:text-red-600 transition-colors py-2">
              Experience
            </button>
            <button onClick={() => scrollToSection('media')} className="block w-full text-left text-sm uppercase tracking-wider hover:text-red-600 transition-colors py-2">
              Media
            </button>
            <button onClick={() => scrollToSection('rider')} className="block w-full text-left text-sm uppercase tracking-wider hover:text-red-600 transition-colors py-2">
              Rider
            </button>
            <button onClick={() => window.location.href = "mailto:jaggo.contact@gmail.com?subject=Booking Inquiry"} className="w-full px-6 py-2 bg-red-900/80 hover:bg-red-800 text-white transition-colors mt-4">
              Book Now
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/PORTADA.jpg"
            alt="JAGGO - DJ"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 space-y-6">
          <h1 className="text-white drop-shadow-2xl animate-fade-in">
            <Image
              src="/LOGO-JAGGO.png"
              alt="Logo JAGGO"
              width={280}
              height={80}
              className="mx-auto h-auto w-auto max-w-[18rem] object-contain"
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 uppercase tracking-widest font-light">
            DJ | House · Latin House · Tech House · Reggaetón
          </p>
          <button
            onClick={() => window.location.href = "mailto:jaggo.contact@gmail.com?subject=Booking Inquiry"}
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-900/80 hover:bg-red-800 text-white font-semibold uppercase tracking-wider transition-all hover:shadow-2xl hover:shadow-red-900/50"
          >
            <span>Book Now</span>
            <ExternalLink size={20} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 md:py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <Image
                src="/ABOUT-JAGGO.jpg"
                alt="JAGGO DJ"
                fill
                className="object-contain object-center"
              />
            </div>

            {/* Bio */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                About <span className="text-red-600">JAGGO</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                With roots deeply embedded in the Latin House and Tech House scenes, JAGGO has become a commanding presence in Venezuela&apos;s electronic music landscape. His sets are characterized by a sophisticated blend of House, Latin House, Tech House, and Reggaetón—a combination that has captivated audiences from intimate clubs to massive stadium events.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Known for his technical prowess and impeccable musical taste, JAGGO crafts immersive sonic journeys that transcend genre boundaries. His performances at prestigious venues across Caracas have established him as an essential figure in the region&apos;s club culture.
              </p>
              <div className="pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 uppercase tracking-wider text-sm">Years Active</span>
                  <span className="text-2xl font-bold text-red-600">+10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 uppercase tracking-wider text-sm">Shows Performed</span>
                  <span className="text-2xl font-bold text-red-600">+100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 uppercase tracking-wider text-sm">Average Crowd</span>
                  <span className="text-2xl font-bold text-red-600">+2000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 md:py-32 px-6 bg-gradient-to-b from-black to-red-950/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16">
            Performed At
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-red-900/20 to-transparent border border-red-900/30 hover:border-red-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/40 transition-colors">
                    <Play size={16} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{venue.name}</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">{venue.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section id="media" className="py-20 md:py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16">
            Media Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaGalleryImages.map((src, idx) => (
              <div key={src} className="group relative h-64 md:h-100 overflow-hidden bg-gradient-to-br from-red-900/10 to-transparent border border-red-900/30 hover:border-red-600/60 transition-all duration-300">
                <Image
                  src={src}
                  alt={`JAGGO Performance ${idx + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Play size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RIDER SECTION */}
      <section id="rider" className="py-20 md:py-32 px-6 bg-gradient-to-b from-black to-red-950/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16">
            Technical Rider
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Equipment */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Required Equipment</h3>
              <div className="space-y-4">
                {equipment.map((item, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-r from-red-900/20 to-transparent border border-red-900/30 rounded-sm hover:border-red-600/60 transition-colors">
                    <p className="font-semibold text-white text-lg">{item.name}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">{item.type}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-red-900/20 to-transparent border border-red-900/30 rounded-sm">
                <h4 className="font-semibold text-white mb-3">Setup Details</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Dual turntable setup with professional mixer</li>
                  <li>• High-quality monitor system required</li>
                  <li>• Isolated power supply preferred</li>
                  <li>• Professional lighting support</li>
                </ul>
              </div>

            </div>

            {/* Rider Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-red-900/10 to-transparent border border-red-900/30">
              <Image
                src="/rider-setup.jpg"
                alt="Equipment Setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-400">
              Available for bookings, collaborations, and inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="p-8 bg-gradient-to-br from-red-900/20 to-transparent border border-red-900/30 hover:border-red-600/60 transition-all">
              <Mail size={32} className="text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a
                href="mailto:jaggo.contact@gmail.com"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                jaggo.contact@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-gradient-to-br from-red-900/20 to-transparent border border-red-900/30 hover:border-red-600/60 transition-all">
              <h3 className="text-xl font-bold text-white mb-6">Follow</h3>
              <div className="flex items-center justify-center gap-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transition-colors text-sm uppercase tracking-wider font-semibold"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-3 px-10 py-4 bg-red-900/80 hover:bg-red-800 text-white font-bold uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-red-900/50">
            <span>Booking Inquiry</span>
            <ExternalLink size={20} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-red-900/30 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 JAGGO. All rights reserved. | Premium DJ Press Kit</p>
        </div>
      </footer>
    </div>
  )
}
