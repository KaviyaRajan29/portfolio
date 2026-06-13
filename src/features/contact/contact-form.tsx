import { useId, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/button'
import { validateContact } from './validate-contact'
import type { ContactErrors, ContactValues } from './validate-contact'
import styles from './contact-form.module.css'

const EMPTY: ContactValues = { name: '', email: '', message: '' }

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [sent, setSent] = useState(false)

  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  const update =
    (field: keyof ContactValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target
      setValues((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validateContact(values)
    if (Object.keys(found).length > 0) {
      setErrors(found)
      return
    }
    setErrors({})
    setSent(true)
  }

  const reset = () => {
    setSent(false)
    setValues(EMPTY)
    setErrors({})
  }

  if (sent) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon} aria-hidden="true">
          ✓
        </div>
        <h3 className={styles.successTitle}>Message sent!</h3>
        <p className={styles.successText}>Thanks for reaching out — I'll reply soon.</p>
        <Button variant="secondary" size="sm" onClick={reset}>
          Send another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <div className={styles.field}>
        <label htmlFor={nameId} className={styles.label}>
          Name
        </label>
        <input
          id={nameId}
          name="name"
          value={values.name}
          onChange={update('name')}
          placeholder="Jane Doe"
          className={cn(styles.input, errors.name && styles.inputError)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
        />
        {errors.name && (
          <div id={`${nameId}-error`} role="alert" className={styles.error}>
            {errors.name}
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor={emailId} className={styles.label}>
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          value={values.email}
          onChange={update('email')}
          placeholder="jane@example.com"
          className={cn(styles.input, errors.email && styles.inputError)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? `${emailId}-error` : undefined}
        />
        {errors.email && (
          <div id={`${emailId}-error`} role="alert" className={styles.error}>
            {errors.email}
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor={messageId} className={styles.label}>
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={4}
          value={values.message}
          onChange={update('message')}
          placeholder="Tell me about your project…"
          className={cn(styles.input, styles.textarea, errors.message && styles.inputError)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
        />
        {errors.message && (
          <div id={`${messageId}-error`} role="alert" className={styles.error}>
            {errors.message}
          </div>
        )}
      </div>

      <button type="submit" className={styles.submit}>
        Send Message <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
