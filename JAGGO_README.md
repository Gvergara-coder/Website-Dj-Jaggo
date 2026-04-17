# JAGGO - Premium DJ Press Kit Website

A dark, cinematic, minimalist, high-end DJ press kit website built with Next.js, React, and Tailwind CSS.

## Overview

This is a professional press kit website for **JAGGO**, a premium DJ specializing in House, Latin House, Tech House, and Reggaetón. The design features:

- **Dark Cinematic Aesthetic**: Black dominant background with deep red accents (luxury tone)
- **Editorial Layout**: Clean, sophisticated, international DJ brand feel
- **Premium Typography**: Bold, spacious design with strong hierarchy
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **High-Quality Imagery**: Professional photography throughout

## Key Features

### Sections

1. **Navigation** - Fixed header with smooth scroll navigation
2. **Hero Section** - Fullscreen background with DJ name and CTA
3. **About** - DJ biography with key statistics
4. **Experience** - Grid of venues and festivals performed at
5. **Media Gallery** - Professional photography showcase
6. **Technical Rider** - Equipment specifications and requirements
7. **Contact** - Booking inquiries and social media links
8. **Footer** - Copyright and attribution

### Design Elements

- **Color Palette**: 
  - Background: Pure black (#000000)
  - Accent: Deep red (#991f1f, oklch 0.5 0.25 15)
  - Text: White (#ffffff) with gray variations
  
- **Typography**: 
  - Headings: Bold, uppercase, high contrast
  - Body: Clean sans-serif with generous line-height
  
- **Effects**:
  - Smooth scroll behavior
  - Hover animations on interactive elements
  - Fade-in animations on hero text
  - Image scale transitions
  - Border color transitions on cards

## File Structure

```
/app
  /page.tsx              - Main landing page
  /layout.tsx            - Root layout with metadata
  /globals.css           - Global styles and animations

/public
  /hero-bg.jpg           - Hero section background
  /about-image.jpg       - About section DJ portrait
  /rider-setup.jpg       - Equipment setup image
  /media-1.jpg to 6.jpg - Gallery images

/components
  (optional utility components)

/lib
  (optional utilities)
```

## Customization Guide

### 1. Update DJ Information

**File: `/app/page.tsx`**

Change the DJ name in the hero section:
```tsx
<h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl animate-fade-in">
  JAGGO  {/* Change this */}
</h1>
```

Update the tagline:
```tsx
<p className="text-xl md:text-2xl text-gray-300 uppercase tracking-widest font-light">
  DJ | House · Latin House · Tech House · Reggaetón  {/* Change this */}
</p>
```

### 2. Replace Images

All images are in `/public/`:
- `hero-bg.jpg` - Main hero background (1920x1080px recommended)
- `about-image.jpg` - DJ portrait image
- `rider-setup.jpg` - Equipment setup photo
- `media-1.jpg` through `media-6.jpg` - Gallery images

Simply upload new images with the same filenames.

### 3. Update Contact Information

**File: `/app/page.tsx`**

Change email (search for "jaggo.contact@gmail.com"):
```tsx
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

Update social media links in the `socials` array:
```tsx
const socials = [
  { name: 'Instagram', url: 'https://instagram.com/your-handle', icon: 'instagram' },
  { name: 'YouTube', url: 'https://youtube.com/@your-channel', icon: 'youtube' },
  { name: 'TikTok', url: 'https://tiktok.com/@your-handle', icon: 'tiktok' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/your-profile', icon: 'soundcloud' },
]
```

### 4. Update Venues/Experience

**File: `/app/page.tsx`**

Modify the `venues` array in the Experience section:
```tsx
const venues = [
  { name: 'Your Venue Name', category: 'Club' },
  { name: 'Another Venue', category: 'Festival' },
  // ... add more venues
]
```

### 5. Update Equipment/Rider

**File: `/app/page.tsx`**

Update the `equipment` array:
```tsx
const equipment = [
  { name: 'Your Equipment Name', type: 'Category' },
  // ... add more equipment
]
```

### 6. Update Bio Text

**File: `/app/page.tsx`**

Replace the About section text with your own biography:
```tsx
<p className="text-lg text-gray-400 leading-relaxed">
  Your custom biography text here...
</p>
```

### 7. Update Statistics

**File: `/app/page.tsx`**

Modify the stats displayed in the About section:
```tsx
<div className="flex justify-between items-center">
  <span className="text-gray-400 uppercase tracking-wider text-sm">Years Active</span>
  <span className="text-2xl font-bold text-red-600">10+</span>
</div>
```

## Style Customization

### Change Accent Color

**File: `/app/globals.css`**

All red accent colors use `#dc2626` (deep red). To change the accent color throughout the site, you can:

1. Update the CSS custom property in globals.css:
```css
--accent: oklch(0.5 0.25 15);  /* Change this to your color */
```

2. Or manually search and replace `text-red-600`, `bg-red-900`, `border-red-900` with your desired colors throughout page.tsx

### Modify Typography

The site uses **Inter** font family from Google Fonts. To change:

**File: `/app/layout.tsx`**

```tsx
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ["latin"] });

// In the body:
<body className={`${yourFont.className} antialiased bg-black text-white`}>
```

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

```bash
vercel deploy
```

### Option 2: Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy automatically on push

### Option 3: Self-Hosted

```bash
# Build
npm run build

# Start
npm run start
```

## Technical Stack

- **Framework**: Next.js 15+
- **Runtime**: React 19+
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4+
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)
- **Images**: Next.js Image Optimization

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification via Tailwind
- Optimized animations with GPU acceleration
- Responsive images for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO

The site includes:
- Proper meta tags in layout.tsx
- Open Graph tags for social sharing
- Twitter Card meta tags
- Semantic HTML structure
- Alt text on all images
- Sitemap-ready structure

## Troubleshooting

### Images Not Loading
- Ensure images are in `/public/` directory
- Use exact filenames: `hero-bg.jpg`, `about-image.jpg`, etc.
- Images should be JPG format for best compatibility

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild the project: `npm run build`
- Check that globals.css is imported in layout.tsx

### Mobile Menu Not Working
- Ensure JavaScript is enabled
- Check browser console for errors
- Test in different mobile browsers

## License

This template is provided as-is for personal and commercial DJ use.

## Support

For technical issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Documentation](https://react.dev)

---

**Created for Professional DJs** | Premium Press Kit Template
