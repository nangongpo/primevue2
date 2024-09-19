import { babel } from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import nodePolyfills from 'rollup-plugin-polyfill-node'

import fs from 'fs-extra'
import path from 'path'

import pkg from './package.json'

const entryDir = 'src/components'
const outputDir = 'lib'

let entries = []

let core = {}

const COMMON_STYLE_DEPENDENCIES = {
  'primevue2/common': 'primevue2.common'
}

const CORE_DEPENDENCIES = {
  'primevue2/nuxt': 'primevue2.nuxt',
  'primevue2/utils': 'primevue2.utils',
  'primevue2/api': 'primevue2.api',
  'primevue2/config': 'primevue2.config',
  'primevue2/styleclass': 'primevue2.styleclass',
  'primevue2/badgedirective': 'primevue2.badgedirective',
  'primevue2/ripple': 'primevue2.ripple',
  'primevue2/tooltip': 'primevue2.tooltip',
  'primevue2/confirmationeventbus': 'primevue2.confirmationeventbus',
  'primevue2/toasteventbus': 'primevue2.toasteventbus',
  'primevue2/overlayeventbus': 'primevue2.overlayeventbus',
  'primevue2/confirmationservice': 'primevue2.confirmationservice',
  'primevue2/terminalservice': 'primevue2.terminalservice',
  'primevue2/toastservice': 'primevue2.toastservice',
  'primevue2/button': 'primevue2.button',
  'primevue2/inputtext': 'primevue2.inputtext',
  'primevue2/inputnumber': 'primevue2.inputnumber',
  'primevue2/checkbox': 'primevue2.checkbox',
  'primevue2/radiobutton': 'primevue2.radiobutton',
  'primevue2/message': 'primevue2.message',
  'primevue2/progressbar': 'primevue2.progressbar',
  'primevue2/dropdown': 'primevue2.dropdown',
  'primevue2/dialog': 'primevue2.dialog',
  'primevue2/paginator': 'primevue2.paginator',
  'primevue2/tree': 'primevue2.tree',
  'primevue2/menu': 'primevue2.menu',
  'primevue2/tieredmenu': 'primevue2.tieredmenu',
  'primevue2/badge': 'primevue2.badge',
}

// dependencies
const GLOBAL_DEPENDENCIES = {
  vue: 'Vue'
}

const GLOBAL_COMPONENT_DEPENDENCIES = {
  ...GLOBAL_DEPENDENCIES,
  ...CORE_DEPENDENCIES
}

// externals
const EXTERNAL = ['vue', 'chart.js/auto', 'quill', '@fullcalendar/core', '@fullcalendar/core/vdom.js']

const EXTERNAL_COMPONENT = [...EXTERNAL, ...Object.keys(CORE_DEPENDENCIES)]

const BABEL_PLUGIN_OPTIONS = {
  extensions: ['.js', '.jsx', '.vue'],
  exclude: 'node_modules/**',
  presets: ['@babel/preset-env', '@vue/babel-preset-jsx'],
  babelHelpers: 'runtime',
  skipPreflightCheck: true,
  babelrc: false
}

const POSTCSS_PLUGIN_OPTIONS = {
  plugins: [
    autoprefixer(),
    cssnano()
  ],
  sourceMap: false
}

const VUE_PLUGIN_OPTIONS = {
  style: {
    postcssPlugins: [
      autoprefixer()
    ]
  }
}

// https://www.npmjs.com/package/rollup-plugin-polyfill-node
const NODE_POLYFILLS_OPTIONS = {
  include: [ 'path' ]
}

const TERSER_PLUGIN_OPTIONS = {
  compress: {
    keep_infinity: true,
    pure_getters: true,
    reduce_funcs: false
  }
}

const PLUGINS = [
  vue(VUE_PLUGIN_OPTIONS), 
  postcss(POSTCSS_PLUGIN_OPTIONS), 
  babel(BABEL_PLUGIN_OPTIONS), 
  nodePolyfills(NODE_POLYFILLS_OPTIONS)
]

function addEntry(folder, inFile, outFile) {
  // const exports = inFile === 'PrimeVue.js' ? 'none' : 'auto'
  const exports = 'auto'
  const useCorePlugin = Object.keys(GLOBAL_COMPONENT_DEPENDENCIES).some((d) => d.replace('primevue2/', '') === folder)
  const plugins = PLUGINS
  const external = EXTERNAL_COMPONENT
  const inlineDynamicImports = true

  const input = path.resolve(entryDir, folder, inFile)
  const output = path.resolve(outputDir, folder, outFile)

  const getEntry = (isMinify) => {
    return {
      input,
      plugins: [...plugins, isMinify && terser(TERSER_PLUGIN_OPTIONS), useCorePlugin && corePlugin()],
      external,
      inlineDynamicImports
    }
  }

  const get_CJS_ESM = (isMinify) => {
    return {
      ...getEntry(isMinify),
      output: [
        {
          format: 'cjs',
          file: `${output}.cjs${isMinify ? '.min' : ''}.js`,
          exports
        },
        {
          format: 'esm',
          file: `${output}.esm${isMinify ? '.min' : ''}.js`,
          exports
        }
      ]
    }
  }

  const get_IIFE = (isMinify) => {
    return {
      ...getEntry(isMinify),
      output: [
        {
          format: 'iife',
          name: 'primevue2.' + folder.replaceAll('/', '.'),
          file: `${output}${isMinify ? '.min' : ''}.js`,
          globals: GLOBAL_COMPONENT_DEPENDENCIES,
          exports
        }
      ]
    }
  }

  entries.push(get_CJS_ESM())
  entries.push(get_IIFE())

  // Minify
  entries.push(get_CJS_ESM(true))
  entries.push(get_IIFE(true))
}

