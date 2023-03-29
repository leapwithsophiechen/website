import React from 'react';

interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function Component(props: FallbackProps) {
  //
  const { error, resetErrorBoundary } = props;

  return (
    <div role="alert">
      <p>Something unexpected happened.</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export const ErrorFallback = Component;
