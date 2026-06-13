import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
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
        <motion.div
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className={styles.badge} variants={fadeUp}>
            <span className={styles.badgeMark}>
              <LuCode aria-hidden />
            </span>{' '}
            {PROFILE.badge}
          </motion.div>

          <motion.h1 className={styles.name} variants={fadeUp}>
            {firstName}
            <br />
            {lastName}
          </motion.h1>

          <motion.div className={styles.roles} variants={fadeUp}>
            <TypedRoles />
          </motion.div>

          <motion.p className={styles.blurb} variants={fadeUp}>
            {PROFILE.heroBlurb}
          </motion.p>

          <motion.div className={styles.ctas} variants={fadeUp}>
            <Link to="/projects" className={cn(btn.btn, btn.primary, btn.md)}>
              View Projects <LuArrowRight aria-hidden />
            </Link>
            <Link to="/contact" className={cn(btn.btn, btn.secondary, btn.md)}>
              Contact Me <LuMail aria-hidden />
            </Link>
          </motion.div>

          <motion.div className={styles.availability} variants={fadeUp}>
            <span className={styles.availabilityDot} aria-hidden />
            Available for new opportunities
          </motion.div>
        </motion.div>

        <motion.div className={styles.right} variants={fadeUp} initial="hidden" animate="show">
          <CodeEditor />
        </motion.div>
      </div>
    </section>
  )
}
