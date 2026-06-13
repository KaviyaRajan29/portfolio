import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LuCheck, LuSend } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/button'
import { env } from '@/config/env'
import { contactSchema, type ContactValues } from '@/lib/validations'
import styles from './contact-form.module.css'

const DEFAULTS: ContactValues = { name: '', email: '', message: '' }

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: DEFAULTS,
    mode: 'onTouched',
  })

  const onSubmit = handleSubmit(async (values) => {
    clearErrors('root')
    try {
      const endpoint = env.VITE_CONTACT_ENDPOINT
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
      } else {
        // No endpoint configured — simulate a successful send for the demo.
        await new Promise((resolve) => setTimeout(resolve, 400))
      }
      setSent(true)
    } catch {
      setError('root', {
        message: "Couldn't send your message. Please try again or email me directly.",
      })
    }
  })

  const startOver = () => {
    setSent(false)
    reset(DEFAULTS)
  }

  if (sent) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon} aria-hidden>
          <LuCheck />
        </div>
        <h3 className={styles.successTitle}>Message sent!</h3>
        <p className={styles.successText}>Thanks for reaching out — I'll reply soon.</p>
        <Button variant="secondary" size="sm" onClick={startOver}>
          Send another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="cf-name" className={styles.label}>
          Name
        </label>
        <input
          id="cf-name"
          placeholder="Jane Doe"
          className={cn(styles.input, errors.name && styles.inputError)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'cf-name-error' : undefined}
          {...register('name')}
        />
        {errors.name && (
          <div id="cf-name-error" role="alert" className={styles.error}>
            {errors.name.message}
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-email" className={styles.label}>
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          placeholder="jane@example.com"
          className={cn(styles.input, errors.email && styles.inputError)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? 'cf-email-error' : undefined}
          {...register('email')}
        />
        {errors.email && (
          <div id="cf-email-error" role="alert" className={styles.error}>
            {errors.email.message}
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-message" className={styles.label}>
          Message
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Tell me about your project…"
          className={cn(styles.input, styles.textarea, errors.message && styles.inputError)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <div id="cf-message-error" role="alert" className={styles.error}>
            {errors.message.message}
          </div>
        )}
      </div>

      {errors.root && (
        <div role="alert" className={styles.formError}>
          {errors.root.message}
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className={styles.submit}>
        {isSubmitting ? (
          'Sending…'
        ) : (
          <>
            Send Message <LuSend aria-hidden />
          </>
        )}
      </button>
    </form>
  )
}
