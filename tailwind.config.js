module.exports = {
  mode: 'jit',
  purge: [
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'rowdies':['rowdies']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
