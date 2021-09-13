module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {

    },
    backgroundColor: theme => ({
      primary: '#1A3365',
      secondary: '#FFBB00',
      alternative: '#FF4343',
      light: "#EEEEEE",
      dark: "#171717"
    }),
    textColor: {
      primary: '#FFBB00',
      secondary: '#1A3365',
      alternative: '#FF4343'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
