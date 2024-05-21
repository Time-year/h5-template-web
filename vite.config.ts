import { UserConfig, defineConfig, type ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          'vue',
          '@vueuse/core',
          {
            antd: []
          }
        ],
        dts: 'src/types/auto-imports.d.ts',
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [AntDesignVueResolver()]
      }),
      Components({
        dts: 'src/types/auto-components.d.ts',
        resolvers: []
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8088,
      proxy: {
        '/api': {
          target: 'localhost:3000',
          changeOrigin: true,
          ws: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
