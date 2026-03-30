import { clsx } from 'clsx'
import React from 'react'

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string
  alt?: string
  initials?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, initials, size = 'md', shape = 'circle', className, ...props }, ref) => (
    <span
      ref={ref}
      className={clsx('avatar', `avatar--${size}`, { 'avatar--square': shape === 'square' }, className)}
      {...props}
    >
      {src ? <img src={src} alt={alt || initials || ''} /> : initials || '?'}
    </span>
  )
)
Avatar.displayName = 'Avatar'

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'content'> {
  content: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, className, ...props }) => (
  <span className={clsx('tooltip-wrapper', className)} {...props}>
    {children}
    <span className="tooltip-content">{content}</span>
  </span>
)
