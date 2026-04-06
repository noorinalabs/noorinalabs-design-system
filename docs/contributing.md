# Contributing to the Qalam Design System

This guide covers how to add new components, tokens, icons, and styles to `@noorinalabs/design-system`.

## Prerequisites

```bash
git clone git@github.com:noorinalabs/noorinalabs-design-system.git
cd noorinalabs-design-system
npm install
npm run dev  # Start Storybook
```

## Adding a Component

1. **Create the component file** in `src/components/`:

```tsx
// src/components/tooltip.tsx
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "../utils/cn"

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    className={cn("rounded-md bg-popover px-3 py-1.5 text-sm shadow-md", className)}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName
```

**Conventions:**
- Build on **Radix UI** primitives for accessibility
- Use **CVA** for variant definitions (not inline conditionals)
- Use `cn()` for class merging
- Use **CSS logical properties** (`ps-`, `pe-`, `start`, `end`) for RTL support
- `forwardRef` all components
- Set `displayName`

2. **Add Storybook stories** in the same directory:

```tsx
// src/components/tooltip.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { TooltipContent } from './tooltip'

const meta: Meta<typeof TooltipContent> = {
  title: 'Components/Tooltip',
  component: TooltipContent,
}
export default meta

type Story = StoryObj<typeof TooltipContent>

export const Default: Story = {
  // ...
}
```

Cover all variants and states in stories.

3. **Export from the barrel file**:

```tsx
// src/components/index.ts
export { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'
```

4. **Run checks**:

```bash
npm run lint
npm run typecheck
npm run test
```

## Adding a Token

1. **Add the CSS custom property** to the appropriate file in `src/tokens/`:
   - Colors: `colors.css`
   - Typography: `typography.css`
   - Spacing/radii/z-index: `spacing.css`
   - Shadows/motion: `shadows.css`

2. **Add the TypeScript constant** to `src/tokens/index.ts`:

```ts
export const myNewToken = {
  value: '...',
} as const
```

Add it to the aggregate `tokens` export as well.

3. **Add dark mode variants** if the token is color-related:
   - `@media (prefers-color-scheme: dark)` block in `colors.css`
   - `[data-theme="dark"]` override in `colors.css`
   - `colorsDark` object in `index.ts`

## Adding an Icon

1. **Create the icon component** in `src/icons/`:

```tsx
// src/icons/my-icon.tsx
import { IconBase } from './icon-base'
import type { IconProps } from './types'

export function MyIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="..." />
    </IconBase>
  )
}
```

**Conventions:**
- Use `IconBase` (24x24 viewBox, stroke-based, `currentColor`)
- Use `IllustrationBase` for larger decorative SVGs
- All icons are `aria-hidden="true"` by default
- Keep path data minimal (optimize SVGs)

2. **Export from the barrel file**:

```tsx
// src/icons/index.ts
export { MyIcon } from './my-icon'
```

3. **Add a Storybook story** in `src/icons/icons.stories.tsx`.

## Adding a Style

1. **Add CSS classes** to the appropriate file in `src/styles/`:
   - Layout/text utilities: `utilities.css`
   - Component patterns: `components.css`
   - Animations: `animations.css`
   - Loading/empty/error states: `states.css`

2. **Use design tokens** — never hardcode color values, fonts, or spacing. Always reference `var(--token-name)`.

3. **Use CSS logical properties** for directional values (`margin-inline-start`, `padding-inline-end`, `text-align: start`).

## Quality Checklist

Before submitting a PR:

- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run test` passes
- [ ] All components have Storybook stories covering each variant
- [ ] Components work in both LTR and RTL layouts
- [ ] Components work in both light and dark mode
- [ ] Tokens are exported as both CSS custom properties and TypeScript constants
- [ ] All exports are included in barrel files (`index.ts`)
- [ ] WCAG 2.2 AA contrast requirements met for all color combinations

## Branch Naming

```
{FirstInitial}.{LastName}/{IIII}-{issue-name}
```

Example: `K.Mensah/0017-usage-documentation`

## Commit Identity

Use per-commit identity flags (never set global git config):

```bash
git -c user.name="Your Name" -c user.email="parametrization+Your.Name@gmail.com" commit -m "message"
```
