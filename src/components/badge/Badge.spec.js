import { describe, beforeEach, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from './Badge.vue'

describe('Badge.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(Badge)
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
