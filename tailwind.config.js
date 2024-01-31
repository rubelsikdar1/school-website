/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
  ],
}
