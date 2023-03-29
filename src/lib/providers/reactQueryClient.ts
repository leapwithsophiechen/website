import { QueryCache, QueryClient } from 'react-query';

export const queryCache = new QueryCache();

export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
  queryCache,
});
