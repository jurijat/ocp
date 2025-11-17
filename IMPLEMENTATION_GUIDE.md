# Conference Landing Page - Implementation Guide

## Overview

A fully responsive conference landing page built with **SvelteKit** and **custom CSS** (no Tailwind utilities). The design matches the OpenAPI Conference Paris 2024 screenshots.

## Project Structure

```
conference-landing-page/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── Header/
│   │       │   ├── Header.svelte
│   │       │   └── Header.css
│   │       ├── LearnMoreBanner/
│   │       │   ├── LearnMoreBanner.svelte
│   │       │   └── LearnMoreBanner.css
│   │       ├── AgendaSection/
│   │       │   ├── AgendaSection.svelte
│   │       │   ├── AgendaSection.css
│   │       │   ├── AgendaCard.svelte
│   │       │   └── AgendaCard.css
│   │       ├── PreviousEvents/
│   │       │   ├── PreviousEvents.svelte
│   │       │   └── PreviousEvents.css
│   │       └── SubscribeSection/
│   │           ├── SubscribeSection.svelte
│   │           └── SubscribeSection.css
│   ├── routes/
│   │   └── +page.svelte (main page with all components)
│   ├── styles/
│   │   ├── variables.css (design tokens)
│   │   ├── reset.css (CSS reset & base styles)
│   │   └── layout.css (layout utilities)
│   └── app.css (global styles entry point)
├── static/
│   └── images/
│       ├── speakers/ (speaker photos)
│       ├── events/ (event gallery photos)
│       ├── logo.svg (main logo icon)
│       └── api-masters-logo.png (banner logo)
└── [config files]
```

## Components Built

### 1. Header Component
- Logo and "OPENAPI" branding
- Location info with pin icon
- "REGISTER NOW" CTA button with play icon
- Fully responsive with mobile menu ready

**Props:**
- `logoSrc` - Path to logo image
- `locationName` - Venue name
- `locationAddress` - Full address
- `ctaText` - Button text
- `ctaHref` - Button link

### 2. Learn More Banner
- Promotional banner with title and subtitle
- API Masters logo display
- Clean, minimal design

**Props:**
- `title` - Banner title
- `subtitle` - Banner subtitle text
- `logoSrc` - Logo image path
- `logoAlt` - Logo alt text

### 3. Agenda Section
- Large section heading with navigation arrows
- Multiple category groups (Opening, Governance, Design, Tooling)
- Two-column grid of session cards
- Individual session cards with:
  - Time and track labels
  - Session title
  - Speaker photo and details
  - Highlight option for featured sessions

**Props:**
- `categories` - Array of category objects with items

**Data Structure:**
```typescript
{
  title: string;      // Category name
  date: string;       // Category date
  items: {
    time: string;     // Session time
    track: string;    // Track name
    title: string;    // Session title
    speaker: {
      name: string;
      title: string;
      photo: string;
    };
    highlighted?: boolean; // Green background
  }[]
}
```

### 4. Previous Events Section
- Photo gallery grid (4 columns on desktop)
- Hover effects on photos
- Navigation arrows
- Fully responsive (adjusts to 3, 2, 1 columns)

**Props:**
- `photos` - Array of photo objects with `src` and `alt`

### 5. Subscribe Section
- Large heading with subtitle
- Circular arrow button
- Simple, impactful footer design

**Props:**
- `title` - Section title
- `subtitle` - Subtitle text
- `actionHref` - Button link

## CSS Architecture

### Design System (variables.css)

All design tokens are centralized in CSS variables:

