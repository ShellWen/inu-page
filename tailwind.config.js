/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        zpix: ['"Zpix"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
