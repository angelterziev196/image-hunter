/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
      heroColor: 'rgba(173, 173, 173, 0.3)',
      ebony: '#111827',
      ebonyClay: '#1F2937',
      white: '#ffffff',
      black: '#000000',
      malibu: '#6bbbff',
      silver: '#E6E6E6',
      silverChalice: '#ADADAD',
      wildRed: '#FE3E61',
      silverChaliceTransparent: 'rgba(173, 173, 173, 0.3)',
      darkHeroBackground: 'rgba(31, 41, 55, 0.3)'
    },
    extend: {
      margin: {
        100: '100px',
        200: '200px'
      },
      maxWidth: {
        100: '100px',
        240: '240px',
        600: '600px',
        500: '500px',
        1300: '1300px',
        50: '50px'
      },
      backgroundImage: {
        'hero-background':
          "url('https://images.unsplash.com/photo-1546630847-99ebc5d94aa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80')"
      }
    }
  },
  plugins: []
};
