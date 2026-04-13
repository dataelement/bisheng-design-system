import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

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
// tagVariants — shadcn/cva pattern
// ---------------------------------------------------------------------------

const tagVariants = cva(
  "tag",
  {
    variants: {
      variant: {
        primary: "tag--primary",
        success: "tag--success",
        warning: "tag--warning",
        danger: "tag--danger",
        default: "tag--default",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// ---------------------------------------------------------------------------
// Tag
// ---------------------------------------------------------------------------

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  /** Show a close button */
  closable?: boolean
  /** Close button click handler */
  onClose?: () => void
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ variant = "default", closable, onClose, children, className, ...props }, ref) => (
    <span ref={ref} className={cn(tagVariants({ variant }), className)} {...props}>
      {children}
      {closable && (
        <button
          type="button"
          className="tag__close"
          onClick={(event) => {
            event.stopPropagation()
            onClose?.()
          }}
        >
          <X size={10} />
        </button>
      )}
    </span>
  )
)
Tag.displayName = "Tag"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Badge, Tag, badgeVariants, tagVariants }
