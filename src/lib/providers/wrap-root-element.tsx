import { ErrorFallback } from '@/components';
import { store } from '@/store';
import { setInitialColorMode } from '@/ui/ModeSelector';
import LogRocket from 'logrocket';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet';
import { QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { GlobalStyles } from 'twin.macro';
import { reactQueryClient } from './reactQueryClient';
import '@/styles/base.css';
import '@/styles/react-slick.css';

const isDev = process.env.NODE_ENV === 'development';

interface Props {
  element: JSX.Element;
}

LogRocket.init(process.env.GATSBY_LOG_ROCKET_ID);

//* Component
const Component = ({ element }: Props) => {
  const handleError = (error: Error, info: { componentStack: string }) => {
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-console
    console.log(info);
  };

  // const handleErrorReset = () => {};

  //* Effects
  React.useEffect(() => {
    //

    setInitialColorMode();
  }, []);

  //* Markup
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      <Helmet>
        <meta
          content={process.env.GATSBY_GOOGLE_SITE_VERIFICATION}
          name="google-site-verification"
        />
      </Helmet>
      <ReduxProvider store={store}>
        <GlobalStyles />
        <QueryClientProvider client={reactQueryClient}>
          {element}
        </QueryClientProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
};

const Wrapper = ({ element }: { element: JSX.Element }) => (
  <Component element={element} />
);

export const wrapRootElement = Wrapper;
