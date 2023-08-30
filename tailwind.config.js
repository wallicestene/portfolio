/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: 'Space Grotesk',
      },
      colors:{
        secondary:'#F2F2F2',
        primary:'#1A1A1A'
      },animation:{
        "spin-slow":"spin 20s linear infinite",
      }
    },
  },
  plugins: [],
}