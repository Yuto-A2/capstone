import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist'
//   }
// });

export default defineConfig({
  root: './frontend',  // プロジェクトのルートを指定（frontendフォルダ内で作業）
  build: {
    outDir: '../dist', // 出力先を指定
    rollupOptions: {
      input: './frontend/index.html', // HTML ファイルを指定
    },
  },
});