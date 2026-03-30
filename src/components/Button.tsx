import { clsx } from 'clsx'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'danger-outline'
type ButtonSize = 'mini' | 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  block?: boolean
  iconOnly?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const buttonSizeAliasMap: Record<ButtonSize, 'mini' | 'small' | 'medium' | 'large'> = {
  mini: 'mini',
  small: 'small',
  medium: 'medium',
  large: 'large',
  sm: 'small',
  md: 'medium',
  lg: 'large',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      loading = false,
      block = false,
      iconOnly = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const resolvedSize = buttonSizeAliasMap[size]

    return (
      <button
        ref={ref}
        className={clsx(
          'btn',
          `btn--${variant}`,
          `btn--${resolvedSize}`,
          { 'btn--block': block, 'btn--icon': iconOnly, 'btn--loading': loading },
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="btn__spinner" />}
        {!loading && leftIcon}
        {children}
        {!loading && rightIcon}
      </button>
    )
  }
)
Button.displayName = 'Button'
