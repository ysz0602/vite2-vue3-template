import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
// 导入插件
import vueI18n from '@intlify/vite-plugin-vue-i18n'

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  // css: {},
  // esbuild: {},
  resolve:{
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'api': path.resolve(__dirname, 'src/api'),
      'views': path.resolve(__dirname, 'src/views'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
      'styles': path.resolve(__dirname, 'src/styles')
    }
  },
  plugins: [vue(), vueJsx(), viteMockServe({ supportTs: false }), vueI18n({
    // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
    // compositionOnly: false,

    // you need to set i18n resource including paths !
    include: path.resolve(__dirname, './src/locales/**')
  })]
})
