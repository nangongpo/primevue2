<script>
export default {
  name: 'BreadcrumbItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    templates: {
      type: Object,
      default() {
        return {}
      }
    },
    index: Number
  },
  computed: {
    containerClass({ item, disabled }) {
      return ['p-menuitem', { 'p-disabled': disabled() }, item.class]
    },
    iconClass({ item }) {
      return ['p-menuitem-icon', item.icon]
    },
    getMenuItemProps({ iconClass, label, isCurrentUrl, onClick }) {
      return {
        action: {
          'aria-current': isCurrentUrl(),
          onClick: ($event) => onClick($event)
        },
        icon: iconClass,
        label: label
      }
    }
  },
  methods: {
    onClick(event) {
      if (this.item.command) {
        this.item.command({
          originalEvent: event,
          item: this.item
        })
      }
    },
    visible() {
      return (typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false)
    },
    disabled() {
      return (typeof this.item.disabled === 'function' ? this.item.disabled() : this.item.disabled)
    },
    label() {
      return (typeof this.item.label === 'function' ? this.item.label() : this.item.label)
    },
    isCurrentUrl() {
      const { to, url } = this.item
      const lastPath = typeof window !== 'undefined' ? window.location.pathname : ''

      return to === lastPath || url === lastPath ? 'page' : undefined
    }
  },
  render(h) {
    const { item, templates, containerClass, iconClass, getMenuItemProps, onClick, visible, label, isCurrentUrl } = this

    if (visible()) {
      const vNodes = []

      if (!templates.item) {
        const childNodes = []

        if (templates && templates.itemicon) {
          childNodes.push(
            templates.itemicon({ item, class: iconClass })
          )
        } else if (item.icon) {
          childNodes.push(
            h('span', { class: iconClass })
          )
        }

        item.label && childNodes.push(
          h('span', { class: 'p-menuitem-text' }, label())
        )

        vNodes.push(
          h('a', {
            class: 'p-menuitem-link',
            attrs: {
              href: item.url || '#',
              target: item.target,
              'aria-current': isCurrentUrl()
            },
            on: {
              click: onClick
            }
          }, childNodes)
        )

      } else {
        vNodes.push(
          templates.item({ item, label: label(), props: getMenuItemProps })
        )
      }

      return h('li', { class: containerClass }, vNodes)
    }

    return null
  }
}
</script>
