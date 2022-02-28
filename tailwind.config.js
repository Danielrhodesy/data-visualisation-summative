const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
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
