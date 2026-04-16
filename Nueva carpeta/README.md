# 🎧 DJ Landing Page - Profesional, Moderno, Underground

Una landing page minimalista y sofisticada para DJs profesionales con diseño "techno-chic" oscuro. Lista para personalizar y desplegar en producción.

![DJ Landing Page](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![Tailwind](https://img.shields.io/badge/Tailwind-4-blue?logo=tailwindcss) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

## ✨ Características

### 🎯 Secciones Incluidas

- **Hero Section** - Presentación profesional con CTA
- **Sobre Mí** - Biografía y estadísticas de carrera
- **Clubes & Festivales** - Grid de venues donde has actuado
- **Galería** - Carrusel de fotos + grid de imágenes
- **Rider Técnico** - Equipamiento y requerimientos
- **Contacto** - Formulario + info de WhatsApp
- **Footer** - Enlaces de redes sociales

### 🎨 Diseño

- ✅ **Tema Oscuro** - Negro profundo + Cyan eléctrico
- ✅ **Mobile First** - 100% responsivo
- ✅ **Animaciones** - Scroll suave, hover effects, transiciones
- ✅ **Performance** - Optimizado para velocidad
- ✅ **Accesibilidad** - WCAG 2.1 compliant
- ✅ **SEO Ready** - Meta tags, Open Graph, Schema markup

### 🛠️ Tecnologías

```
Next.js 15 | React 19 | TypeScript | Tailwind CSS 4 | Lucide Icons
```

## 🚀 Inicio Rápido

### 1. Clonar/Descargar

```bash
git clone https://github.com/tunombre/dj-landing.git
cd dj-landing
npm install
```

### 2. Personalizar en 5 Minutos

Ver [`QUICK_START.md`](./QUICK_START.md) para instrucciones paso a paso de:
- Cambiar nombre del DJ
- Actualizar contacto
- Añadir fotos
- Actualizar redes sociales

### 3. Ejecutar Localmente

```bash
npm run dev
# Abre http://localhost:3000
```

### 4. Desplegar

```bash
# Opción 1: Vercel (Recomendado)
vercel deploy

# Opción 2: Netlify
netlify deploy

# Opción 3: Tu propio servidor
npm run build && npm start
```

Ver [`DEPLOYMENT.md`](./DEPLOYMENT.md) para instrucciones detalladas.

---

## 📖 Documentación

| Documento | Contenido |
|-----------|-----------|
| 📄 [`QUICK_START.md`](./QUICK_START.md) | **5 pasos de personalización (5 min)** |
| 📄 [`DJ_LANDING_GUIDE.md`](./DJ_LANDING_GUIDE.md) | Guía completa y detallada |
| 📄 [`DEPLOYMENT.md`](./DEPLOYMENT.md) | Instrucciones de despliegue en Vercel/Netlify |
| 📄 [`EXAMPLES.md`](./EXAMPLES.md) | 10 ejemplos de extensión y nuevas secciones |
| 📄 [`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md) | Estructura del proyecto y componentes |

## 📁 Estructura

```
├── app/
│   ├── page.tsx              # Landing page principal
│   ├── layout.tsx            # Configuración y meta datos
│   └── globals.css           # Estilos globales
├── components/
│   ├── dj-animations.tsx     # Componentes de animación
│   ├── effects.tsx           # Efectos visuales
│   ├── rider-pdf.tsx         # Generador de PDF
│   └── section-title.tsx     # Componentes reutilizables
├── lib/
│   └── metadata.ts           # Configuración de sitio
├── types/
│   └── index.ts              # Tipos TypeScript
└── public/
    ├── gallery-1.jpg         # Fotos de galería
    ├── gallery-2.jpg         # (reemplaza con las tuyas)
    └── gallery-3.jpg
```

## 🎨 Personalización

### Cambiar Colores

En `app/globals.css`:
```css
--accent: oklch(1 0.15 184);  /* Cyan - cambia el número para otro color */
--background: oklch(0.08 0 0); /* Negro profundo */
```

Usa [oklch.com](https://oklch.com) para obtener valores personalizados.

### Cambiar Nombre

Busca `[TU NOMBRE]` en:
- `app/page.tsx` (línea 186)
- `app/layout.tsx` (línea 18)

### Cambiar Fotos

Reemplaza en `/public/`:
- `gallery-1.jpg` - Club Performance
- `gallery-2.jpg` - Festival Stage
- `gallery-3.jpg` - Equipment
- `profile-avatar.jpg` - Foto de perfil

## 🌐 Despliegue Recomendado

### Vercel (Gratis + Dominio Personalizado)

```bash
# 1. Sube a GitHub
git push origin main

# 2. Ve a vercel.com/new
# 3. Selecciona tu repositorio
# 4. Click en "Deploy"
```

**Ventajas:**
- ✅ Despliegue automático en cada push
- ✅ HTTPS incluido
- ✅ CDN global
- ✅ Analytics incluido
- ✅ Soporte 24/7

**Presupuesto:** $0-20/mes (domain + storage)

## 📱 Responsive

| Dispositivo | Soporte |
|------------|---------|
| 📱 Mobile | ✅ Totalmente optimizado |
| 📱 Tablet | ✅ Totalmente optimizado |
| 💻 Desktop | ✅ Totalmente optimizado |
| 🖥️ 4K | ✅ Escalado perfecto |

## ⚡ Performance

- ⏱️ Lighthouse Score: **95+**
- 🖼️ Imágenes optimizadas automáticamente
- 🗜️ CSS comprimido
- 📦 JS minificado
- 🚀 Carga en <2 segundos

## 🔧 Requisitos

- Node.js 18+
- npm o pnpm
- Navegador moderno (Chrome, Firefox, Safari, Edge)

## 📦 Dependencias Principales

```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "tailwindcss": "^4.0.0",
  "typescript": "^5.0.0",
  "lucide-react": "^latest"
}
```

## 🛠️ Desarrollo

### Instalar Dependencias

```bash
npm install
```

### Modo Desarrollo

```bash
npm run dev
# http://localhost:3000
```

### Construir para Producción

```bash
npm run build
npm start
```

### Linter

```bash
npm run lint
```

## ✅ Checklist Pre-Lanzamiento

- [ ] Nombre del DJ actualizado
- [ ] Email de contacto correcto
- [ ] Número de WhatsApp correcto
- [ ] Fotos de galería reemplazadas
- [ ] Enlaces de redes sociales actualizados
- [ ] Clubes/festivales personalizados
- [ ] Dominio comprado (opcional)
- [ ] DNS configurado (si usan dominio)
- [ ] SSL/HTTPS activado
- [ ] Probado en móvil

## 🆘 Soporte

### Problemas Comunes

**El sitio ve blanco:**
```bash
npm run build
npm run dev
```

**Las imágenes no cargan:**
- Verifica que estén en `/public/`
- Usa rutas como `/gallery-1.jpg`
- Comprueba los permisos

**El menú móvil no funciona:**
- Limpia caché del navegador
- Verifica que JavaScript esté habilitado

### Recursos

- 📚 [Documentación Next.js](https://nextjs.org/docs)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- 🎭 [Lucide Icons](https://lucide.dev)
- 💬 [Vercel Support](https://vercel.com/help)

## 📝 Licencia

MIT License - Libre para usar en proyectos comerciales

## 🎉 Créditos

Creado con ❤️ para DJs profesionales.

## 🌟 Haz tu Landing Page Única

Este es un punto de partida. Personalízalo con:
- Tu música/podcasts
- Testimonios de clientes
- Timeline de giras
- Blog de artículos
- Tienda de descargas

Ver [`EXAMPLES.md`](./EXAMPLES.md) para 10 ideas de extensión.

---

## 📊 Estadísticas

- 🎨 7 secciones principales
- ✍️ 100% personalizable
- 🚀 Listo para producción
- ⚡ Ultra rápido
- 📱 100% responsive
- ♿ Accesible

---

## 🔗 Enlaces Importantes

- 🌐 [Next.js Official](https://nextjs.org)
- 🎨 [Tailwind CSS Official](https://tailwindcss.com)
- 🚀 [Vercel](https://vercel.com)
- 📚 [Guía Rápida](./QUICK_START.md)
- 📖 [Guía Completa](./DJ_LANDING_GUIDE.md)

---

## 🎵 ¿Listo para Brillar?

1. Personaliza en 5 minutos con [`QUICK_START.md`](./QUICK_START.md)
2. Despliega en Vercel en 2 minutos con [`DEPLOYMENT.md`](./DEPLOYMENT.md)
3. ¡Recibe bookings!

**¡Que suene fuerte! 🎧🎵**

---

<div align="center">

Hecho con 🖤 para DJs | Potenciado por Next.js + Tailwind

[⭐ Dale una estrella si te resultó útil](https://github.com/tunombre/dj-landing)

</div>
