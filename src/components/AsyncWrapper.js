import React, { Suspense } from "react"
import ErrorBoundary from "./ErrorBoundary"
import Loader from "./Loader"

const AsyncWrapper = ({ errorFallback, children }) => {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default AsyncWrapper
