// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist'
//   }
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// エントリーポイントの設定を追加
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // 必要ならエイリアスを設定
    },
  },
  build: {
    rollupOptions: {
      input: './src/main.jsx', // ここをエントリーポイントに指定
    }
  }
});