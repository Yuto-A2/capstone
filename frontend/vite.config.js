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

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // エイリアスの設定
    },
  },
  build: {
    rollupOptions: {
      input: './src/main.jsx', // ここをエントリーポイントに指定
    }
  }
});
