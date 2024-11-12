/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["righteous", "sans-serif"],
        funnel: ["Funnel Sans", "sans-serif"],
      },
      backgroundImage: {
        "line-svg": "url('/images/line.svg')",
      },
      colors: {
        primary: {
          DEFAULT: "#3400C0", // Couleur principale par défaut
          light: "#4000F0", // Variante claire
          dark: "#160052", // Variante foncée
        },
        secondary: {
          DEFAULT: "#FFD4FC", // Couleur secondaire par défaut
          light: "#FFEBFE", // Variante claire
          dark: "#B300A7", // Variante foncée
        },
        accent: "#FFE82A", // Couleur accentuée
      },
    },
  },
  plugins: [],
};
