/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/images/background.avif')",
      },

      colors:{
        blue:{
          'btn': "#0067b8",
          'background': "#badbfa"
        }
      }
    },
  },
  plugins: [],
}
