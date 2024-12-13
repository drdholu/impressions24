module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      scrollMargin: {
        30: '7.5rem', // Adds scroll-mt-30
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ['Poppins', 'sans-serif'],
        paperHeader: ['"Pirata One"', "sans-serif"],
        paperSubHead: ['"IM Fell French Canon"'],
        paperAttention: ['"Rye"'],
        paperNote: ['"Special Elite"'],
        paperMain: ['"IM Fell English"']
      },
      keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5px)' },
        },
        stretchX: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(1.2)' },
        },
        vibrate: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '20%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(1px, -1px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 1px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 8px #ff0000, 0 0 10px #ff0000, 0 0 12px #ff0000' }, // Red
          '33%': { textShadow: '0 0 8px #00ff00, 0 0 10px #00ff00, 0 0 12px #00ff00' }, // Green
          
          '66%': { textShadow: '0 0 8px #ff00ff, 0 0 10px #ff00ff, 0 0 12px #ff00ff' }, // Magenta
        },
        'scroll-horizontal': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      animation: {
        'unfold': 'unfold 3s ease-out forwards',
          float: 'float 3s ease-in-out infinite',
          float1: 'float1 3s ease-in-out infinite',
          stretchX: 'stretchX 2s ease-in-out infinite',
          vibrate: 'vibrate 0.2s linear infinite',
          glow: 'glow 1.5s ease-in-out infinite', // optional custom glow animation
          'scroll-horizontal': 'scroll-horizontal 20s linear infinite',
      },
  
      backgroundImage: {
        "parallax-1": "url('/public/MUSIC.jpg')",
        "parallax-2": "url('/public/DANCE.jpeg')",
        "parallax-3": "url('/public/ANC.jpg')",
        "parallax-4": "url('/public/CAMERA.jpg')",
        "parallax-5": "url('/public/SHOUTOUT.jpg')",
        "parallax-6": "url('/public/abhinay.jpg')",
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
