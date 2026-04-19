import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// switchVariants — cva pattern
// ---------------------------------------------------------------------------

const switchVariants = cva("switch", {
  variants: {
    size: {
      sm: "switch--sm",
      md: "",
      lg: "switch--lg",
    },
    disabled: {
      true: "switch--disabled",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
})

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

type SwitchSize = NonNullable<VariantProps<typeof switchVariants>["size"]>

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /** Text label rendered next to the switch */
  label?: React.ReactNode
  /** Size variant */
  size?: SwitchSize
  /** Callback fired when the checked state changes */
  onCheckedChange?: (checked: boolean) => void
}

// ---------------------------------------------------------------------------
// Switch — Radix-based (shadcn pattern)
// ---------------------------------------------------------------------------

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(
  (
    { label, size = "md", className, disabled, onCheckedChange, ...props },
    ref
  ) => (
    <label
      className={cn(switchVariants({ size, disabled: !!disabled }), className)}
    >
      <SwitchPrimitive.Root
        ref={ref}
        className="switch-track"
        disabled={disabled}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <SwitchPrimitive.Thumb className="switch-thumb" />
      </SwitchPrimitive.Root>
      {label && <span className="switch-label">{label}</span>}
    </label>
  )
)
Switch.displayName = "Switch"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Switch, switchVariants }
