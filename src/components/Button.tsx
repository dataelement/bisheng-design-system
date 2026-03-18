import { clsx } from 'clsx'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'danger-outline'
type ButtonSize = 'mini' | 'small' | 'medium' | 'large'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  block?: boolean
  iconOnly?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', loading = false, block = false, iconOnly = false,
     leftIcon, rightIcon, children, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'btn',
          `btn--${variant}`,
          `btn--${size}`,
          { 'btn--block': block, 'btn--icon': iconOnly, 'btn--loading': loading },
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="btn__spinner" />}
        {!loading && leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </button>
    )
  }
)
Button.displayName = 'Button'
