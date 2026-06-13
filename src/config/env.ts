import { z } from 'zod'

/**
 * Parse + validate client env once, at boot, so a misconfigured value fails
 * immediately with a clear message instead of deep inside a fetch (KB rule 01).
 * Only `VITE_`-prefixed vars are exposed to the client by Vite.
 */
const schema = z.object({
  // Where the contact form POSTs. Optional — unset falls back to a simulated send.
  VITE_CONTACT_ENDPOINT: z.url().optional(),
})

const parsed = schema.safeParse({
  // Treat an empty string as "unset".
  VITE_CONTACT_ENDPOINT: import.meta.env.VITE_CONTACT_ENDPOINT || undefined,
})

if (!parsed.success) {
  console.error('nvalid environment variables:', z.flattenError(parsed.error).fieldErrors)
  throw new Error('Invalid environment configuration — see console.')
}

export const env = parsed.data
