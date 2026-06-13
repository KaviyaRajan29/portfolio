import { socialSchema } from '@/lib/validations'

/** label = key into SOCIAL_ICONS (brand logo). */
export const SOCIALS = socialSchema.array().parse([
  { label: 'GitHub', handle: 'KaviyaRajan29', href: 'https://github.com/KaviyaRajan29' },
  { label: 'LinkedIn', handle: 'kaviya-rajan', href: 'https://www.linkedin.com/in/kaviya-rajan-6aa61a3b5/' },
  { label: 'Twitter', handle: '@kaviyacodes', href: '#' },
  { label: 'Email', handle: 'hello@kaviya.dev', href: 'mailto:hello@kaviya.dev' },
])
