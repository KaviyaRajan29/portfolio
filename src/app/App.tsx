import { cn } from '@/lib/cn'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/features/hero/hero'
import { About } from '@/features/about/about'
import { Skills } from '@/features/skills/skills'
import { Projects } from '@/features/projects/projects'
import { Experience } from '@/features/experience/experience'
import { Contact } from '@/features/contact/contact'
import { SECTION_IDS } from '@/data/nav'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import { useInitialHashScroll } from '@/hooks/use-initial-hash-scroll'
import { ThemeProvider } from './theme-provider'
import styles from './app.module.css'

/** The page itself. Lives below ThemeProvider so the toggle has context. */
function Site() {
  const activeId = useScrollSpy(SECTION_IDS)
  useInitialHashScroll()

  return (
    <>
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <div className={cn('container', styles.aboutRow)}>
          <About />
          <Skills />
        </div>
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export function App() {
  return (
    <ThemeProvider>
      <Site />
    </ThemeProvider>
  )
}
