/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }
      xso: "375px",
      xsm: "425px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      ipad: "820px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      normal: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
