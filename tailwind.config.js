module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        float1: 'float1 6s ease-in-out 3s infinite',
        fadeIn: 'fadeIn 8s ease-in forwards',
      },
      keyframes: {
      },  
      float: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
        '100%': { transform: 'translateY(0)' },
      },
      float1: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(10px)' },
        '100%': { transform: 'translateY(0)' },
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      backdropFilter: {
        'blur-sm': 'blur(10px)',
      },
      zIndex: {
        '100': '100',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}