import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Search as SearchIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"

const searchVariants = cva("input", {
  variants: {
    size: {
      small: "input--small input--with-prefix",
      medium: "input--medium input--with-prefix",
      large: "input--large input--with-prefix",
      sm: "input--small input--with-prefix",
      default: "input--medium input--with-prefix",
      lg: "input--large input--with-prefix",
    },
    status: {
      default: "",
      error: "input--error",
      success: "input--success",
    },
  },
  defaultVariants: {
    size: "medium",
    status: "default",
  },
})

const searchFieldSizeClass: Record<string, string> = {
  small: "input-field--small",
  medium: "input-field--medium",
  large: "input-field--large",
  sm: "input-field--small",
  default: "input-field--medium",
  lg: "input-field--large",
}

type SearchSize = NonNullable<VariantProps<typeof searchVariants>["size"]>
type SearchStatus = NonNullable<VariantProps<typeof searchVariants>["status"]>

export interface SearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "type"> {
  size?: SearchSize
  status?: SearchStatus
  label?: string
  hint?: string
  feedback?: string
  required?: boolean
  allowClear?: boolean
  onClear?: () => void
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
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
      allowClear = true,
      value: valueProp,
      defaultValue,
      onChange,
      onClear,
      "aria-describedby": ariaDescribedBy,
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref
  ) => {
    const isControlled = valueProp !== undefined
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")
    const currentValue = isControlled ? valueProp : internalValue
    const hasValue = currentValue !== "" && currentValue != null

    const generatedId = React.useId()
    const generatedFeedbackId = React.useId()
    const inputId = id ?? generatedId
    const feedbackId = feedback ? `${inputId}-${generatedFeedbackId}` : undefined
    const describedBy =
      [ariaDescribedBy, feedbackId].filter(Boolean).join(" ") || undefined
    const invalid = ariaInvalid ?? (status === "error" ? true : undefined)

    const innerRef = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(ref, () => innerRef.current!)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(e.target.value)
      onChange?.(e)
    }

    const handleClear = () => {
      if (!isControlled) setInternalValue("")
      onClear?.()
      if (innerRef.current) {
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        )?.set
        nativeInputValueSetter?.call(innerRef.current, "")
        innerRef.current.dispatchEvent(new Event("input", { bubbles: true }))
        innerRef.current.focus()
      }
    }

    const showClear = allowClear && hasValue && !props.disabled && !props.readOnly

    const inputElement = (
      <div className={cn("input-field", searchFieldSizeClass[size])}>
        <div className="input-prefix" aria-hidden="true">
          <SearchIcon />
        </div>
        <input
          id={inputId}
          ref={innerRef}
          type="text"
          className={cn(
            searchVariants({ size, status }),
            showClear && "input--with-suffix",
            className
          )}
          value={isControlled ? valueProp : undefined}
          defaultValue={isControlled ? undefined : defaultValue}
          onChange={handleChange}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          {...props}
        />
        {showClear && (
          <button
            type="button"
            className="search-clear"
            onClick={handleClear}
            tabIndex={-1}
            aria-label="清除搜索内容"
          >
            <X />
          </button>
        )}
      </div>
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
Search.displayName = "Search"

// ---------------------------------------------------------------------------
// SearchToggle — collapsible icon-button that expands into a full search input
// ---------------------------------------------------------------------------

type ToggleSize = "small" | "medium" | "large"
type ToggleDirection = "left" | "right"

const searchToggleVariants = cva("search-toggle", {
  variants: {
    size: {
      small: "search-toggle--small",
      medium: "search-toggle--medium",
      large: "search-toggle--large",
    },
    direction: {
      left: "search-toggle--dir-left",
      right: "search-toggle--dir-right",
    },
  },
  defaultVariants: {
    size: "medium",
    direction: "right",
  },
})

export interface SearchToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "type"> {
  size?: ToggleSize
  /** Expand direction: "right" = icon left, input extends right; "left" = icon right, input extends left */
  direction?: "left" | "right"
  expandedWidth?: number | string
  allowClear?: boolean
  value?: string
  defaultValue?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onClear?: () => void
  onExpandedChange?: (expanded: boolean) => void
}

const sizeMap: Record<ToggleSize, { box: number; icon: number }> = {
  small: { box: 28, icon: 14 },
  medium: { box: 32, icon: 16 },
  large: { box: 40, icon: 20 },
}

const SearchToggle = React.forwardRef<HTMLInputElement, SearchToggleProps>(
  (
    {
      className,
      size = "medium",
      direction = "right",
      expandedWidth = 280,
      allowClear = true,
      value: valueProp,
      defaultValue,
      onChange,
      onClear,
      onExpandedChange,
      ...props
    },
    ref
  ) => {
    const [expanded, setExpanded] = React.useState(false)
    const isControlled = valueProp !== undefined
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")
    const currentValue = isControlled ? valueProp : internalValue
    const hasValue = currentValue !== "" && currentValue != null

    const innerRef = React.useRef<HTMLInputElement>(null)
    const wrapperRef = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(ref, () => innerRef.current!)

    const { box, icon } = sizeMap[size]

    const expand = () => {
      setExpanded(true)
      onExpandedChange?.(true)
      requestAnimationFrame(() => innerRef.current?.focus())
    }

    const collapse = () => {
      if (hasValue) return
      setExpanded(false)
      onExpandedChange?.(false)
    }

    React.useEffect(() => {
      if (!expanded) return
      const handleClickOutside = (e: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
          collapse()
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(e.target.value)
      onChange?.(e)
    }

    const handleClear = () => {
      if (!isControlled) setInternalValue("")
      onClear?.()
      if (innerRef.current) {
        const setter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        )?.set
        setter?.call(innerRef.current, "")
        innerRef.current.dispatchEvent(new Event("input", { bubbles: true }))
        innerRef.current.focus()
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        if (hasValue) {
          handleClear()
        } else {
          setExpanded(false)
          onExpandedChange?.(false)
        }
      }
    }

    const showClear = allowClear && hasValue && !props.disabled && !props.readOnly

    return (
      <div
        ref={wrapperRef}
        className={cn(
          searchToggleVariants({ size, direction }),
          expanded && "search-toggle--expanded",
          className
        )}
        style={{
          width: expanded ? expandedWidth : box,
          height: box,
        }}
        onClick={() => { if (!expanded) expand() }}
      >
        <div className="search-toggle__icon" aria-hidden="true">
          <SearchIcon size={icon} />
        </div>
        <input
          ref={innerRef}
          type="text"
          className="search-toggle__input"
          tabIndex={expanded ? 0 : -1}
          value={isControlled ? valueProp : undefined}
          defaultValue={isControlled ? undefined : defaultValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            requestAnimationFrame(() => {
              if (!wrapperRef.current?.contains(document.activeElement)) {
                collapse()
              }
            })
          }}
          {...props}
        />
        {showClear && (
          <button
            type="button"
            className="search-toggle__clear"
            onClick={handleClear}
            tabIndex={-1}
            aria-label="清除搜索内容"
          >
            <X size={icon} />
          </button>
        )}
      </div>
    )
  }
)
SearchToggle.displayName = "SearchToggle"

export { Search, SearchToggle, searchVariants, searchToggleVariants }
