/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'purple-background' : '#4D44B5',
        'custom-background-white-shade': '#FFFFFF',
        'custom-color-one': '#C1BBEB'
      },
      fontFamily :{
        poppinsMedium: ['Poppins-Medium', 'sans-serif'],
        poppinsBold: ['Poppins-Bold', 'sans-serif'],
        poppinsLight: ['Poppins-Light', 'sans-serif'],
        poppinsSemiBold: ['Poppins-SemiBold', 'sans-serif']
      },
      zIndex: {
        '-1': '-1',
        '-3': '-3'
      },
      width :{
        '20ch': '10ch'
      }
    },
  },
  plugins: [],
}

