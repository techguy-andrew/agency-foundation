# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Agency Foundation is a Next.js template built for compound growth across client projects. Core philosophy: **own your foundation** - no Shadcn/Material-UI dependencies. Every component is self-contained and portable.

**Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, React Query, pnpm (no external UI libraries)

## Commands

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Run production build
pnpm lint             # Run ESLint
```

## Architecture

### Flat Component Structure

All UI components live in `app/components/` with PascalCase naming. No subfolders. This enables:
- Entire interface visible at a glance
- True drag-and-drop portability between projects

**20 components:** Badge, Button, Card, Dialog, DropdownMenu, EmptyState, FileGallery, Footer, Header, Input, ItemCard, ItemCardSkeleton, ItemForm, LoginForm, Navigation, PageHeader, PageSection, SettingsForm, Sidebar, Skeleton

**10 icons in `app/icons/`:** CancelIcon, CloseIcon, FileIcon, GripVerticalIcon, LoadingIcon, MenuIcon, PlusIcon, SaveIcon, SpinnerIcon, UploadIcon

**No external UI libraries:** All Radix UI packages and lucide-react have been removed. Components are fully owned implementations.

### Self-Contained Components

Every component must be portable - ask: "Can I copy just this .tsx file to another project and have it work?"

Requirements:
- Props interface defined at top of file
- Inline `cn()` utility (clsx + tailwind-merge) - never import from `/lib/utils`
- Use design tokens (`text-primary`, `bg-destructive`), not hardcoded colors (`text-blue-600`)
- Receive all data through props, never fetch internally

### Design Token System

CSS custom properties enable instant client rebranding without code changes:

```
app/styles/themes/
├── default.css       # Base design system
├── client-a.css      # Client A branding
├── client-b.css      # Client B branding
├── christmas.css     # Seasonal variation
└── halloween.css     # Seasonal variation
```

Components reference tokens: `text-primary`, `bg-success`, `border-destructive`. Swap theme file = instant rebrand.

### Optimistic UI Updates

Non-negotiable standard: every mutation feels instant. UI updates immediately while network request happens in background. On error, gracefully rollback.

Pattern uses React Query mutations with `onMutate` (snapshot + optimistic update), `onError` (rollback), `onSuccess` (replace temp with real data).

Implementation in:
- `lib/hooks/useItems.ts` - 5 mutations (create, update, delete, duplicate, reorder)
- `lib/hooks/useAttachments.ts` - 2 mutations (add, remove)

Temporary IDs use format: `temp-${Date.now()}`

### Composition Over Configuration

Pages are pure compositions of components - no hardcoded UI. Think Lego blocks:

```typescript
export default function DashboardPage() {
  return (
    <PageLayout>
      <PageHeader title="Dashboard" />
      <StatsGrid stats={stats} />
      <ItemGrid items={items} />
    </PageLayout>
  )
}
```

## Project Structure

```
app/
├── (auth)/                 # Auth routes (login, signup)
├── (dashboard)/            # Protected dashboard routes
├── api/                    # API endpoints
├── components/             # All UI components (flat, 20 files)
├── icons/                  # Icon components (10 files)
├── styles/
│   ├── globals.css         # Global styles, Tailwind directives
│   └── themes/             # Theme CSS files
├── demo/                   # Demo page with optimistic updates
├── layout.tsx              # Root layout
├── page.tsx                # Home page
└── providers.tsx           # React Query provider

lib/
├── hooks/                  # useItems, useAttachments
├── auth.ts                 # Authentication utilities
├── fonts.ts                # Font loader
├── prisma.ts               # Prisma client singleton
├── utils.ts                # Utilities (but components inline cn())
└── validations.ts          # Zod schemas

types/                      # Shared TypeScript types
├── index.ts                # Barrel exports
├── items.ts                # Item and Attachment types
├── users.ts                # User types
└── api.ts                  # API response types

config/
├── site.ts                 # Site metadata and nav
├── fonts.ts                # Font family configuration
├── icons.ts                # Icon configuration
└── env.ts                  # Environment variable validation

context/                    # Architecture documentation
├── checkpoints/            # Compliance checkpoints
├── philosophy.md           # Core philosophy
├── tech-stack.md           # Technical implementation
├── README.md               # Overview
└── layout-architecture.md  # Layout patterns

prisma/
├── schema.prisma           # Database schema (User, Item, Attachment)
└── migrations/
```

## Key Patterns

### Component Props Interface

Always define at file top:
```typescript
export interface ItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string | null
  description?: string | null
  editable?: boolean
  onSave?: (data: { title: string; description: string }) => void
  onDelete?: () => void
}
```

### Inline cn() Utility

Every component that needs class merging:
```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Smart vs Presentational

- **Presentational:** Pure UI, receives all data via props (Button, Card, Badge) - most reusable
- **Smart:** Handles data/logic, orchestrates mutations (ItemCard with edit/delete, FileGallery with upload)

Both live in `app/components/`, but presentational are most portable.

## Database

Prisma schema includes: User, Item (with order field for drag-drop), Attachment (cascade delete from Item).

```bash
pnpm prisma generate        # Generate client from schema
pnpm prisma migrate dev     # Run migrations
pnpm prisma studio          # Database GUI
```

## Fonts

Configured in `config/fonts.ts`. Four variants: heading, body, label, mono. All from Google Fonts with `display: swap`.

## Demo Page

`app/demo/page.tsx` shows complete optimistic update pattern:
- Add items with temp ID
- Inline editing with save/cancel
- Drag-and-drop reordering
- File uploads with progress
- Delete with rollback capability

Currently uses simulated API (data lost on refresh). Production: replace with real API endpoints.

## The Agency Model

This codebase is designed for compound growth:
- Week 1: Build components for Project 1
- Month 2: 80% faster on Project 2
- Month 4: 90% faster on Project 3
- Year 1: Proprietary library > individual projects
- Year 5: Velocity competitors can't touch

Every enhancement builds equity in a system that transcends any single project.

## Compliance Requirements

Before making changes, verify alignment with `/context/` documentation. Key rules:

**Component changes must update documentation:**
- If component count changes → Update CLAUDE.md, README.md, tech-stack.md, philosophy.md
- If icon count changes → Update CLAUDE.md, README.md, tech-stack.md

**Never add forbidden dependencies:**
- No Shadcn/UI, Material-UI, Chakra, or component libraries
- No Radix UI (build owned primitives instead)
- No lucide-react (use owned SVG icons in `app/icons/`)

**Pages must compose components:**
- Use PageHeader, PageSection, EmptyState for structure
- No bare `<h1>`, `<p>`, `<div>` with styling - use semantic components

See `/context/checkpoints/checkpoint-system.md` for full compliance checklist.
