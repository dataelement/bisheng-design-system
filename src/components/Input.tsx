import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// inputVariants — shadcn/cva pattern
// ---------------------------------------------------------------------------

const inputVariants = cva("input", {
  variants: {
    size: {
      small: "input--small",
      medium: "input--medium",
      large: "input--large",
      // shadcn aliases
      sm: "input--small",
      default: "input--medium",
      lg: "input--large",
    },
    status: {
      default: "",
      error: "input--error",
      success: "input--success",
    },
    hasPrefix: {
      true: "input--with-prefix",
      false: "",
    },
    hasSuffix: {
      true: "input--with-suffix",
      false: "",
    },
  },
  defaultVariants: {
    size: "medium",
    status: "default",
    hasPrefix: false,
    hasSuffix: false,
  },
})

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

type InputSize = NonNullable<VariantProps<typeof inputVariants>["size"]>
type InputStatus = NonNullable<VariantProps<typeof inputVariants>["status"]>

const inputFieldSizeClass: Record<string, string> = {
  small: "input-field--small",
  medium: "input-field--medium",
  large: "input-field--large",
  sm: "input-field--small",
  default: "input-field--medium",
  lg: "input-field--large",
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  /** Input size */
  size?: InputSize
  /** Leading addon element (icon, etc.) */
  prefix?: React.ReactNode
  /** Trailing addon element */
  suffix?: React.ReactNode
  /** Validation status */
  status?: InputStatus
  /** Label text above the input */
  label?: string
  /** Description text next to the label */
  hint?: string
  /** Validation feedback below the input */
  feedback?: string
  /** Mark label as required */
  required?: boolean
}

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      id,
      size = "medium",
      status = "default",
      prefix,
      suffix,
      label,
      hint,
      feedback,
      required,
      "aria-describedby": ariaDescribedBy,
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref
  ) => {
    const hasAddon = !!prefix || !!suffix
    const generatedId = React.useId()
    const generatedFeedbackId = React.useId()
    const inputId = id ?? generatedId
    const feedbackId = feedback ? `${inputId}-${generatedFeedbackId}` : undefined
    const describedBy =
      [ariaDescribedBy, feedbackId].filter(Boolean).join(" ") || undefined
    const invalid = ariaInvalid ?? (status === "error" ? true : undefined)

    const baseInputClassName = cn(
      inputVariants({
        size,
        status,
        hasPrefix: !!prefix,
        hasSuffix: !!suffix,
      }),
      className
    )

    const inputElement = hasAddon ? (
      <div className={cn("input-field", inputFieldSizeClass[size])}>
        {prefix && (
          <div className="input-prefix" aria-hidden="true">
            {prefix}
          </div>
        )}
        <input
          id={inputId}
          type={type}
          className={baseInputClassName}
          ref={ref}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          {...props}
        />
        {suffix && <div className="input-suffix">{suffix}</div>}
      </div>
    ) : (
      <input
        id={inputId}
        type={type}
        className={baseInputClassName}
        ref={ref}
        aria-describedby={describedBy}
        aria-invalid={invalid}
        {...props}
      />
    )

    if (label || hint || feedback) {
      return (
        <div className="input-wrapper">
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
                [`input-feedback--${status}`]: status !== "default",
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
Input.displayName = "Input"

// ---------------------------------------------------------------------------
// Textarea
// ---------------------------------------------------------------------------

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text */
  label?: string
  /** Description text next to the label */
  hint?: string
  /** Validation feedback below the textarea */
  feedback?: string
  /** Mark label as required */
  required?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      label,
      hint,
      feedback,
      required,
      className,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const generatedFeedbackId = React.useId()
    const textareaId = id ?? generatedId
    const feedbackId = feedback ? `${textareaId}-${generatedFeedbackId}` : undefined
    const describedBy =
      [ariaDescribedBy, feedbackId].filter(Boolean).join(" ") || undefined

    return (
      <div className="input-wrapper textarea-wrapper">
        {(label || hint) && (
          <div className="input-label-row">
            {label && (
              <label
                htmlFor={textareaId}
                className={cn("input-label", { required })}
              >
                {label}
              </label>
            )}
            {hint && <span className="input-desc">{hint}</span>}
          </div>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn("textarea", className)}
          rows={4}
          aria-describedby={describedBy}
          {...props}
        />
        {feedback && (
          <span id={feedbackId} className="input-feedback">
            {feedback}
          </span>
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Input, Textarea, inputVariants }
