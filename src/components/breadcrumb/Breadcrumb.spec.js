import { describe, expect, it, vi } from 'vitest'
import { createLocalVue, RouterLinkStub, mount } from '@vue/test-utils'
import PrimeVue from 'primevue2/config'
import Breadcrumb from './Breadcrumb.vue'
import BreadcrumbItem from './BreadcrumbItem.vue'

describe('Breadcrumb.vue', () => {
  const localVue = createLocalVue()
  localVue.use(PrimeVue)

  it('should exist', () => {
    const wrapper = mount(Breadcrumb, {
      localVue,
      mocks: {
        $router: {
          currentRoute: {
            path: vi.fn()
          }
        }
      },
      stubs: {
        RouterLink: RouterLinkStub,
        BreadcrumbItem
      },
      propsData: {
        home: { icon: 'pi pi-home', to: '/' },
        model: [
          { label: 'Computer' },
          { label: 'Notebook' }, 
          { label: 'Accessories' }, 
          { label: 'Backpacks' }, 
          { label: 'Item' }
        ]
      }
    })

    expect(wrapper.find('.p-breadcrumb.p-component').exists()).toBe(true)
    expect(wrapper.findAll('.p-menuitem-text').length).toBe(5)
  })
})
