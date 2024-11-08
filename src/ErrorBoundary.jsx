import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    //send to trackjs
    console.error("ErrorBoundary caught some stupid error", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            There was an error with this page. <Link to="/">Click here</Link> to go backk to the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.getDerivedStateFromError()

const eb = new ErrorBoundary()
eb.lol();

export default ErrorBoundary;

