/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html/"],
  theme: {
    screens: {
      'mobile': '480px',
      // => @media (min-width: 480px) { ... }

      'tablet': '700px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },


    extend: {
      screens: {

        'xm': { 'min': '100px', 'max': '320px' },
        'mm': { 'min': '320px', 'max': '375px' },
        'ml': { 'min': '375px', 'max': '425px' },
        'extra': { 'min': '425px', 'max': '480px' },




      },
    },
  },


  
  plugins: [],
}

