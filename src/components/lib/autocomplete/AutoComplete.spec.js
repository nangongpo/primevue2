import { describe, beforeEach, expect, it } from 'vitest'
import { createLocalVue, mount } from '@vue/test-utils'
import PrimeVue from 'primevue2/config'
import AutoComplete from './AutoComplete.vue'

const Countries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Chile', code: 'CL' },
  { name: 'Denmark', code: 'DK' }
]

describe('AutoComplete.vue', () => {
  let wrapper

  const localVue = createLocalVue()
  localVue.use(PrimeVue)

  beforeEach(async () => {
    wrapper = mount(AutoComplete, {
      localVue,
      propsData: {
        suggestions: null,
        field: 'name'
      },
      data() {
        return {
          countries: Countries
        }
      }
    })

    await wrapper.trigger('click')
  })

  it('should exists', () => {
    expect(wrapper.find('.p-autocomplete.p-component').exists()).toBe(true)
    expect(wrapper.find('.p-autocomplete-input').exists()).toBe(true)
  })

  it('search complete', async () => {
    const event = { target: { value: 'b' } }

    wrapper.vm.onInput(event)
    await wrapper.vm.$nextTick()

    wrapper.vm.search(event, event.target.value, 'input')
    await wrapper.vm.$nextTick()

    await wrapper.setProps({
      suggestions: [{ name: 'Bahrain', code: 'BH' }]
    })

    expect(wrapper.find('.p-autocomplete-items').exists()).toBe(true)
    expect(wrapper.findAll('.p-autocomplete-item').length).toBe(1)
  })

  it('should show overlay and empty-message if there are no suggestions', async () => {
    const event = { target: { value: 'b' } }

    wrapper.vm.search(event, event.target.value, 'input')
    await wrapper.vm.$nextTick()

    await wrapper.setProps({
      suggestions: []
    })

    expect(wrapper.find('.p-autocomplete-items').exists()).toBe(false)
    expect(wrapper.findAll('.p-autocomplete-item').length).toBe(0)
  })

  it('should display a button if enabling dropdown property', async() => {
    wrapper.setProps({
      dropdown: true
    })

    await wrapper.vm.$nextTick()

    const token = wrapper.find('.p-button').find('span')

    expect(token.classes()).toContain('pi-chevron-down')
  })

  it('multiple mode', async () => {
    wrapper.setProps({
      multiple: true,
      value: Countries.slice(0, 1)
    })

    await wrapper.vm.$nextTick()

    const tokens = wrapper.findAll('.p-autocomplete-token-icon')
    for (let i = 0; i < tokens.length; i++) {
      expect(tokens.at(i).classes()).toContain('pi-times-circle')
    }
  })
})
