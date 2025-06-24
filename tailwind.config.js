/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'Nanum-Gothic-Regular': ['NanumGothic-Regular-400', 'sans-serif'],
      'Nanum-Gothic-Bold': ['NanumGothic-Bold-500', 'sans-serif'],
      'Nanum-Gothic-ExtraBold': ['NanumGothic-ExtraBold-700', 'sans-serif'],
      'Roboto-Regular': ['Roboto-Regular', 'sans-serif'],
      'Roboto-Bold': ['Roboto-Bold', 'sans-serif'],
      'SUIT-Regular': ['SUIT-Regular', 'sans-serif'],
      'SUIT-Bold': ['SUIT-Bold', 'sans-serif'],
    }
  },
  plugins: []
};
