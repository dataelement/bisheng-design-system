import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// buttonVariants — shadcn/cva pattern
//
// Structural base (.btn) + sizes (.btn--mini etc.) live in components.css
// (BEM public layer, shared by Button / SingleIconButton / LoadButton).
// Color variants (.btn--primary etc.) also live in components.css.
// Tailwind utilities are used only for component-specific overrides.
// ---------------------------------------------------------------------------

const buttonVariants = cva(
  "btn",
  {
    variants: {
      variant: {
        primary: "btn--primary",
        secondary: "btn--secondary",
        outline: "btn--outline",
        ghost: "btn--ghost",
        danger: "btn--danger",
        "danger-outline": "btn--danger-outline",
        default: "btn--primary",
        destructive: "btn--danger",
        link: "btn--ghost",
      },
      size: {
        mini: "btn--mini",
        small: "btn--small",
        medium: "btn--medium",
        large: "btn--large",
        sm: "btn--small",
        md: "btn--medium",
        lg: "btn--large",
        default: "btn--medium",
        icon: "btn--icon btn--medium",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
)

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as child element (Radix Slot) — enables composing with Link, etc. */
  asChild?: boolean
  /** Show a loading spinner & disable the button */
  loading?: boolean
  /** Stretch button to fill container width */
  block?: boolean
  /** Icon-only button — produces a square shape using CSS `.btn--icon` */
  iconOnly?: boolean
  /** Leading icon / element */
  leftIcon?: React.ReactNode
  /** Trailing icon / element */
  rightIcon?: React.ReactNode
}

// ---------------------------------------------------------------------------
// Button
// ---------------------------------------------------------------------------

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "medium",
      asChild = false,
      loading = false,
      block = false,
      iconOnly = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          block && "btn--block",
          iconOnly && "btn--icon",
          loading && "btn--loading",
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="btn__spinner" />}
        {!loading && leftIcon}
        {children}
        {!loading && rightIcon}
      </Comp>
    )
  }
)
Button.displayName = "Button"

// ---------------------------------------------------------------------------
// SingleIconButton — square icon-only button
// ---------------------------------------------------------------------------

const singleIconButtonVariants = cva(
  "btn btn--icon",
  {
    variants: {
      variant: {
        primary: "btn--primary",
        secondary: "btn--secondary",
        outline: "btn--outline",
        ghost: "btn--ghost",
        danger: "btn--danger",
        "danger-outline": "btn--danger-outline",
        default: "btn--primary",
        destructive: "btn--danger",
      },
      size: {
        mini: "btn--mini",
        small: "btn--small",
        medium: "btn--medium",
        large: "btn--large",
        sm: "btn--small",
        md: "btn--medium",
        lg: "btn--large",
        default: "btn--medium",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "medium",
    },
  }
)

export interface SingleIconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof singleIconButtonVariants> {
  /** The icon element to render */
  icon: React.ReactNode
  /** Render as child element (Radix Slot) */
  asChild?: boolean
  /** Show a loading spinner & disable the button */
  loading?: boolean
  /** Accessible label — required since there is no visible text */
  "aria-label": string
}

const iconPixelSize: Record<string, number> = {
  mini: 14, small: 16, medium: 16, large: 20,
  sm: 16, md: 16, lg: 20, default: 16,
}

const SingleIconButton = React.forwardRef<
  HTMLButtonElement,
  SingleIconButtonProps
>(
  (
    {
      className,
      variant = "ghost",
      size = "medium",
      icon,
      asChild = false,
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const px = iconPixelSize[size ?? "medium"]

    const sizedIcon =
      React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<Record<string, unknown>>, {
            width: px,
            height: px,
            className: cn("shrink-0", (icon.props as Record<string, unknown>)?.className),
          })
        : icon

    return (
      <Comp
        className={cn(
          singleIconButtonVariants({ variant, size }),
          "!p-0",
          loading && "btn--loading",
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? <span className="btn__spinner" /> : sizedIcon}
      </Comp>
    )
  }
)
SingleIconButton.displayName = "SingleIconButton"

// ---------------------------------------------------------------------------
// LoadButton — convenience wrapper (mirrors Bisheng's LoadButton)
// ---------------------------------------------------------------------------

const LoadButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { loading?: boolean }
>(({ loading = false, disabled = false, children, ...props }, ref) => {
  return (
    <Button {...props} loading={loading} disabled={loading || disabled} ref={ref}>
      {children}
    </Button>
  )
})
LoadButton.displayName = "LoadButton"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Button,
  SingleIconButton,
  LoadButton,
  buttonVariants,
  singleIconButtonVariants,
}
