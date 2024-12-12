import { describe, beforeEach, expect, it } from 'vitest'
import { createLocalVue, mount } from '@vue/test-utils'
import PrimeVue from 'primevue2/config'
import Badge from './Badge.vue'

describe('Badge.vue', () => {
  let wrapper = null

  const localVue = createLocalVue()
  localVue.use(PrimeVue)

  beforeEach(() => {
    wrapper = mount(Badge, {
      localVue
    })
  })

  it('should exist', async () => {
    await wrapper.setProps({
      value: '29',
      severity: 'warning',
      size: 'large'
    })

    const badge = wrapper.find('.p-badge.p-component')

    expect(badge.exists()).toBe(true)

    expect(badge.text()).toBe('29')
    expect(badge.classes('p-badge-warning')).toBe(true)
    expect(badge.classes('p-badge-lg')).toBe(true)
    expect(badge.classes('p-badge-no-gutter')).toBe(false)
    expect(badge.classes('p-overlay-badge')).toBe(false)
  })
})
