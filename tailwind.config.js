const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['var(--font-roboto-normal)', ...fontFamily.sans],
        robotoLight: ['var(--font-roboto-light)', ...fontFamily.sans],
        quick: ['var(--font-quick)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#ffffff',
        primary: '#00b768',
        primaryDark: '#039054',
        secondary: '#43425d',
      }
    },
  },
  plugins: [],
}
