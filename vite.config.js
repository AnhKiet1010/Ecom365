import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
  plugins: [
    react(),
    svgr(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#49ADFC',
          '@link-color': '@primary-color',
          '@link-active-color': '@primary-color',
          '@link-hover-color': '@primary-color',
          '@layout-sider-background': '#003E82',
          '@menu-bg': 'inherit',
          '@menu-popup-bg': '#003E82',
          '@menu-item-color': '#FFFFFFB2',
          '@menu-item-active-bg': '#DEE2E640',
          '@menu-inline-submenu-bg': '#003E82',
          '@menu-highlight-color': '#49ADFC',
          '@menu-item-active-border-width': 0,
          '@menu-icon-size': '18px',
          '@menu-icon-size-lg': '20px',
          '@input-bg': '#003E82',
          '@input-border-color': '#FFFFFF66',
          '@input-placeholder-color': '#FFFFFF66',
          '@input-color': '#FFFFFF',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
