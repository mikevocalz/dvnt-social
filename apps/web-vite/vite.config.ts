import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import reactNativeWeb from 'vite-plugin-react-native-web'
import path from 'path'

export default defineConfig({
  plugins: [
    TanStackRouterVite({ routesDirectory: './src/routes' }),
    react({
      jsxImportSource: 'nativewind',
      jsxRuntime: 'automatic',
    }),
    reactNativeWeb(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      app: path.resolve(__dirname, '../../packages/app'),
      '@ui': path.resolve(__dirname, '../../packages/app/ui'),
      'react-native-uitextview': path.resolve(
        __dirname,
        './src/shims/react-native-uitextview.ts'
      ),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.mjs': 'jsx',
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
  },
})
