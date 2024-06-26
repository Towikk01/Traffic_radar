/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'strong-radial-gradient': 'radial-gradient(circle, #FFFFFF 30%, #444444 70%, #000000 100%)'
      },
    },
  },
  plugins: [],
};
