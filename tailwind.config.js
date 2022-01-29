const tailwindcssForms = require('@tailwindcss/forms');

module.exports = {
  content: [
    './views/**/*.hbs',
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    tailwindcssForms,
  ],
};
