import { describe, beforeEach, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AvatarGroup from './AvatarGroup.vue'
import Avatar from '../avatar/Avatar.vue'


describe('AvatarGroup.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(AvatarGroup, {
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
