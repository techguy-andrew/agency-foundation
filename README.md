# Journal App - Component-Driven Architecture Template

A production-ready Next.js application template built with a flat, portable component architecture designed for agency workflows. Every component is self-contained and copy-paste ready for future projects.

## Philosophy

This template demonstrates our agency's core principle: **build once, reuse everywhere**. Each component is:
- Self-contained with inlined utilities
- Explicitly typed with props interfaces
- Styled with design tokens for easy theming
- Portable across projects with zero modifications

## Tech Stack

- **Next.js 16** - Full-stack React framework
- **TypeScript** - Type safety throughout
- **Tailwind CSS v4** - CSS-based configuration with design tokens
- **Radix UI** - Accessible component primitives
- **Motion** (Framer Motion) - Smooth animations
- **React Query** - Data fetching and state management
- **Prisma** - Database ORM (schema included, client not installed)

## Quick Start

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Component Library

This project includes **21 production-ready components**:

### UI Primitives (7)
Badge, Button, Card, Dialog, DropdownMenu, Input, Skeleton

### Feature Components (6)
FileGallery, ItemCard, ItemCardSkeleton, ItemForm, LoginForm, SettingsForm

### Layout Components (4)
Header, Footer, Sidebar, Navigation

### Icons (4)
CancelIcon, LoadingIcon, MenuIcon, SaveIcon

**See [COMPONENTS.md](./COMPONENTS.md) for complete documentation** with props interfaces, dependencies, and usage examples.

## Architecture Highlights

### Flat Component Structure
All components live in `app/components/` with PascalCase naming - no nested subfolders. This makes your entire UI visible at a glance:

```
app/components/
  ├── Badge.tsx
  ├── Button.tsx
  ├── Card.tsx
  └── ... (14 more)
```

### Self-Contained Components
Every component includes its own class merging utility (no shared `/lib/utils` imports). Copy any `.tsx` file to a new project and it works immediately.

### Design Token System
Components use CSS custom properties via Tailwind (`text-success`, `bg-primary`) defined in `app/styles/themes/`. Swap theme files to instantly rebrand for different clients:

```
app/styles/themes/
  ├── default.css
  ├── client-a.css
  ├── client-b.css
  ├── christmas.css
  └── halloween.css
```

### Explicit Props Interfaces
Every component defines its props at the top of the file, making dependencies crystal clear and enabling IntelliSense everywhere.

## Project Structure

```
application/
├── app/
│   ├── (auth)/              # Authentication routes
│   ├── (dashboard)/         # Dashboard routes
│   ├── api/                 # API endpoints
│   ├── components/          # All UI components (flat)
│   ├── icons/               # Icon components
│   └── styles/themes/       # Theme CSS files
├── config/                  # App configuration
├── lib/                     # Utility functions
├── types/                   # Shared TypeScript types
├── prisma/                  # Database schema
└── public/                  # Static assets
```

## Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup instructions
- **[COMPONENTS.md](./COMPONENTS.md)** - Component library reference
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history

## Key Commands

```bash
# Development
pnpm dev           # Start dev server
pnpm build         # Build for production
pnpm start         # Run production build
pnpm lint          # Lint codebase

# Database (when Prisma client installed)
pnpm prisma generate        # Generate Prisma client
pnpm prisma migrate dev     # Run migrations
pnpm prisma studio          # Open database GUI
```

## Portability

Every component in this project is designed to be copied to new projects with minimal friction:

1. Copy component `.tsx` file
2. Install its dependencies (listed in COMPONENTS.md)
3. Copy design tokens from `app/styles/themes/default.css`
4. Import and use immediately

**No refactoring. No external dependencies. Just copy and go.**

## Design Philosophy

This template embodies our agency's core beliefs:
- **Own your foundation** - No dependency on third-party component libraries
- **Build to last** - Use web standards (CSS variables, TypeScript, React)
- **Compound growth** - Every project strengthens your component library
- **Client adaptability** - Theme system enables instant rebranding

Each project you build with this template makes your next project faster.

## License

Proprietary - Internal agency use only

---

**Version:** 1.0.0
**Last Updated:** November 2025
**Built with:** Next.js 16, TypeScript 5, Tailwind CSS 4
