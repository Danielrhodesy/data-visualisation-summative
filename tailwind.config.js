const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or "media" or "class"
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      sky: colors.sky
    },
    extend: {
      backgroundImage: theme => ({
        "home": "url('./assets/home.jpg')",
        "help": "url('./assets/help.jpg')",
      }),
    }
  },
  variants: {
    extend: {
      opacity: ["disabled"]
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
