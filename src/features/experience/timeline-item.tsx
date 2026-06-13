import type { ExperienceItem } from '@/types/content'
import { IconBadge } from '@/components/ui/icon-badge'
import styles from './timeline-item.module.css'

type TimelineItemProps = {
  item: ExperienceItem
  last: boolean
}

export function TimelineItem({ item, last }: TimelineItemProps) {
  return (
    <div className={styles.row}>
      <div className={styles.node}>
        <IconBadge size={50} radius={13} bg={item.bg} fg={item.fg} fontSize={16}>
          {item.mark}
        </IconBadge>
        {!last && <span className={styles.connector} aria-hidden="true" />}
      </div>

      <div className={styles.card}>
        <div className={styles.head}>
          <div className={styles.headText}>
            <h3 className={styles.role}>{item.role}</h3>
            <div className={styles.company}>{item.company}</div>
          </div>
          <span className={styles.period}>{item.period}</span>
        </div>
        <p className={styles.detail}>{item.detail}</p>
      </div>
    </div>
  )
}
