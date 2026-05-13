/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EEF3FF",
          100: "#DDE8FF",
          200: "#C3C3FA",
          300: "#9DC3FA",
          400: "#7B61FF",
          500: "#6C49F5",
          700: "#5F37F0",
          800: "#4F2FD0",
        },
        graphite: "#020219",
        muted: "#7E87B6",
        line: "#D8D9F2",
        accent: "#5F37F0",
        accentSoft: "#E8ECFF",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0, 0, 48, 0.09)",
      },
    },
  },
  plugins: [],
}
