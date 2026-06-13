import type { IconType } from 'react-icons'
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
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
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Tailwind: SiTailwindcss,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  Docker: SiDocker,
  Git: SiGit,
}

/** Social label → brand logo. */
export const SOCIAL_ICONS: Record<string, IconType> = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedinIn,
  Twitter: SiX,
  Email: LuMail,
}
