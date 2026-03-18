import { clsx } from 'clsx'
import React from 'react'
import { Check, Minus } from 'lucide-react'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  indeterminate?: boolean
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, className, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const combinedRef = (el: HTMLInputElement) => {
      (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = el
      if (typeof ref === 'function') ref(el)
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = el
    }

    React.useEffect(() => {
      if (inputRef.current) inputRef.current.indeterminate = !!indeterminate
    }, [indeterminate])

    return (
      <label className={clsx('checkbox-group', className)}>
        <input type="checkbox" ref={combinedRef} {...props} />
        <span className="checkbox-box">
          {indeterminate
            ? <Minus size={10} strokeWidth={3} color="white" />
            : <Check size={10} strokeWidth={3} color="white" />
          }
        </span>
        {label && <span className="checkbox-label">{label}</span>}
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className={clsx('radio-group', className)}>
        <input type="radio" ref={ref} {...props} />
        <span className="radio-dot" />
        {label && <span className="radio-label">{label}</span>}
      </label>
    )
  }
)
Radio.displayName = 'Radio'
