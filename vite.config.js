import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    eslint(),
    svgr({
      svgrOptions: {},
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
