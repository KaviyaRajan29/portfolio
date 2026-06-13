import type { ReactNode } from 'react'
import styles from './tag.module.css'

/** Small pill used for project tech tags. */
export function Tag({ children }: { children: ReactNode }) {
  return <span className={styles.tag}>{children}</span>
}
