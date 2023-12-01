import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'sl-react-ui'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        format: 'es',
        dir: 'dist',
        globals: { 
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
