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
      equipmentTypes: { turntable: 'Preferible', mixer: 'Mezclador' },
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
      bio1: "Jaggo is a Venezuelan DJ known for his energy, versatility, and ability to connect with the crowd. His passion began in his teenage years, fueled by the rise of electro house, reggaeton, and Venezuelan hip hop. He trained at Pitch Control under the mentorship of Milton Hernández and took his first professional steps with Leonel Rojas at LeClub, one of Caracas' most iconic nightclubs.",
      bio2: "Since then, he has performed at high-profile social events. His style blends house, afro house, tech house, and reggaeton, shaped by the influence of Latin classics, rock, and the sounds that marked his early years. Jaggo doesn't just mix music—he creates high-energy, emotionally charged experiences where the dance floor lights up and the crowd is fully immersed. Every set is an invitation to let go, feel the beat, and live the moment to the fullest.",
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
      bio1: 'Jaggo é um DJ venezuelano cujo estilo se baseia em energia, versatilidade e conexão com o público. Sua paixão começou na adolescência, influenciado pelo boom do electro house, reggaeton e hip hop venezuelano. Ele treinou na Pitch Control sob a direção de Milton Hernández e deu seus primeiros passos profissionais com Leonel Rojas no LeClub, uma das casas noturnas mais icônicas de Caracas.',
      bio2: 'Desde então, ele tem se apresentado em eventos sociais de grande prestígio. Seu estilo mescla house, afro house, tech house e reggaeton, com forte influência dos clássicos latinos e da música eletrônica que marcaram sua infância. Jaggo não apenas mixa música: ele cria experiências energéticas e emocionantes, onde a pista de dança incendeia e a multidão vibra. Cada um de seus sets é um convite para viver a vida ao máximo.',
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
      bio1: "Jaggo est un DJ vénézuélien dont le style repose sur l'énergie, la polyvalence et la connexion avec le public. Sa passion est née à l'adolescence, influencée par l'essor de l'electro house, du reggaeton et du hip-hop vénézuélien. Il s'est formé à Pitch Control sous la direction de Milton Hernández et a fait ses premiers pas professionnels avec Leonel Rojas au LeClub, l'une des boîtes de nuit les plus emblématiques de Caracas.",
      bio2: "Depuis, il s'est produit lors d'événements mondains prestigieux. Son style mêle house, afro house, tech house et reggaeton, avec une forte influence des classiques latins et de la musique électronique qui ont marqué son enfance. Jaggo ne se contente pas de mixer : il crée des expériences intenses et émotionnelles où le dancefloor s'enflamme et le public vibre. Chacun de ses sets est une invitation à vivre pleinement.",
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
      bio1: 'Jaggo è un DJ venezuelano il cui stile si basa su energia, versatilità e capacità di entrare in sintonia con il pubblico. La sua passione è nata durante l adolescenza, influenzata dal boom dell electro house, del reggaeton e dell hip hop venezuelano. Si è formato presso Pitch Control sotto la guida di Milton Hernández e ha mosso i primi passi professionali con Leonel Rojas al LeClub, uno dei locali notturni più iconici di Caracas.',
      bio2: 'Da allora, si è esibito in eventi mondani di alto profilo. Il suo stile fonde house, afro house, tech house e reggaeton, con una forte influenza dei classici latini e della musica elettronica che hanno plasmato la sua infanzia. Jaggo non si limita a mixare musica: crea esperienze energiche ed emozionanti in cui la pista da ballo si infiamma e la folla vibra. Ogni suo set è un invito a vivere la vita al massimo.',
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
