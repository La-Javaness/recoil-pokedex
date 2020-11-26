import React, { Component } from "react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error("Crash:", error, info)
  }

  render() {
    const { children } = this.props
    const { error } = this.state

    if (error) {
      const errorMessage = this.props.fallback || "Oups, sometinh went wrong"
      return <div>{errorMessage}</div>
    }
    return children
  }
}

export default ErrorBoundary
