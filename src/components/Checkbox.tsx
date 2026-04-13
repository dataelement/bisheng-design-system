import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// CheckboxCheckedState — matches Radix's CheckedState
// ---------------------------------------------------------------------------

type CheckboxCheckedState = boolean | "indeterminate"

// ---------------------------------------------------------------------------
// Checkbox — Radix-based (shadcn pattern)
// ---------------------------------------------------------------------------

export interface CheckboxProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    "onChange"
  > {
  /** Text label rendered next to the checkbox */
  label?: React.ReactNode
  /** Controlled indeterminate state (maps to Radix `checked="indeterminate"`) */
  indeterminate?: boolean
  /** Callback when checked state changes */
  onCheckedChange?: (checked: CheckboxCheckedState) => void
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    { label, indeterminate, className, onCheckedChange, disabled, checked, ...props },
    ref
  ) => {
    // Merge `checked` and `indeterminate` into Radix's CheckedState
    const resolvedChecked: CheckboxPrimitive.CheckedState = indeterminate
      ? "indeterminate"
      : checked ?? false

    return (
      <label className={cn("checkbox-group", className)}>
        <CheckboxPrimitive.Root
          ref={ref}
          className="checkbox-box"
          checked={resolvedChecked}
          disabled={disabled}
          onCheckedChange={(state) => {
            onCheckedChange?.(state === "indeterminate" ? "indeterminate" : !!state)
          }}
          {...props}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center">
            {resolvedChecked === "indeterminate" ? (
              <Minus size={10} strokeWidth={3} color="white" />
            ) : (
              <Check size={10} strokeWidth={3} color="white" />
            )}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && <span className="checkbox-label">{label}</span>}
      </label>
    )
  }
)
Checkbox.displayName = "Checkbox"

// ---------------------------------------------------------------------------
// Radio — keeps native <input type="radio"> with CSS styling
// ---------------------------------------------------------------------------

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Text label */
  label?: React.ReactNode
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, ...props }, ref) => (
    <label className={cn("radio-group", className)}>
      <input type="radio" ref={ref} {...props} />
      <span className="radio-dot" />
      {label && <span className="radio-label">{label}</span>}
    </label>
  )
)
Radio.displayName = "Radio"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Checkbox, Radio }
