import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import { createLocalVue, mount } from '@vue/test-utils'
import PrimeVue from 'primevue2/config'
import Calendar from './Calendar.vue'

describe('Calendar.vue', () => {
  let wrapper

  const localVue = createLocalVue()
  localVue.use(PrimeVue)

  beforeEach(() => {
    wrapper = mount(Calendar, {
      localVue,
      propsData: {
        value: new Date()
      },
      attachTo: document.body // wrapper.trigger('focus') 模拟foucs事件时需要元素插入到文档中
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should exist', async () => {
    expect(wrapper.find('.p-calendar.p-component').exists()).toBe(true)
    expect(wrapper.find('.p-inputtext').exists()).toBe(true)

    await wrapper.find('.p-inputtext').trigger('focus')

    expect(wrapper.find('.p-datepicker.p-component').exists()).toBe(true)
    expect(wrapper.find('.p-datepicker-today').exists()).toBe(true)
    expect(wrapper.find('.p-highlight').exists()).toBe(true)
    expect(wrapper.find('.p-highlight').text()).toEqual(new Date().getDate().toString())
  })

  it('should select a date', async () => {
    await wrapper.setProps({ inline: true })

    const event = { day: 8, month: 2, year: 2022, today: false, selectable: true }

    const onDateSelect = vi.spyOn(wrapper.vm, 'onDateSelect')

    await wrapper.vm.onDateSelect({ currentTarget: { focus: () => {} } }, event)
    expect(onDateSelect).toHaveBeenCalled()
  })

  it('should calculate the correct view date when in range mode', async () => {
    const dateOne = new Date()
    const dateTwo = new Date()

    dateTwo.setFullYear(dateOne.getFullYear(), dateOne.getMonth(), dateOne.getDate() + 1)
    await wrapper.setProps({ selectionMode: 'range', showTime: true, value: [dateOne, dateTwo] })

    expect(wrapper.vm.viewDate).toEqual(dateTwo)
  })
})
