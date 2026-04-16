# ⚡ Guía Rápida - DJ Landing Page

## 5 Minutos para Personalizar tu Sitio

### Paso 1: Reemplaza el Nombre (1 minuto)

Busca `[TU NOMBRE]` y reemplázalo en:

**Archivo:** `app/page.tsx`
```tsx
// Línea ~186
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter leading-tight">
  TU NOMBRE AQUI  // <- Cambiar
</h1>
```

**Archivo:** `app/layout.tsx`
```tsx
// Línea ~18
title: 'TU NOMBRE - Professional DJ',  // <- Cambiar
```

### Paso 2: Actualiza el Contacto (1 minuto)

**Archivo:** `app/page.tsx`

Busca "booking@tunombre.com" (aproximadamente línea ~690):
```tsx
<a href="mailto:booking@tunombre.com">  // <- Cambiar email
  booking@tunombre.com
</a>
```

Busca "+34 600 000 000" (aproximadamente línea ~700):
```tsx
<a href="tel:+34600000000">  // <- Cambiar número
  +34 600 000 000
</a>
```

### Paso 3: Añade tus Fotos (2 minutos)

1. Reemplaza los archivos de imagen en `/public/`:
   - `gallery-1.jpg` → Tu foto de club
   - `gallery-2.jpg` → Tu foto de festival
   - `gallery-3.jpg` → Tu foto de equipo

2. Nota: Usa fotos de buena calidad (mínimo 800x800px)

### Paso 4: Actualiza Redes Sociales (1 minuto)

**Archivo:** `app/page.tsx` - Footer (alrededor de línea ~900)

```tsx
<a href="https://instagram.com/TU_USUARIO">  // <- Cambiar
  Instagram
</a>

<a href="https://tiktok.com/@TU_USUARIO">  // <- Cambiar
  TikTok
</a>

// Igualmente para YouTube y SoundCloud
```

### Paso 5: Personaliza Clubs (1 minuto)

**Archivo:** `app/page.tsx` - Sección Venues (alrededor de línea ~300)

```tsx
const venuesList = [
  { name: 'TU CLUB 1', icon: '🎵' },
  { name: 'TU FESTIVAL 1', icon: '🎧' },
  // ... reemplaza todos los nombres
]
```

## ✅ Checklist de Personalización

- [ ] Nombre del DJ actualizado
- [ ] Email de contacto correcto
- [ ] Número de WhatsApp correcto
- [ ] Fotos de galería reemplazadas
- [ ] Enlaces de redes sociales actualizados
- [ ] Clubes/festivales personalizados
- [ ] Estadísticas actualizadas (eventos, años, etc.)
- [ ] Equipamiento correcto listado

## 🎨 Cambiar Colores (Opcional)

Si quieres cambiar el color neón principal de cyan a otro:

**Archivo:** `app/globals.css`

```css
:root {
  --accent: oklch(1 0.15 184);  /* 184 = Cyan */
  /* Cambia 184 a otro número:
     0 = Rojo
     60 = Amarillo
     120 = Verde
     180-200 = Cyan
     240 = Azul
     300 = Magenta
  */
}
```

## 🚀 Desplegar en 2 Minutos

### Opción 1: Vercel (Recomendado)

```bash
# 1. Sube a GitHub
git add .
git commit -m "DJ landing page personalizado"
git push

# 2. Ve a vercel.com/new
# 3. Selecciona tu repositorio
# 4. Click en "Deploy"
```

### Opción 2: Netlify

```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod
```

## 📸 Dimensiones de Imágenes Recomendadas

- **Carrusel:** 1920x1080px o mayor
- **Grid:** 1000x1000px (cuadrado)
- **Logo/Avatar:** 500x500px
- **Social:** 1200x630px (Open Graph)

## 🔧 Problemas Comunes

### El sitio ve blanco o vacío
```bash
# Limpia caché y reconstruye
npm run build
npm run dev
```

### Las imágenes no cargan
- Verifica que estén en `/public/`
- Usa rutas como `/gallery-1.jpg` (no relativos)
- Comprueba los permisos del archivo

### El menú móvil no funciona
- Asegúrate de que JavaScript esté habilitado
- Borra el caché del navegador

## 💡 Tips de Diseño

### Mantén la profesionalidad
- Usa fotos de alta calidad
- Descripciones claras y concisas
- Información de contacto visible

### Mobile-first
- El sitio se ve bien en teléfonos
- Prueba en diferentes dispositivos
- Asegúrate que los botones sean clicables

### Velocidad
- Comprime las imágenes
- No añadas más de 10MB de contenido
- Usa un CDN (incluido en Vercel)

## 📱 Vista Previa en Móvil

Mientras desarrollas:
```bash
npm run dev
# Abre en el navegador: http://localhost:3000
# En móvil: http://[tu-ip]:3000
```

Luego puedes ver el preview en vivo de Vercel.

## 🎵 Próximos Pasos

Una vez personalizado:

1. **Integra formulario de contacto**
   - Usa Formspree.io (gratis)
   - O EmailJS.com
   - O tu propio backend

2. **Añade analytics**
   - Google Analytics
   - Vercel Analytics (incluido)

3. **Mejora SEO**
   - Añade descripción meta
   - Google Search Console
   - Google My Business

4. **Promoción**
   - Comparte en redes
   - Actualiza biografías de perfiles
   - Pide que lo enlacen otros DJs

## 📚 Documentación Completa

- **Guía detallada:** `DJ_LANDING_GUIDE.md`
- **Despliegue:** `DEPLOYMENT.md`
- **Componentes:** Carpeta `/components`

## ¿Necesitas Ayuda?

- 🐛 Bugs: Revisa los logs con `vercel logs`
- 🎨 Diseño: Edita `app/globals.css`
- 📝 Contenido: Cambia el texto en `app/page.tsx`
- 🚀 Deploy: Ve a `DEPLOYMENT.md`

---

**¡Ya está! Tu landing page profesional está lista. A por esos bookings! 🎧🎵**
