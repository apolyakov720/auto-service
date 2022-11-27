import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children, indicator } = this.props;

    if (hasError) {
      return indicator;
    }

    return children;
  }
}

export default ErrorBoundary;
