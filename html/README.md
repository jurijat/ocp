## Prerequisites

- Node.js 18+
- npm or yarn

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

The dev server runs three processes concurrently:

- **JS Bundler** - Watches and rebuilds JavaScript with esbuild
- **CSS Compiler** - Watches and rebuilds Tailwind CSS
- **HTTP Server** - Serves the `dist/` directory

### Build for Production

```bash
npm run build
```

## Deployment

The `dist/` directory contains everything needed for deployment:

```
dist/
├── index.html     # Main HTML
├── main.js        # Bundled JavaScript
├── output.css     # Compiled CSS
└── (images via symlink)
```

### Production Base Path

The site uses `/ocp` as the base path in production. This is configured in:

- `src/config.js` - Runtime base path detection
- `svelte.config.js` (parent directory) - Original SvelteKit config (for reference)

## Available Scripts

- `npm run dev` - Start development server with watch mode
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Remove dist directory
- `npm run dev:js` - Watch and build JS only
- `npm run dev:css` - Watch and build CSS only
- `npm run dev:serve` - Run dev server only
