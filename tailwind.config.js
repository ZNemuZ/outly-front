/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // カスタムカラーやスタイルを追加
      colors: {
        'input-bg': '#202123', // 入力欄の背景色（お好みで変更可能）
        'input-text': '#D1D5DB', // 入力欄の文字色
      },
    },
  },
  plugins: [], // 必要な場合に Tailwind のプラグインを追加
}
