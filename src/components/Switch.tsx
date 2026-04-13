import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Switch — Radix-based (shadcn pattern)
// ---------------------------------------------------------------------------

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /** Text label rendered next to the switch */
  label?: React.ReactNode
  /** Size variant */
  size?: "sm" | "md" | "lg"
  /** Callback fired when the checked state changes */
  onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(
  (
    { label, size = "md", className, onCheckedChange, ...props },
    ref
  ) => (
    <label
      className={cn(
        "switch",
        size !== "md" && `switch--${size}`,
        className
      )}
    >
      <SwitchPrimitive.Root
        ref={ref}
        className="switch-track"
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

export { Switch }
