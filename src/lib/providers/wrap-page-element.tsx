import { theme } from '@/styles/chakra';
import { WrapPageElement } from '@/types';
import { Layout } from '@/ui/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import queryString from 'query-string';
import React from 'react';

function Component({ element, props }: WrapPageElement) {
  //
  const { location, uri } = props;
  const { pathname } = location;
  const { search } = location;
  const queryStrings = queryString.parse(search);

  return (
    <ChakraProvider theme={theme}>
      <Layout fullPath={uri} queryStrings={queryStrings}>
        {element}
      </Layout>
    </ChakraProvider>
  );
}

export const wrapPageElement = Component;
