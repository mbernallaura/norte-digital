/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        openSans:['Open Sans', 'sans-serif']
      },
      colors:{
        blueDark: '#192843',
        blueLight: '#279aff',
        blueDarksito: '#147cc9',
        grey: '#99a4b9',
        greyLight: '#d8e4f0',
        backGround: '#f6f7fa'
      }
    },
  },
  plugins: [],
}
