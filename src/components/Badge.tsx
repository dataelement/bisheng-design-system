import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// badgeVariants — shadcn/cva pattern
// ---------------------------------------------------------------------------

const badgeVariants = cva(
  "badge",
  {
    variants: {
      variant: {
        primary: "badge--primary",
        success: "badge--success",
        warning: "badge--warning",
        danger: "badge--danger",
        default: "badge--default",
        // Bisheng compat aliases
        destructive: "badge--danger",
        secondary: "badge--default",
        outline: "badge--default",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// ---------------------------------------------------------------------------
// Badge
// ---------------------------------------------------------------------------

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Show a colored dot indicator before the text */
  dot?: boolean
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", dot = false, children, className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant }), dot && "badge--dot", className)}
      {...props}
    >
      {dot && <span className="badge__dot" />}
      {children}
    </span>
  )
)
Badge.displayName = "Badge"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Badge, badgeVariants }
