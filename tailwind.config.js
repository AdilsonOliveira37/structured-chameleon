/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f8ff',
          100: '#e6f1ff',
          200: '#c8dcff',
          300: '#a9c7ff',
          400: '#7ba9ff',
          500: '#4d8bff',
          600: '#3a6ed5',
          700: '#2a4d96',
          800: '#1a2c57',
          900: '#0a0d18',
        },
        secondary: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#dcdcdc',
          300: '#c7c7c7',
          400: '#9e9e9e',
          500: '#757575',
          600: '#5d5d5d',
          700: '#3e3e3e',
          800: '#202020',
          900: '#0a0a0a',
        },
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: theme('colors.primary.500'),
        'primary-100': theme('colors.primary.100'),
        secondary: theme('colors.secondary.500'),
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: theme('colors.primary.500'),
        secondary: theme('colors.secondary.500'),
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: theme('colors.primary.500'),
        secondary: theme('colors.secondary.500'),
      }),
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        primary: theme('colors.primary.500'),
        secondary: theme('colors.secondary.500'),
      }),
      backgroundImage: {
        '   ': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
