/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./index.html",
        "./src/*.{js,jsx,ts,tsx}"
      ],
  theme: {
    extend: {
        colors: {
            sky: {
                50: "#f0f9ff",
                100: "#e0f2fe",
                200: "#bae6fd",
                300: "#7dd3fc",
                400: "#38bdf8",
                500: "#0ea5e9",
                600: "#0284c7",
                700: "#0369a1",
                800: "#075985",
                900: "#0c4a6e",
            },
            teal: {
                950: "rgb(4 47 46)"
            },
            emerald: {
                50: "rgb(236 253 245)",
                100: "rgb(209 250 229)",
                200: "rgb(167 243 208)",
                300: "rgb(110 231 183)",
                400: "rgb(52 211 153)",
                500: "rgb(16 185 129)",
                600: "rgb(5 150 105)",
                700: "rgb(4 120 87)",
                800: "rgb(6 95 70)",
                900: "rgb(6 78 59)",
                950: "rgb(2 44 34)",
            }
        },
        
        fontSize: {
            '10xl': ['9rem', { lineHeight: '1' }],
        }
    },
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px', // Custom breakpoint for 4xl screen size
      },
  },
  plugins: [],
});

