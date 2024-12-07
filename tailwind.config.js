/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: 
    
    
    {
      boxShadow: {
        'custom-shadow': '0px 0px 15px 0px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        moveRight: 'moveRight 10s linear infinite',
        moveLeft: 'moveLeft 10s linear infinite',
        move: "move 10s linear infinite",
      },
      keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // move: {
        //   '0%': { transform: 'translateX(-100%)' },
        //   '100%': { transform: 'translateX(100%)' },
        // },
       
       
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
      fontFamily: {
        'graphik-arabicm': ['GraphikArabic-Medium', 'sans-serif'],
        'graphik-arabicb': ['GraphikArabic-Black', 'sans-serif'],
        'graphik-arabicbb': ['GraphikArabic-Bold', 'sans-serif'],
      },
     
      fontWeight: {
        'extra-bold': '900', // You can name it anything you like
      },
      fontStyle: {
        'normal': 'normal',
      },
    },
  },
  plugins: [],
}
