import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
      port: 8080, // Cambia el puerto a 8080 u otro de tu elección
    },
  }
)
