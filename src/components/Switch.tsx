import { clsx } from 'clsx'
import React from 'react'

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, size = 'md', className, ...props }, ref) => {
    return (
      <label className={clsx('switch', { [`switch--${size}`]: size !== 'md' }, className)}>
        <input type="checkbox" ref={ref} {...props} />
        <span className="switch-track">
          <span className="switch-thumb" />
        </span>
        {label && <span className="switch-label">{label}</span>}
      </label>
    )
  }
)
Switch.displayName = 'Switch'
