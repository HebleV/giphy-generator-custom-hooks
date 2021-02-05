import React from "react";
import * as Sentry from "@sentry/react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! seems some error occured</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
