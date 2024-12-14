import { describe, beforeEach, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import BadgeDirective from './BadgeDirective'

describe('directive badge should exist', () => {
  let wrapper = null

  const TestComponent = {
    template: '<i class="pi pi-bell mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i>',
    directives: {
      badge: BadgeDirective
    }
  }

  beforeEach(() => {
    wrapper = mount(TestComponent)
  })

  it('positioned badge', () => {
    expect(wrapper.find('.p-overlay-badge').exists()).toBe(true)
    expect(wrapper.find('.p-badge.p-component').exists()).toBe(true)
    expect(wrapper.find('.p-badge.p-component').text()).toBe('2')
  })
})
