import { PROFILE } from '@/data/profile'
import { useTypingEffect } from '@/hooks/use-typing-effect'
import styles from './typed-roles.module.css'

/** The hero's role line, cycling through PROFILE.roles with a blinking caret. */
export function TypedRoles() {
  const text = useTypingEffect(PROFILE.roles)

  return (
    <>
      {text}
      <span className={styles.caret} aria-hidden="true" />
    </>
  )
}
