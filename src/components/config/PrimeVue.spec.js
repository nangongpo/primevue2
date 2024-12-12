import { beforeAll, describe, expect, it, vi } from 'vitest'
import { config, mount } from '@vue/test-utils'
import { defaultOptions } from 'primevue2/config'
import Vue from 'vue'

beforeAll(() => {
  Vue.config.devtools = false
})


const TestComponent = {
  computed: {
    primeVueConfig() {
      return this.$primevue.config
    }
  },
  render(h) {
    return h()
  }
}

// https://v1.test-utils.vuejs.org/zh/guides/#仿造注入
config.mocks['$primevue'] = {
  config: defaultOptions
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn()
  }))
})

describe('PrimeVue.vue', () => {
  it('should exist', async () => {
    // 挂载组件
    const wrapper = mount(TestComponent)

    // 访问组件实例并获取 primeVueConfig
    const primeVueConfig = wrapper.vm.primeVueConfig

    // 验证 $primevue 配置是否正确注入
    expect(primeVueConfig).toEqual(defaultOptions)
  })
})
