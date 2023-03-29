module.exports = {
  darkMode: 'class',
  mode: 'jit',
  plugins: [require('@tailwindcss/aspect-ratio')],
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/styles/react-slick.css'],
  theme: {
    extend: {
      colors: {
        'brand-gray-1': '#666666',
        'brand-gray-2': '#52575B',
        'brand-gray-3': '#272A2C',
        'brand-gray-4': '#1F2123',
        'brand-green': '#5e745d',
        'brand-green-shaded': '#4b5d4a',
        'brand-green-tinted': '#6e826d',
        'brand-pink': '#E9BCB7',
        'brand-brown': '#7C3238',
        'brand-brown-shaded': '#63282d',
        'brand-brown-tinted': '#89474c',
        'heading-dark': '#1f1841',
        'text-dark': '#1f1841',
        'light-bg': '#F8F7FD',
        'status-warning': '#ffc107',
        'status-error': '#dc3545',
        'status-success': '#28a745',
      },
    },
    fontFamily: {
      sans: ['Montserrat'],
      serif: ['Frank Ruhl Libre'],
      cursive: ['Dancing Script'],
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      '2md': '800px',
      '3md': '860px',
      lg: '1024px',
      '2lg': '1200px',
      xl: '1280px',
      '2xl': '1536px',
    },
    zIndex: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      99: 99,
      100: 100,
    },
  },
  variants: {
    extend: {},
  },
  xwind: {
    mode: 'objectstyles',
  },
  // important: true,
};