/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FFBE0B',
        'default':'#CFCFCF',
        'gradient':'linear-gradient(202.17deg, #FFBE0B 8.58%, #FF4D00 91.42%);'
      },
      boxShadow: {
        'sm': '0px 3px 3px 3px rgb(0 0 0 / 4%)',
        'xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}




