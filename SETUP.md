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
  - `components/` - All React components organized by type
    - `ui/` - Reusable UI components (buttons, cards, etc.)
    - `forms/` - Form components
    - `layout/` - Layout components (header, sidebar, etc.)
    - `features/` - Feature-specific components
  - `styles/` - Global styles and themes
- `lib/` - Utility functions and shared code
- `types/` - TypeScript type definitions
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

## Next Steps

1. Set up authentication (see `lib/auth.ts`)
2. Configure your database schema (see `prisma/schema.prisma`)
3. Customize themes (see `app/styles/themes/`)
4. Build your features in `app/components/features/`

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
