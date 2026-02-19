/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff8c00",
        "background-light": "#f8f7f5",
        "background-dark": "#0a0a0c",
        "background-dark-secondary": "#0f0f0f",
        "accent-silver": "#cbd5e1",
        "deep-blue": "#111827",
        "card-dark": "#1a1a1a",
        "border-dark": "#2d2d2d"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
