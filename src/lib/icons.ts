import type { IconType } from 'react-icons'
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGo,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
  SiX,
} from 'react-icons/si'
import { LuMail } from 'react-icons/lu'
import { FaLinkedinIn } from 'react-icons/fa6'

/** Tech name → brand logo. Keeps data serializable (strings); components resolve here. */
export const SKILL_ICONS: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  HTML5: SiHtml5,
  Tailwind: SiTailwindcss,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  GraphQL: SiGraphql,
  Python: SiPython,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Firebase: SiFirebase,
  Redis: SiRedis,
  Git: SiGit,
  Vite: SiVite,
  Docker: SiDocker,
  Jest: SiJest,
  Figma: SiFigma,
  Rust: SiRust,
  Go: SiGo,
  Kubernetes: SiKubernetes,
  'Three.js': SiThreedotjs,
}

/** Social label → brand logo. */
export const SOCIAL_ICONS: Record<string, IconType> = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedinIn,
  Twitter: SiX,
  Email: LuMail,
}
