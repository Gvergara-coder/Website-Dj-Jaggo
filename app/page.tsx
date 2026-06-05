'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Play, Mail, ExternalLink, ChevronDown, Check } from 'lucide-react'
import { translations, languages, type LanguageCode } from '@/lib/translations'

type CategoryKey = keyof (typeof translations)['es']['experience']['categories']
type EquipKey = keyof (typeof translations)['es']['rider']['equipmentTypes']

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [lang, setLang] = useState<LanguageCode>('en')

  // Cargar idioma guardado al iniciar
  useEffect(() => {
    const saved = localStorage.getItem('jaggo-lang') as LanguageCode | null
    if (saved && languages.some((l) => l.code === saved)) {
      setLang(saved)
    }
  }, [])

  // Mantener el atributo lang del <html> sincronizado
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = translations[lang]
  const currentLang = languages.find((l) => l.code === lang)!

  const changeLanguage = (code: LanguageCode) => {
    setLang(code)
    localStorage.setItem('jaggo-lang', code)
    setIsLangOpen(false)
    setIsMenuOpen(false)
  }

  const venues: { name: string; category: CategoryKey }[] = [
    { name: 'Estadio Monumental Simón Bolívar', category: 'arena' },
    { name: 'LeClub Caracas', category: 'club' },
    { name: 'Cervezadas Polar', category: 'festival' },
    { name: 'Quinta Esmeralda', category: 'venue' },
    { name: 'Caracas Country Club', category: 'social' },
    { name: 'Hotel Intercontinental', category: 'social' },
    { name: 'Microteatro Venezuela', category: 'theater' },
  ]

  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/jaggomusic/', icon: 'instagram' },
    { name: 'YouTube', url: 'https://youtube.com/@jaggomusic-official', icon: 'youtube' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@jaggomusic', icon: 'tiktok' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/jaggomusic', icon: 'soundcloud' },
  ]

  const equipment: { name: string; type: EquipKey }[] = [
    { name: '2x Pioneer CDJ-3000', type: 'turntable' },
    { name: 'Pioneer DJM-DJM-V9 o V10', type: 'mixer' },
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-red-900/30' : 'bg-transparent'
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
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-sm uppercase tracking-wider hover:text-red-600 transition-colors">
              {t.nav.experience}
            </button>
            <button onClick={() => scrollToSection('media')} className="text-sm uppercase tracking-wider hover:text-red-600 transition-colors">
              {t.nav.media}
            </button>
            <button onClick={() => scrollToSection('video')} className="text-sm uppercase tracking-wider hover:text-red-600 transition-colors">
              {t.nav.video}
            </button>
            <button onClick={() => scrollToSection('rider')} className="text-sm uppercase tracking-wider hover:text-red-600 transition-colors">
              {t.nav.rider}
            </button>

            {/* Language Selector (desktop) */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-2 py-1.5 text-sm uppercase tracking-wider text-gray-200 hover:text-red-600 transition-colors"
                aria-label="Select language"
                aria-expanded={isLangOpen}
              >
                <img src={currentLang.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm ring-1 ring-white/15" />
                <span>{currentLang.code}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <>
                  {/* Capa para cerrar al hacer click fuera */}
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                  <div className="absolute right-0 mt-3 w-52 z-50 p-1.5 bg-neutral-950/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl shadow-black/60 animate-fade-in">
                    {languages.map((l) => {
                      const active = l.code === lang
                      return (
                        <button
                          key={l.code}
                          onClick={() => changeLanguage(l.code)}
                          className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${active ? 'bg-red-600/15 text-red-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                          <img src={l.flag} alt="" className="w-6 h-4 object-cover rounded-sm ring-1 ring-white/15 shrink-0" />
                          <span className="tracking-wide">{l.name}</span>
                          {active && <Check size={15} className="ml-auto text-red-400" />}
                        </button>
                      )
                    })}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => window.open("https://wa.me/4244070192?text=Hola,%20me%20gustaría%20obtener%20información%20para%20reservar%20una%20fecha%20con%20Jaggo", "_blank")}
              className="px-6 py-2 bg-red-900/80 hover:bg-red-800 text-white transition-colors"
            >
              {t.nav.bookNow}
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
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-sm uppercase tracking-wider hover:text-red-600 transition-colors py-2">
              {t.nav.experience}
            </button>
            <button onClick={() => scrollToSection('media')} className="block w-full text-left text-sm uppercase tracking-wider hover:text-red-600 transition-colors py-2">
              {t.nav.media}
            </button>
            <button onClick={() => scrollToSection('video')} className="block w-full text-left text-sm uppercase tracking-wider hover:text-red-600 transition-colors py-2">
              {t.nav.video}
            </button>
            <button onClick={() => scrollToSection('rider')} className="block w-full text-left text-sm uppercase tracking-wider hover:text-red-600 transition-colors py-2">
              {t.nav.rider}
            </button>
            <button onClick={() => window.open("https://wa.me/4244070192?text=Hola,%20me%20gustaría%20obtener%20información%20para%20reservar%20una%20fecha%20con%20Jaggo", "_blank")} className="w-full px-6 py-2 bg-red-900/80 hover:bg-red-800 text-white transition-colors mt-4">
              {t.nav.bookNow}
            </button>

            {/* Language Selector (mobile) */}
            <div className="pt-4 mt-2 border-t border-red-900/30">
              <div className="grid grid-cols-5 gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLanguage(l.code)}
                    className={`flex flex-col items-center gap-1 py-2 rounded transition-colors ${l.code === lang ? 'bg-red-900/30 text-red-500' : 'text-gray-400 hover:bg-red-900/10'
                      }`}
                    aria-label={l.name}
                  >
                    <img src={l.flag} alt="" className="w-7 h-5 object-cover rounded-sm ring-1 ring-white/15" />
                    <span className="text-[10px] uppercase tracking-wider">{l.code}</span>
                  </button>
                ))}
              </div>
            </div>
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
            className="object-cover object-center"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 space-y-2">
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
            {t.hero.subtitle}
          </p>
          <button
            onClick={() => window.open("https://wa.me/4244070192?text=Hola,%20me%20gustaría%20obtener%20información%20para%20reservar%20una%20fecha%20con%20Jaggo", "_blank")}
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-900/80 hover:bg-red-800 text-white font-semibold uppercase tracking-wider transition-all hover:shadow-2xl hover:shadow-red-900/50"
          >
            <span>{t.hero.bookNow}</span>
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
                {t.about.title} <span className="text-red-600">JAGGO</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.about.bio1}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.about.bio2}
              </p>
              <div className="pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 uppercase tracking-wider text-sm">{t.about.yearsActive}</span>
                  <span className="text-2xl font-bold text-red-600">+10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 uppercase tracking-wider text-sm">{t.about.showsPerformed}</span>
                  <span className="text-2xl font-bold text-red-600">+100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 uppercase tracking-wider text-sm">{t.about.averageCrowd}</span>
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
            {t.experience.title}
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
                    <p className="text-sm text-gray-500 uppercase tracking-wider">{t.experience.categories[venue.category]}</p>
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
            {t.mediaSection.title}
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

      {/* VIDEO SECTION */}
      <section id="video" className="py-20 md:py-32 px-6 bg-gradient-to-b from-black to-red-950/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16">
            {t.videoSection.title}
          </h2>
          <div className="flex justify-center">
            <div
              className="relative w-full max-w-4xl aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => window.open('https://www.youtube.com/watch?v=E6vYdKGUzX8', '_blank')}
            >
              {/* IMAGEN DE PORTADA (THUMBNAIL) */}
              <img
                src="https://img.youtube.com/vi/E6vYdKGUzX8/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* OVERLAY Y BOTÓN DE PLAY */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/20">
                <Play
                  size={64}
                  className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-transform group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RIDER SECTION */}
      <section id="rider" className="py-20 md:py-32 px-6 bg-gradient-to-b from-black to-red-950/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16">
            {t.rider.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Equipment */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t.rider.requiredEquipment}</h3>
              <div className="space-y-4">
                {equipment.map((item, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-r from-red-900/20 to-transparent border border-red-900/30 rounded-sm hover:border-red-600/60 transition-colors">
                    <p className="font-semibold text-white text-lg">{item.name}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">{t.rider.equipmentTypes[item.type]}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-red-900/20 to-transparent border border-red-900/30 rounded-sm">
                <h4 className="font-semibold text-white mb-3">{t.rider.setupDetails}</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  {t.rider.setupItems.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Rider Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-red-900/10 to-transparent border border-red-900/30">
              <Image
                src="/rider-setup.jpg"
                alt="Equipment Setup"
                fill
                className="object-contain object-center transition-transform duration-500 hover:scale-105"
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
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-400">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="p-8 bg-gradient-to-br from-red-900/20 to-transparent border border-red-900/30 hover:border-red-600/60 transition-all">
              <Mail size={32} className="text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t.contact.email}</h3>
              <a
                href="mailto:jaggo.contact@gmail.com"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                jaggo.contact@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-gradient-to-br from-red-900/20 to-transparent border border-red-900/30 hover:border-red-600/60 transition-all">
              <h3 className="text-xl font-bold text-white mb-6">{t.contact.follow}</h3>
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
          <a
            href="https://wa.me/4244070192?text=Hola,%20me%20gustaría%20obtener%20información%20para%20reservar%20una%20fecha%20con%20Jaggo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-red-900/80 hover:bg-red-800 text-white font-bold uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-red-900/50"
          >
            <span>{t.contact.bookingInquiry}</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-red-900/30 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  )
}
