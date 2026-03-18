import { clsx } from 'clsx'
import React from 'react'

interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src, alt, initials, size = 'md', shape = 'circle', className
}) => (
  <span className={clsx('avatar', `avatar--${size}`, { 'avatar--square': shape === 'square' }, className)}>
    {src ? <img src={src} alt={alt || initials || ''} /> : (initials || '?')}
  </span>
)

interface TooltipProps {
  content: string
  children: React.ReactNode
  className?: string
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, className }) => (
  <span className={clsx('tooltip-wrapper', className)}>
    {children}
    <span className="tooltip-content">{content}</span>
  </span>
)
