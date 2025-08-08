import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/telugu-nri-radio/' : '/',
  server: {
    port: 8080,
    host: true, // Allow access from other devices on the network
    strictPort: true, // Ensure the server uses the specified port
    open: true, // Automatically open the browser when the server starts
  },
})
