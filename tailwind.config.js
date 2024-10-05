/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

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
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-responsive': {
          'overflow-y': 'auto',
          'max-height': '100vh',
        },
        // Add your custom scrollbar styles here
        '::-webkit-scrollbar': {
          width: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: '#dbd2b7                                ',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#c4b2a5',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#a58f84',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
