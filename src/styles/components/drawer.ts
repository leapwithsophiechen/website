//* https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/drawer.ts

import { StyleConfig } from '@/types';

export const Drawer: StyleConfig = {
  //
  baseStyle: (props) => {
    const { colorMode } = props;

    return {
      dialog: {
        bg: colorMode === 'dark' ? '#ffffff' : '#ffffff',
      },
      header: {
        bg: colorMode === 'dark' ? '' : '',
        paddingBottom: '0.75rem',
        paddingTop: '0.75rem',
      },
    };
  },

  sizes: {},

  variants: {},
};
