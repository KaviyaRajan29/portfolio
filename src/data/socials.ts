import { socialSchema } from '@/lib/validations'

/** label = key into SOCIAL_ICONS. */
export const SOCIALS = socialSchema.array().parse([
  { label: 'GitHub', handle: 'KaviyaRajan29', href: 'https://github.com/KaviyaRajan29' },
  {
    label: 'LinkedIn',
    handle: 'kaviya-rajan',
    href: 'https://www.linkedin.com/in/kaviya-rajan-6aa61a3b5/',
  },
  {
    label: 'Facebook',
    handle: 'Kaviya Rajan',
    href: 'https://www.facebook.com/profile.php?id=61554701496688',
  },
  { label: 'Instagram', handle: '@kavyar_ajan', href: 'https://www.instagram.com/kavyar_ajan' },
  { label: 'Email', handle: 'kaviyarajan59@gmail.com', href: 'mailto:kaviyarajan59@gmail.com' },
])
