/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center:true,
      padding: '16px',
    },
    extend: {
      screens : {
        '2xl' : '1230px',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['light', 'dark']
  },
  darkMode: ['class', '[data-theme="dark"]']
}

