// import React from 'react'
// import * as Sentry from "@sentry/react";
// import RandomGiphy from "../src/components/RandomGiphy";

// <Sentry.ErrorBoundary fallback={"An error has occurred"}>
//   <RandomGiphy />
// </Sentry.ErrorBoundary>;

import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error)
    console.info(error)
  }

  render() {
    if (this.state.hasError) {
      return <div>Oops! seems some error occured</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
