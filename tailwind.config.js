module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        "pitch-black": "#2b2b2b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
