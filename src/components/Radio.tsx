import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// radioVariants — cva pattern
// ---------------------------------------------------------------------------

const radioVariants = cva("radio-group", {
  variants: {
    disabled: {
      true: "radio-group--disabled",
      false: "",
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Text label */
  label?: React.ReactNode
}

// ---------------------------------------------------------------------------
// Radio — native <input type="radio"> with CSS styling
// ---------------------------------------------------------------------------

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, disabled, ...props }, ref) => (
    <label className={cn(radioVariants({ disabled: !!disabled }), className)}>
      <input type="radio" ref={ref} disabled={disabled} {...props} />
      <span className="radio-dot" />
      {label && <span className="radio-label">{label}</span>}
    </label>
  )
)
Radio.displayName = "Radio"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Radio, radioVariants }
