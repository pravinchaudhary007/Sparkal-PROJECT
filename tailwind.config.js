/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',         
  ],
  theme: {
    extend: {
      backgroundImage: {
        'line': "url('src/Components/assets/lineimg.jpg')",
        'jeweline': "url('src/Components/assets/linenew.jpg')",
        'Trendingline': "url('src/Components/assets/lineImg.jpg')",
        'summer': "url('src/Components/assets/summer.jpg')",
        'blueline': "url('src/Components/assets/blueline.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translate(-50%, -50%) scale(2)' },
          '10%': { opacity: '0.2', transform: 'translate(-40%, -40%) scale(1.8)' },
          '20%': { opacity: '0.4', transform: 'translate(-30%, -30%) scale(1.6)' },
          '30%': { opacity: '0.6', transform: 'translate(-20%, -20%) scale(1.4)' },
          '40%': { opacity: '0.8', transform: 'translate(-10%, -10%) scale(1.2)' },
          '50%': { opacity: '1', transform: 'translate(0, 0) scale(1)' },
          '60%': { opacity: '1', transform: 'translate(0, 0) scale(1)' },
          '70%': { opacity: '1', transform: 'translate(0, 0) scale(1)' },
          '80%': { opacity: '1', transform: 'translate(0, 0) scale(1)' },
          '90%': { opacity: '1', transform: 'translate(0, 0) scale(1)' },
          '100%': { opacity: '1', transform: 'translate(0, 0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
