/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#8E3FEF",
        },
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C7FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221F3D",
          200: "#0F0D23",
        },
        accent: "#AB8BFF",
      },
      fontFamily: {
        sans: ["Inter", "System"],
      },
      borderRadius: {
        card: "1.25rem",
      },
    },
  },
  plugins: [],
};
