# 📁 Estructura del Proyecto - DJ Landing Page

## 🗂️ Árbol de Directorios

```
dj-landing-page/
├── app/
│   ├── layout.tsx                 # Layout raíz con meta datos
│   ├── page.tsx                   # Landing page principal
│   └── globals.css                # Estilos globales y animaciones
│
├── components/
│   ├── dj-animations.tsx           # Componentes de animación reutilizables
│   ├── effects.tsx                 # Efectos visuales (glows, scroll, etc)
│   ├── rider-pdf.tsx               # Generador de PDF del rider
│   └── section-title.tsx           # Componentes de UI reutilizables
│
├── lib/
│   ├── metadata.ts                 # Configuración de sitio y SEO
│   └── utils.ts                    # Funciones utilitarias
│
├── types/
│   └── index.ts                    # Definiciones de tipos TypeScript
│
├── public/
│   ├── gallery-1.jpg               # Foto de club
│   ├── gallery-2.jpg               # Foto de festival
│   ├── gallery-3.jpg               # Foto de equipo
│   ├── profile-avatar.jpg          # Avatar de perfil
│   └── icon*.png                   # Favicons
│
├── 📄 QUICK_START.md               # Guía rápida (5 min)
├── 📄 DJ_LANDING_GUIDE.md          # Guía detallada completa
├── 📄 DEPLOYMENT.md                # Guía de despliegue
├── 📄 EXAMPLES.md                  # Ejemplos de extensión
├── 📄 PROJECT_STRUCTURE.md         # Este archivo
│
├── package.json                    # Dependencias del proyecto
├── tsconfig.json                   # Configuración TypeScript
├── tailwind.config.ts              # Configuración Tailwind
├── next.config.mjs                 # Configuración Next.js
└── README.md                       # Documentación del repositorio
```

## 📦 Archivos Principales

### `app/page.tsx` (Principal)
**Líneas:** 558  
**Contenido:**
- ✅ Header con navegación responsive
- ✅ Hero section con CTA
- ✅ Sección "Sobre Mí" con estadísticas
- ✅ Grid de clubes/festivales
- ✅ Galería con carrusel
- ✅ Rider técnico con equipamiento
- ✅ Formulario de contacto
- ✅ Footer con redes sociales

**Estados:** Menu mobile, scroll detection, slide carousel

---

### `app/layout.tsx`
**Contenido:**
- Fuentes personalizadas (Space Mono, Inter)
- Metadatos SEO
- Tema dark por defecto
- Scroll suave

---

### `app/globals.css`
**Contenido:**
- 🎨 Paleta de colores: Negro profundo, Cyan, Grises
- ✨ Animaciones: glow, float, slide-in, pulse
- 📱 Responsive utilities
- 🔧 Custom scrollbar
- ⌨️ Utilitarios personalizados

---

## 🎨 Componentes Creados

### `components/dj-animations.tsx`
- `ParallaxSection` - Efecto parallax en scroll
- `GlowingOrb` - Orbe luminoso animado
- `RevealText` - Texto que aparece al scroll
- `GlowButton` - Botón con efecto glow

### `components/effects.tsx`
- `AnimatedGradientBG` - Fondo con gradiente animado
- `GlowEffect` - Efecto glow al pasar mouse
- `ScrollProgress` - Barra de progreso de scroll
- `AnimatedCounter` - Contador animado de números

### `components/rider-pdf.tsx`
- `RiderPDFButton` - Descarga PDF del rider técnico
- Genera PDF con jsPDF y html2canvas

### `components/section-title.tsx`
- `SectionTitle` - Título de sección reutilizable
- `StatCard` - Tarjeta de estadística
- `Card` - Tarjeta genérica
- `CTAButton` - Botón CTA con variantes
- `IconText` - Icono con texto
- `GridContainer` - Grid responsive

---

## 🛠️ Stack Tecnológico

```json
{
  "framework": "Next.js 15+",
  "styling": "Tailwind CSS 4+",
  "language": "TypeScript",
  "ui-library": "shadcn/ui (opcional)",
  "icons": "Lucide Icons",
  "fonts": "Google Fonts (Space Mono, Inter)",
  "image-optimization": "Next.js Image",
  "deployment": "Vercel (recomendado)"
}
```

### Dependencias Incluidas
```
next: ^15.0.0
react: ^19.0.0
react-dom: ^19.0.0
tailwindcss: ^4.0.0
typescript: ^5.0.0
lucide-react: ^latest
```

### Dependencias Opcionales
Para funcionalidades avanzadas:
```
jspdf: para PDF (rider)
html2canvas: para captura de pantalla
stripe: para pagos
resend: para email
mapbox-gl: para mapas
react-map-gl: para mapas React
@sentry/nextjs: para error tracking
```

---

## 🎯 Características por Sección

### 1️⃣ Hero Section
- ✅ Logo circular con icon
- ✅ Nombre grande (H1)
- ✅ Descripción profesional
- ✅ Dos botones CTA
- ✅ Scroll indicator animado

### 2️⃣ About Section
- ✅ Biografía de 3 párrafos
- ✅ Grid de 4 estadísticas
- ✅ Efectos hover en cards

