import { Link } from 'react-router-dom'
import { m } from 'motion/react'
import { LuArrowRight, LuCode, LuMail } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { PROFILE } from '@/data/profile'
import { fadeUp, staggerContainer } from '@/components/motion/variants'
import btn from '@/components/ui/button.module.css'
import { TypedRoles } from './typed-roles'
import { CodeEditor } from './code-editor'
import styles from './hero.module.css'

export function Hero() {
  const [firstName, lastName] = PROFILE.name.split(' ')

  return (
    <section className={styles.section}>
      <div className={styles.aurora} aria-hidden>
        <span className={styles.blobTan} />
        <span className={styles.blobSlate} />
      </div>

      <div className={cn('container', styles.inner)}>
        <m.div
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <m.div className={styles.badge} variants={fadeUp}>
            <span className={styles.badgeMark}>
              <LuCode aria-hidden />
            </span>{' '}
            {PROFILE.badge}
          </m.div>

          <m.h1 className={styles.name} variants={fadeUp}>
            {firstName}
            <br />
            {lastName}
          </m.h1>

          <m.div className={styles.roles} variants={fadeUp}>
            <TypedRoles />
          </m.div>

          <m.p className={styles.blurb} variants={fadeUp}>
            {PROFILE.heroBlurb}
          </m.p>

          <m.div className={styles.ctas} variants={fadeUp}>
            <Link to="/projects" className={cn(btn.btn, btn.primary, btn.md)}>
              View Projects <LuArrowRight aria-hidden />
            </Link>
            <Link to="/contact" className={cn(btn.btn, btn.secondary, btn.md)}>
              Contact Me <LuMail aria-hidden />
            </Link>
          </m.div>

          <m.div className={styles.availability} variants={fadeUp}>
            <span className={styles.availabilityDot} aria-hidden />
            Available for new opportunities
          </m.div>
        </m.div>

        <m.div className={styles.right} variants={fadeUp} initial="hidden" animate="show">
          <CodeEditor />
        </m.div>
      </div>
    </section>
  )
}
