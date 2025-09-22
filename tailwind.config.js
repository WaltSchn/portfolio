/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundCenter: "#362644", // bg gradient
        backgroundEdge: "#140627", // bg gradient
        primary: "#F84CA1", // pink
        text: "#EFE7F8", // light purple
        accent: "#6F4E8C", // purple
        lightAccent: "#FFA8D3", //light pink
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        kufi: ["var(--font-kufi)", "sans-serif"],
      },
fontSize: {
  xs: ['0.875rem', '1.25rem'],   // 14px
  sm: ['1rem', '1.5rem'],        // 16px
  base: ['1.125rem', '1.75rem'], // 18px
  lg: ['1.25rem', '1.75rem'],    // 20px
  xl: ['1.5rem', '2rem'],        // 24px
  '2xl': ['2rem', '2.5rem'],     // 32px
  '3xl': ['2.5rem', '2.75rem'],  // 40px
  "4xl": ['3.75rem', '1.1'],  // 60px
},
    },
  },
  plugins: [],
};
