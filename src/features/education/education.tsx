import { LuGraduationCap } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { EDUCATION } from '@/data/education'
import { TimelineItem } from '@/features/experience/timeline-item'
import styles from './education.module.css'

export function Education() {
  return (
    <section id="education" className={cn('container', styles.section)}>
      <Reveal index={0} className={styles.heading}>
        <SectionHeading
          icon={<LuGraduationCap aria-hidden />}
          title="Education"
          size="lg"
          iconFontSize={20}
        />
      </Reveal>

      <div className={styles.timeline}>
        {EDUCATION.map((item, index) => (
          <Reveal key={item.institution} index={index}>
            <TimelineItem
              item={{
                role: item.qualification,
                company: item.institution,
                period: item.period,
                mark: item.mark,
                bg: item.bg,
                fg: item.fg,
                detail: item.detail,
              }}
              last={index === EDUCATION.length - 1}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
