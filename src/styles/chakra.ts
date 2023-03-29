import { StyleOptions } from '@/types';
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Button } from './components/button';
import { Checkbox } from './components/checkbox';
import { Drawer } from './components/drawer';
import { Input } from './components/input';
import { Textarea } from './components/textarea';

const config: ThemeConfig = {
  initialColorMode: 'system',
  //* useSystemColorMode -> Page refresh causes site to adopt system's color mode
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors: {
    brand: {
      'gray-1': '#666666',
      'gray-2': '#52575B',
      'gray-3': '#272A2C',
      'gray-4': '#1F2123',
      green: '#5e745d',
      pink: '#E9BCB7',
      brown: '#7C3238',
      brownShaded: '#63282d',
      brownTinted: '#89474c',
    },
    gray: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      50: '#F9FAFB',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    status: {
      warning: '#ffc107',
      error: '#dc3545',
      success: '#28a745',
    },
  },
  components: { Button, Checkbox, Drawer, Input, Textarea },
  config,
  styles: {
    global: (props: StyleOptions) => {
      //
      const { colorMode } = props;

      return {
        body: {
          margin: 0,
          overflowY: 'scroll',
        },
        'html, body': {
          backgroundColor: colorMode === 'dark' ? '#ffffff' : '#ffffff',
        },
      };
    },
  },
});
