import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { ErrorState } from './error-state'

/** errorElement for the route tree — renders a friendly page for 404s and crashes. */
export function RouteError() {
  const error = useRouteError()

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <ErrorState
        code={404}
        title="Page not found"
        message="The page you're looking for doesn't exist or may have moved."
      />
    )
  }

  const code = isRouteErrorResponse(error) ? error.status : 500
  return (
    <ErrorState
      code={code}
      title="Something went wrong"
      message="An unexpected error occurred. Please try reloading the page."
    />
  )
}
