/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backgroundWhite: 'rgba(255, 255, 255)',
        backgroundGreen: 'rgba(12, 166, 128)',
        blue: 'rgba(94, 174, 235)'
      },
      fontFamily :{
        headers: ['Poppins'],
        paragraphs: ['Noto Sans']
      }
    },
  },
  plugins: [],
}

