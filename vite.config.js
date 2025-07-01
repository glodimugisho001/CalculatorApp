import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Permet d’utiliser test, expect sans import
    environment: 'jsdom', // Pour simuler un DOM dans Node.js
    setupFiles: './setupTests.js', // Fichier de config (facultatif mais recommandé)
  },
})
