import { clsx } from 'clsx'
import React from 'react'
import { X } from 'lucide-react'

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'default'

interface BadgeProps {
  variant?: BadgeVariant
  dot?: boolean
  children: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', dot = false, children, className }) => (
  <span className={clsx('badge', `badge--${variant}`, { 'badge--dot': dot }, className)}>
    {dot && <span className="badge__dot" />}
    {children}
  </span>
)

interface TagProps {
  variant?: BadgeVariant
  closable?: boolean
  onClose?: () => void
  children: React.ReactNode
  className?: string
}

export const Tag: React.FC<TagProps> = ({ variant = 'default', closable, onClose, children, className }) => (
  <span className={clsx('tag', `tag--${variant}`, className)}>
    {children}
    {closable && (
      <button className="tag__close" onClick={onClose}>
        <X size={10} />
      </button>
    )}
  </span>
)
