/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A192F', // Dark Blue - Main brand color
          light: '#152A4A',   // Lighter shade for hover states
          dark: '#060D1B',    // Darker shade for active states
        },
        secondary: {
          DEFAULT: '#00A8E8', // Cyan - Secondary actions and highlights
          light: '#33B9ED',   // Lighter shade for hover states
          dark: '#0086BA',    // Darker shade for active states
        },
        accent: {
          DEFAULT: '#FF6B6B', // Vibrant Red - Call to actions and important elements
          light: '#FF8F8F',   // Lighter shade for hover states
          dark: '#FF4747',    // Darker shade for active states
        },
        background: {
          DEFAULT: '#F8F9FA', // Light Gray - Main background
          card: '#FFFFFF',    // White - Card background
          dark: '#E9ECEF',    // Darker shade for secondary backgrounds
        },
        text: {
          primary: '#0A192F',   // Dark Blue - Primary text
          secondary: '#4A5568', // Gray - Secondary text
          light: '#FFFFFF',     // White - Text on dark backgrounds
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};