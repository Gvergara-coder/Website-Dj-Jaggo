# JAGGO Design Guidelines

## Design Vision

A **dark, cinematic, minimal, high-end** DJ press kit that communicates luxury and professionalism. Inspired by premium nightclub aesthetics and international DJ brands.

## Color System

### Primary Colors
- **Background**: Pure Black `#000000` (oklch 0.08 0 0)
- **Text Primary**: White `#ffffff` (oklch 0.98 0 0)
- **Accent**: Deep Red `#dc2626` (oklch 0.5 0.25 15) - luxury tone, not bright

### Secondary Colors
- **Dark Gray**: `#1f2937` (oklch 0.18 0 0) - for secondary elements
- **Medium Gray**: `#4b5563` (oklch 0.3 0 0) - for borders and dividers
- **Light Gray**: `#9ca3af` (oklch 0.6 0 0) - for muted text

### Usage Guidelines
- **Red Accent**: CTA buttons, hover states, borders on cards, typography accents
- **No White Backgrounds**: Every element sits on black or dark gray
- **No Borders Around Images**: Images blend seamlessly into black backgrounds
- **Red Subtlety**: Use red/900 (darker) by default, intensify to red/600 on hover

## Typography Hierarchy

### Font Family
- **Headings**: Bold, sans-serif (Inter regular weight works, but uses uppercase)
- **Body**: Clean sans-serif (Inter)
- **All headings**: UPPERCASE for premium feel

### Sizes
- **Hero Title**: 7xl (mobile) → 8xl (desktop) | `font-black tracking-tighter`
- **Section Titles**: 5xl → 6xl | `font-black tracking-tight`
- **Subtitles**: xl → 2xl | uppercase, reduced letter-spacing
- **Body Text**: lg → base | `leading-relaxed` for readability
- **Small Text**: sm → xs | uppercase for labels and categories

### Styling Principles
- High contrast: white text on black background
- Generous letter-spacing in headings (`tracking-tight`, `tracking-wider`)
- Line-height 1.6-1.8 for body text
- All-caps for navigation and labels (premium editorial style)

## Layout & Spacing

### Sections
- Full-width dark backgrounds
- Max-width container: `max-w-7xl`
- Padding: 20-32px (mobile) → 48px (desktop)
- Vertical spacing between sections: 80-128px

### Cards & Components
- No rounded corners (minimal aesthetic)
- No white backgrounds - use dark gray overlays or transparent gradients
- Subtle borders: `border-red-900/30` by default, `border-red-600/60` on hover
- Spacing within cards: 24px padding minimum

### Image Treatment
- No borders, no white backgrounds, no frames
- Blend directly into black background
- Use subtle overlays for text over images:
  - `bg-gradient-to-t from-black/80 via-transparent`
  - `bg-black/40 hover:bg-black/20`

## Interactive Elements

### Buttons
- **Style**: Solid background color or border only
- **Default**: `bg-red-900/80` or `border border-red-600`
- **Hover**: `hover:bg-red-800` or scale/shadow effects
- **Text**: White, uppercase, semibold
- **Padding**: `px-8 py-4` for large buttons

### Hover States
- Smooth transitions: `transition-all duration-300`
- Color change: `hover:text-red-600`
- Border change: `border-red-900/30 hover:border-red-600/60`
- Shadow effect: `hover:shadow-lg hover:shadow-red-900/30`
- Scale effect: `hover:scale-110` for images only

### Links
- Text color: gray by default
- Hover: `text-red-600` with smooth transition

## Animations & Motion

### Page Load
- Hero title: `animate-fade-in` (1s ease-out)
- Smooth scroll: enabled via `scroll-smooth` class

### Scroll Interaction
- Scroll indicator: subtle `animate-bounce`
- No fade-in animations on scroll (minimalist approach)

### Hover Interactions
- Button colors: 300ms transition
- Border colors: 300ms transition
- Image scale: `duration-300` or `duration-500`
- Shadow: `duration-300`

### Prohibited Animations
- ❌ Parallax scrolling (not minimal)
- ❌ Complex transitions (keep it sophisticated)
- ❌ Bounce on every interaction (only on indicator)
- ❌ Animations on page load except hero

## Component Examples

