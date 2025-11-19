```markdown
# Tech Stack Reference Guide (v5)

Our philosophy: build durable, portable, customizable software that lasts. Own your foundation.

## Core Philosophy

We don't use external component libraries (Shadcn, Material-UI, etc.). Instead, we **build our own React component library** that serves as our competitive advantage. Every project we build makes this library better. Every client we serve makes it more adaptable. This approach ensures:

- **Full Ownership** - No dependency on third-party UI libraries that change, deprecate, or disappear
- **Portability** - Components can be restyled for any client without vendor lock-in
- **Longevity** - Our codebase will work 5, 10, 20 years from now with minimal changes
- **Customization** - We adapt to client needs, not client needs to us
- **Compound Growth** - Each project strengthens our reusable asset library

## Tech Stack

### Languages & Frameworks

- **TypeScript** - Type safety and clarity
- **JavaScript** - Runtime language
- **Next.js** - Full-stack React framework (API routes, server components, deployment)
- **React** - UI library for building components

### Styling & Animation

- **Tailwind CSS** - Utility-first CSS for rapid, consistent theming across clients
- **CSS Custom Properties** - Native browser variables for runtime theming and client adaptation
- **Motion** (formerly Framer Motion) - Smooth animations and transitions
- **SVG Icons** - Downloaded and integrated directly into projects
- **Google Fonts** - Typography

### Backend & Database

- **Next.js API Routes** - Serverless backend
- **Prisma** - ORM for database operations
- **Neon** - PostgreSQL database hosting

### Authentication

- **Clerk** - User auth and management (industry standard, unlikely to disappear)

### Developer Tools

- **pnpm** - Fast, efficient package manager
- **Vercel** - Hosting and deployment

## Component Library Strategy

When building components, think reuse. Your Button, Card, Modal, Form inputs—they're not just for this project. They're for the next 50 projects. Build them:

- **Themeable** - Use CSS custom properties and Tailwind config so styling adapts to each client
- **Prop-driven** - Control behavior and appearance through props, not hardcoding
- **Documented** - Future you and your team need to understand intent
- **Tested** - Reusable components must work reliably

This library becomes your moat.

## Styling Strategy: Theming & Adaptability

The cornerstone of our reusability is how we handle styling. We use a **Tailwind + CSS Custom Properties** system that allows infinite client and context variations without touching component code.

### How It Works

Your `tailwind.config.js` defines all design tokens as CSS variables: `--color-primary`, `--color-secondary`, `--spacing-xs`, etc. Components reference these tokens through Tailwind utilities. Separate theme CSS files (one per client, one per season/context) override these variables with different values. Load a different theme file, the entire app reskins instantly.

### Scenario One: Different Clients, Same Components

When you build a Banner or Sidebar component, it needs to work for Client A with their branding and Client B with theirs, without modifying the component code itself. Create separate CSS theme files for each client (client-a.css, client-b.css) that set different values for the same variables (`--color-primary`, `--spacing-sm`, etc). Your components always reference the tokens through Tailwind, never hardcoded colors. Loading a different theme file automatically reskins the entire application. You write the component once, swap the CSS file, and the app transforms for the new client with zero component modifications.

### Scenario Two: Same Component, Different Contexts

A Banner component should look different at Christmas than Halloween. A Sidebar might have different styling for different app sections. Create multiple theme CSS files (christmas.css, halloween.css, landing.css, dashboard.css) that override the same variables with different values. At runtime, your app loads whichever theme applies—based on date, user preference, route, or environment variable. The component itself never changes; it just reads whatever variables are currently defined. You get unlimited styling variations from a single component, themes swap instantly, and the system stays maintainable because the source of truth is always the CSS variables.

### Why This Approach Wins

This method—Tailwind config as tokens plus CSS custom properties for theming—is the industry standard used by Vercel, Stripe, and professional SaaS companies. CSS variables are native browser standards that will exist in 20 years. Tailwind will outlast any component library. You're building on the bedrock of web standards, not framework trends. You can swap themes at build time (deploy different CSS per client) or runtime (same app, user picks theme). It scales from two clients to two hundred without architectural changes. This is the only approach that actually lasts.

### File Structure

```
src/
  components/
    Banner.tsx
    Sidebar.tsx
    Button.tsx
    Card.tsx
    PropertyCard.tsx
    ItemForm.tsx
    // your entire component library, flat and visible
  icons/
    CancelIcon.tsx
    LoadingIcon.tsx
    MenuIcon.tsx
    // icon components separate from UI components
  themes/
    default.css
    client-a.css
    client-b.css
    christmas.css
    halloween.css
    landing.css
    dashboard.css
  app/
    layout.tsx  // loads appropriate theme
