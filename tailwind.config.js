/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#111827",
        muted: "#64748B",
        line: "#E2E8F0",
        accent: "#2563EB",
        accentSoft: "#DBEAFE",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.07)",
      },
    },
  },
  plugins: [],
}
