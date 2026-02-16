import { defineConfig } from 'vite';
import { resolve } from 'path';
import htmlIncludePlugin from './plugins/html-include.js';

export default defineConfig({
  root: 'src/html',
  publicDir: false,
  server: {
    open: true
  },
  plugins: [
    htmlIncludePlugin()
  ],
  build: {
    outDir: '../../build',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/html/index.html')
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    },
    cssCodeSplit: false,
    cssMinify: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ''
      }
    }
  }
});
