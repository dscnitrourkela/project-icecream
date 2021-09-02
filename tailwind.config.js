
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
    gridColumn: {
      'span-15': 'span 15 / span 15',
    },
    gridTemplateColumns: {
      track: 'repeat(auto-fit, minmax(300px, 1fr))',
      logo: 'repeat(auto-fit, minmax(50px, 1fr))',
    },
    spacing: {
      100: '41rem',
    },
    colors: {
      'color-primary': 'var(--text-color-primary)',
      'color-secondary': 'var(--text-color-secondary)',
      'background-dark': 'var(--background-dark)',
      'background-darker': 'var(--background-darker)',
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

    md: { max: '760px' },
    // => @media (max-width: 767px) { ... }

    sm: { max: '639px' },
    // => @media (max-width: 639px) { ... }
  },
},
variants: {
  extend: {},
},
plugins: ['gatsby-plugin-postcss'],
};
