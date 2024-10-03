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
        'Network': "url('src/Components/assets/404.jpg')",
      },
    },
  },
  plugins: [],
};
