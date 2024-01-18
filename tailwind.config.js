/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bibdpurple: '#881861',
        bibdgray: '#707174',
        bibdyellow: '#EACA3C'
      }
    },
  },
  plugins: [],
}