/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html", "./js/**/*.js"],
  // Di v4, theme configuration sedikit berbeda
  theme: {
    extend: {
      colors: {
        // Pastikan color palette tersedia
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        blue: {
          400: "#4299e1",
          600: "#3182ce",
        },
      },
    },
  },
};
