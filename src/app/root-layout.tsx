import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, MotionConfig } from 'motion/react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { pageVariants } from '@/components/motion/variants'
import { ThemeProvider } from './theme-provider'
import styles from './root-layout.module.css'

/** App shell: persistent nav + footer, animated route transitions, theme + reduced-motion config. */
export function RootLayout() {
  const location = useLocation()

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            className={styles.main}
            variants={pageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
        <ScrollRestoration />
      </MotionConfig>
    </ThemeProvider>
  )
}
