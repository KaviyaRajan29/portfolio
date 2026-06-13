import type { MouseEvent } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { ButtonLink } from '@/components/ui/button-link'
import { PROFILE } from '@/data/profile'
import { scrollToSection } from '@/lib/scroll'
import { TypedRoles } from './typed-roles'
import { CodeEditor } from './code-editor'
import styles from './hero.module.css'

export function Hero() {
  const [firstName, lastName] = PROFILE.name.split(' ')

  const goTo = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <section id="home" className={styles.section}>
      <div className={styles.aurora} aria-hidden="true">
        <span className={styles.blobTan} />
        <span className={styles.blobSlate} />
      </div>

      <div className={cn('container', styles.inner)}>
        <div className={styles.left}>
          <Reveal index={0} className={styles.badge}>
            <span className={styles.badgeMark}>{'</>'}</span> {PROFILE.badge}
          </Reveal>

          <Reveal as="h1" index={1} className={styles.name}>
            {firstName}
            <br />
            {lastName}
          </Reveal>

          <Reveal index={2} className={styles.roles}>
            <TypedRoles />
          </Reveal>

          <Reveal as="p" index={3} className={styles.blurb}>
            {PROFILE.heroBlurb}
          </Reveal>

          <Reveal index={4} className={styles.ctas}>
            <ButtonLink variant="primary" href="#projects" onClick={goTo('projects')}>
              View Projects <span aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink variant="secondary" href="#contact" onClick={goTo('contact')}>
              Contact Me <span aria-hidden="true">✉</span>
            </ButtonLink>
          </Reveal>

          <Reveal index={5} className={styles.availability}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            Available for new opportunities
          </Reveal>
        </div>

        <Reveal index={2} className={styles.right}>
          <CodeEditor />
        </Reveal>
      </div>
    </section>
  )
}
