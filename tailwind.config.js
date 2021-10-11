const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      center: true,
    },
    extend: {
      width: {
        94: '22rem',
      },
      gridColumn: {
        'span-15': 'span 15 / span 15',
      },
      gridTemplateColumns: {
        track: 'repeat(auto-fit, minmax(300px, 1fr))',
        logo: 'repeat(auto-fit, minmax(50px, 1fr))',
      },
      spacing: {
        18: '18px',
        100: '41rem',
      },
      colors: {
        'color-primary': 'var(--text-color-primary)',
        'color-secondary': 'var(--text-color-secondary)',
        'background-dark': 'var(--background-dark)',
        'background-darker': 'var(--background-darker)',
        'background-darkest': 'var(--background-darkest)',
        'frame-yellow': '#F9C131',
        'frame-red': '#E04637',
        'frame-blue': '#565DA7',
        'frame-dark-green': '#2A504B',
        'frame-green': '#9FA431',
        'frame-gray': '#808080',
        'color-bright': '#FFFFFFFF',
        'color-new': '#F9F9F9',
        'frame-lgray': '#666666',
        'color-edark': '#17171D',
        platinum: '#848884',
        'frame-xgray': '#333333',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      mid: { max: '1150px' },
      // => @media (max-width: 1150px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      mlg: { max: '880px' },

      md: { max: '760px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '380px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
};
