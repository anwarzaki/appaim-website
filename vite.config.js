import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit (in kbs)
  },
  server: {
    fs: {
      // Allow serving files from one level up from the package root
      allow: ['..'],
    },
  },
  optimizeDeps: {
    include: [
      '@material-ui/core',
      '@material-ui/icons',
      'react',
      'react-dom',
      'react-router-dom'
    ],
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
});
