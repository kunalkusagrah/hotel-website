/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#faf8f3',
          100: '#f5f0e8',
          200: '#ede3d0',
          300: '#dfd0b3',
          400: '#cdb892',
          500: '#bfa073',
          600: '#a8845a',
          700: '#8c6b48',
          800: '#72573d',
          900: '#5e4835',
        },
        forest: {
          50: '#f0f7f0',
          100: '#daeeda',
          200: '#b7ddb8',
          300: '#86c488',
          400: '#54a558',
          500: '#338836',
          600: '#256b28',
          700: '#1f5522',
          800: '#1c441f',
          900: '#18391b',
        },
        mahogany: {
          50: '#fdf5f3',
          100: '#fbe8e3',
          200: '#f8d4cb',
          300: '#f2b5a6',
          400: '#e98872',
          500: '#dd6347',
          600: '#c94830',
          700: '#a93926',
          800: '#8c3123',
          900: '#3d1209',
          950: '#2a0a06',
        },
        gold: {
          400: '#f0c04a',
          500: '#e8a820',
          600: '#c48d10',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        script: ['Dancing Script', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(60px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
