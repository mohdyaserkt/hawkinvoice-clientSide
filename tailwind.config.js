const withMT = require("@material-tailwind/react/utils/withMT");
 

/** @type {import('tailwindcss').Config} */

module.exports = withMT(
  {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#143230",
          secondary: "#1FE290",    
        },
        screens: {
          'sm': '350px', // Change the default width from 640px to 480px
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
        fontWeight:{
          "ligthbold":"400"
        }
        
      },
    },
    plugins: [],
  }
);


