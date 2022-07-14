/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      screens: {
        'sm': '475px',
        // => @media (max-width: 475px) { ... }
    },
    colors: {
      'color-primary': '#15313F',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '475px',
          },
        }
      })
    }
  ],
}