**Colors:**
- `--color-primary-green` - Main brand green (#4ade80)
- `--color-bg-dark` - Main background (#000000)
- `--color-bg-card` - Card background (#1a1a1a)
- `--color-text-primary` - Main text (#ffffff)
- `--color-text-secondary` - Secondary text (#a3a3a3)

**Spacing Scale:**
- `--spacing-xs` through `--spacing-4xl` (8px to 96px)

**Typography:**
- Font sizes from `--font-size-xs` to `--font-size-5xl`
- Font weights and line heights

**Other:**
- Border radius values
- Box shadows
- Transitions
- Z-index scale

### Responsive Breakpoints

All components include responsive styles:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px
- Small mobile: < 480px

## Next Steps: Adding Your Assets

### 1. Add Logo
Place your logo file at:
```
static/images/logo.svg
```

### 2. Add API Masters Logo
Place the API Masters logo at:
```
static/images/api-masters-logo.png
```

### 3. Add Speaker Photos
Place speaker photos in:
```
static/images/speakers/
```

Then update the photo paths in `/src/routes/+page.svelte`:
```typescript
speaker: {
  name: 'LORNA MITCHELL',
  title: 'Principal Developer Advocate, Redocly',
  photo: '/images/speakers/lorna-mitchell.jpg' // Update this path
}
```

### 4. Add Event Gallery Photos
Place 12 event photos (or more) in:
```
static/images/events/
```

Update the `previousEventsPhotos` array in `/src/routes/+page.svelte`:
```typescript
const previousEventsPhotos = [
  { src: '/images/events/event-1.jpg', alt: 'Description' },
  // ... add all your photos
];
```

## Customizing the Content

### Edit Agenda Data
Open `/src/routes/+page.svelte` and modify the `agendaCategories` array with your actual conference data:

```typescript
const agendaCategories = [
  {
    title: 'YOUR CATEGORY',
    date: 'DATE',
    items: [
      {
        time: '10:00',
        track: 'TRACK NAME',
        title: 'Session Title',
        speaker: {
          name: 'Speaker Name',
          title: 'Speaker Title',
          photo: '/images/speakers/name.jpg'
        },
        highlighted: false // Set to true for green background
      }
    ]
  }
];
```

### Edit Location & CTA
The Header component uses default values. To customize, open `/src/routes/+page.svelte` and pass props:

```svelte
<Header
  logoSrc="/images/your-logo.svg"
  locationName="YOUR VENUE"
  locationAddress="Your Address\nCity, Postal\nCountry"
  ctaText="REGISTER NOW"
  ctaHref="/register"
/>
```

### Customize Colors
Edit `/src/styles/variables.css` to change the color scheme:

```css
:root {
  --color-primary-green: #your-color;
  --color-bg-dark: #your-bg-color;
  /* ... other variables */
}
```

## Running the Development Server

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Features

✅ **Fully Responsive** - Works on all device sizes
✅ **Custom CSS Only** - No Tailwind utility classes used
✅ **Component-Based** - Reusable Svelte components
✅ **BEM Methodology** - Clean CSS naming convention
✅ **Design System** - Centralized CSS variables
✅ **Type-Safe** - TypeScript throughout
✅ **Accessible** - Semantic HTML and ARIA labels
✅ **Performance** - Optimized with SvelteKit

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome)

## File Locations Reference

| Asset Type | Location |
|------------|----------|
| Logo | `static/images/logo.svg` |
| API Masters Logo | `static/images/api-masters-logo.png` |
| Speaker Photos | `static/images/speakers/*.jpg` |
| Event Photos | `static/images/events/*.jpg` |
| Main Content | `src/routes/+page.svelte` |
| Color Scheme | `src/styles/variables.css` |
| Components | `src/lib/components/` |

## Notes

- All image paths use `/images/...` which resolves to `static/images/...`
- SVG icons are inline in components (location pin, play button, arrows)
- The design follows a dark theme with green accent color
- Cards have hover effects for better interactivity
- Navigation arrows are placeholder buttons (add actual navigation logic as needed)

## Support

For questions or issues with the implementation, refer to:
- SvelteKit docs: https://kit.svelte.dev/docs
- Svelte 5 docs: https://svelte.dev/docs

---

**Built with:** SvelteKit 2.47.1 | Svelte 5.41.0 | TypeScript 5.9.3 | Vite 7.1.10
