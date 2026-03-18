import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const inputVariants = cva("input", {
  variants: {
    size: {
      small: "input--small",
      medium: "input--medium",
      large: "input--large",
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

type InputSize = NonNullable<VariantProps<typeof inputVariants>["size"]>
type InputStatus = NonNullable<VariantProps<typeof inputVariants>["status"]>

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  size?: InputSize
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  status?: InputStatus
  label?: string
  hint?: string
  required?: boolean
}

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
      required,
      "aria-describedby": ariaDescribedBy,
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref
  ) => {
    const hasAddon = !!prefix || !!suffix
    const generatedId = React.useId()
    const generatedHintId = React.useId()
    const inputId = id ?? generatedId
    const hintId = hint ? `${inputId}-${generatedHintId}` : undefined
    const describedBy = [ariaDescribedBy, hintId].filter(Boolean).join(" ") || undefined
    const invalid = ariaInvalid ?? (status === "error" ? true : undefined)

    const baseInputClassName = cn(inputVariants({ size, status, hasPrefix: !!prefix, hasSuffix: !!suffix }), className)

    const inputElement = hasAddon ? (
      <div className={cn("input-field", `input-field--${size}`)}>
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
        {suffix && (
          <div className="input-suffix">
            {suffix}
          </div>
        )}
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

    if (label || hint) {
      return (
        <div className="input-wrapper">
          {label && (
            <label htmlFor={inputId} className={cn("input-label", { required })}>
              {label}
            </label>
          )}
          {inputElement}
          {hint && (
            <span id={hintId} className={cn("input-hint", { [`input-hint--${status}`]: status !== "default" })}>
              {hint}
            </span>
          )}
        </div>
      )
    }

    return inputElement
  }
)
Input.displayName = "Input"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  hint?: string
  required?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, hint, required, className, "aria-describedby": ariaDescribedBy, ...props }, ref) => {
    const generatedId = React.useId()
    const generatedHintId = React.useId()
    const textareaId = id ?? generatedId
    const hintId = hint ? `${textareaId}-${generatedHintId}` : undefined
    const describedBy = [ariaDescribedBy, hintId].filter(Boolean).join(" ") || undefined

    return (
      <div className="input-wrapper w-full">
        {label && (
          <label htmlFor={textareaId} className={cn("input-label", { required })}>
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn("textarea", className)}
          rows={4}
          aria-describedby={describedBy}
          {...props}
        />
        {hint && (
          <span id={hintId} className="input-hint">
            {hint}
          </span>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Input, Textarea }
