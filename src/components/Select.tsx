import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const selectTriggerVariants = cva("select-trigger", {
  variants: {
    size: {
      sm: "select-trigger--sm",
      md: "select-trigger--md",
      lg: "select-trigger--lg",
    },
    status: {
      default: "",
      error: "select-trigger--error",
      success: "select-trigger--success",
    },
  },
  defaultVariants: {
    size: "md",
    status: "default",
  },
})

type SelectSize = NonNullable<VariantProps<typeof selectTriggerVariants>["size"]>
type SelectStatus = NonNullable<VariantProps<typeof selectTriggerVariants>["status"]>

export type SelectOption = {
  value: string
  label: string
  disabled?: boolean
}

export const SelectRoot = SelectPrimitive.Root
export const SelectValue = SelectPrimitive.Value
export const SelectGroup = SelectPrimitive.Group
export const SelectLabel = SelectPrimitive.Label
export const SelectSeparator = SelectPrimitive.Separator

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {}

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, size = "md", status = "default", children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ size, status }), className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="select-trigger__icon" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn("select-content", className)}
      position={position}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className="select-scroll-button">
        <ChevronUp size={16} />
      </SelectPrimitive.ScrollUpButton>
      <SelectPrimitive.Viewport
        className={cn("select-viewport", position === "popper" && "select-viewport--popper")}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectPrimitive.ScrollDownButton className="select-scroll-button">
        <ChevronDown size={16} />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cn("select-item", className)} {...props}>
    <span className="select-item__indicator">
      <SelectPrimitive.ItemIndicator>
        <Check size={16} />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

export interface SelectProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, "children" | "onValueChange"> {
  size?: SelectSize
  status?: SelectStatus
  label?: string
  hint?: string
  className?: string
  options: SelectOption[]
  placeholder?: string
  onValueChange?: (value: string) => void
}

export const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectProps
>(
  (
    {
      size = "md",
      status = "default",
      label,
      hint,
      options,
      placeholder,
      className,
      disabled,
      value,
      defaultValue,
      onValueChange,
      name,
      required,
    },
    ref
  ) => {
    const generatedId = React.useId()
    const generatedHintId = React.useId()
    const triggerId = `${generatedId}-trigger`
    const hintId = hint ? `${generatedId}-${generatedHintId}` : undefined

    return (
      <div className="input-wrapper">
        {label && (
          <label htmlFor={triggerId} className={cn("input-label", { required })}>
            {label}
          </label>
        )}
        <SelectRoot
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
          name={name}
          required={required}
        >
          <SelectTrigger
            id={triggerId}
            ref={ref}
            size={size}
            status={status}
            className={className}
            aria-describedby={hintId}
            aria-invalid={status === "error" ? true : undefined}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        {hint && (
          <span id={hintId} className={cn("input-hint", { [`input-hint--${status}`]: status !== "default" })}>
            {hint}
          </span>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"
