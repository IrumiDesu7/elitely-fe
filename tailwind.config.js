/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: "#B2294B",
      "brand-dark": "#851F38",
      "brand-light": "#F7EAED",
      secondary1: "#E4BC28",
      "secondary1-light": "#FCF8E9",
      secondary2: "#32C08D",
      "secondary2-light": "#EAF9F4",
      black: "#1E1E1E",
      "grey-content": "#878787",
      "grey-border": "#E0E0E0",
      "grey-foreground": "#F0F0F0",
      "grey-background": "#FAFAFA",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
