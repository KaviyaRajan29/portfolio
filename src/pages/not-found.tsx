import { ErrorState } from '@/components/errors/error-state'

export function Component() {
  return (
    <ErrorState
      code={404}
      title="Page not found"
      message="The page you're looking for doesn't exist or may have moved."
    />
  )
}
