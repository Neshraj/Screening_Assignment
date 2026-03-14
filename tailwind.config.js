/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        brand: {
          rose:   '#F43F5E',
          green:  'rgb(78,148,88)',
          dark:   '#111111',
          cream:  '#F8F6F2',
          card:   '#FFFFFF',
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.5s ease both',
        'spin-slow': 'spin 1s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}