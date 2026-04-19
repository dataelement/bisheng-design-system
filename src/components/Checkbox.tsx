import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// checkboxVariants — cva pattern
// ---------------------------------------------------------------------------

const checkboxVariants = cva("checkbox-group", {
  variants: {
    disabled: {
      true: "checkbox-group--disabled",
      false: "",
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

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
    const checkedProp: Record<string, unknown> = {}
    if (indeterminate) {
      checkedProp.checked = "indeterminate" as CheckboxPrimitive.CheckedState
    } else if (checked !== undefined) {
      checkedProp.checked = checked
    }

    return (
      <label
        className={cn(checkboxVariants({ disabled: !!disabled }), className)}
      >
        <CheckboxPrimitive.Root
          ref={ref}
          className="checkbox-box"
          disabled={disabled}
          onCheckedChange={(state) => {
            onCheckedChange?.(state === "indeterminate" ? "indeterminate" : !!state)
          }}
          {...checkedProp}
          {...props}
        >
          <CheckboxPrimitive.Indicator className="checkbox-indicator">
            {indeterminate ? (
              <Minus size={12} strokeWidth={3} />
            ) : (
              <Check size={12} strokeWidth={3} />
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
// Exports
// ---------------------------------------------------------------------------

export { Checkbox, checkboxVariants }
