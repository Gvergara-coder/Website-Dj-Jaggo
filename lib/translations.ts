// Idiomas disponibles en el sitio
export const languages = [
  { code: 'es', name: 'Español', flag: '/flags/es.svg' },
  { code: 'en', name: 'English', flag: '/flags/gb.svg' },
  { code: 'pt', name: 'Português', flag: '/flags/br.svg' },
  { code: 'fr', name: 'Français', flag: '/flags/fr.svg' },
  { code: 'it', name: 'Italiano', flag: '/flags/it.svg' },
] as const

export type LanguageCode = (typeof languages)[number]['code']

// Estructura de cada traducción (basada en el español)
export type Translation = typeof translations['es']

export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      media: 'Media',
      video: 'Video',
      rider: 'Rider',
      bookNow: 'Reservar',
    },
    hero: {
      subtitle: 'DJ | House · Latin House · Tech House · Reggaetón',
      bookNow: 'Reservar',
    },
    about: {
      title: 'Sobre',
      bio1: 'Jaggo es un DJ venezolano cuya propuesta se basa en la energía, la versatilidad y la conexión con el público. Su pasión comenzó en la adolescencia, influenciado por el boom del electro house, el reguetón y el hip hop venezolano. Se formó en Pitch Control bajo la dirección de Milton Hernández, y dio sus primeros pasos profesionales de la mano de Leonel Rojas en LeClub, una de las discotecas más emblemáticas de Caracas.',
      bio2: 'Desde entonces, ha tocado en eventos sociales de alto perfil. Su estilo combina house, afro house, tech house y reguetón, con una fuerte influencia de clásicos latinos y electrónica que marcó su infancia. Jaggo no solo mezcla música: crea experiencias cargadas de energía y emoción, donde la pista arde y el público vibra. Cada set suyo es una invitación a vivir intensamente.',
      yearsActive: 'Años Activo',
      showsPerformed: 'Shows Realizados',
      averageCrowd: 'Público Promedio',
    },
    experience: {
      title: 'Ha Tocado En',
      categories: { arena: 'Arena', club: 'Club', festival: 'Festival', venue: 'Espacio', social: 'Evento Social', theater: 'Teatro' },
    },
    mediaSection: {
      title: 'Galería Multimedia',
    },
    videoSection: {
      title: 'Última sesión',
    },
    rider: {
      title: 'Rider Técnico',
      requiredEquipment: 'Equipo Requerido',
      equipmentTypes: { turntable: 'Reproductor', mixer: 'Mezclador' },
      setupDetails: 'Detalles de Montaje',
      setupItems: [
        'Configuración de doble plato con mezclador profesional',
        'Sistema de monitores de alta calidad requerido',
        'Suministro eléctrico aislado preferible',
        'Soporte de iluminación profesional',
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Disponible para reservas, colaboraciones y consultas',
      email: 'Correo',
      follow: 'Sígueme',
      bookingInquiry: 'Solicitar Booking',
    },
    footer: {
      rights: '© 2024 JAGGO. Todos los derechos reservados. | Press Kit Premium de DJ',
    },
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      media: 'Media',
      video: 'Video',
      rider: 'Rider',
      bookNow: 'Book Now',
    },
    hero: {
      subtitle: 'DJ | House · Latin House · Tech House · Reggaetón',
      bookNow: 'Book Now',
    },
    about: {
      title: 'About',
      bio1: "With roots deeply embedded in the Latin House and Tech House scenes, JAGGO has become a commanding presence in Venezuela's electronic music landscape. His sets are characterized by a sophisticated blend of House, Latin House, Tech House, and Reggaetón—a combination that has captivated audiences from intimate clubs to massive stadium events.",
      bio2: "Known for his technical prowess and impeccable musical taste, JAGGO crafts immersive sonic journeys that transcend genre boundaries. His performances at prestigious venues across Caracas have established him as an essential figure in the region's club culture.",
      yearsActive: 'Years Active',
      showsPerformed: 'Shows Performed',
      averageCrowd: 'Average Crowd',
    },
    experience: {
      title: 'Performed At',
      categories: { arena: 'Arena', club: 'Club', festival: 'Festival', venue: 'Venue', social: 'Social Event', theater: 'Theater' },
    },
    mediaSection: {
      title: 'Media Gallery',
    },
    videoSection: {
      title: 'Latest session',
    },
    rider: {
      title: 'Technical Rider',
      requiredEquipment: 'Required Equipment',
      equipmentTypes: { turntable: 'Turntable', mixer: 'Mixer' },
      setupDetails: 'Setup Details',
      setupItems: [
        'Dual turntable setup with professional mixer',
        'High-quality monitor system required',
        'Isolated power supply preferred',
        'Professional lighting support',
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Available for bookings, collaborations, and inquiries',
      email: 'Email',
      follow: 'Follow',
      bookingInquiry: 'Booking Inquiry',
    },
    footer: {
      rights: '© 2024 JAGGO. All rights reserved. | Premium DJ Press Kit',
    },
  },

  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      media: 'Mídia',
      video: 'Vídeo',
      rider: 'Rider',
      bookNow: 'Reservar',
    },
    hero: {
      subtitle: 'DJ | House · Latin House · Tech House · Reggaetón',
      bookNow: 'Reservar',
    },
    about: {
      title: 'Sobre',
      bio1: 'Com raízes profundamente enraizadas nas cenas do Latin House e do Tech House, JAGGO tornou-se uma presença dominante no cenário da música eletrônica da Venezuela. Seus sets são caracterizados por uma sofisticada mistura de House, Latin House, Tech House e Reggaetón—uma combinação que cativou o público desde clubes íntimos até eventos massivos em estádios.',
      bio2: 'Reconhecido por sua destreza técnica e seu gosto musical impecável, JAGGO cria jornadas sonoras imersivas que transcendem as fronteiras dos gêneros. Suas apresentações em locais prestigiados de Caracas o consolidaram como uma figura essencial na cultura de clube da região.',
      yearsActive: 'Anos de Carreira',
      showsPerformed: 'Shows Realizados',
      averageCrowd: 'Público Médio',
    },
    experience: {
      title: 'Já Tocou Em',
      categories: { arena: 'Arena', club: 'Clube', festival: 'Festival', venue: 'Espaço', social: 'Evento Social', theater: 'Teatro' },
    },
    mediaSection: {
      title: 'Galeria de Mídia',
    },
    videoSection: {
      title: 'Última sessão',
    },
    rider: {
      title: 'Rider Técnico',
      requiredEquipment: 'Equipamento Necessário',
      equipmentTypes: { turntable: 'Reprodutor', mixer: 'Mixer' },
      setupDetails: 'Detalhes de Montagem',
      setupItems: [
        'Configuração de toca-discos duplo com mixer profissional',
        'Sistema de monitores de alta qualidade necessário',
        'Fonte de alimentação isolada preferível',
        'Suporte de iluminação profissional',
      ],
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Disponível para reservas, colaborações e consultas',
      email: 'E-mail',
      follow: 'Siga',
      bookingInquiry: 'Solicitar Booking',
    },
    footer: {
      rights: '© 2024 JAGGO. Todos os direitos reservados. | Press Kit Premium de DJ',
    },
  },

  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      media: 'Média',
      video: 'Vidéo',
      rider: 'Rider',
      bookNow: 'Réserver',
    },
    hero: {
      subtitle: 'DJ | House · Latin House · Tech House · Reggaetón',
      bookNow: 'Réserver',
    },
    about: {
      title: 'À propos de',
      bio1: "Avec des racines profondément ancrées dans les scènes Latin House et Tech House, JAGGO est devenu une présence incontournable dans le paysage de la musique électronique du Venezuela. Ses sets se caractérisent par un mélange sophistiqué de House, Latin House, Tech House et Reggaetón—une combinaison qui a captivé le public des clubs intimes aux événements géants dans les stades.",
      bio2: "Reconnu pour sa maîtrise technique et son goût musical impeccable, JAGGO crée des voyages sonores immersifs qui transcendent les frontières des genres. Ses performances dans des lieux prestigieux à travers Caracas l'ont établi comme une figure essentielle de la culture club de la région.",
      yearsActive: 'Années d\'Activité',
      showsPerformed: 'Concerts Réalisés',
      averageCrowd: 'Public Moyen',
    },
    experience: {
      title: 'A Joué À',
      categories: { arena: 'Aréna', club: 'Club', festival: 'Festival', venue: 'Lieu', social: 'Événement Privé', theater: 'Théâtre' },
    },
    mediaSection: {
      title: 'Galerie Média',
    },
    videoSection: {
      title: 'Dernière session',
    },
    rider: {
      title: 'Rider Technique',
      requiredEquipment: 'Équipement Requis',
      equipmentTypes: { turntable: 'Platine', mixer: 'Mixeur' },
      setupDetails: 'Détails de Montage',
      setupItems: [
        'Configuration double platine avec mixeur professionnel',
        'Système de monitoring de haute qualité requis',
        'Alimentation électrique isolée de préférence',
        'Support d\'éclairage professionnel',
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Disponible pour réservations, collaborations et demandes',
      email: 'E-mail',
      follow: 'Suivre',
      bookingInquiry: 'Demande de Booking',
    },
    footer: {
      rights: '© 2024 JAGGO. Tous droits réservés. | Press Kit Premium de DJ',
    },
  },

  it: {
    nav: {
      about: 'Chi sono',
      experience: 'Esperienza',
      media: 'Media',
      video: 'Video',
      rider: 'Rider',
      bookNow: 'Prenota',
    },
    hero: {
      subtitle: 'DJ | House · Latin House · Tech House · Reggaetón',
      bookNow: 'Prenota',
    },
    about: {
      title: 'Chi è',
      bio1: 'Con radici profondamente radicate nelle scene Latin House e Tech House, JAGGO è diventato una presenza dominante nel panorama della musica elettronica del Venezuela. I suoi set sono caratterizzati da un sofisticato mix di House, Latin House, Tech House e Reggaetón—una combinazione che ha conquistato il pubblico dai club intimi ai grandi eventi negli stadi.',
      bio2: 'Riconosciuto per la sua abilità tecnica e il suo gusto musicale impeccabile, JAGGO crea viaggi sonori immersivi che trascendono i confini dei generi. Le sue esibizioni in prestigiosi locali di Caracas lo hanno affermato come una figura essenziale nella cultura del club della regione.',
      yearsActive: 'Anni di Attività',
      showsPerformed: 'Spettacoli Realizzati',
      averageCrowd: 'Pubblico Medio',
    },
    experience: {
      title: 'Ha Suonato A',
      categories: { arena: 'Arena', club: 'Club', festival: 'Festival', venue: 'Locale', social: 'Evento Privato', theater: 'Teatro' },
    },
    mediaSection: {
      title: 'Galleria Media',
    },
    videoSection: {
      title: 'Ultima sessione',
    },
    rider: {
      title: 'Rider Tecnico',
      requiredEquipment: 'Attrezzatura Richiesta',
      equipmentTypes: { turntable: 'Lettore', mixer: 'Mixer' },
      setupDetails: 'Dettagli di Montaggio',
      setupItems: [
        'Configurazione doppio giradischi con mixer professionale',
        'Sistema di monitor di alta qualità richiesto',
        'Alimentazione elettrica isolata preferibile',
        'Supporto di illuminazione professionale',
      ],
    },
    contact: {
      title: 'Contatti',
      subtitle: 'Disponibile per prenotazioni, collaborazioni e richieste',
      email: 'Email',
      follow: 'Seguimi',
      bookingInquiry: 'Richiesta Booking',
    },
    footer: {
      rights: '© 2024 JAGGO. Tutti i diritti riservati. | Press Kit Premium di DJ',
    },
  },
} as const
