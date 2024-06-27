export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px', // 475px ve daha küçük ekranlar için yeni bir breakpoint ekleyin.
      }
    },
  },
  plugins: [],
}