// tailwindcss v3 配置项
// 文档： https://v3.tailwindcss.com/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // ← 取消 tailwindcss 的 CSS 重置，使用 antd 的
  },
  plugins: [],
}
