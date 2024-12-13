import { h } from 'vue'
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import { createLocalVue, RouterLinkStub, mount } from '@vue/test-utils'
import PrimeVue from 'primevue2/config'
import Breadcrumb from './Breadcrumb.vue'
import BreadcrumbItem from './BreadcrumbItem.vue'

describe('Breadcrumb.vue', () => {
  const localVue = createLocalVue()
  localVue.use(PrimeVue)

  let wrapper = null

  const BreadcrumbOptions = {
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
    }
  }

  beforeEach(() => {
    wrapper = mount(Breadcrumb, BreadcrumbOptions)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('label: should exist', async() => {
    await wrapper.setProps({
      home: { icon: 'pi pi-home' },
      model: [
        { label: 'Computer' },
        { label: 'Notebook' }, 
        { label: 'Accessories' }, 
        { label: 'Backpacks' }, 
        { label: 'Item' }
      ]
    })

    expect(wrapper.find('.p-breadcrumb.p-component').exists()).toBe(true)
    expect(wrapper.findAll('.p-menuitem-text').length).toBe(5)
  })

  it('icon: should exist', async() => {
    await wrapper.setProps({
      home: { icon: 'pi pi-home' },
      model: [
        { icon: 'pi pi-sitemap' },
        { icon: 'pi pi-book' },
        { icon: 'pi pi-wallet' },
        { icon: 'pi pi-shopping-bag' },
        { icon: 'pi pi-calculator' }
      ]
    })

    expect(wrapper.find('.p-breadcrumb.p-component').exists()).toBe(true)
    expect(wrapper.findAll('.p-menuitem-icon').length).toBe(6)
  })

  it('command: Callback to execute when item is clicked', async() => {
    const props = {
      home: { icon: 'pi pi-home' },
      model: [
        { label: 'Computer', command: vi.fn() }
      ]
    }
    await wrapper.setProps(props)
    const spy = vi.spyOn(props.model[0], 'command')

    const Computer = wrapper.findAll('.p-menuitem').at(1)
    expect(Computer.text()).toBe('Computer')

    Computer.find('.p-menuitem-link').trigger('click')
    expect(spy).toHaveBeenCalled()
  })

  it('separator slot: Used to pass attributes to the separator DOM element', async() => {
    const separatorWrapper = mount(Breadcrumb, {
      ...BreadcrumbOptions,
      scopedSlots: {
        separator() {
          return ' / '
        }
      },
      propsData: {
        home: { icon: 'pi pi-home' },
        model: [
          { icon: 'pi pi-sitemap' },
          { icon: 'pi pi-book' },
          { icon: 'pi pi-wallet' },
          { icon: 'pi pi-shopping-bag' },
          { icon: 'pi pi-calculator' }
        ]
      }
    })

    const items = separatorWrapper.findAll('.p-menuitem')
    expect(items.length).toBe(6)
    const separators = separatorWrapper.findAll('.p-breadcrumb-separator')
    expect(separators.length).toBe(5)
    for (let i = 0; i < separators.length; i++) {
      expect(separators.at(i).text()).toBe('/')
    }
  })

  it('item slot: use a router link component, an external link or programmatic navigation', async() => {
    const itemWrapper = mount(Breadcrumb, {
      ...BreadcrumbOptions,
      scopedSlots: {
        item({ item, props }) {
          if (item.to) {
            return h('router-link', {
              props: {
                to: item.to,
                custom: true
              },
              scopedSlots: {
                default: ({ href, navigate }) => {
                  return h('a', {
                    attrs: {
                      href: href,
                      ...props.action
                    },
                    on: {
                      click: navigate
                    }
                  }, [
                    h('span', { class: [item.icon, 'text-color'] }),
                    h('span', { class: 'text-primary font-semibold' }, item.label)
                  ])
                }
              }
            })
          }
          return h('a', {
            attrs: {
              href: item.url,
              target: item.target,
              ...props.action
            }
          }, [
            h('span', { class: 'text-color' }, item.label)
          ])
        }
      },
      propsData: {
        home: { icon: 'pi pi-home', to: '/' },
        model: [
          { label: 'Components' },
          { label: 'Form' },
          { label: 'InputText', to: '/inputtext' }
        ]
      }
    })

    const items = itemWrapper.findAll('.p-menuitem')
    expect(items.length).toBe(4)

    const InputText = items.at(3)
    const link = InputText.findComponent(RouterLinkStub)
    await link.trigger('click')

    expect(link.props().to).toBe('/inputtext')
  })
})

