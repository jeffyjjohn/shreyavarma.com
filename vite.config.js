import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
 base: '/shreyavarma.com/',  
=======
  base: '/shreyavarma.com/',     // <--- add this line
>>>>>>> 0903e3e8c40df8e5985b7ab3f94be40fcece8fb6
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
        }
      }
    }
  }
})

  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
        }
      }
    }
  }
})
