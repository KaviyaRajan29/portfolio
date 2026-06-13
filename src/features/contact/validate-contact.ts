export type ContactValues = {
  name: string
  email: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

const EMAIL_RE = /^\S+@\S+\.\S+$/

/** Validates the contact form — pure, so it's trivially testable. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Enter a valid email address'
  if (values.message.trim().length < 10) {
    errors.message = 'A little more detail, please (10+ chars)'
  }
  return errors
}
