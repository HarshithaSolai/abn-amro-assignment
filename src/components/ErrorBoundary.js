import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2 className="text-2xl text-abnamro-green">
        Something went wrong. Please try again later.
      </h2>;
    }

    return this.props.children;
  }
}
