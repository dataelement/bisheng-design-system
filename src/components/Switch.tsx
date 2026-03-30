import { clsx } from 'clsx'
import React from 'react'

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  onCheckedChange?: (checked: boolean) => void
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, size = 'md', className, onChange, onCheckedChange, ...props }, ref) => (
    <label className={clsx('switch', { [`switch--${size}`]: size !== 'md' }, className)}>
      <input
        type="checkbox"
        ref={ref}
        onChange={(event) => {
          onChange?.(event)
          onCheckedChange?.(event.currentTarget.checked)
        }}
        {...props}
      />
      <span className="switch-track">
        <span className="switch-thumb" />
      </span>
      {label && <span className="switch-label">{label}</span>}
    </label>
  )
)
Switch.displayName = 'Switch'
