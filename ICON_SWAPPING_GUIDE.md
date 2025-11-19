# Icon Swapping Guide

## Overview

This application uses a centralized icon configuration system that makes it easy to swap icons for different clients without touching component code.

All icon SVG path data lives in: **`config/icons.ts`**

## How to Swap Icons for a New Client

### Quick Steps

1. **Get your new SVG file**
   - Place it in `app/styles/svg icons/`
   - Example: `loading-icon-client-xyz.svg`

2. **Extract the path data**
   - Open the SVG file
   - Copy the `<path>` element(s) inside

3. **Update the config**
   - Open `config/icons.ts`
   - Find the icon you want to replace (e.g., `loadingIconConfig`)
   - Replace the `paths` array with your new path data

4. **Build and test**
   ```bash
   npm run build
   npm run dev
   ```

That's it! The icon will update everywhere it's used.

---

## Detailed Example

### Example: Swapping the Loading Icon

**1. Your new SVG file** (`app/styles/svg icons/loading-icon-client-xyz.svg`):

```xml
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle
    cx="12"
    cy="12"
    r="10"
    stroke="currentColor"
    strokeWidth="3"
    opacity="0.25"
  />
  <path
    d="M12 2C6.47715 2 2 6.47715 2 12"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  />
</svg>
```

**2. Extract the important parts:**
- `viewBox`: `"0 0 24 24"`
- Paths: The `<circle>` and `<path>` elements

**3. Update `config/icons.ts`:**

```typescript
export const loadingIconConfig: IconPathConfig = {
  viewBox: '0 0 24 24',
  paths: [
    {
      // Note: For <circle>, we convert to path or add a circles array
      // For simplicity, here's how you'd add a circle as a path:
      d: 'M12 2C6.47715 2 2 6.47715 2 12',
      stroke: 'currentColor',
      strokeWidth: '3',
      strokeLinecap: 'round',
    },
  ],
}
```

**Note:** Our config system currently only supports `<path>` elements. If your SVG uses `<circle>`, `<rect>`, or other shapes, you have two options:

1. **Convert shapes to paths** (recommended - use an SVG editor or online tool)
2. **Extend the config** to support other SVG elements (see Advanced section below)

---

## Configuration Structure

### IconPathConfig Interface

```typescript
export interface IconPathConfig {
  viewBox: string
  paths: Array<{
    d: string                    // Required: SVG path data
    fill?: string                // Optional: fill color (use 'currentColor' for theming)
    opacity?: string             // Optional: opacity value
    fillRule?: 'nonzero' | 'evenodd' | 'inherit'
    clipRule?: 'nonzero' | 'evenodd' | 'inherit'
    stroke?: string              // Optional: stroke color
    strokeWidth?: string         // Optional: stroke width
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
  }>
}
```

### Available Icons

Currently configured icons:

1. **`loadingIconConfig`** - Spinning loading indicator
   - Used in: ItemCard during save operations
   - Location: Top-right menu button area

2. **`menuIconConfig`** - Three-dot menu icon
   - Used in: ItemCard default state
   - Location: Top-right corner of cards

---

## Advanced: Extending for Other SVG Elements

If you need to support `<circle>`, `<rect>`, or other SVG shapes:

**1. Extend the interface** in `config/icons.ts`:

```typescript
export interface IconPathConfig {
  viewBox: string
  paths?: Array<{ /* ... */ }>
  circles?: Array<{
    cx: string
    cy: string
    r: string
    stroke?: string
    strokeWidth?: string
    fill?: string
    opacity?: string
  }>
  // Add other shapes as needed
}
```

**2. Update the component** (e.g., `loading-icon.tsx`):

```typescript
export function LoadingIcon({ size = 24, className, ...props }: LoadingIconProps) {
  return (
    <svg {...}>
      {loadingIconConfig.paths?.map((path, index) => (
        <path key={index} {...path} />
      ))}
      {loadingIconConfig.circles?.map((circle, index) => (
        <circle key={index} {...circle} />
      ))}
    </svg>
  )
}
```

---

## Tips & Best Practices

### 1. Use `currentColor` for Fill/Stroke
This makes icons inherit the text color from their parent:
```typescript
fill: 'currentColor'
stroke: 'currentColor'
```

### 2. Keep ViewBox Consistent
Most icons use `0 0 24 24`. If your new icon has a different viewBox (e.g., `0 0 100 100`), just update the `viewBox` property in the config.

### 3. Optimize SVGs First
Before adding a new icon:
- Remove unnecessary metadata
- Simplify paths if possible
- Use tools like [SVGO](https://jakearchibald.github.io/svgomg/) to optimize

### 4. Test in Dark Mode
If your app supports dark mode, make sure icons look good in both themes by using `currentColor`.

### 5. Create Client-Specific Configs (Optional)
For managing multiple clients, you could create separate config files:

```
config/
  ├── icons/
  │   ├── client-a.ts
  │   ├── client-b.ts
  │   └── default.ts
  └── icons.ts  (imports from active client config)
```

Then in `config/icons.ts`:
```typescript
export * from './icons/client-a'  // Change this line per client
```

---

## Troubleshooting

### Icon Doesn't Update After Change
1. Stop the dev server
2. Clear Next.js cache: `rm -rf .next`
3. Rebuild: `npm run build`
4. Restart dev server: `npm run dev`

### Icon Looks Wrong
- Check the `viewBox` matches your SVG
- Verify path data is complete (look for unclosed paths)
- Check if `fill="currentColor"` is set (for color inheritance)

### TypeScript Errors
- Make sure all required properties are set in the config
- The `d` property (path data) is always required
- Other properties are optional

---

## File Locations Reference

```
application/
├── config/
│   └── icons.ts                    # Main config file - edit this to swap icons
├── app/
│   ├── components/
│   │   └── ui/
│   │       ├── loading-icon.tsx    # Loading icon component (don't edit)
│   │       └── menu-icon.tsx       # Menu icon component (don't edit)
│   └── styles/
│       └── svg icons/              # Store raw SVG files here
│           ├── loading-icon.svg
│           ├── menu-icon.svg
│           └── loading-icon-client-xyz.svg  # Add new client icons here
└── ICON_SWAPPING_GUIDE.md          # This file
```

---

## Need Help?

If you're stuck or need to implement a complex icon swap, refer to:
- `config/icons.ts` - See example configurations
- The comment blocks in the config file have helpful examples
- SVG path documentation: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
