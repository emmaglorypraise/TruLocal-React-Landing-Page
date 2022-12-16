/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
//       font-family: 'Bai Jamjuree', sans-serif;
// font-family: 'Inter', sans-serif;
// font-family: 'Mulish', sans-serif;
// font-family: 'Poppins', sans-serif;
      fontFamily: {
        "Bai-Jamjuree": ['"Bai Jamjuree"', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Mulish: ['Mulish', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      }, 
    },
  },
  plugins: [],
}