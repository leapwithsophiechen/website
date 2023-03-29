//* https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/textarea.ts

import { StyleConfig } from '@/types';

export const Textarea: StyleConfig = {
  baseStyle: {
    _autofill: {
    },
    fontFamily: 'Lato',
    fontWeight: 400,
    lineHeight: 'short',
    minHeight: '80px',
    paddingY: '8px',
    verticalAlign: 'top',
  },

  sizes: {
    lg: {
      field: {
        fontSize: 'sm',
      },
    },
  },

  variants: {
    outline: (props) => {
      const { colorMode } = props;

      return {
        _focus: {
          bg: colorMode === 'dark' ? '#ffffff' : '#ffffff',
          borderColor: colorMode === 'dark' ? 'brand.pink' : 'brand.pink',
          boxShadow:
            colorMode === 'dark' ? '0 0 0 2px #E9BCB7' : '0 0 0 2px #E9BCB7',
          zIndex: 1,
        },
        _hover: {
          borderColor: colorMode === 'dark' ? 'brand.pink' : 'brand.pink',
        },
        _placeholder: {
          color: colorMode === 'dark' ? '#686777' : '#686777',
          textTransform: 'uppercase',
        },
        bg: colorMode === 'dark' ? '#ffffff' : '#ffffff',
        border: '2px solid',
        borderColor: colorMode === 'dark' ? 'gray.200' : 'gray.200',
        color: colorMode === 'dark' ? '#000000' : '#000000',
        transition: 'all .3s ease-out',
      };
    },
  },
};
