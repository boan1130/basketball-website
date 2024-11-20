import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs', // 確保 postcss.config.cjs 存在
  },
  base: './', // 使用相對路徑，確保資源在不同伺服器環境下正確加載
});
