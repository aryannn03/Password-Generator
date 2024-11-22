/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        josefin: ['"Josefin Sans"', 'sans-serif'],
        'dancing': ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'custom': '-1px 1px 10px rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [],
}

