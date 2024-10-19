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
        fadeIn: 'fadeIn 7.5s ease-in forwards',
        fadeInFloat: 'fadeInFloat 50s ease-in-out infinite',
      },
      keyframes: {
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
        fadeInFloat: {
          '0%': { 
            opacity: 0, 
            transform: 'translateY(0)' 
          },
          '15%': { 
            opacity: 1, 
            transform: 'translateY(0)' 
          },
          '60%': { 
            opacity: 1, 
            transform: 'translateY(-50px)' 
          },
          '100%': { 
            opacity: 1, 
            transform: 'translateY(0px)' 
          },
        },
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
    extend: {},
  },
  plugins: [],
}
