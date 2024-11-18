/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 這行很重要，指定 Tailwind 需要處理的文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}