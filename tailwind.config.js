/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xp-blue': '#0054e3',
        'xp-green': '#73d216',
        'xp-taskbar': '#245edb',
        'xp-start': '#245edb',
        'xp-gray': '#ece9d8',
      },
      fontFamily: {
        'tahoma': ['Tahoma', 'sans-serif'],
      },
      backgroundImage: {
        'xp-desktop': 'linear-gradient(180deg, #87ceeb 0%, #98fb98 100%)',
        'xp-hill': 'radial-gradient(ellipse at center bottom, #32cd32 0%, #228b22 50%, #006400 100%)',
      },
      boxShadow: {
        'xp-inset': 'inset 1px 1px 0px rgba(255,255,255,0.5), inset -1px -1px 0px rgba(0,0,0,0.25)',
        'xp-raised': '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.25)',
      }
    },
  },
  plugins: [],
}
