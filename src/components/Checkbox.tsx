import { clsx } from 'clsx'
import React from 'react'
import { Check, Minus } from 'lucide-react'

type CheckboxCheckedState = boolean | 'indeterminate'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode
  indeterminate?: boolean
  onCheckedChange?: (checked: CheckboxCheckedState) => void
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, className, onChange, onCheckedChange, disabled, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null)

    const setRefs = (element: HTMLInputElement | null) => {
      inputRef.current = element

      if (typeof ref === 'function') {
        ref(element)
      } else if (ref) {
        ref.current = element
      }
    }

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = !!indeterminate
      }
    }, [indeterminate])

    return (
      <label className={clsx('checkbox-group', className)}>
        <input
          ref={setRefs}
          type="checkbox"
          disabled={disabled}
          onChange={(event) => {
            onChange?.(event)
            onCheckedChange?.(
              event.currentTarget.indeterminate ? 'indeterminate' : event.currentTarget.checked
            )
          }}
          {...props}
        />
        <span className="checkbox-box">
          {indeterminate ? (
            <Minus size={10} strokeWidth={3} color="white" />
          ) : (
            <Check size={10} strokeWidth={3} color="white" />
          )}
        </span>
        {label && <span className="checkbox-label">{label}</span>}
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, ...props }, ref) => (
    <label className={clsx('radio-group', className)}>
      <input type="radio" ref={ref} {...props} />
      <span className="radio-dot" />
      {label && <span className="radio-label">{label}</span>}
    </label>
  )
)
Radio.displayName = 'Radio'
