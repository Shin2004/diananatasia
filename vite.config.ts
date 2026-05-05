import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Anniversary/',
  root: './', // Paksa Vite mencari index.html di folder utama
})
