# Setup Guide

Welcome to the project! This guide will help you get up and running.

## Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm
- PostgreSQL database (or your preferred database)

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your environment variables in `.env.local`. See the comments in `.env.example` for guidance.

### 3. Database Setup

If using Prisma (recommended):

```bash
# Generate Prisma Client
pnpm prisma generate

# Run migrations
pnpm prisma migrate dev

# (Optional) Seed the database
pnpm prisma db seed
```

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

This project follows a standardized structure used across all agency projects:

- `app/` - Next.js App Router pages and routes
  - `(auth)/` - Authentication routes (login, signup)
  - `(dashboard)/` - Dashboard routes
  - `api/` - API routes
  - `components/` - **All React components in flat structure** (PascalCase naming)
    - Badge.tsx, Button.tsx, Card.tsx, Dialog.tsx, etc.
    - Self-contained, portable components with inlined utilities
    - Each component has explicit props interface at top of file
  - `icons/` - Icon components separate from UI components
    - CancelIcon.tsx, LoadingIcon.tsx, MenuIcon.tsx, SaveIcon.tsx
  - `styles/` - Global styles and theme system
    - `themes/` - Client-specific and seasonal theme overrides
- `lib/` - Utility functions and shared code
- `types/` - TypeScript type definitions (shared across components)
- `prisma/` - Database schema and migrations
- `config/` - Application configuration
- `public/` - Static assets

## Key Features

- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Radix UI for accessible components
- Prisma for database ORM
- Theme system with CSS custom properties

## Component Architecture

This project follows a **flat component architecture** where all components live in `app/components/` with PascalCase naming. Key principles:

- **Flat Structure**: No subfolders in `/components` - everything is visible at a glance
- **Self-Contained**: Each component includes its own utilities (cn() is inlined, not imported)
- **Explicit Props**: Props interface defined at top of each component file
- **Design Tokens**: Components use CSS custom properties via Tailwind (text-success, bg-primary)
- **Portable**: Copy any component file to a new project and it works immediately

See `COMPONENTS.md` for complete component reference with props and dependencies.

## Next Steps

1. Set up authentication (see `lib/auth.ts`)
2. Configure your database schema (see `prisma/schema.prisma`)
3. Customize themes (see `app/styles/themes/`)
4. Build new components in `app/components/` following the flat architecture
5. Reference `COMPONENTS.md` when copying components to new projects

## Useful Commands

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Database commands
pnpm prisma studio    # Open Prisma Studio
pnpm prisma migrate dev    # Run migrations
pnpm prisma generate   # Generate Prisma Client
```

## Getting Help

- Check the project documentation in `/docs`
- Review the demo at `/demo` for working examples
- Contact the development team
