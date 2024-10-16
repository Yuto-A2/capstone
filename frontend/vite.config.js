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
  build: {
    outDir: 'dist',  // 出力先ディレクトリ
  },
  publicDir: 'public', // 公開される静的ファイルのディレクトリ
});