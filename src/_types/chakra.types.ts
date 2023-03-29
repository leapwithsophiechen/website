import { Theme } from '@chakra-ui/react';

import type {
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';

export interface StyleOptions {
  colorMode: 'light' | 'dark';
  colorScheme: string;
  theme: Theme;
}

export type StyleInterpolation = SystemStyleObject | SystemStyleFunction;

export interface StyleConfig {
  baseStyle: StyleInterpolation;
  defaultProps?: {
    size: string;
    variant: string;
  };
  sizes: { [size: string]: StyleInterpolation };
  variants?: { [variant: string]: StyleInterpolation };
}
