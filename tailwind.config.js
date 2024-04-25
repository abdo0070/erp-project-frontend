/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-dark': '#00000050',
        'dull-white': '#FFFFFFB3',
        'white-light': '#FFFFFF30',
        'white-medium': '#FFFFFF40',
        'neon-blue': '#2FB8FF',
        'footer-header' : '#4388D9',
        'blue' : '#0241BB',
      },
      backgroundImage: {
        'job-bg': "url('/public/img/notebook.jpeg')",
      }
    },
  },
  plugins: [],
}

