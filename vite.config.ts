import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true, // Это разрешит просмотр сайта на любом хосте Replit
    port: 5000,
    strictPort: true,
  }
})
