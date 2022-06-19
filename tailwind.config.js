/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    extend: {
      colors: {
        first: '#ececec',
        second: '#9fd3c7',
        third: '#385170',
        fourth: '#142d4c',
      }
    },
  },
  plugins: [],
}
