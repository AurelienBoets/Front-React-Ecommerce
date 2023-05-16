module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    // screens: {
    //   'sm':[
    //     {'min': '540px', 'max': '640px'},
    //     {'min': '768px', 'max': '867px'}
    //   ],
    // //   //  => @media (min-width: 640px and max-width: 767px) { ... }

    //   'md': {'min': '648px', 'max': '1023px'},
    //   //  => @media (min-width: 768px and max-width: 1023px) { ... }

    //   // 'lg': {'min': '1024px', 'max': '1279px'},
    //   //  => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   // 'xl': {'min': '1280px', 'max': '1535px'},
    //   //  => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   // '2xl': {'min': '1536px'},
    //    => @media (min-width: 1536px) { ... }
    // },
    extend: {
      colors: {
        primary: {
          light: "#4da6ff",
          DEFAULT: "#0B84FF",
          dark: "#0066cc",
        },
        secondary: {
          light: "#f39e58",
          DEFAULT: "#ed7410",
          dark: "#bf5d0d",
        },
        custom: {
          DEFAULT: '#b53628',
        },
      },
      inset: {
        '22vh': '22vh',
        '83.1vw':'83.1vw',
        '38vh':'38vh'
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
  plugins: [require("daisyui")],
  // plugins: [require("tailwind-scrollbar")],

};
