module.exports = {
  content: [
    "./views/**/*.hbs"
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
