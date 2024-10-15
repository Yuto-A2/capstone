// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist'
//   }
// });

import { defineConfig } from 'vite';
export default defineConfig({
  root: './frontend',  // プロジェクトのルートディレクトリ
  build: {
    outDir: './frontend/dist',  // 出力ディレクトリを指定
    rollupOptions: {
      input: './frontend/index.html',  // エントリーポイントのHTML
    },
  },
});