/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F4FD8",   // BLUE PRIMARY
        textdark: "#1E1E1E",  // MAIN TEXT
        lightbg: "#EEF2FF"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
