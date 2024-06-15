/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': 'rgb(4, 14, 113)',
      },
      borderColor: {
        'custom-gray': '#d1d5db',
        'custom-blue': '#3b82f6', 
      },
    },
  },
  plugins: [],
};
