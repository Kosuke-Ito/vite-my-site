/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            li: {
              listStyle: 'none'
            }
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {},
}
