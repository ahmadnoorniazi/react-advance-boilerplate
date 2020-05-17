import React, { Component } from 'react';

class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <h1>
          There was an error with this page.
          {' '}
          <a href="/">Go to Homepage</a>
        </h1>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
