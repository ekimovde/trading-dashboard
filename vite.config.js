import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import fullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Trading Dashboard',
        },
      },
    }),
    fullReload(['src/**/*.scss']),
  ],
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  assetsInclude: ['**/*.svg'],
  build: {
    outDir: 'dist',
    watch: {
      include: 'src/**/*.{html,js,scss}',
    },
  },
});
