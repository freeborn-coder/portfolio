module.exports = {
  mode: 'jit',
  purge: [
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'roboto':['Roboto']
      },
      colors:{
        'primary-dark':'#221C31',
        'line-color':'#4D416A',
        'medium-grey':'#969696'
      },
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
