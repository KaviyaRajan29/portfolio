import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { AnimatePresence, LazyMotion, m, MotionConfig } from 'motion/react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { pageVariants } from '@/components/motion/variants'
import { ThemeProvider } from './theme-provider'
import styles from './root-layout.module.css'

// Code-split Framer Motion's feature bundle (see components/motion/features.ts).
const loadFeatures = () => import('@/components/motion/features').then((mod) => mod.default)

/** App shell: persistent nav + footer, animated route transitions, theme + reduced-motion config. */
export function RootLayout() {
  const location = useLocation()

  return (
    <ThemeProvider>
      <LazyMotion features={loadFeatures} strict>
        <MotionConfig reducedMotion="user">
          <Navbar />
          <AnimatePresence mode="wait" initial={false}>
            <m.main
              key={location.pathname}
              className={styles.main}
              variants={pageVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Outlet />
            </m.main>
          </AnimatePresence>
          <Footer />
          <ScrollRestoration />
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  )
}
