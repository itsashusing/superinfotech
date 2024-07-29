/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
