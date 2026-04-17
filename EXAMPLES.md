# 🎨 Ejemplos de Extensión - DJ Landing Page

Aquí encontrarás ejemplos de cómo extender y personalizar tu landing page con nuevas características.

## 1. Añadir Sección de Música / Releases

```tsx
// Sección de Últimas Producciones
<section id="releases" className="py-20 px-4 bg-secondary/30">
  <div className="max-w-5xl mx-auto">
    <SectionTitle>Últimas Producciones</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: 'Track 1', date: 'Enero 2024', platform: 'Spotify' },
        { title: 'Track 2', date: 'Diciembre 2023', platform: 'Apple Music' },
        { title: 'Track 3', date: 'Noviembre 2023', platform: 'Beatport' },
      ].map((track) => (
        <div key={track.title} className="bg-card border border-border rounded-lg p-6 hover:border-accent/50">
          <div className="w-full aspect-square bg-gradient-to-br from-accent/20 to-secondary rounded-lg mb-4" />
          <h3 className="font-bold mb-2">{track.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{track.date}</p>
          <a href="#" className="text-accent hover:underline text-sm">
            Escuchar en {track.platform} →
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
```

## 2. Añadir Testimonio de Clientes

```tsx
// Sección de Reviews
<section id="testimonials" className="py-20 px-4">
  <div className="max-w-5xl mx-auto">
    <SectionTitle>Lo Que Dicen Mis Clientes</SectionTitle>
    
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          name: 'Club Manager XYZ',
          role: 'Manager de Club',
          text: 'Profesional, puntual y el público simplemente lo adora.',
        },
        {
          name: 'Festival Director',
          role: 'Director de Festival',
          text: 'Una de nuestras mejores actuaciones del año.',
        },
      ].map((testimonial) => (
        <Card key={testimonial.name}>
          <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </Card>
      ))}
    </div>
  </div>
</section>
```

## 3. Crear API Endpoint para Formulario

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const result = await resend.emails.send({
      from: 'booking@tunombre.com',
      to: 'your-email@example.com',
      subject: `Nueva solicitud de booking de ${data.name}`,
      html: `
        <h2>Nueva Solicitud de Booking</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Evento:</strong> ${data.eventName}</p>
        <p><strong>Detalles:</strong> ${data.message}</p>
      `,
    })

    return Response.json(result)
  } catch (error) {
    return Response.json({ error: error }, { status: 400 })
  }
}
```

Luego en `app/page.tsx`, actualiza el form:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const formData = new FormData(e.target as HTMLFormElement)
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
  })
  
  if (response.ok) {
    alert('Solicitud enviada correctamente!')
  }
}

// Y en el formulario:
<form onSubmit={handleSubmit}>
  {/* ... campos ... */}
</form>
```

## 4. Añadir Mapa de Ubicación

```tsx
// Instala: npm install react-map-gl mapbox-gl

import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

<section id="map" className="py-20 px-4">
  <div className="max-w-5xl mx-auto">
    <SectionTitle>Dónde Actúo</SectionTitle>
    
    <Map
      initialViewState={{
        longitude: 0,
        latitude: 40,
        zoom: 3,
      }}
      style={{ width: '100%', height: '500px' }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    >
      {/* Añade marcadores de ciudades donde actúas */}
    </Map>
  </div>
</section>
```

## 5. Galería de Video

```tsx
// Sección de Videos/Mixes
<section id="videos" className="py-20 px-4 bg-secondary/30">
  <div className="max-w-5xl mx-auto">
    <SectionTitle>Últimos Videos</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { title: 'Set en Club XYZ', id: 'dQw4w9WgXcQ' },
        { title: 'Festival Performance', id: 'dQw4w9WgXcQ' },
      ].map((video) => (
        <iframe
          key={video.id}
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      ))}
    </div>
  </div>
</section>
```

## 6. Blog o Noticias

```tsx
// app/blog/page.tsx
export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Mi Receta para un Set Perfecto',
      date: 'Enero 2024',
      excerpt: 'Aprende mis técnicas de mezcla...',
      slug: 'receta-set-perfecto',
    },
    // Más posts...
  ]

  return (
    <main className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block p-6 border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
```

## 7. Carrito de Descargas (Stripe)

```bash
npm install stripe @stripe/react-js
```

```tsx
// Sección de Descargas
<section id="downloads" className="py-20 px-4">
  <SectionTitle>Descarga mis Mixes</SectionTitle>
  
  <div className="grid md:grid-cols-2 gap-6">
    {[
      { name: 'Mix Vol. 1', price: 4.99, id: 'price_1234' },
      { name: 'Mix Vol. 2', price: 4.99, id: 'price_5678' },
    ].map((item) => (
      <div key={item.id} className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-accent font-bold mb-4">${item.price}</p>
        <form action="/api/stripe" method="POST">
          <input type="hidden" name="priceId" value={item.id} />
          <button type="submit" className="w-full px-6 py-2 bg-accent text-background rounded font-bold">
            Comprar
          </button>
        </form>
      </div>
    ))}
  </div>
</section>
```

## 8. Newsletter Signup

```tsx
// Sección de Newsletter
<section id="newsletter" className="py-20 px-4 bg-secondary/30">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Suscríbete a mi Newsletter</h2>
    <p className="text-muted-foreground mb-6">
      Recibe noticias sobre mis últimos eventos y producciones
    </p>
    
    <form className="flex gap-2">
      <input
        type="email"
        placeholder="Tu email"
        className="flex-1 px-4 py-3 bg-card border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-accent text-background font-bold rounded hover:opacity-90"
      >
        Suscribir
      </button>
    </form>
  </div>
</section>
```

## 9. Timeline de Giras

```tsx
// Sección de Tour Dates
<section id="tour" className="py-20 px-4">
  <SectionTitle>Próximas Giras</SectionTitle>
  
  <div className="space-y-6 max-w-2xl mx-auto">
    {[
      { date: '15 Feb', city: 'Madrid', venue: 'Club XYZ' },
      { date: '22 Feb', city: 'Barcelona', venue: 'Club ABC' },
      { date: '01 Mar', city: 'Valencia', venue: 'Club 123' },
    ].map((date) => (
      <div key={date.date} className="flex gap-6">
        <div className="flex-shrink-0 w-20 text-accent font-bold">{date.date}</div>
        <div className="flex-1 pb-6 border-l border-border pl-6">
          <h3 className="font-bold">{date.city}</h3>
          <p className="text-sm text-muted-foreground">{date.venue}</p>
          <a href="#contact" className="text-accent hover:underline text-sm mt-2 inline-block">
            Reservar entrada →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
```

## 10. Dark/Light Mode Toggle

```tsx
// components/theme-toggle.tsx
'use client'

import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
```

## Recursos Adicionales

- 🎨 **Tailwind CSS:** https://tailwindcss.com
- 🎭 **Lucide Icons:** https://lucide.dev
- 🎵 **Spotify API:** https://developer.spotify.com
- 🎥 **YouTube Embed:** https://developers.google.com/youtube/iframe_api_reference
- 💳 **Stripe:** https://stripe.com/docs
- 📧 **Resend:** https://resend.com

---

**¡Explora estas ideas y crea una landing page única!** 🚀
