---
name: bisheng-component-rules
description: >
  Bisheng Design System component architecture rules. Use this skill whenever creating, modifying, or refactoring any UI component in this project (src/components/**/*.tsx). Also use it when editing component styles in components.css, adding new cva variants, or discussing component API design. Trigger on any mention of component development, styling patterns, variant definitions, or Shadcn/Radix usage in this codebase.
---

# Bisheng Component Architecture Rules

This skill defines the architecture rules for the Bisheng Design System component library. Every component in `src/components/` follows these patterns — consistency across the codebase is what makes the system trustworthy for production adoption.

## Tech Stack

- **React 18** with TypeScript strict mode
- **Radix UI** (`@radix-ui/react-*`) for accessible interaction primitives
- **Tailwind CSS v4** for utility classes
- **class-variance-authority (cva)** for variant definitions
- **lucide-react** for icons (no other icon libraries)
- **cn()** from `@/lib/utils` (clsx + tailwind-merge) for class merging

## Shadcn-First Workflow

Before writing any component code, check whether a shadcn/ui equivalent exists. If it does, use the shadcn base and adapt its variants and styling to fit this design system — don't rebuild accessible behavior from scratch. Research the component's API, props, and Radix structure first, then extend.

Reference: https://ui.shadcn.com/docs/components/

## Two-Layer Styling Strategy (BEM + Tailwind)

This is the most important architectural decision in the codebase. Tailwind v4 uses CSS layers, which means Tailwind utility classes have *lower* specificity than regular CSS. If you put base structure into Tailwind utilities, they'll be overridden by the BEM classes in `components.css` — causing silent styling bugs.

### Layer 1: Shared styles in `components.css` (BEM classes, referenced via cva)

Everything that multiple components share, or that defines a component's core visual identity, lives in `src/styles/components.css` as BEM classes:

- **Base structure**: `.btn { display: inline-flex; align-items: center; ... }`
- **Size variants**: `.btn--mini`, `.btn--medium` (padding, font-size from Figma specs)
- **Color variants**: `.btn--primary`, `.badge--success` (background, text color)
- **Shared states**: `.btn--loading`, `.btn--block`, `.btn--icon`
- **Dark mode overrides**: `.dark .btn--primary { ... }`
- **Complex animations**: `@keyframes` definitions

The cva definition references these BEM classes:

```tsx
const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "btn--primary",
      danger: "btn--danger",
    },
    size: {
      mini: "btn--mini",
      medium: "btn--medium",
    },
  },
})
```

### Layer 2: Component-specific styles inline (Tailwind utilities)

Anything unique to a single component — one-off overrides, internal element layout, component-specific positioning — goes as Tailwind classes in the TSX:

```tsx
<Comp
  className={cn(
    singleIconButtonVariants({ variant, size }),
    "!p-0",              // component-specific override
    loading && "btn--loading",
    className
  )}
/>

<span className={cn("shrink-0", iconClass)}>
  {icon}
</span>
```

### Decision Guide

| Goes in `components.css` (BEM) | Goes in `.tsx` (Tailwind) |
|-------------------------------|--------------------------|
| Component base structure | Component-specific property overrides |
| Size variants | Internal sub-element layout |
| Color variants | Component-specific positioning/sizing |
| Shared state classes | Single-use interaction states |
| Dark mode overrides, keyframes | Simple conditional class toggling |

### Common Mistakes to Avoid

```tsx
// WRONG: template string for conditional classes
<button className={`btn ${variant === 'primary' ? 'btn--primary' : ''}`} />

// WRONG: base structure as Tailwind (will lose to CSS layer priority)
<button className="inline-flex items-center justify-center gap-[var(--spacing-2)]" />

// WRONG: color variant as Tailwind (should be a BEM class)
<button className="bg-[var(--fill-primary)] text-[var(--text-inverse)]" />

// RIGHT: BEM base + cva variants + cn() for conditionals
<button className={cn(buttonVariants({ variant, size }), block && "btn--block", className)} />
```

## Design Tokens

All visual values map to CSS custom properties defined in `src/styles/tokens.css`:

| Purpose | Token / Tailwind syntax |
|---------|------------------------|
| Background | `bg-[var(--surface-base)]`, `bg-[var(--surface-muted)]` |
| Primary fill | `bg-[var(--fill-primary)]` |
| Primary hover | `hover:bg-[var(--fill-hover)]` |
| Primary text | `text-[var(--text-primary)]` |
| Secondary text | `text-[var(--text-secondary)]` |
| Border | `border-[var(--border-primary)]` |
| Focus border | `focus:border-[var(--border-focus)]` |
| Disabled | `text-[var(--text-disabled)]`, `bg-[var(--fill-disabled)]` |
| Danger | `text-[var(--color-danger-500)]` |
| Success | `text-[var(--color-success-500)]` |
| Border radius | `rounded-[var(--radius-md)]` |
| Shadow | `shadow-[var(--shadow-base)]` |

If no token exists for a value, hardcode it with a `/* TODO: extract to token */` comment.

## Props & Logic Preservation

When modifying an existing component:

- Keep the existing `interface XxxProps` — don't break the public API
- Keep all state handling logic (controlled/uncontrolled, disabled, loading)
- Keep all event callback signatures (`onValueChange`, `onClick`, `onClose`, etc.)
- The change must be a **drop-in replacement** — callers should not need to change any code
- Always use `React.forwardRef` and set `displayName`

## File Structure

Every component file follows this order:

```
1. imports        — React, Radix primitives, lucide icons, cva, cn
2. xxxVariants    — cva definition (variants, sizes, defaultVariants)
3. interface      — XxxProps type definition
4. component      — React.forwardRef + cn() + Radix primitives
5. displayName    — Component.displayName = "Component"
6. exports        — named exports: component, variants, types
```

## Output Standards

- Production-ready `.tsx` code only — no demo/story code
- Must pass TypeScript strict mode
- Only the component file itself, not page/demo wrappers
