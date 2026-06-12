import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    dts({
      include: ['src'],
      exclude: ['src/**/*.stories.tsx', 'src/__tests__/**'],
    }),
  ],
  build: {
    lib: {
      // Multi-entry so subpath imports resolve to real emitted files. Previously a
      // single `index` entry meant `./icons` pointed at a file that was never built
      // (only its .d.ts existed); `./icons/paths` (#103) needs the same treatment.
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'icons/index': resolve(__dirname, 'src/icons/index.ts'),
        'icons/paths': resolve(__dirname, 'src/icons/paths.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
    },
    sourcemap: true,
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /^@radix-ui\//,
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.some((n) => n.endsWith('.css'))) {
            return 'styles.css'
          }
          return assetInfo.names?.[0] ?? '[name][extname]'
        },
      },
    },
  },
})
