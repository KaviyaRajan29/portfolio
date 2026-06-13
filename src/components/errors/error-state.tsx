import { Link } from 'react-router-dom'
import { LuArrowLeft } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import btn from '@/components/ui/button.module.css'
import styles from './error-state.module.css'

type ErrorStateProps = {
  code: number | string
  title: string
  message: string
}

/** Shared empty/error layout for 404s and route errors. */
export function ErrorState({ code, title, message }: ErrorStateProps) {
  return (
    <div className={cn('container', styles.wrap)}>
      <div className={styles.code}>{code}</div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
      <Link to="/" className={cn(btn.btn, btn.primary, btn.md)}>
        <LuArrowLeft aria-hidden /> Back home
      </Link>
    </div>
  )
}
