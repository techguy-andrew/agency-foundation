# Component Library Reference

Quick reference guide for starting new client projects. All components are self-contained, production-ready, and copy-paste portable.

## Installation

Install these dependencies for full component library support:

```bash
npm install clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-dropdown-menu lucide-react react-dropzone framer-motion
```

---

## UI Primitives

### Badge
**Purpose:** Displays small labeled badges with customizable variants for visual categorization and highlighting.

**Props:**
```typescript
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}
```

**Dependencies:** clsx, tailwind-merge

---

### Button
**Purpose:** Flexible button component with multiple variants and sizes, supporting slot-based composition.

**Props:**
```typescript
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}
```

**Dependencies:** @radix-ui/react-slot, clsx, tailwind-merge

---

### Card
**Purpose:** Composable card layout system with header, title, description, content, and footer sections.

**Exports:** Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter

**Props:** All components extend `React.HTMLAttributes<HTMLDivElement>` (no custom props)

**Dependencies:** clsx, tailwind-merge

---

### Dialog
**Purpose:** Accessible modal dialog system with composable parts for headers, footers, and content.

**Exports:** Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription

**Props:** All components extend from `@radix-ui/react-dialog` primitives

**Dependencies:** @radix-ui/react-dialog, lucide-react, clsx, tailwind-merge

---

### DropdownMenu
**Purpose:** Feature-rich dropdown menu system with sub-menus, checkboxes, and radio buttons.

**Exports:** DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup

**Props:** Extended from `@radix-ui/react-dropdown-menu` primitives with custom `inset?: boolean` option

**Dependencies:** @radix-ui/react-dropdown-menu, clsx, tailwind-merge

---

### Input
**Purpose:** Standard input and textarea components with consistent styling and focus states.

**Exports:** Input, Textarea

**Props:**
```typescript
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
```

**Dependencies:** clsx, tailwind-merge

---

### Skeleton
**Purpose:** Animated skeleton loader component for displaying placeholder content during data loading.

**Props:** Extends `React.HTMLAttributes<HTMLDivElement>` (no custom props)

**Dependencies:** clsx, tailwind-merge

---

## Feature Components

### FileGallery
**Purpose:** Drag-and-drop file gallery with preview dialog, upload progress, and file management.

**Props:**
```typescript
interface FileGalleryProps {
  attachments?: Attachment[]
  onFilesAdded?: (files: File[]) => void
  onFileRemove?: (attachmentId: string) => void
  editable?: boolean
  maxFiles?: number
}
```

**Dependencies:** react-dropzone, lucide-react, clsx, tailwind-merge

**Note:** Requires `Attachment` type from `/types`

---

### ItemCard
**Purpose:** Rich editable card component with file attachments, drag support, and comprehensive edit/delete operations.

**Exports:** ItemCard, ItemCardGrid, ItemCardStack

**Props:**
```typescript
export interface ItemCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  itemId?: string
  title?: string | null
  description?: string | null
  editable?: boolean
  onSave?: (data: { title: string; description: string }) => void
  onEdit?: () => void
  onDelete?: () => void
  onDuplicate?: () => void
  onCancel?: () => void
  dragHandleProps?: React.HTMLAttributes<HTMLDivElement>
  isDragging?: boolean
  autoFocus?: boolean
  titlePlaceholder?: string
  descriptionPlaceholder?: string
  attachments?: Attachment[]
  onFilesAdded?: (files: File[]) => void
  onFileRemove?: (attachmentId: string) => void
  isSaving?: boolean
}
```

**Dependencies:** lucide-react, framer-motion, next/image, clsx, tailwind-merge

**Note:** Requires `Attachment` type from `/types`

---

### ItemCardSkeleton
**Purpose:** Skeleton loader component for displaying placeholder item cards during data loading.

**Exports:** ItemCardSkeleton, ItemCardStackSkeleton

**Props:**
```typescript
interface ItemCardSkeletonProps {
  className?: string
  count?: number
}
```

**Dependencies:** None (internal components only)

---

### ItemForm
**Purpose:** Simple form for creating/editing items with title and description fields.

**Props:** None

**Dependencies:** None (internal components only)

---

### LoginForm
**Purpose:** Email and password login form with sign-in button.

**Props:** None

**Dependencies:** None (internal components only)

---

### SettingsForm
**Purpose:** User settings form for managing display name, email, and bio information.

**Props:** None

**Dependencies:** None (internal components only)

---

## Layout Components

### Header
**Purpose:** Page header placeholder component with basic styling.

**Props:** None

**Dependencies:** None

---

### Footer
**Purpose:** Page footer placeholder component with border styling.

**Props:** None

**Dependencies:** None

---

### Sidebar
**Purpose:** Left sidebar placeholder with fixed width and navigation area.

**Props:** None

**Dependencies:** None

---

### Navigation
**Purpose:** Navigation bar with active link highlighting across home, demo, items, properties, and settings pages.

**Props:** None

**Dependencies:** next/link, next/navigation

---

## Icons

All icon components support configurable size and extend `React.SVGProps<SVGSVGElement>`.

### CancelIcon
**Purpose:** SVG cancel icon with configurable size and styling.

**Props:**
```typescript
export interface CancelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}
```

**Dependencies:** @/config/icons

---

### LoadingIcon
**Purpose:** SVG loading spinner icon with configurable size and styling.

**Props:**
```typescript
export interface LoadingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}
```

**Dependencies:** @/config/icons

---

### MenuIcon
**Purpose:** SVG menu icon with configurable size and styling.

**Props:**
```typescript
export interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}
```

**Dependencies:** @/config/icons

---

### SaveIcon
**Purpose:** SVG save icon with configurable size and styling.

**Props:**
```typescript
export interface SaveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}
```

**Dependencies:** @/config/icons

---

## Usage Notes

### Self-Contained Components
- All components include inline `cn()` utility for class merging
- No external utility dependencies beyond npm packages
- Copy any component file to a new project and it works immediately

### Design Tokens
- Defined in `app/styles/themes/default.css`
- Standard tokens: `--primary`, `--secondary`, `--destructive`, `--success`, `--muted`, etc.
- Supports light/dark mode automatically
- Copy theme file to new projects for consistent styling

### Component Portability Checklist
1. Copy component `.tsx` file to new project
2. Install npm dependencies listed above
3. Copy design tokens from `app/styles/themes/default.css`
4. Copy any required types from `/types` directory
5. Import and use immediately

### Architecture Benefits
- **Flat structure:** All components in single `/components` folder
- **PascalCase naming:** Easy to scan and identify (`ItemCard.tsx` not `item-card.tsx`)
- **Explicit interfaces:** Props defined at top of each file
- **Zero coupling:** Components don't import from `/lib/utils` or shared locations
- **Battle-tested:** Production-ready across multiple projects

---

## Quick Start for New Projects

```typescript
// 1. Copy component file
cp ItemCard.tsx /new-project/app/components/

// 2. Install dependencies (if needed)
npm install lucide-react framer-motion

// 3. Import and use
import { ItemCard } from '@/app/components/ItemCard'

function Page() {
  return (
    <ItemCard
      title="Example"
      description="This just works"
      editable={true}
      onSave={(data) => console.log(data)}
    />
  )
}
```

---

**Last Updated:** 2025-11-19
**Total Components:** 21 (17 components + 4 icons)
**Compatibility:** Next.js 16+, React 19+, TypeScript 5+
