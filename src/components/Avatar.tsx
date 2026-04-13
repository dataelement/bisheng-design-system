import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// avatarVariants — shadcn/cva pattern
// ---------------------------------------------------------------------------

const avatarVariants = cva(
  "avatar",
  {
    variants: {
      size: {
        sm: "avatar--sm",
        md: "avatar--md",
        lg: "avatar--lg",
        xl: "avatar--xl",
      },
      shape: {
        circle: "",
        square: "avatar--square",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
    },
  }
)

// ---------------------------------------------------------------------------
// Avatar
// ---------------------------------------------------------------------------

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  /** Image source URL */
  src?: string
  /** Alt text for the image */
  alt?: string
  /** Initials to display as fallback */
  initials?: string
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, initials, size = "md", shape = "circle", className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(avatarVariants({ size, shape }), className)}
      {...props}
    >
      {src ? <img src={src} alt={alt || initials || ""} /> : initials || "?"}
    </span>
  )
)
Avatar.displayName = "Avatar"

// ---------------------------------------------------------------------------
// Tooltip (simple CSS-based)
// ---------------------------------------------------------------------------

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "content"> {
  /** Tooltip content */
  content: React.ReactNode
  /** Children to wrap */
  children: React.ReactNode
  /** Tooltip position (currently CSS-only supports top) */
  side?: "top" | "right" | "bottom" | "left"
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  className,
  ...props
}) => (
  <span className={cn("tooltip-wrapper", className)} {...props}>
    {children}
    <span className="tooltip-content">{content}</span>
  </span>
)
Tooltip.displayName = "Tooltip"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Avatar, Tooltip, avatarVariants }
