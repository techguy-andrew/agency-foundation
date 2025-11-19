## Layout Properties Through Purpose-Built Components

The power of Framer's property panel—intuitive controls for distribution, alignment, gap, padding—represents excellent design thinking that we implement through **owned, semantic components** rather than generic containers. Where Framer exposes `distribution="space-between"` and `gap="16"` as universal properties, we build components like **Navigation**, **Sidebar**, and **DataGrid** that have these layout decisions baked in using Tailwind utilities. Our PropertyCard doesn't need 22 layout props because it already knows it needs `flex flex-col gap-4 p-6`—that's what a property card *is*. This approach eliminates decision fatigue while maintaining flexibility through our variant system.

## Component Variants Without External Dependencies

Instead of a generic Card with `variant="outlined"` or `size="large"` props that tries to handle every use case, we implement variants through **explicit props interfaces** on semantic components. Our PropertyCard accepts `variant: 'compact' | 'detailed' | 'featured'` because those are the actual variations our real estate clients need. Each variant is implemented with different Tailwind classes inside the component:

```typescript
// Inside PropertyCard.tsx
const variants = {
  compact: 'p-4 gap-2',
  detailed: 'p-6 gap-4', 
  featured: 'p-8 gap-6 border-2 border-primary'
}
```

This isn't limiting—it's **encoding business knowledge**. The variants aren't arbitrary sizes; they're specific presentations that solve real client needs discovered across projects.

## Sizing and Aspect Ratios as Business Logic

Modern layout needs like aspect ratios and responsive sizing are handled through **Tailwind's native utilities** inside our components, not exposed as props. Our PropertyImage component uses `aspect-video` internally because property photos follow MLS standards. Our Avatar uses `aspect-square size-10` because that's what works across our applications. If a client needs different sizing, we create a new variant or a new component—keeping each one simple and predictable rather than infinitely configurable.

## Design Tokens Enable Client Adaptation

The real power comes from our **CSS custom properties system** where colors, spacing, and visual characteristics scale automatically. Our components reference design tokens like `bg-primary`, `text-success`, and `border-destructive` through Tailwind utilities that resolve to different values per client:

```css
/* client-a.css */
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --success: 142 76% 36%;
}

/* client-b.css */
:root {
  --primary: 262 83% 58%;
  --primary-foreground: 0 0% 100%;
  --success: 158 64% 52%;
}
```

Same PropertyCard component using `bg-primary` and `text-success`, completely different visual identity. No code changes, just swap the theme file.

## Flat Structure Reveals Layout Patterns

Our `/components` folder becomes a **living style guide** of solved layout problems. Opening it reveals:
- **PageHeader** - Sticky header with title/actions/breadcrumbs layout solved
- **DataTable** - Responsive table with fixed headers and horizontal scroll
- **PropertyGrid** - Responsive grid that shifts from 3-col to 2-col to 1-col
- **FilterSidebar** - Collapsible sidebar with proper overflow handling
- **StatsCard** - Number display with label/value/trend layout

Each component encapsulates a complete layout solution discovered through real client work, not theoretical possibilities.

## Modern CSS Grid and Container Queries

We leverage **modern CSS through Tailwind v4** inside our components—CSS Grid, Container Queries, and Subgrid—without exposing the complexity. Our PropertyGrid uses `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` internally. Our Dashboard uses CSS Grid areas for complex layouts. These modern techniques are implementation details, not API surface. Developers using our components get modern, responsive layouts without needing to understand grid-template-areas or container query syntax.

## The Compound Advantage of Specificity

While generic layout systems start every project asking "how should this card be aligned?", our components already know. **PropertyCard** is always properly aligned for real estate. **InvoiceRow** has the right spacing for financial data. **TenantCard** handles long names gracefully. This isn't rigidity—it's **accumulated wisdom**. Each component carries the layout decisions refined across multiple clients, encoding solutions to problems like:
- Text truncation with proper ellipsis
- Touch target sizes on mobile
- Readable line lengths at different breakpoints
- Proper visual hierarchy through spacing

## Building Without Abstractions

We reject the abstraction layer completely. No `<Frame>`, no `<Stack>`, no `<Grid>` components. Instead, every component owns its entire implementation:

```typescript
// Not this - generic abstraction
<Frame distribution="space-between" padding="large">
  <Card variant="elevated">...</Card>
</Frame>

// But this - purposeful component
<PropertyCard variant="featured" property={data} />
```

The PropertyCard internally implements the spacing, distribution, and elevation. The complexity is hidden, not exposed through props.

## Why This Wins for Agencies

This approach scales perfectly for agency work because:

1. **Zero Learning Curve** - New developers see PropertyCard, not Frame with 22 properties to learn
2. **Faster Development** - Components work correctly by default, no layout debugging
3. **Client Consistency** - Design system enforced automatically through components
4. **True Portability** - Copy PropertyCard.tsx to new project, it works immediately
5. **Compound Growth** - Each project adds refined components, not generic containers

After 10 projects, you have 50+ layout problems permanently solved. After 50 projects, you're composing complete interfaces in hours while competitors are still fighting with flexbox alignment. This is the moat: **specificity beats abstraction when you own everything**.