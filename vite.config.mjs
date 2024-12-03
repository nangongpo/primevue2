import { defineConfig, loadEnv, normalizePath } from 'vite'
import path from 'node:path'
import fs from 'node:fs'

import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'

function resolve(dir) {
  return path.join(__dirname, dir)
}

const alias = {
  '@': resolve('src'),
  'lib': resolve('lib')
}

// src/components中使用了 'primevue2/xx'，需要设置别名
const componentDir = normalizePath('src/components')
fs.readdirSync(componentDir, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .forEach(({ name: folderName }) => {
    fs.readdirSync(path.join(componentDir, folderName)).forEach((file) => {
      let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase()

      if (name === 'primevue' || name === folderName) {
        alias[path.join('primevue2', folderName)] = resolve(path.join(componentDir, folderName, file))
      }
    })
  })

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_BASE_URL,
    define: {
      'process.env': JSON.stringify(process.env),
    },
    resolve: {
      alias: alias
    },
    plugins: [
      legacy({
        modernPolyfills: true
      }),
      vue2(),
      vue2Jsx()
    ],
    server: {
      // 监听所有地址
      host: '0.0.0.0',
      // 端口号
      port: Number(env.VITE_PORT),
      // 是否开启 https
      https: false,
      // 服务启动时是否自动打开浏览器
      open: true,
      cors: false,
      proxy: {
        '/primevue2/data/customers': 'https://www.primefaces.org/data/customers'
      }
    },
    build: {
      outDir: env.VITE_OUTDIR,
      assetsDir: env.VITE_ASSETS_DIR,
      // 设置最终构建的浏览器兼容目标
      // target: 'es2015', // 以package.json中browserslist为准
      // 构建后是否生成 source map 文件
      sourcemap: true,
      //  chunk 大小警告的限制（以 kbs 为单位）
      // chunkSizeWarningLimit: 1024,
      // 启用/禁用 gzip 压缩大小报告
      // reportCompressedSize: false,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash:8].js',
          entryFileNames: 'js/[name]-[hash:8].js',
          assetFileNames: '[ext]/[name]-[hash:8].[ext]',
          manualChunks: (id) => {
            if (id.includes('src/plugins/components')) {
              return 'primevue.global'
            }

            if (id.includes('@fullcalendar')) {
              return 'app.fullcalendar'
            }

            if (id.includes('node_modules')) {
              const pkgName = id.split('node_modules/')[1].split('/')[0].toString()

              if (['vue', 'vue-router', 'vuex', 'axios', 'crypto-js', 'nprogress', 'screenfull', 'path-browserify', 'vee-validate'].includes(pkgName)) {
                return 'app.core'
              }

              return pkgName
            }

            if (id.includes('src/components') || id.includes('src/utils')) {
              return 'app.component'
            }

            if (id.includes('mock') || id.includes('vite-plugin-fake-server')) {
              return 'app.mock.server'
            }
          }
        }
      }
    },
  }
})
