import { describe, beforeEach, afterEach, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import BreadcrumbItem from './BreadcrumbItem.vue'

describe('BreadcrumbItem.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(BreadcrumbItem, {
      mocks: {
        $router: {
          currentRoute: {
            path: vi.fn()
          },
          navigate: vi.fn()
        }
      },
      propsData: {
        item: { 
          label: 'Computer', 
          visible: () => true
        }
      }
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('When onClick method called and item has a command callback, callback should be triggered', async () => {
    await wrapper.setProps({ 
      item: { label: 'Computer', visible: () => false, command: vi.fn() }
    })

    const spy = vi.spyOn(wrapper.vm.item, 'command')

    wrapper.vm.onClick()
    expect(spy).toHaveBeenCalled()
  })

  it('When item prop has a visible, visible method should be return falsy', async () => {
    await wrapper.setProps({ 
      item: { label: 'Computer', visible: false, command: vi.fn() }
    })

    expect(wrapper.vm.visible()).toBeFalsy()
  })

  it('When item prop has a disabled function, disabled method should be return truthy', async () => {
    await wrapper.setProps({ 
      item: { disabled: () => true }
    })

    expect(wrapper.vm.disabled()).toBeTruthy()
  })

  it('When item prop has a label function, disabled method should be return truthy', async () => {
    await wrapper.setProps({ item: { label: () => true } })

    expect(wrapper.vm.label()).toBeTruthy()
  })

  it('When item prop has a icon, icon element class should contain item prop icon', async () => {
    await wrapper.setProps({ item: { icon: 'pi-check' } })

    expect(wrapper.find('a > span').classes()).toContain('pi-check')
  })
})
