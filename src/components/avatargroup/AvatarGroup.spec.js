import { describe, beforeEach, expect, it } from 'vitest'
import { createLocalVue, mount } from '@vue/test-utils'
import PrimeVue from 'primevue2/config'
import AvatarGroup from './AvatarGroup.vue'
import Avatar from '../avatar/Avatar.vue'


describe('AvatarGroup.vue', () => {
  let wrapper = null

  const localVue = createLocalVue()
  localVue.use(PrimeVue)

  beforeEach(() => {
    wrapper = mount(AvatarGroup, {
      localVue,
      stubs: {
        Avatar
      },
      slots: {
        default: '<Avatar icon="pi pi-user" size="xlarge" shape="circle" />'
      }
    })
  })

  it('should exist', () => {
    expect(wrapper.find('.p-avatar-group.p-component').exists()).toBe(true)
    expect(wrapper.find('.p-avatar.p-component').exists()).toBe(true)
  })
})
