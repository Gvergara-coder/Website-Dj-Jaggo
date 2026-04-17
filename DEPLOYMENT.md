# 🚀 Guía de Despliegue - DJ Landing Page

## Pasos para Desplegar tu Landing Page

### 1. Preparación Inicial

Antes de desplegar, asegúrate de haber personalizado:

- ✅ Nombre del DJ en `app/layout.tsx` y `app/page.tsx`
- ✅ Email de contacto en `app/page.tsx`
- ✅ Número de WhatsApp en `app/page.tsx`
- ✅ Enlaces de redes sociales en `app/page.tsx`
- ✅ Nombres de clubes y festivales
- ✅ Imágenes de galería reemplazadas (`/public/gallery-*.jpg`)

### 2. Opción A: Desplegar en Vercel (Recomendado)

La forma más fácil y rápida:

#### Pasos:

1. **Crea una cuenta en Vercel** (si no tienes):
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con GitHub

2. **Sube tu código a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DJ landing page"
   git remote add origin https://github.com/tunombre/dj-landing
   git push -u origin main
   ```

3. **Conecta tu repositorio en Vercel**:
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Selecciona tu repositorio
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

4. **Configura el dominio**:
   - En el dashboard de Vercel, ve a "Domains"
   - Añade tu dominio personalizado (ej: tunombre.com)
   - Sigue las instrucciones de DNS

#### Ventajas:
- ✅ Gratis para comenzar
- ✅ Despliegues automáticos al hacer push
- ✅ SSL incluido
- ✅ CDN global
- ✅ Soporte 24/7
- ✅ Analytics incluido

### 3. Opción B: Desplegar en Netlify

Alternativa popular:

```bash
# Instala Netlify CLI
npm install -g netlify-cli

# Construye el proyecto
npm run build

# Despliega
netlify deploy --prod
```

### 4. Opción C: Desplegar en tu servidor (VPS/Shared Hosting)

Para mayor control:

```bash
# Construye el proyecto
npm run build

# Transfiere los archivos a tu servidor
scp -r .next/ tunombre@tudominio.com:/var/www/dj-landing/

# En el servidor
cd /var/www/dj-landing
npm install
npm start
```

Usa un gestor de procesos como PM2:
```bash
pm2 start "npm start" --name "dj-landing"
pm2 save
pm2 startup
```

### 5. Opción D: Desplegar en Heroku

```bash
# Instala Heroku CLI
npm install -g heroku

# Login
heroku login

# Crea la aplicación
heroku create tunombre-dj

# Despliega
git push heroku main

# Abre la app
heroku open
```

## Configuración Post-Despliegue

### Email de Contacto

El formulario de contacto actualmente es estático. Para hacerlo funcional, elige una opción:

#### Option 1: Formspree (Recomendado)
```tsx
// En app/page.tsx, cambiar el formulario a:
<form action="https://formspree.io/f/tuformid" method="POST">
  {/* Tus campos */}
</form>
```

#### Option 2: EmailJS
```bash
npm install @emailjs/browser
```

```tsx
import emailjs from '@emailjs/browser'

emailjs.init('TU_PUBLIC_KEY')

const sendEmail = async (e) => {
  e.preventDefault()
  await emailjs.sendForm('service_id', 'template_id', e.target)
}
```

#### Option 3: Resend (Next.js 13+)
```bash
npm install resend
```

```tsx
// app/api/send/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const data = await request.json()
  const result = await resend.emails.send({
    from: 'noreply@tunombre.com',
    to: 'booking@tunombre.com',
    subject: `Nueva solicitud de booking de ${data.name}`,
    html: `<p>${data.message}</p>`
  })
  return Response.json(result)
}
```

### Google Analytics

Añade estadísticas a tu sitio:

```bash
npm install @react-google-analytics/core
```

```tsx
// app/layout.tsx
import GoogleAnalytics from '@react-google-analytics/core'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Mapa de Google en Contacto (Opcional)

Si quieres mostrar dónde operas:

```bash
npm install react-map-gl mapbox-gl
```

### Carrito de Descargas de Música (Opcional)

Para vender mixes o tracks:

```bash
npm install stripe @stripe/react-js
```

## Variables de Entorno

Si añades servicios externos, crea un `.env.local`:

```env
# Email
RESEND_API_KEY=xxx
FORMSPREE_ID=xxx

# Mapas
MAPBOX_API_TOKEN=xxx

# Analytics
NEXT_PUBLIC_GA_ID=xxx

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=xxx
STRIPE_SECRET_KEY=xxx
```

## Optimizaciones para Producción

### 1. Minificar y Comprimir

```bash
npm run build
```

### 2. Instrumentos Web (Web Vitals)

Vercel lo hace automáticamente.

### 3. Caché de Imágenes

Next.js maneja automáticamente la optimización de imágenes.

### 4. Compresión GZIP

Habilitada por defecto en Vercel.

## SEO Pre-Lanzamiento

- [ ] Actualiza `title` en metadata
- [ ] Añade `description` relevante
- [ ] Añade `keywords`
- [ ] Configura `robots.txt`
- [ ] Añade `sitemap.xml`
- [ ] Registra en Google Search Console
- [ ] Registra en Google My Business
- [ ] Solicita verificación de redes sociales

### robots.txt

```text
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://tunombre.com/sitemap.xml
```

## Dominio Personalizado

### Desde Vercel:
1. Ve a Project Settings → Domains
2. Añade tu dominio
3. Sigue las instrucciones de DNS
4. Espera 24 horas (puede ser menos)

### Ejemplo con Namecheap:
```
A Record: 76.76.19.132 (IP de Vercel)
CNAME: www.cname.vercel-dns.com
```

## Monitoreo

### Uptime Monitoring

```bash
# UptimeRobot (gratis)
# Ve a uptimerobot.com y añade tu URL
```

### Error Tracking

```bash
npm install @sentry/nextjs
```

## Actualizaciones Futuras

### Desplegar cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
# Vercel despliega automáticamente
```

## Troubleshooting

### El sitio no se carga
- Verifica que Vercel terminó el despliegue
- Revisa los logs: `vercel logs`
- Limpia la caché del navegador

### Las imágenes no se muestran
- Asegúrate que las imágenes estén en `/public`
- Verifica los permisos de archivo
- Usa rutas absolutas

### El formulario no funciona
- Integra con Formspree o EmailJS
- Añade validación en el frontend
- Crea un endpoint API en `app/api`

### Problemas de velocidad
- Usa Lighthouse en Chrome DevTools
- Optimiza imágenes con ImageOptim
- Habilita caché en Vercel

## Presupuesto Estimado

| Servicio | Costo | Necesario |
|----------|-------|-----------|
| Vercel | Gratis* | ✅ |
| Dominio | $10/año | ✅ |
| Email | Gratis** | ✅ |
| Analytics | Gratis | ✅ |
| Formspree | Gratis*** | ✅ |
| **Total** | **~$10/año** | |

*Gratis hasta 100GB/mes
**Gratis con Formspree
***50 envíos/mes

## Support

- 📧 Email: support@vercel.com
- 💬 Discord: discord.gg/vercel
- 📱 Twitter: @vercel

---

¡Tu landing page está lista para brillar! 🎧✨
