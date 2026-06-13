import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { EXPERIENCE } from '@/data/experience'
import { TimelineItem } from './timeline-item'
import styles from './experience.module.css'

export function Experience() {
  return (
    <section id="experience" className={cn('container', styles.section)}>
      <Reveal index={0} className={styles.heading}>
        <SectionHeading icon="⌚" title="Experience" size="lg" iconFontSize={18} />
      </Reveal>

      <div className={styles.timeline}>
        {EXPERIENCE.map((item, index) => (
          <Reveal key={item.company} index={index}>
            <TimelineItem item={item} last={index === EXPERIENCE.length - 1} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
