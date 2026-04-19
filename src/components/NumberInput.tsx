import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronUp, ChevronDown } from "lucide-react"

// ---------------------------------------------------------------------------
// numberInputVariants — cva pattern
// ---------------------------------------------------------------------------

const numberInputVariants = cva("number-input", {
  variants: {
    size: {
      small: "number-input--small",
      medium: "number-input--medium",
      large: "number-input--large",
    },
    status: {
      default: "",
      error: "number-input--error",
    },
  },
  defaultVariants: {
    size: "medium",
    status: "default",
  },
})

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type NumberInputSize = NonNullable<VariantProps<typeof numberInputVariants>["size"]>
type NumberInputStatus = NonNullable<VariantProps<typeof numberInputVariants>["status"]>

export interface NumberInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "type" | "onChange" | "value" | "defaultValue"
  > {
  size?: NumberInputSize
  label?: string
  /** Description text next to the label */
  hint?: string
  /** Validation feedback below the input */
  feedback?: string
  required?: boolean
  status?: NumberInputStatus
  /** Controlled value */
  value?: number | null
  /** Uncontrolled default value */
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  precision?: number
  /** Allow mouse-wheel to change value when focused */
  changeOnWheel?: boolean
  /** Enable keyboard up/down */
  keyboard?: boolean
  disabled?: boolean
  readOnly?: boolean
  onChange?: (value: number | null) => void
  onStep?: (
    value: number,
    info: { offset: number; type: "up" | "down" }
  ) => void
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function clampPrecision(val: number, precision?: number): number {
  if (precision == null) return val
  return parseFloat(val.toFixed(precision))
}

function clamp(val: number, min?: number, max?: number): number {
  let result = val
  if (min != null && result < min) result = min
  if (max != null && result > max) result = max
  return result
}

// ---------------------------------------------------------------------------
// NumberInput
// ---------------------------------------------------------------------------

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      id,
      size = "medium",
      status = "default",
      label,
      hint,
      feedback,
      required,
      value: valueProp,
      defaultValue,
      min,
      max,
      step = 1,
      precision,
      changeOnWheel = false,
      keyboard = true,
      disabled = false,
      readOnly = false,
      onChange,
      onStep,
      onKeyDown,
      onWheel,
      "aria-describedby": ariaDescribedBy,
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref
  ) => {
    const isControlled = valueProp !== undefined
    const [internalValue, setInternalValue] = React.useState<number | null>(
      defaultValue ?? null
    )
    const currentValue = isControlled ? valueProp : internalValue

    const [inputText, setInputText] = React.useState<string>(
      currentValue != null ? String(currentValue) : ""
    )
    const [isFocused, setIsFocused] = React.useState(false)

    const generatedId = React.useId()
    const generatedFeedbackId = React.useId()
    const inputId = id ?? generatedId
    const feedbackId = feedback ? `${inputId}-${generatedFeedbackId}` : undefined
    const describedBy =
      [ariaDescribedBy, feedbackId].filter(Boolean).join(" ") || undefined
    const invalid = ariaInvalid ?? (status === "error" ? true : undefined)

    React.useEffect(() => {
      if (!isFocused) {
        setInputText(currentValue != null ? String(currentValue) : "")
      }
    }, [currentValue, isFocused])

    const updateValue = React.useCallback(
      (next: number | null) => {
        if (!isControlled) setInternalValue(next)
        onChange?.(next)
      },
      [isControlled, onChange]
    )

    const commitText = React.useCallback(
      (text: string) => {
        if (text === "" || text === "-") {
          updateValue(null)
          setInputText("")
          return
        }
        const parsed = parseFloat(text)
        if (Number.isNaN(parsed)) {
          setInputText(currentValue != null ? String(currentValue) : "")
          return
        }
        const clamped = clamp(clampPrecision(parsed, precision), min, max)
        updateValue(clamped)
        setInputText(String(clamped))
      },
      [currentValue, min, max, precision, updateValue]
    )

    const doStep = React.useCallback(
      (direction: "up" | "down") => {
        if (disabled || readOnly) return
        const base = currentValue ?? 0
        const offset = direction === "up" ? step : -step
        let next = clampPrecision(base + offset, precision)
        next = clamp(next, min, max)
        updateValue(next)
        setInputText(String(next))
        onStep?.(next, { offset, type: direction })
      },
      [currentValue, step, precision, min, max, disabled, readOnly, updateValue, onStep]
    )

    const atMax = max != null && currentValue != null && currentValue >= max
    const atMin = min != null && currentValue != null && currentValue <= min

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value
      if (raw === "" || raw === "-" || /^-?\d*\.?\d*$/.test(raw)) {
        setInputText(raw)
      }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      commitText(inputText)
      props.onBlur?.(e)
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      props.onFocus?.(e)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (keyboard) {
        if (e.key === "ArrowUp") {
          e.preventDefault()
          doStep("up")
        } else if (e.key === "ArrowDown") {
          e.preventDefault()
          doStep("down")
        } else if (e.key === "Enter") {
          commitText(inputText)
        }
      }
      onKeyDown?.(e)
    }

    const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
      if (changeOnWheel && isFocused && !disabled && !readOnly) {
        e.preventDefault()
        if (e.deltaY < 0) doStep("up")
        else if (e.deltaY > 0) doStep("down")
      }
      onWheel?.(e)
    }

    const wrapperCn = cn(
      numberInputVariants({ size, status }),
      disabled && "number-input--disabled"
    )

    const inputElement = (
      <div className={wrapperCn}>
        <input
          {...props}
          id={inputId}
          ref={ref}
          type="text"
          inputMode="decimal"
          role="spinbutton"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue ?? undefined}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          className={cn("number-input__input", className)}
          value={inputText}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
        />
        <div className="number-input__handler" aria-hidden="true">
          <button
            type="button"
            className="number-input__handler-btn"
            tabIndex={-1}
            disabled={disabled || readOnly || atMax}
            onClick={() => doStep("up")}
          >
            <ChevronUp />
          </button>
          <button
            type="button"
            className="number-input__handler-btn"
            tabIndex={-1}
            disabled={disabled || readOnly || atMin}
            onClick={() => doStep("down")}
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    )

    if (label || hint || feedback) {
      return (
        <div className="number-input-wrapper">
          {(label || hint) && (
            <div className="input-label-row">
              {label && (
                <label
                  htmlFor={inputId}
                  className={cn("input-label", { required })}
                >
                  {label}
                </label>
              )}
              {hint && <span className="input-desc">{hint}</span>}
            </div>
          )}
          {inputElement}
          {feedback && (
            <span
              id={feedbackId}
              className={cn("input-feedback", {
                "input-feedback--error": status === "error",
              })}
            >
              {feedback}
            </span>
          )}
        </div>
      )
    }

    return inputElement
  }
)
NumberInput.displayName = "NumberInput"

export { NumberInput, numberInputVariants }
