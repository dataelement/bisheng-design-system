import { clsx } from 'clsx'
import React from 'react'
import { X } from 'lucide-react'

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'default'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  dot?: boolean
  children: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', dot = false, children, className, ...props }, ref) => (
    <span
      ref={ref}
      className={clsx('badge', `badge--${variant}`, { 'badge--dot': dot }, className)}
      {...props}
    >
      {dot && <span className="badge__dot" />}
      {children}
    </span>
  )
)
Badge.displayName = 'Badge'

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  closable?: boolean
  onClose?: () => void
  children: React.ReactNode
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ variant = 'default', closable, onClose, children, className, ...props }, ref) => (
    <span ref={ref} className={clsx('tag', `tag--${variant}`, className)} {...props}>
      {children}
      {closable && (
        <button
          type="button"
          className="tag__close"
          onClick={(event) => {
            event.stopPropagation()
            onClose?.()
          }}
        >
          <X size={10} />
        </button>
      )}
    </span>
  )
)
Tag.displayName = 'Tag'
