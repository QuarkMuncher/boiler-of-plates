import { join } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imageMin from 'vite-plugin-imagemin'

const PACKAGE_ROOT = __dirname

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/b/': join(PACKAGE_ROOT, 'src/components/base') + '/'
    }
  },
  plugins: [
    imageMin({
      mozjpeg: {
        quality: 60
      }
    }),
    react()
  ]
})
