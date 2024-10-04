/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#3A4256',
          base: '#FFFFFF',
        },
      },
    ],
  },
  theme: {
    extend: {
      container: {
        center: true, // This ensures the container is centered
        padding: '1rem', // Add some padding by default
        screens: {
          '2xl': '1440px', // Custom width for 2xl breakpoint
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
