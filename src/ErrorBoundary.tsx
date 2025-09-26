import React from 'react';

type ErrorBoundaryState = { hasError: boolean; error?: Error };

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h1 style={{ fontWeight: 700, color: '#b91c1c' }}>Something went wrong.</h1>
          <p style={{ color: '#374151' }}>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: undefined })} style={{ marginTop: 12, padding: '8px 12px', background: '#2563eb', color: '#fff', borderRadius: 6 }}>
            Dismiss
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