### 3️⃣ Venues Section
- ✅ Grid de 8 clubes/festivales
- ✅ Icons emoji
- ✅ Animación de scale en hover
- ✅ Border accent en hover

### 4️⃣ Gallery Section
- ✅ Carrusel con 3 imágenes
- ✅ Botones prev/next
- ✅ Indicadores de diapositiva
- ✅ Grid de 3 fotos
- ✅ Zoom en hover

### 5️⃣ Technical Rider
- ✅ 6 items de equipamiento
- ✅ 4 requerimientos técnicos
- ✅ Botones de descarga PDF y specs
- ✅ Icons descriptivos

### 6️⃣ Contact Section
- ✅ Formulario con 4 campos
- ✅ Textarea para detalles
- ✅ Dos botones de info
- ✅ Email y WhatsApp clickables

### 7️⃣ Footer
- ✅ 4 iconos de redes sociales
- ✅ Copyright dinámico
- ✅ Links funcionales

---

## 🎨 Paleta de Colores

| Token | Valor OKLCH | Uso |
|-------|-------------|-----|
| `--background` | `oklch(0.08 0 0)` | Fondo oscuro profundo |
| `--foreground` | `oklch(0.98 0 0)` | Texto blanco |
| `--card` | `oklch(0.12 0 0)` | Fondo de cards |
| `--secondary` | `oklch(0.18 0 0)` | Fondo secundario |
| `--accent` | `oklch(1 0.15 184)` | Cyan eléctrico |
| `--border` | `oklch(0.18 0 0)` | Bordes |
| `--muted` | `oklch(0.3 0 0)` | Texto mutado |

---

## 📱 Responsividad

### Breakpoints Usados
- **Mobile:** 0px - 640px (default)
- **Tablet:** 640px+ (`sm:`)
- **Tablet Large:** 768px+ (`md:`)
- **Desktop:** 1024px+ (`lg:`)
- **Desktop Large:** 1280px+ (`xl:`)

### Cambios por Viewport
```
Mobile:
- Menú hamburguesa
- Layout de 1 columna
- Hero: texto más pequeño
- Grid 2 columnas

Tablet:
- Menú horizontal aparece
- Grid 3 columnas
- Más espaciado

Desktop:
- Navegación completa
- Todos los efectos hover
- Grid 4 columnas
```

---

## 🚀 Optimizaciones Implementadas

- ✅ Imágenes optimizadas (Next.js Image)
- ✅ Lazy loading automático
- ✅ Scroll suave nativo
- ✅ Animaciones CSS (no JS)
- ✅ Mobile-first design
- ✅ Accesibilidad (ARIA labels)
- ✅ Meta tags para SEO
- ✅ Open Graph tags
- ✅ Caché de navegación
- ✅ Reducción de movimiento (prefers-reduced-motion)

---

## 📚 Guías Incluidas

| Archivo | Contenido | Tiempo |
|---------|-----------|--------|
| `QUICK_START.md` | 5 pasos de personalización | 5 min |
| `DJ_LANDING_GUIDE.md` | Guía completa detallada | 15 min |
| `DEPLOYMENT.md` | Instrucciones de despliegue | 10 min |
| `EXAMPLES.md` | 10 ejemplos de extensión | Referencia |
| `PROJECT_STRUCTURE.md` | Este archivo | Referencia |

---

## 🔧 Cómo Extender

### Añadir Nueva Sección
1. Crea un ID en el contenedor: `id="nueva-seccion"`
2. Añade enlace en navegación: `scrollToSection('nueva-seccion')`
3. Usa la estructura similar:
```tsx
<section id="nueva-seccion" className="py-20 px-4">
  <div className="max-w-5xl mx-auto">
    <SectionTitle>Título</SectionTitle>
    {/* Contenido */}
  </div>
</section>
```

### Crear Nuevo Componente
```tsx
// components/mi-componente.tsx
'use client'

export function MiComponente() {
  return (
    <div className="...">
      {/* JSX */}
    </div>
  )
}
```

### Añadir Estilos Personalizados
En `app/globals.css`:
```css
@layer utilities {
  .mi-estilo {
    @apply flex items-center gap-2;
  }
}
```

---

## 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| Archivos de componentes | 4 |
| Secciones principales | 7 |
| Imágenes incluidas | 4 |
| Guías de documentación | 4 |
| Líneas de código TypeScript | ~800 |
| Líneas de CSS personalizado | ~120 |
| Colores en paleta | 8 |
| Animaciones | 8 |
| Componentes reutilizables | 10+ |

---

## 🔗 URLs Importantes

- **Documentación Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev
- **Vercel Deploy:** https://vercel.com/new
- **TypeScript:** https://www.typescriptlang.org/

---

## 📝 Notas para Desarrollo

1. **Hot Reload:** Activado automáticamente en desarrollo
2. **Type Safety:** Incluye TypeScript para evitar errores
3. **Componentes:** Reutilizables y composables
4. **Accesibilidad:** Semántica HTML + ARIA
5. **SEO:** Meta tags + Open Graph + Schema markup

---

**Última actualización:** 2024  
**Versión:** 1.0.0  
**Licencia:** MIT

---

*Para más información, consulta los archivos de guía.*
