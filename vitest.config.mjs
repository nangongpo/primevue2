import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mjs'

import path from 'node:path'

// https://cn.vitest.dev/config/#选项
export default defineConfig(configEnv => mergeConfig(
  viteConfig(configEnv),
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      onConsoleLog: (log, type) => {
        // 忽略 Vue Devtools 下载提示语
        if (type === 'stdout' && log.includes('Download the Vue Devtools extension')) return false
        // 忽略 样式表
        if (type === 'stderr' && log.includes('Could not parse CSS stylesheet')) return false
      },
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html']
      },
      setupFiles: [path.resolve(__dirname, 'src/components/config/PrimeVue.spec.js')]
    },
  })
))
