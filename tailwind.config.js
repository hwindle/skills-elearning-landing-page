/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    colors: {
      'sk-light-grey': '#83869A',
      'sk-navy': '#13183F',
      'sk-violet': '#666CA3',
      'sk-bright-pink': '#F74780',
      'sk-light-pink': '#FFA7C3',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'sk-pink-grad-top': '#F02AA6',
      'sk-pink-grad-btm': '#FF6F48',
      'sk-viol-grad-top': '#4851FF',
      'sk-viol-grad-btm': '#F02AA6',
      'sk-bg-light-grey': '#F6F6Fd',
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

