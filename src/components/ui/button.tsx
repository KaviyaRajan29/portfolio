import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import styles from './button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'navy' | 'cream'
export type ButtonSize = 'sm' | 'md'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement>

/** Pill button rendered as a real <button>. Use <ButtonLink> for navigation. */
export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(styles.btn, styles[variant], styles[size], className)}
      {...rest}
    />
  )
}