function corePlugin() {
  return {
    name: 'corePlugin',
    generateBundle(outputOptions, bundle) {
      const { name, format } = outputOptions

      if (format === 'iife') {
        Object.keys(bundle).forEach((id) => {
          const chunk = bundle[id]
          const folderName = name.replace('primevue2.', '').replaceAll('.', '/')
          const filePath = path.resolve(outputDir, `core/core${id.indexOf('.min.js') > 0 ? '.min.js' : '.js'}`)

          core[filePath] ? (core[filePath][folderName] = chunk.code) : (core[filePath] = { [`${folderName}`]: chunk.code })
        })
      }
    }
  }
}

function addCore() {
  const lastEntry = entries[entries.length - 1]

  lastEntry.plugins = [
    ...lastEntry.plugins,
    {
      name: 'coreMergePlugin',
      generateBundle() {
        Object.entries(core).forEach(([filePath, value]) => {
          const code = Object.keys(CORE_DEPENDENCIES).reduce((val, d) => {
            const name = d.replace('primevue2/', '')

            val += value[name] + '\n'

            return val
          }, '')

          fs.outputFile(path.resolve(outputDir, filePath), code, {}, function (err) {
            if (err) {
              // eslint-disable-next-line no-console
              return console.error(err)
            }
          })
        })
      }
    }
  ]
}

function addSFC() {
  fs.readdirSync(entryDir, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
      const dirPath = path.resolve(entryDir, folderName)
      fs.readdirSync(dirPath).forEach((file) => {
        let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase()

        if (name.indexOf('plugin') > -1) {
          fs.copySync(path.resolve(entryDir, folderName, file), path.resolve(outputDir, folderName, file))
        } else if ((/\.vue$/.test(file) && name === folderName)) {
          addEntry(folderName, file, name)
        }
      })
    })
}

function addCommonStyle() {
  !fs.existsSync(outputDir) && fs.mkdirSync(outputDir)
  const commonStyles = Object.keys(COMMON_STYLE_DEPENDENCIES).map(d => d.replace('primevue2/', ''))
  for (const style of commonStyles) {
    fs.copySync(path.resolve(entryDir, style), path.resolve(outputDir, style))
  }
}

function addDirectives() {
  addEntry('badgedirective', 'BadgeDirective.js', 'badgedirective')
  addEntry('ripple', 'Ripple.js', 'ripple')
  addEntry('tooltip', 'Tooltip.js', 'tooltip')
  addEntry('styleclass', 'StyleClass.js', 'styleclass')
}

function addConfig() {
  addEntry('config', 'PrimeVue.js', 'config')
  addEntry('nuxt', 'Nuxt.js', 'nuxt')
}

function addUtils() {
  addEntry('utils', 'Utils.js', 'utils')
}

function addApi() {
  addEntry('api', 'Api.js', 'api')
}

function addServices() {
  addEntry('confirmationservice', 'ConfirmationService.js', 'confirmationservice')
  addEntry('confirmationeventbus', 'ConfirmationEventBus.js', 'confirmationeventbus')
  addEntry('toastservice', 'ToastService.js', 'toastservice')
  addEntry('toasteventbus', 'ToastEventBus.js', 'toasteventbus')
  addEntry('overlayeventbus', 'OverlayEventBus.js', 'overlayeventbus')
  addEntry('terminalservice', 'TerminalService.js', 'terminalservice')
}

function addPackageJson() {
  const packageJson = `{
    "name": "primevue2",
    "version": "${pkg.version}",
    "private": false,
    "homepage": "https://nangongpo.github.io/primevue2/",
    "repository": {
      "type": "git",
      "url": "https://github.com/nangongpo/primevue2.git"
    },
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/nangongpo/primevue2/issues"
    },
    "keywords": [
      "primevue2",
      "vue2",
      "ui framework",
      "component framework",
      "ui library",
      "component library",
      "material",
      "bootstrap"
    ],
    "web-types": "./web-types.json",
    "vetur": {
      "tags": "./vetur-tags.json",
      "attributes": "./vetur-attributes.json"
    },
    "peerDependencies": {
      "vue": "^2.6.0",
      "vue-router": "^3.1.0",
      "primeicons": "^5.0.0 || ^6.0.0",
      "@fullcalendar/core": "^5.0.0"
    }
  }`

  !fs.existsSync(outputDir) && fs.mkdirSync(outputDir)
  fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageJson)
}

addCommonStyle()
addUtils()
addApi()
addConfig()
addDirectives()
addServices()
addSFC()
addCore()
addPackageJson()

export default entries
