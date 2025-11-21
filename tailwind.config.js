export default {
  content: [
    "./*.html", // semua file HTML di root
    "./js/**/*.js", // semua file JS di folder js/
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4f46e5", // Indigo Tailwind
          light: "#6366f1",
          dark: "#4338ca",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
