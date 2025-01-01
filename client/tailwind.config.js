/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url{`http://localhost:8000/uploads/images/${latest.image}`}",
      }
    },
    plugins: [],
    darkMode: 'class',
  }
}