```

## What We Don't Use

No Shadcn/UI, no Material-UI, no dependency sprawl. We build what we need. We own what we build.

---

## Essay: On Ownership, Portability, and Building to Last

### The Cost of Convenience

For decades, developers chose convenience over control. We adopted jQuery, then Bootstrap, then Material-UI, then Shadcn/UI—each time believing we were accelerating. Each time, we were surrendering. We outsourced our design system to someone else's vision, updated when they decided to update, deprecated features when they decided they were no longer important, and watched helplessly as APIs changed and components broke.

The reality of this approach became clear only years later: the convenience was front-loaded. We saved time on day one and paid interest forever.

### Why Agencies Must Own Everything

An agency is not a feature factory. You're not building one product for one market. You're building a **platform of reusable assets** that compound across dozens of clients, hundreds of projects, years of work. Every component you write should work for the next client without modification. Every styling decision should adapt to any brand without breaking. Every line of code should be portable enough to outlive the frameworks that surround it.

This is only possible if you own the entire stack, top to bottom. Not own in the legal sense—own in the sense that you understand it, control it, and can change it without waiting for a maintainer or a pull request to be merged. You cannot build a durable agency on borrowed code.

The component library you build becomes your intellectual property, your competitive advantage, and your leverage. Each project makes it stronger. Each client makes it more flexible. After five years, you have something worth far more than the sum of individual projects—you have a system that lets you build applications 10x faster than competitors who keep starting from zero.

### Theming as a Core Principle

Theming is not an afterthought. It's the proof that your components are truly reusable. If reskinning a component for a new client requires even a small code change, you've failed. The component isn't reusable; it's just a template.

CSS custom properties (variables) solved this problem permanently. They're native browser standards, supported everywhere, and they allow you to define a complete design system once and override it infinitely many times. Client A gets one set of colors and spacing. Client B gets another. Halloween gets pumpkins and orange. Christmas gets red and green. Same components, different themes, zero code changes.

This isn't clever engineering. It's just using the browser the way it was designed to be used.

### The Portability Principle

Software should be portable. Not just between devices or browsers, but between clients, between contexts, between eras. A component built today should work in 2030 with minimal changes—ideally zero changes.

This is only possible if you avoid dependencies that will disappear. Framework-specific libraries will disappear. Third-party component libraries will deprecate. Vendor-specific patterns will break. But TypeScript, React, Next.js, Tailwind, and CSS will not. They're bedrock. They're standards. They're what the web is built on.

Build on bedrock, and your buildings last. Build on sand, and you rebuild constantly.

### The True Cost of Third-Party UI Libraries

Shadcn/UI, Material-UI, Chakra—they're not bad tools. They're just borrowed solutions. When you use them, you inherit their design decisions, their API design, their philosophy of what a button should be. This works fine when building one product. It becomes a liability when building fifty.

For every hour you save using a pre-built component library on day one, you spend two hours fighting it, customizing it, or replacing it by year three. And when you finally replace it, you have to replace it across every project simultaneously or maintain multiple design systems in parallel.

An agency that builds its own components pays a cost upfront. Six months in, that cost is paid back. A year in, you're years ahead. Five years in, you've compounded a system that a competitor using third-party libraries can't touch.

### The Agency Advantage

This is what separates real agencies from feature factories. Real agencies own their tools. They've built a system that gets better with each project. They can reskin an application for a new client in days instead of weeks. They can adapt to new requirements without rearchitecting. They can hand off a project to a junior developer knowing their component library is a guardrail, not a limitation.

This is what your component library is. It's not just code. It's leverage.

### The Long View

Build as if you're building infrastructure. Ask: will this exist in 2030? Will my junior developers understand this in 2026? Can I reskin this for the next client without touching it? If the answer is no to any of these, redesign it now.

The technologies you choose should be the ones that will be here forever. TypeScript will be here. React will be here. Tailwind will be here. CSS custom properties will definitely be here. Build on these, and you build on a foundation that doesn't require constant maintenance, constant updates, constant sacrifices to keep up with hype.

This is the agency advantage. Own it.

---

## File Structure Schema - Implement Exactly As Shown

```
project-name/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── items/
│   │   │   └── page.tsx
│   │   ├── properties/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── api/
│   │   ├── items/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       └── route.ts
│   │   ├── auth/
│   │   │   └── route.ts
│   │   └── webhook/
│   │       └── clerk/
│   │           └── route.ts
│   ├── components/
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Dialog.tsx
│   │   ├── DropdownMenu.tsx
│   │   ├── FileGallery.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Input.tsx
│   │   ├── ItemCard.tsx
│   │   ├── ItemCardSkeleton.tsx
│   │   ├── ItemForm.tsx
│   │   ├── LoginForm.tsx
│   │   ├── Navigation.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── SettingsForm.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Skeleton.tsx
│   │   └── Textarea.tsx
│   ├── icons/
│   │   ├── CancelIcon.tsx
│   │   ├── LoadingIcon.tsx
│   │   ├── MenuIcon.tsx
│   │   └── SaveIcon.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── themes/
│   │       ├── default.css
│   │       ├── client-a.css
│   │       ├── client-b.css
│   │       ├── christmas.css
│   │       └── halloween.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── error.tsx
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── utils.ts
│   ├── constants.ts
│   └── validations.ts
├── types/
│   ├── index.ts
│   ├── items.ts
│   ├── users.ts
│   └── api.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
│   ├── icons/
│   ├── images/
│   └── fonts/
├── config/
│   ├── site.ts
│   └── env.ts
├── middleware.ts
├── .env.example
├── .env.local (gitignored)
├── .gitignore
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json
├── pnpm-lock.yaml
├── README.md
├── SETUP.md
└── CHANGELOG.md
```

---

## Component Architecture Philosophy

Our agency builds applications using a flat component architecture where every UI element lives in a single `/components` folder as a self-contained `.tsx` file with PascalCase naming. This structure makes your entire application's interface visible at a glance and enables true portability—you can copy any component file from one project to another and it works immediately. Think of this as building an ever-growing library of battle-tested components where each client project strengthens your agency's asset base. The goal is drag-and-drop reusability across all projects with minimal to zero modifications needed.

Every component must be self-contained with an explicit props interface defined at the top of the file. Components receive all data through props rather than fetching it internally—for example, a PropertyCard gets a property object passed to it instead of calling database hooks. All styling lives within the component using Tailwind classes that reference design tokens from your tailwind.config.ts for consistency. Shared TypeScript types belong in a separate `/types` folder so multiple components can reference the same data structures without tight coupling. If a component needs the cn() utility for class merging, inline it directly in the component file rather than importing from a shared lib folder.

Pages should be pure compositions of components with zero hardcoded UI elements—think of arranging Lego blocks where the page file just imports components and arranges them. A dashboard page imports PageLayout, PageHeader, StatsGrid, and DataTable components, then composes them together without writing any direct HTML or styling. This composition-over-configuration approach ensures you're always building reusable pieces rather than one-off page code. When you need similar functionality in another project, you copy the component files and compose them differently for that client's needs.

Before committing any new component, ask yourself: "Could I copy this single file into a fresh project and have it work with minimal changes?" If the answer is no, the component has external dependencies that break portability. Maintain a clear mental separation between smart components that handle data fetching and business logic versus presentational components that just render what they receive—both live in `/components` but presentational ones are your most portable and reusable assets. This philosophy transforms every project into an opportunity to build components that make the next project faster, creating a compounding competitive advantage for your agency.

---

## Component Creation & Editing Checklist

Before committing any component to `/components`, verify:

### Naming & Location
☐ File uses PascalCase naming (e.g., `PropertyCard.tsx`, `ApplicationForm.tsx`)  
☐ File is located directly in `/components` folder (flat structure, no subfolders)  
☐ Component name matches filename exactly  

### Self-Contained Structure
☐ Props interface is defined at the top of the file  
☐ All required props are explicitly typed  
☐ Optional props have `?` modifier and sensible defaults where needed  
☐ Component receives data through props, never fetches data internally  
☐ No imports from `/lib/utils` - inline the `cn()` function if needed  
☐ All styling uses Tailwind classes with design tokens (e.g., `text-success` not `text-green-600`)  

### Dependencies & Imports
☐ Only imports from: `react`, `clsx`, `tailwind-merge`, npm packages (radix-ui, etc.), and `/types`  
☐ No imports from other custom components unless absolutely necessary  
☐ Shared TypeScript types are imported from `/types` folder, not defined in component  
☐ Component works if copied to a new project with just its file + npm packages  

### Portability Test
☐ Ask: "Can I copy just this .tsx file to another project and have it work?"  
☐ If no, refactor to remove external dependencies  
☐ Component has clear single responsibility (does one thing well)  
☐ Styling is self-contained (no external CSS files required)  

### Documentation
☐ Props interface serves as documentation (clear, descriptive names)  
☐ Add component to `COMPONENTS.md` with purpose, props, and dependencies  
☐ Note if component is "smart" (handles logic/data) or "presentational" (just renders)  

---

**Version:** 5.0  
**Last Updated:** November 2025  
**Philosophy:** Own your foundation. Build to last.
```