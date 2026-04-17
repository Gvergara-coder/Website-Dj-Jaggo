# 🎧 DJ Landing Page - Guía de Personalización

Una landing page profesional, minimalista y moderna para DJs con diseño "underground techno-chic".

## 📋 Características Principales

### ✨ Secciones Incluidas

1. **Header & Hero Section**
   - Navegación minimalista con scroll suave
   - Nombre del DJ en tipografía grande y audaz
   - Logo circular con icon de auriculares
   - Botones CTA (Booking/Contacto y Explorar)
   - Animaciones de scroll

2. **Biografía y Trayectoria**
   - Sección "Sobre Mí" con descripción profesional
   - Estadísticas de carrera (eventos, años, clubes, festivales)
   - Diseño responsivo con grid

3. **Clubes & Festivales**
   - Grid de 8 espacios para logos/nombres de venues
   - Efectos hover interactivos
   - Escalado animado al pasar el mouse

4. **Galería**
   - Carrusel interactivo de imágenes
   - Grid de 3 fotos con efecto zoom en hover
   - Indicadores de diapositivas animados
   - Imágenes de alta calidad incluidas

5. **Rider Técnico**
   - Equipamiento (Pioneer CDJs, Mixer, Turntables, etc.)
   - Requerimientos técnicos (sonido, iluminación, conexiones, espacio)
   - Botones para descargar PDF y ver especificaciones

6. **Contacto & Booking**
   - Formulario de contacto completo
   - Información de email y WhatsApp
   - Validación de formularios

7. **Footer & Social Media**
   - Iconos de Instagram, TikTok, YouTube, SoundCloud
   - Copyright automático con año actual
   - Enlaces a redes sociales

### 🎨 Diseño Visual

- **Paleta de Colores**: Negro profundo (#0D0D0D), Grises oscuros, Cyan/Blanco eléctrico (acento)
- **Tipografía**: Space Mono (títulos), Inter (body)
- **Efectos**: Transiciones suaves, hover effects, animaciones de scroll, glow effects
- **Responsive**: Completamente adaptable a móvil, tablet y desktop

## 🚀 Cómo Personalizar

### 1. Cambiar el Nombre del DJ

Busca `[TU NOMBRE]` en el archivo `/app/page.tsx` y reemplázalo con el nombre real:

```tsx
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter leading-tight">
  [TU NOMBRE]  // <- Cambiar aquí
</h1>
```

También en `app/layout.tsx`:
```tsx
title: '[TU NOMBRE] - Professional DJ',
```

### 2. Actualizar Contacto

En la sección de contacto, reemplaza:
- `booking@tunombre.com` → Tu correo real
- `+34 600 000 000` → Tu número de WhatsApp

```tsx
<a href="mailto:booking@tunombre.com">
  booking@tunombre.com
</a>
```

### 3. Cambiar Clubs y Festivales

Encuentra la sección "Clubes & Festivales" y reemplaza los nombres:

```tsx
const venues = [
  { name: 'Tu Club 1', icon: '🎵' },
  { name: 'Tu Festival 1', icon: '🎧' },
  // ... más venues
]
```

### 4. Reemplazar Imágenes de Galería

Las imágenes están en `/public/`:
- `gallery-1.jpg` - Club Performance
- `gallery-2.jpg` - Festival Stage
- `gallery-3.jpg` - Equipment Close-up

Reemplaza estas imágenes con tus propias fotos de presentaciones.

### 5. Actualizar Enlaces de Redes Sociales

En el footer, actualiza los URLs:

```tsx
<a href="https://instagram.com/tunombre" target="_blank">
  Instagram
</a>
```

### 6. Modificar Información del Rider Técnico

Personaliza el equipamiento y requerimientos según tu setup real:

```tsx
const equipment = [
  { name: 'Tu Equipo 1', icon: '🎛️' },
  { name: 'Tu Equipo 2', icon: '🎧' },
]
```

### 7. Cambiar Estadísticas

Actualiza los números en la sección "Sobre Mí":

```tsx
<p className="text-4xl font-bold text-accent mb-2">500+</p>  // Cambiar 500
<p className="text-muted-foreground">Eventos</p>
```

## 🎯 Colores Personalizables

Si quieres cambiar la paleta de colores, edita `/app/globals.css`:

```css
:root {
  --background: oklch(0.08 0 0);      /* Negro muy oscuro */
  --foreground: oklch(0.98 0 0);      /* Blanco casi puro */
  --accent: oklch(1 0.15 184);        /* Cyan eléctrico */
  --secondary: oklch(0.18 0 0);       /* Gris oscuro */
}
```

Usa [oklch.com](https://oklch.com) para obtener valores de color personalizados.

## 📱 Responsividad

La página es completamente responsiva:
- **Mobile**: Menú hamburguesa, layout de una columna
- **Tablet**: Grid de 2 columnas, menú ajustado
- **Desktop**: Layout completo, navegación horizontal

Breakpoints Tailwind utilizados:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px

## ⚡ Optimizaciones Incluidas

- ✅ Scroll suave automático
- ✅ Animaciones performantes
- ✅ Imágenes optimizadas con Next.js Image
- ✅ CSS-in-JS con Tailwind
- ✅ Mobile-first design
- ✅ Accesibilidad (alt text, semantic HTML)
- ✅ SEO listo para producción

## 🛠️ Stack Tecnológico

- **Next.js 15** - Framework React
- **Tailwind CSS 4** - Utilidades CSS
- **TypeScript** - Type safety
- **Lucide Icons** - Iconografía moderna
- **Space Mono & Inter Fonts** - Google Fonts

## 📤 Desplegar a Producción

### Con Vercel (Recomendado)

1. Conecta tu repositorio GitHub
2. Vercel detectará automáticamente Next.js
3. Presiona "Deploy"

```bash
vercel deploy
```

### Con tu propio servidor

```bash
npm run build
npm start
```

## 🔗 Links Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [OKLCH Color Picker](https://oklch.com)

## 📝 Notas Adicionales

- Las imágenes de galería son placeholders de alta calidad. Reemplázalas con tus propias fotos profesionales.
- El formulario de contacto está listo para ser conectado con un servicio como Formspree, Resend, o tu propio backend.
- Todos los enlaces de redes sociales están en el footer - actualízalos con tus URLs reales.
- Los efectos de scroll y animaciones están optimizados para no afectar el rendimiento.

## 🎉 ¡Listo!

Tu landing page de DJ profesional está lista para personalizar y desplegar. ¡Que suene fuerte! 🎧🎵

---

**Creado con ❤️ para DJs profesionales**
