/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          1: '#FF9500',
          2: '#FFB72B',
          3: '#FFA01B',
          4: '#FFEFE3',
        },
        blue: {
          1: '#00263D',
          2: '#2622B9',
          3: '#DBDAFF',
          4: '#E1E1FC',
        },
        green: {
          1: '#1AD079',
          2: '#D6F9E8',
          3: '#ECFFF6',
        },
      },
    },
  },
  plugins: [],
}
