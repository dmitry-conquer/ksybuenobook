module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "620px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FCE8E9",
        },
        secondary: {
          DEFAULT: "#F68F02",
          light: "#FDB515",
        },
        tertiary: {
          DEFAULT: "#79CCEE",
        },
        dark: "#131313",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
      },
    },
  },
};
