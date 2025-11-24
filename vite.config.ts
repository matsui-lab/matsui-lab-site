import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/matsui-lab-site/",   // ← GitHub Pages のURLに必ず必要
  plugins: [react()],
})
