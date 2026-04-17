# JAGGO - Quick Setup Guide

Complete your press kit in just **15 minutes**. Follow these steps to personalize your site.

## 🎯 Before You Start

- Have your photos ready (hero, about, gallery images)
- List your venues/festivals
- Gather your social media links
- Know your email for bookings

## Step 1: Update Basic Info (3 minutes)

### File: `/app/page.tsx`

**Change DJ Name (appears 3 times):**

1. Find line with `<h1 className="text-7xl...">JAGGO</h1>`
   - Change `JAGGO` to your name

2. Find line with `<button onClick={() => scrollToSection('hero')}>`
   - Change `JAGGO` to your name

3. Footer copyright should mention your name

**Change Tagline:**

Find: `DJ | House · Latin House · Tech House · Reggaetón`

Replace with: `Your Genre Specialties Here`

Example: `DJ | Techno · House · Minimal`

## Step 2: Add Your Email (2 minutes)

### File: `/app/page.tsx`

Find: `jaggo.contact@gmail.com` (appears 2 times)

Replace with: `your-email@example.com`

```tsx
// Old
<a href="mailto:jaggo.contact@gmail.com">
  jaggo.contact@gmail.com
</a>

// New
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

## Step 3: Update Social Media Links (2 minutes)

### File: `/app/page.tsx`

Find the `socials` array near the top:

```tsx
const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/jaggomusic/', icon: 'instagram' },
  { name: 'YouTube', url: 'https://youtube.com/@jaggomusic-official', icon: 'youtube' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@jaggomusic', icon: 'tiktok' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/jaggomusic', icon: 'soundcloud' },
]
```

Replace each URL with your actual social profiles:

```tsx
const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/YOUR-USERNAME/', icon: 'instagram' },
  { name: 'YouTube', url: 'https://youtube.com/@YOUR-CHANNEL', icon: 'youtube' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@YOUR-USERNAME', icon: 'tiktok' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/YOUR-PROFILE', icon: 'soundcloud' },
]
```

## Step 4: Update Your Venues (2 minutes)

### File: `/app/page.tsx`

Find the `venues` array:

```tsx
const venues = [
  { name: 'Estadio Monumental Simón Bolívar', category: 'Arena' },
  { name: 'LeClub Caracas', category: 'Club' },
  // ... etc
]
```

Replace with YOUR venues:

```tsx
const venues = [
  { name: 'Club Name 1', category: 'Club' },
  { name: 'Festival Name 1', category: 'Festival' },
  { name: 'Venue Name 1', category: 'Venue' },
  { name: 'Arena Name 1', category: 'Arena' },
  // ... add up to 7 venues
]
```

Categories can be: `Club`, `Festival`, `Arena`, `Venue`, `Lounge`, `Theater`, `Luxury`

## Step 5: Replace Photos (4 minutes)

All images are in `/public/` folder. Replace these files:

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `hero-bg.jpg` | Main hero background | 1920x1080px |
| `about-image.jpg` | Your DJ portrait | 600x800px |
| `rider-setup.jpg` | Equipment setup | 1000x800px |
| `media-1.jpg` to `media-6.jpg` | Gallery photos | 800x600px |

**How to replace:**
1. In the v0 interface, click the three dots menu
2. Select "Upload Files"
3. Upload your images with EXACT same filenames
4. Or use your computer's file system if working locally

**Important:**
- ✅ Use JPG format (best quality/size ratio)
- ✅ Keep filenames exactly the same
- ✅ Place all images in `/public/` folder
- ❌ Don't rename the files
- ❌ Don't use PNG for performance

## Step 6: Update Your Bio (2 minutes)

### File: `/app/page.tsx`

Find the About section with this text:

```tsx
<p className="text-lg text-gray-400 leading-relaxed">
  With roots deeply embedded in the Latin House and Tech House scenes...
</p>
```

Replace with your own biography (keep it 2-3 paragraphs):

```tsx
<p className="text-lg text-gray-400 leading-relaxed">
  Your biography paragraph 1 here...
</p>
<p className="text-lg text-gray-400 leading-relaxed">
  Your biography paragraph 2 here...
