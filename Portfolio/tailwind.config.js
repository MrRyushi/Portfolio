/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./index.html",
        "./src/*.{js,jsx,ts,tsx}"
      ],
  theme: {
    extend: {
        colors: {
            "moon1": "#212A31",
            "moon2": "#2E3944",
            "moon3": "#124E66",
            "moon4": "#748D92",
            "moon5": "#D3D9D4"
        }
    },
  },
  plugins: [],
}

