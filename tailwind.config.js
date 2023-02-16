/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#08021e',
          secondary: '#6e44ff',
          LiPurple: '#432d92',
          neutral: '#00bfff2f',

          'base-100': '#f1f1f1',

          info: '#432d92',

          shadowColor: '#6d44ff2d',

          warning: '#6d44ff2d',

          error: '#F76B69',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
});
