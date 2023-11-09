import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

const rootDir = resolve(__dirname)

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    exclude: [...configDefaults.exclude],
    setupFiles: ['./test/setup.ts']
  },
  resolve: {
    alias: {
      '@': resolve(rootDir, "src")
    }
  }
})