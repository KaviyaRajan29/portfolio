import { LuMoon, LuSun } from 'react-icons/lu'
import { useTheme } from '@/app/theme-context'
import styles from './theme-toggle.module.css'

/** Sun/moon button that flips the theme. Shows the icon of the theme you'd switch TO. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
    >
      {isDark ? <LuSun aria-hidden /> : <LuMoon aria-hidden />}
    </button>
  )
}
