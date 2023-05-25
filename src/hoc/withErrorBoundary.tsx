import React, { ErrorInfo, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

export default function withErrorBoundary(Component: () => JSX.Element) {
  return class WithErrorBoundary extends React.Component<Props> {
    public state = {
      hasError: false,
      errorMessage: '',
    };

    public static getDerivedStateFromError(error: Error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true, errorMessage: error.message };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error('Uncaught error:', error, errorInfo.componentStack);
      this.setState({ hasError: true, errorMessage: error.message });
    }

    public render() {
      if (this.state.hasError) {
        return <Navigate to="/error" state={{ ...this.state }} />;
      } else return <Component />;
    }
  };
}
