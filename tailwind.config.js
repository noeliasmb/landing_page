/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'translate-x-0',
    '-translate-x-full',
    'opacity-0',
    'opacity-100',
    'pointer-events-none',
    'pointer-events-auto',
  ],
  plugins: [],
}
