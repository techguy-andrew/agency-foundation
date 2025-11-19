# Font Swapping Guide

This guide explains how to easily change fonts across your entire application using the centralized font configuration system.

## Table of Contents

- [Quick Start](#quick-start)
- [How It Works](#how-it-works)
- [Changing Fonts](#changing-fonts)
- [Font Variants Explained](#font-variants-explained)
- [Popular Font Combinations](#popular-font-combinations)
- [Adding New Fonts](#adding-new-fonts)
- [Client-Specific Configurations](#client-specific-configurations)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

**Want to change fonts? It's as simple as 1-2-3:**

1. Browse [Google Fonts](https://fonts.google.com/) and find a font you like
2. Open `config/fonts.ts` and change the `family` field to your chosen font name
3. Save the file and rebuild your app

That's it! Your entire application will use the new font.

---

## How It Works

The font system is built on a simple principle: **centralized configuration**.

```
┌─────────────────┐
│ config/fonts.ts │  ← You edit this (font names, weights)
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   lib/fonts.ts  │  ← Auto-loads fonts from Google
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  app/layout.tsx │  ← Applies fonts to entire app
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Your Components │  ← Use Tailwind classes (font-heading, font-sans, etc.)
└─────────────────┘
```

**Files involved:**
- `config/fonts.ts` - Font configuration (EDIT THIS)
- `lib/fonts.ts` - Font loader utility (don't touch)
- `app/layout.tsx` - Root layout (already configured)
- `app/styles/globals.css` - CSS variables (already configured)

---

## Changing Fonts

### Step 1: Browse Google Fonts

Visit [fonts.google.com](https://fonts.google.com/) and find a font you like.

**Note the exact font name** - for example:
- ✅ "Inter"
- ✅ "Roboto"
- ✅ "Playfair Display"
- ✅ "Source Code Pro"

### Step 2: Check Available Weights

Click on the font and see which weights are available. Common weights:
- **100** - Thin
- **300** - Light
- **400** - Regular (normal text)
- **500** - Medium
- **600** - Semibold (recommended for headings)
- **700** - Bold
- **800** - Extrabold
- **900** - Black

### Step 3: Update config/fonts.ts

Open `config/fonts.ts` and modify the font configuration:

```typescript
export const fontConfig: FontConfig = {
  heading: {
    family: 'Inter',  // ← Change this
    weights: [600, 700, 800],  // ← Adjust weights as needed
    variable: '--font-heading',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  body: {
    family: 'Inter',  // ← Change this
    weights: [400, 500, 600],  // ← Adjust weights as needed
    variable: '--font-body',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  // ... label and mono variants
}
```

### Step 4: Rebuild the App

```bash
npm run dev
# or
pnpm dev
```

The app will automatically load and apply your new fonts!

---

## Font Variants Explained

The system uses **four font variants** for different purposes:

### 1. `heading` - For Headings and Titles
**Used in:**
- Page headings (`<h1>`, `<h2>`, etc.)
- Card titles
- Section headers
- Important labels

**Typical weights:** 600, 700, 800 (semibold to extrabold)

**CSS variable:** `--font-heading`

**Tailwind class:** `font-heading`

**Example:**
```tsx
<h1 className="font-heading text-3xl font-bold">Welcome</h1>
```

---

### 2. `body` - For Main Content
**Used in:**
- Paragraphs
- Descriptions
- Body text
- Most UI text (default)

**Typical weights:** 400, 500, 600 (regular to semibold)

**CSS variable:** `--font-body`

**Tailwind class:** `font-sans` (mapped to body font)

**Example:**
```tsx
<p className="text-base">This is body text using the body font.</p>
```

**Note:** This is the default font applied to `<body>`, so most text uses this unless specified otherwise.

---

### 3. `label` - For Labels and Small Text
**Used in:**
- Form labels
- Badges
- Small UI text
- Button text
- Navigation items

**Typical weights:** 500, 600 (medium to semibold)

**CSS variable:** `--font-label`

**Tailwind class:** `font-label`

**Example:**
```tsx
<label className="font-label text-sm">Email address</label>
```

---

### 4. `mono` - For Code and Technical Text
**Used in:**
- Code blocks
- Terminal output
- Technical documentation
- Monospaced content

**Typical weights:** 400, 500, 600

**CSS variable:** `--font-mono`

**Tailwind class:** `font-mono`

**Example:**
```tsx
<code className="font-mono text-sm">const x = 42;</code>
```

---

## Popular Font Combinations

Here are some professionally curated font combinations. Simply copy and paste into `config/fonts.ts`:

### 1. Inter (Clean & Modern)

**Best for:** SaaS apps, dashboards, modern web apps

```typescript
export const fontConfig: FontConfig = {
  heading: {
    family: 'Inter',
    weights: [600, 700, 800],
    variable: '--font-heading',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  body: {
    family: 'Inter',
    weights: [400, 500, 600],
    variable: '--font-body',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  label: {
    family: 'Inter',
    weights: [500, 600],
    variable: '--font-label',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  mono: {
    family: 'JetBrains Mono',
    weights: [400, 500],
    variable: '--font-mono',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Courier New', 'monospace'],
  },
}
```

---

### 2. Poppins + Roboto (Friendly & Approachable)

**Best for:** Marketing sites, e-commerce, consumer apps

```typescript
export const fontConfig: FontConfig = {
  heading: {
    family: 'Poppins',
    weights: [600, 700, 800],
    variable: '--font-heading',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  body: {
    family: 'Roboto',
    weights: [400, 500],
    variable: '--font-body',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  label: {
    family: 'Roboto',
    weights: [500, 600],
    variable: '--font-label',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  mono: {
    family: 'Source Code Pro',
    weights: [400, 500],
    variable: '--font-mono',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Courier New', 'monospace'],
  },
}
```

---

### 3. Playfair Display + Lato (Elegant & Professional)

**Best for:** Agencies, portfolios, luxury brands, editorial content

```typescript
export const fontConfig: FontConfig = {
  heading: {
    family: 'Playfair Display',
    weights: [600, 700, 800],
    variable: '--font-heading',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Georgia', 'serif'],
  },
  body: {
    family: 'Lato',
    weights: [400, 500],
    variable: '--font-body',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  label: {
    family: 'Lato',
    weights: [500, 600],
    variable: '--font-label',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  mono: {
    family: 'Fira Code',
    weights: [400, 500],
    variable: '--font-mono',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Courier New', 'monospace'],
  },
}
```

---

### 4. Montserrat (Bold & Impactful)

**Best for:** Startups, bold brands, creative agencies

```typescript
export const fontConfig: FontConfig = {
  heading: {
    family: 'Montserrat',
    weights: [600, 700, 800],
    variable: '--font-heading',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  body: {
    family: 'Montserrat',
    weights: [400, 500],
    variable: '--font-body',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  label: {
    family: 'Montserrat',
    weights: [500, 600],
    variable: '--font-label',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  mono: {
    family: 'Roboto Mono',
    weights: [400, 500],
    variable: '--font-mono',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Courier New', 'monospace'],
  },
}
```

---

### 5. Open Sans (Highly Readable)

**Best for:** Documentation, blogs, content-heavy sites

```typescript
export const fontConfig: FontConfig = {
  heading: {
    family: 'Open Sans',
    weights: [600, 700, 800],
    variable: '--font-heading',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  body: {
    family: 'Open Sans',
    weights: [400, 500],
    variable: '--font-body',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  label: {
    family: 'Open Sans',
    weights: [500, 600],
    variable: '--font-label',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
  },
  mono: {
    family: 'Source Code Pro',
    weights: [400, 500],
    variable: '--font-mono',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Courier New', 'monospace'],
  },
}
```

---

## Adding New Fonts

If you want to use a Google Font that's not yet supported:

### Step 1: Update lib/fonts.ts

Add the font import and mapping:

```typescript
// At the top of lib/fonts.ts, add your import:
import { Your_Font_Name } from 'next/font/google'

// Then in the fontLoaders object, add:
const fontLoaders = {
  // ... existing fonts
  'Your Font Name': Your_Font_Name,  // Note: spaces in key, underscores in import
}
```

**Important:** Font names with spaces use underscores in the import.
- "Open Sans" → `import { Open_Sans }`
- "Source Code Pro" → `import { Source_Code_Pro }`
- "JetBrains Mono" → `import { JetBrains_Mono }`

### Step 2: Use in config/fonts.ts

Now you can use it in your config:

```typescript
body: {
  family: 'Your Font Name',  // Use spaces in config
  // ...
}
```

---

## Client-Specific Configurations

For agencies managing multiple client projects, you can organize fonts by client:

### Setup

1. Create a `fonts/` directory inside `config/`:

```
config/
├── fonts/
│   ├── client-acme.ts
│   ├── client-globex.ts
│   └── default.ts
└── fonts.ts
```

2. Move your font config into `config/fonts/default.ts`:

```typescript
// config/fonts/default.ts
import type { FontConfig } from './types'

export const fontConfig: FontConfig = {
  // ... your default config
}
```

3. Create client-specific configs:

```typescript
// config/fonts/client-acme.ts
import type { FontConfig } from './types'

export const fontConfig: FontConfig = {
  heading: {
    family: 'Montserrat',
    // ... Acme Corp's brand fonts
  },
  // ...
}
```

4. Update `config/fonts.ts` to export from the active client:

```typescript
// config/fonts.ts
export * from './fonts/default'  // Change to client-specific file as needed
// export * from './fonts/client-acme'
// export * from './fonts/client-globex'
```

### Switching Clients

Simply uncomment the desired client config and comment out the others:

```typescript
// config/fonts.ts
// export * from './fonts/default'
export * from './fonts/client-acme'  // ← Active client
// export * from './fonts/client-globex'
```

Rebuild, and your entire app uses Acme's fonts!

---

## Troubleshooting

### "Font not found in font loaders" Error

**Problem:** You tried to use a font that hasn't been added to `lib/fonts.ts`.

**Solution:** Follow the [Adding New Fonts](#adding-new-fonts) section.

---

### Fonts not changing after editing config

**Problem:** Changes to `config/fonts.ts` aren't reflected in the app.

**Solution:**
1. Stop your dev server (`Ctrl+C`)
2. Clear Next.js cache: `rm -rf .next`
3. Restart: `npm run dev`

---

### Font looks different on different pages

**Problem:** Some components may be using hardcoded font classes.

**Solution:** Search your codebase for hardcoded Tailwind font classes and replace them with the config-based ones:

```tsx
// ❌ Before (hardcoded)
<h1 className="font-geist-sans">Title</h1>

// ✅ After (config-based)
<h1 className="font-heading">Title</h1>
```

---

### Want different fonts for headings vs body?

**Absolutely!** That's exactly what the variants are for:

```typescript
export const fontConfig: FontConfig = {
  heading: {
    family: 'Playfair Display',  // Serif for headings
    // ...
  },
  body: {
    family: 'Inter',  // Sans-serif for body
    // ...
  },
}
```

---

### Font weights not loading correctly

**Problem:** You're using a weight that the font doesn't support.

**Solution:** Check [Google Fonts](https://fonts.google.com/) for available weights and only include those in your `weights` array.

---

## Best Practices

1. **Load only what you need** - Don't load all font weights (100-900). Only load the weights you actually use to improve performance.

2. **Use `display: 'swap'`** - This prevents invisible text while fonts load.

3. **Keep variants consistent** - If using a single font family across variants, keep the same config to avoid loading duplicates.

4. **Test across devices** - Some fonts render differently on Mac vs Windows. Test your choices!

5. **Consider readability** - Not all fonts are suitable for body text. Choose legible fonts for `body` and `label`.

6. **Match your brand** - Choose fonts that align with your client's brand identity.

---

## Resources

- **Google Fonts:** https://fonts.google.com/
- **Font Pairing Tool:** https://fontpair.co/
- **Next.js Font Optimization:** https://nextjs.org/docs/app/building-your-application/optimizing/fonts

---

## Summary

**To change fonts:**
1. Browse Google Fonts
2. Edit `config/fonts.ts`
3. Rebuild

**That's it!** The entire app updates automatically. No need to touch components, layouts, or CSS.

For help, see the troubleshooting section or consult your development team.
