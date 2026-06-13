import type { ReactNode } from 'react'
import styles from './code-editor.module.css'

/** A syntax-coloured token. */
function Tok({ c, children }: { c: string; children: ReactNode }) {
  return <span className={c}>{children}</span>
}

/** A numbered code line. */
function Line({ n, children }: { n: number; children?: ReactNode }) {
  return (
    <div className={styles.line}>
      <span className={styles.ln}>{n}</span>
      {children}
    </div>
  )
}

/**
 * The hero's decorative "VS Code" panel — a static recreation of the prototype.
 * Always dark in both themes (its palette is fixed, not themed).
 */
export function CodeEditor() {
  return (
    <div className={styles.wrap}>
      <div className={styles.editor}>
        <div className={styles.titlebar}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
          <span className={styles.filename}>App.tsx — kaviya-portfolio</span>
        </div>

        <div className={styles.body}>
          <aside className={styles.explorer}>
            <div className={styles.explorerTitle}>EXPLORER</div>
            <div className={styles.folderOpen}>▾ src</div>
            <div className={styles.fileList}>
              <span>📁 components</span>
              <span>📁 pages</span>
              <span>📁 hooks</span>
              <span className={styles.fileActive}>⎘ App.tsx</span>
              <span>⎘ index.tsx</span>
              <span>🎨 styles</span>
            </div>
          </aside>

          <div className={styles.code}>
            <Line n={1}>
              <Tok c={styles.kw}>import</Tok> <Tok c={styles.txt}>{'{ useState }'}</Tok>{' '}
              <Tok c={styles.kw}>from</Tok> <Tok c={styles.str}>{"'react'"}</Tok>
            </Line>
            <Line n={2}>
              <Tok c={styles.kw}>import</Tok> <Tok c={styles.txt}>{'{ Dashboard }'}</Tok>{' '}
              <Tok c={styles.kw}>from</Tok> <Tok c={styles.str}>{"'./Dashboard'"}</Tok>
            </Line>
            <Line n={3} />
            <Line n={4}>
              <Tok c={styles.kw}>export default function</Tok> <Tok c={styles.fn}>App</Tok>
              {'() {'}
            </Line>
            <Line n={5}>
              {'  '}
              <Tok c={styles.kw}>const</Tok> {'[user, setUser] = '}
              <Tok c={styles.fn}>useState</Tok>
              {'('}
              <Tok c={styles.num}>null</Tok>
              {')'}
            </Line>
            <Line n={6}>
              {'  '}
              <Tok c={styles.kw}>return</Tok> {'('}
            </Line>
            <Line n={7}>
              {'    '}
              <Tok c={styles.tag}>{'<main'}</Tok> <Tok c={styles.attr}>className</Tok>
              {'='}
              <Tok c={styles.str}>{'"app"'}</Tok>
              <Tok c={styles.tag}>{'>'}</Tok>
            </Line>
            <Line n={8}>
              {'      '}
              <Tok c={styles.tag}>{'<Dashboard'}</Tok> <Tok c={styles.attr}>user</Tok>
              {'='}
              <Tok c={styles.txt}>{'{user}'}</Tok>
              <Tok c={styles.tag}>{'/>'}</Tok>
            </Line>
            <Line n={9}>
              {'    '}
              <Tok c={styles.tag}>{'</main>'}</Tok>
            </Line>
            <Line n={10}>
              {'  )'}
              <span className={styles.codeCaret} />
            </Line>
          </div>
        </div>

        <div className={styles.terminal}>
          <Tok c={styles.termArrow}>➜</Tok> <Tok c={styles.termPath}>~/portfolio</Tok> npm run dev{' '}
          <Tok c={styles.termDim}>— ready in 517ms</Tok>
          <span className={styles.termStatus}>
            <span className={styles.termStatusDot} />
            All systems operational
          </span>
        </div>
      </div>

      <div className={styles.floating}>
        <div className={styles.floatTitle}>
          Dashboard <span className={styles.floatTitleDim}>· live</span>
        </div>
        <div className={styles.floatRow}>
          <div className={styles.floatStat}>
            <div className={styles.floatStatLabel}>Users</div>
            <div className={styles.floatStatValue}>12,540</div>
            <div className={styles.floatStatDelta}>+12.5%</div>
          </div>
          <div className={styles.floatStat}>
            <div className={styles.floatStatLabel}>Revenue</div>
            <div className={styles.floatStatValue}>$24.8k</div>
            <div className={styles.floatStatDelta}>+8.2%</div>
          </div>
        </div>
        <div className={styles.floatPerf}>
          <div>
            <div className={styles.floatStatLabel}>Performance</div>
            <div className={styles.floatStatValue}>98.6%</div>
          </div>
          <span className={styles.floatRing} />
        </div>
      </div>
    </div>
  )
}
