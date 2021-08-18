module.exports = {
  purge: ['./src/**/*.{tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      primary: '#297F87',
      secondary: '#DF2E2E',
      alternative: '#FFF7AE'
    }),
    textColor: {
      primary: '#FFF7AE',
      secondary: '#FFF7AE',
      alternative: '#297F87'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
