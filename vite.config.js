import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cdn } from 'vite-plugin-cdn2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cdn({ modules: ['react'] })
  ],
})