### Card (Venue, Media, Rider)
```html
<div class="group p-8 bg-gradient-to-br from-red-900/20 to-transparent 
            border border-red-900/30 hover:border-red-600/60 
            transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30">
  <!-- Content -->
</div>
```

### CTA Button
```html
<button class="px-8 py-4 bg-red-900/80 hover:bg-red-800 text-white 
               font-semibold uppercase tracking-wider transition-all 
               hover:shadow-2xl hover:shadow-red-900/50">
  Book Now
</button>
```

### Image with Overlay
```html
<div class="relative h-96 overflow-hidden">
  <Image src="..." fill class="object-cover group-hover:scale-110 
           transition-transform duration-500" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent 
              flex items-end pb-6">
    <p class="text-2xl font-bold text-white">Title</p>
  </div>
</div>
```

### Text Section
```html
<div class="space-y-8">
  <h2 class="text-5xl md:text-6xl font-black tracking-tight">
    Title <span class="text-red-600">Highlight</span>
  </h2>
  <p class="text-lg text-gray-400 leading-relaxed">
    Sophisticated body text here...
  </p>
</div>
```

## Responsive Design

### Breakpoints
- **Mobile**: 0px (default)
- **Tablet**: 768px (`md:`)
- **Desktop**: 1024px (`lg:`)

### Mobile Priorities
- Navigation: Hidden menu button, hamburger style
- Hero: Text scales down, button full-width on mobile
- Gallery: Single column on mobile, 2-3 columns on desktop
- Spacing: Reduced padding on mobile (24px → 48px desktop)

### Specific Changes
- Hero title: `text-4xl sm:text-6xl lg:text-7xl`
- Section title: `text-3xl md:text-5xl lg:text-6xl`
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Navigation

### Desktop (md+)
- Horizontal menu with uppercase labels
- 8px gap between items
- Hover color change to red

### Mobile (-md)
- Fixed hamburger menu button
- Dropdown menu on click
- Full-width items with padding

### Header Bar
- Fixed position at top
- Transparent by default
- `bg-black/95 backdrop-blur-md` when scrolled
- Border bottom appears on scroll

## Image Specifications

### Recommended Sizes
- **Hero Background**: 1920x1080px (16:9)
- **About Image**: 600x800px (portrait) or 800x600px (landscape)
- **Rider Setup**: 1000x1000px square or 1200x800px
- **Gallery Images**: 800x600px (4:3) or 1000x1000px (square)
- **Avatar/Portrait**: 400x400px or 500x500px

### Image Format
- **Format**: JPG for photographs (best compression)
- **Quality**: 85-90% JPG quality
- **Optimization**: Use ImageOptim or similar before uploading

## Spacing Scale

- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 80px

## SEO & Accessibility

### Meta Tags
- Title: DJ Name - Genre/Focus
- Description: 160 character summary with genres and booking info

### Color Contrast
- White on black: WCAG AAA compliant
- Gray text: Ensure 4.5:1 ratio minimum

### Images
- All images have alt text
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)

## Browser Testing Checklist

- [ ] Chrome Desktop (latest)
- [ ] Firefox Desktop (latest)
- [ ] Safari Desktop (latest)
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Responsive design 320px-1920px
- [ ] Navigation menu
- [ ] Image loading
- [ ] Form inputs
- [ ] Hover states
- [ ] Transitions smooth

## Performance Guidelines

- Images lazy-loaded when below fold
- CSS minified and optimized
- No external scripts except analytics
- Smooth animations use GPU acceleration
- Page load target: <3 seconds

## Common Customizations

### Change Accent Red
1. Find all instances of `red-600`, `red-800`, `red-900`
2. Replace with your chosen color
3. Update CSS custom properties in globals.css

### Add New Section
1. Create new `<section id="name">` block
2. Add button to navigation
3. Add to `scrollToSection()` function
4. Use same spacing and card styles

### Add Social Links
1. Update `socials` array in page.tsx
2. Add link with `target="_blank" rel="noopener noreferrer"`
3. Update social icon if desired

### Change Font
1. Import different Google Font in layout.tsx
2. Update `--font-sans` in globals.css theme
3. Apply to body element

---

**Design System Version**: 1.0  
**Last Updated**: April 2024  
**Designed for**: Professional DJ Press Kits
