import { vi } from 'vitest'
import { config } from '@vue/test-utils'
import { defaultOptions } from 'primevue2/config'

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
  it('should exist', async () => {})
})
