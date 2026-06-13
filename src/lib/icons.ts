import type { IconType } from 'react-icons'
import {
  SiC,
  SiCss,
  SiDocker,
  SiFacebook,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiReactrouter,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from 'react-icons/si'
import { FaJava, FaLinkedinIn } from 'react-icons/fa6'
import {
  LuCrown,
  LuDatabase,
  LuGraduationCap,
  LuHeadphones,
  LuHeartHandshake,
  LuMail,
  LuMessageCircle,
  LuMic,
  LuTrendingUp,
  LuUsers,
} from 'react-icons/lu'

/** Technical skill / tech name → logo. Keeps data serializable (strings). */
export const SKILL_ICONS: Record<string, IconType> = {
  Java: FaJava,
  C: SiC,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  MySQL: SiMysql,
  DBMS: LuDatabase,
  React: SiReact,
  'Node.js': SiNodedotjs,
  Git: SiGit,
  'Spring Boot': SiSpringboot,
  TypeScript: SiTypescript,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  NestJS: SiNestjs,
  'Tailwind CSS': SiTailwindcss,
  Vite: SiVite,
  'Framer Motion': SiFramer,
  'React Router': SiReactrouter,
  Zod: SiZod,
}

/** Professional / soft skill → Lucide icon. */
export const PROFESSIONAL_ICONS: Record<string, IconType> = {
  Communication: LuMessageCircle,
  Leadership: LuCrown,
  'Public Speaking': LuMic,
  Teamwork: LuUsers,
  'Customer Service': LuHeadphones,
  'Teacher Training': LuGraduationCap,
  'Business Strategy': LuTrendingUp,
  'Social Services': LuHeartHandshake,
}

/** Social label → brand logo. */
export const SOCIAL_ICONS: Record<string, IconType> = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedinIn,
  Facebook: SiFacebook,
  Instagram: SiInstagram,
  Email: LuMail,
}
