import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      '@': '/src',
      // other aliases
    }
  },
  // other configurations (rollupOptions, server settings, etc.)
});