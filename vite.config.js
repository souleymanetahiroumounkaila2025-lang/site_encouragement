import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'analytics.js',
      name: 'VercelAnalytics',
      fileName: 'analytics',
      formats: ['iife']
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'analytics.js'
      }
    }
  }
});
