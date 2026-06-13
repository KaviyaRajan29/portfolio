import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import type { ButtonSize, ButtonVariant } from './button'
import styles from './button.module.css'

type ButtonLinkProps = {
  variant?: ButtonVariant
  size?: ButtonSize
} & AnchorHTMLAttributes<HTMLAnchorElement>

/** A link styled as a pill button (shares Button's styles). Stays a real <a>. */
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonLinkProps) {
  return <a className={cn(styles.btn, styles[variant], styles[size], className)} {...rest} />
}
