import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/barberia-1-vite/',
  build: {
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        trabajo:   resolve(__dirname, 'src/trabajo.html'),
        productos: resolve(__dirname, 'src/productos.html'),
        precios:   resolve(__dirname, 'src/precios.html'),
        nosotros:  resolve(__dirname, 'src/nosotros.html'),
      }
    }
  }
})
