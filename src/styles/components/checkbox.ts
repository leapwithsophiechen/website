//* https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/checkbox.ts

import { StyleConfig } from '@/types';

export const Checkbox: StyleConfig = {
  //
  baseStyle: (props) => {
    const { colorMode } = props;

    return {
      control: {
        _checked: {
          _hover: {
            bg: colorMode === 'dark' ? 'brand.pink' : 'brand.pink',
          },
          bg: colorMode === 'dark' ? 'brand.pink' : 'brand.pink',
          borderColor: colorMode === 'dark' ? 'gray.700' : 'gray.700',
          color: colorMode === 'dark' ? '#000000' : '#000000',
        },
        _focus: {
          bg: colorMode === 'dark' ? '#ffffff' : '#ffffff',
          borderColor: colorMode === 'dark' ? 'brand.pink' : 'brand.pink',
          boxShadow:
            colorMode === 'dark' ? '0 0 0 2px #E9BCB7' : '0 0 0 2px #E9BCB7',
          color: colorMode === 'dark' ? '#1f1841' : '#1f1841',
          zIndex: 1,
        },
        bg: colorMode === 'dark' ? 'gray.100' : 'gray.100',
        border: '1px solid',
        borderColor: colorMode === 'dark' ? 'gray.400' : 'gray.500',

        // color: '#000000',
      },
    };
  },

  sizes: {},
};
