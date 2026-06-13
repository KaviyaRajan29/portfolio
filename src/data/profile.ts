import { profileSchema } from '@/lib/validations'

export const PROFILE = profileSchema.parse({
  name: 'Kaviya Rajan',
  brand: 'Kaviya.dev',
  badge: 'ICT Undergraduate',
  roles: ['Full Stack Developer', 'ICT Undergraduate', 'Web Developer', 'Java Developer'],
  heroBlurb:
    "I'm an ICT undergraduate and aspiring Full Stack Developer passionate about web and software development — building with Java, MySQL, and modern web technologies, and eager to contribute to real-world IT projects.",
  aboutBlurb:
    "I'm an ICT undergraduate at the University of Ruhuna and an aspiring Full Stack Developer with a strong interest in web and software development. I'm skilled in Java, MySQL, frontend and backend development, and database management — and I'm eager to gain practical experience and contribute to real-world IT projects.",
  stats: [
    { value: '2027', label: 'Graduating' },
    { value: 'ICT', label: '@ Ruhuna' },
    { value: '10+', label: 'Skills' },
  ],
  email: 'kaviyarajan59@gmail.com',
  year: 2026,
})
