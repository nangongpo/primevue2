import { describe, beforeEach, expect, it } from 'vitest'
import { createLocalVue, mount } from '@vue/test-utils'
import PrimeVue from 'primevue2/config'
import Avatar from './Avatar.vue'



describe('Avatar.vue', () => {
  let wrapper = null

  const localVue = createLocalVue()
  localVue.use(PrimeVue)

  beforeEach(() => {
    wrapper = mount(Avatar, {
      localVue
    })
  })

  it('label', async () => {
    await wrapper.setProps({ 
      label: 'T',
      size: 'large',
      shape: 'circle',
      icon: 'test',
      image: 'test'
    })

    const avatar = wrapper.find('.p-avatar.p-component')
    const avatarText = avatar.find('.p-avatar-text')

    expect(avatar.exists()).toBe(true)
    expect(avatar.classes('p-avatar-lg')).toBe(true)
    expect(avatar.classes('p-avatar-circle')).toBe(true)

    expect(avatarText.exists()).toBe(true)
    expect(avatarText.text()).toBe('T')
  })

  it('icon', async () => {
    await wrapper.setProps({ 
      icon: 'pi pi-search'
    })

    const icon = wrapper.find('.p-avatar-icon')

    expect(icon.classes('pi')).toBe(true)
    expect(icon.classes('pi-search')).toBe(true)
  })

  it('image', async () => {
    await wrapper.setProps({ 
      image: 'test'
    })
    const image = wrapper.find('.p-avatar-image')

    await wrapper.vm.onError()

    expect(image.exists()).toBe(true)
    expect(wrapper.emitted().error.length).toBe(1)
  })
})
