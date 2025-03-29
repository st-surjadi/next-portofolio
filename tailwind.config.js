/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "var(--color-light-hover)",
        darkHover: "var(--color-dark-hover)",
        darkTheme: "var(--color-dark-theme)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "var(--box-shadow-black)",
        white: "var(--box-shadow-white)",
      },
    },
  },
  plugins: [],
};