</p>
```

Keep it professional and focused on your:
- Years of experience
- Musical style/genres
- Notable achievements
- Your unique approach to DJing

## Step 7: Update Statistics (1 minute)

### File: `/app/page.tsx`

Find these statistics in the About section:

```tsx
<div className="flex justify-between items-center">
  <span className="text-gray-400 uppercase tracking-wider text-sm">Years Active</span>
  <span className="text-2xl font-bold text-red-600">10+</span>
</div>
```

Update all 3 stats:

```tsx
// Years Active
<span className="text-2xl font-bold text-red-600">YOUR-NUMBER</span>

// Shows Performed
<span className="text-2xl font-bold text-red-600">YOUR-NUMBER</span>

// Average Crowd
<span className="text-2xl font-bold text-red-600">YOUR-NUMBER</span>
```

## Step 8: Test Your Site (0 minutes)

Run locally to preview:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser

**Checklist:**
- [ ] Your name appears correctly
- [ ] Email works when clicked
- [ ] Social links work and go to correct profiles
- [ ] All images load properly
- [ ] Navigation scrolls smoothly
- [ ] Mobile menu works on small screens
- [ ] Hover effects work on buttons
- [ ] Text color is readable

## Step 9: Deploy (3 minutes)

### Option A: Vercel (Easiest)

```bash
npm install -g vercel
vercel deploy
```

Then follow the prompts.

### Option B: Netlify

1. Push code to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Connect GitHub repository
5. Deploy!

### Option C: Your Own Server

```bash
npm run build
npm run start
```

## Optional Customizations

### Change the Red Accent Color

If you want a different color instead of deep red:

**File: `/app/globals.css`**

Find and replace all instances of:
- `red-600` → Your color (e.g., `amber-600`)
- `red-800` → Darker version
- `red-900` → Darkest version

Or update the CSS custom property:
```css
--accent: oklch(0.5 0.25 15);  /* Change this oklch value */
```

### Change Hero Title Font

**File: `/app/layout.tsx`**

Replace:
```tsx
import { Space_Mono, Inter } from 'next/font/google'
```

With:
```tsx
import { YourFont, Inter } from 'next/font/google'
```

### Add More Gallery Images

**File: `/app/page.tsx`**

Find:
```tsx
{[1, 2, 3, 4, 5, 6].map((item) => (
```

Change `6` to `8` or `10` for more images, then add images:
- `media-7.jpg`
- `media-8.jpg`
- etc.

### Change Section Order

Reorder the `<section>` elements in `/app/page.tsx` and update the navigation items accordingly.

## Troubleshooting

### Images Don't Load

**Problem**: Images show as broken
**Solution**: 
- Check images are in `/public/` folder
- Check filenames match exactly: `hero-bg.jpg`, `about-image.jpg`, etc.
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild: `npm run build`

### Colors Look Wrong

**Problem**: Accent colors are incorrect
**Solution**:
- Check globals.css color definitions
- Verify no typos in Tailwind classes
- Try `npm run build` to recompile
- Clear browser cache

### Mobile Menu Doesn't Work

**Problem**: Hamburger menu not opening
**Solution**:
- Ensure JavaScript is enabled
- Check browser console for errors (F12)
- Try different browser
- Clear cache and refresh

### Links Not Working

**Problem**: Social/email links don't work
**Solution**:
- Verify URL format is correct
- Test email link with mailto:
- Test social links with full URL including https://
- Check for typos in URLs

### Scroll Navigation Jumps

**Problem**: Pages jump when scrolling to sections
**Solution**:
- This is normal due to fixed header height
- If problematic, add padding-top to sections:
```tsx
<section id="contact" className="pt-20 md:pt-32 px-6 bg-black">
```

## Next Steps After Setup

1. ✅ Test everything locally
2. ✅ Deploy to Vercel/Netlify
3. ✅ Share your URL
4. ✅ Post on social media
5. ✅ Start receiving bookings!

## Support

If you have questions:
- Check JAGGO_README.md for more details
- Check JAGGO_DESIGN_NOTES.md for design info
- See original Next.js docs: https://nextjs.org/docs

---

**That's it!** Your professional DJ press kit is ready. Good luck with your bookings! 🎧

Time to complete: ~15 minutes
Result: Professional, high-end DJ website
