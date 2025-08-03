import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { BASE_PATH } from './src/shared/model'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://testmk.mbank.kg/',
        secure: true,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    viteReact(),
    tailwindcss(),
  ],
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // },
  base: BASE_PATH,
  resolve: {
    alias: {
      '@shared': resolve(__dirname, './src/shared'),
      '@pages': resolve(__dirname, './src/pages'),
      '@app': resolve(__dirname, './src/app'),
      '@modules': resolve(__dirname, './src/modules'),
      '@config': resolve(__dirname, './'),
      '@types': resolve(__dirname, './src/types'),
    },
  },
})
