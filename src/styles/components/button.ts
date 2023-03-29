//* https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/button.ts

import { StyleConfig } from '@/types';

export const Button: StyleConfig = {
  //
  baseStyle: {
    _disabled: {
      boxShadow: 'none',
      cursor: 'not-allowed',
      opacity: 0.4,
    },
    _focus: {
      boxShadow: 'outline',
    },
    _hover: {
      _disabled: {
        bg: 'initial',
      },
    },
    borderRadius: 'sm',
    fontWeight: 'semibold',
    lineHeight: '1.2',
    transitionDuration: 'normal',
    transitionProperty: 'common',
  },

  sizes: {
    lg: {
      fontSize: 'md',
      h: 12,
      minW: 12,
      px: 6,
    },
    md: {
      fontSize: 'sm',
      h: 10,
      minW: 10,
      px: 4,
    },
    sm: {
      fontSize: 'sm',
      h: 8,
      minW: 8,
      px: 3,
    },
    xs: {
      fontSize: 'xs',
      h: 6,
      minW: 6,
      px: 2,
    },
  },

  variants: {
    solid: (props) => {
      const { colorMode } = props;

      return {
        _hover: {
          bg: colorMode === 'dark' ? 'gray.100' : 'brand.greenShaded',
          borderColor: colorMode === 'dark' ? '#ffffff' : '#ffffff',
        },
        bg: colorMode === 'dark' ? '#ffffff' : 'brand.green',
        border: '1px solid',
        borderColor: colorMode === 'dark' ? '#ffffff' : '#ffffff',
        color: colorMode === 'dark' ? 'brand.green' : '#ffffff',
        fontFamily: 'Lato, sans-serif',
        fontSize: '1rem',
        fontWeight: '700',
        minWidth: '160px',
        outline: 'none',
        padding: '0 30px',
        textDecoration: 'none',
        textTransform: 'capitalize',
        transition: 'all .2s ease-out',
      };
    },
  },
};
