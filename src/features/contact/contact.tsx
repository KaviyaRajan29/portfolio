import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { SOCIALS } from '@/data/socials'
import { SocialLink } from './social-link'
import { ContactForm } from './contact-form'
import styles from './contact.module.css'

export function Contact() {
  return (
    <section id="contact" className={cn('container', styles.section)}>
      <div className={styles.grid}>
        <Reveal index={0} className={styles.intro}>
          <SectionHeading icon="✦" title="Let's talk" size="lg" iconFontSize={18} />
          <p className={styles.lead}>
            Got a project in mind or just want to say hi? My inbox is always open. I'll get back to
            you within a day.
          </p>
          <div className={styles.socials}>
            {SOCIALS.map((social) => (
              <SocialLink key={social.label} social={social} />
            ))}
          </div>
        </Reveal>

        <Reveal index={1} className={styles.formCard}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
