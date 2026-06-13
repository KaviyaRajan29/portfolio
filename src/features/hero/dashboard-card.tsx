import { useEffect, useState } from 'react'
import type { Transition } from 'motion/react'
import { m, useReducedMotion } from 'motion/react'
import { LuArrowUp } from 'react-icons/lu'
import { Counter } from '@/components/motion/counter'
import styles from './dashboard-card.module.css'

const W = 120
const H = 40

// Four same-length datasets so the sparkline `d` interpolates as it cycles.
const DATASETS = [
  [0.3, 0.45, 0.38, 0.55, 0.5, 0.68, 0.62, 0.8],
  [0.35, 0.4, 0.52, 0.48, 0.62, 0.58, 0.75, 0.72],
  [0.28, 0.5, 0.44, 0.6, 0.56, 0.7, 0.66, 0.88],
  [0.4, 0.36, 0.55, 0.5, 0.66, 0.6, 0.78, 0.84],
]

const xAt = (i: number, n: number) => (i / (n - 1)) * W
const yAt = (v: number) => H - 2 - v * (H - 6)
const toLine = (d: number[]) =>
  d.map((v, i) => `${i ? 'L' : 'M'} ${xAt(i, d.length).toFixed(1)} ${yAt(v).toFixed(1)}`).join(' ')
const toArea = (d: number[]) => `${toLine(d)} L ${W} ${H} L 0 ${H} Z`

const MORPH: Transition = { duration: 0.9, ease: 'easeInOut' }

const PERF = 98.6
const R = 18
const C = 2 * Math.PI * R
const ARC_OFFSET = C * (1 - PERF / 100)

/**
 * The hero's floating "Dashboard · live" card — a live mini-dashboard:
 * a sparkline that cycles datasets, count-up stats, and an animated donut.
 * Always dark (fixed palette). Reduced motion → static values, no loops.
 */
export function DashboardCard() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % DATASETS.length), 2600)
    return () => window.clearInterval(id)
  }, [reduced])

  const data = DATASETS[index]
  const lastY = yAt(data[data.length - 1])

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>
          Dashboard <span className={styles.titleDim}>· live</span>
        </div>
        <span className={styles.live}>
          <span className={styles.liveDot} aria-hidden /> live
        </span>
      </div>

      <svg className={styles.chart} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#82aaff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#82aaff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <m.path
          className={styles.sparkArea}
          fill="url(#spark-fill)"
          d={toArea(data)}
          initial={false}
          animate={{ d: toArea(data) }}
          transition={MORPH}
        />
        <m.path
          className={styles.sparkLine}
          d={toLine(data)}
          initial={false}
          animate={{ d: toLine(data) }}
          transition={MORPH}
        />
        <m.circle
          className={styles.sparkDot}
          r={2.5}
          cx={W}
          cy={lastY}
          initial={false}
          animate={{ cy: lastY }}
          transition={MORPH}
        />
      </svg>

      <div className={styles.row}>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Users</div>
          <div className={styles.statValue}>
            <Counter to={12540} format={(v) => Math.round(v).toLocaleString()} />
          </div>
          <div className={styles.statDelta}>
            <LuArrowUp aria-hidden /> 12.5%
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Revenue</div>
          <div className={styles.statValue}>
            <Counter to={24800} format={(v) => `$${(v / 1000).toFixed(1)}k`} />
          </div>
          <div className={styles.statDelta}>
            <LuArrowUp aria-hidden /> 8.2%
          </div>
        </div>
      </div>

      <div className={styles.perf}>
        <div>
          <div className={styles.statLabel}>Performance</div>
          <div className={styles.perfValue}>
            <Counter to={PERF} format={(v) => `${v.toFixed(1)}%`} />
          </div>
        </div>
        <svg className={styles.donut} viewBox="0 0 46 46" aria-hidden>
          <circle className={styles.track} cx="23" cy="23" r={R} fill="none" strokeWidth="4" />
          <g transform="rotate(-90 23 23)">
            <m.circle
              className={styles.arc}
              cx="23"
              cy="23"
              r={R}
              fill="none"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={C}
              initial={{ strokeDashoffset: reduced ? ARC_OFFSET : C }}
              animate={{ strokeDashoffset: ARC_OFFSET }}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
            />
          </g>
        </svg>
      </div>
    </div>
  )
}
