const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.blue,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    dropShadow: {
      title: ['0 1px 1px rgba(0,0,0,0.5)'],
      summary: ['0 1px 1px rgba(0,0,0,0.2)'],
    },
    extend: {
      fontFamily: {
        'nova-flat': ['"Nova Flat"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: ['1.5rem', { lineHeight: '2rem' }],
        summary: ['1.1rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  plugins: [],
};
