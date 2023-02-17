import { Component } from "react";

import classes from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    // We can log the error or send it to a server
    // for analytics or whatever we wanna do
    console.log(error);

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
