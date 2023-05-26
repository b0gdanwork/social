import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const defaultConfig = {
  server: {
    port: 3000
  },
  css: {
    modules: {
      generateScopedName: '[path][name]__[local]--[hash:base64:5]'
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  plugins: [react()]
}

export default defineConfig(({ command, mode }) => {
  console.log('mode', mode)
  return {
    ...defaultConfig,
    define: {
      __IS_DEV__: JSON.stringify(mode)
    }
  }
})
