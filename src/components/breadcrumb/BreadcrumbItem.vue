<script>
export default {
  name: 'BreadcrumbItem',
  functional: true,
  props: {
    item: null,
    templates: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  render(h, context) {
    const { item, templates } = context.props
    if (!item) return null

    const visible = typeof item.visible === 'function' ? item.visible() : item.visible !== false
    const label = typeof item.label === 'function' ? item.label() : item.label
    const disabled = typeof item.disabled === 'function' ? item.disabled() : item.disabled
    const containerClass = ['p-menuitem', { 'p-disabled': disabled }, item.class]
    const iconClass = ['p-menuitem-icon', item.icon]
    const ariaCurrent = isCurrentUrl(item)
    const onClick = (event) => {
      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        })
      }
    }
    const getMenuItemProps = {
      action: {
        'aria-current': ariaCurrent,
        onClick: ($event) => onClick($event)
      },
      icon: iconClass,
      label: label
    }

    if (visible) {
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
          h('span', { class: 'p-menuitem-text' }, label)
        )

        vNodes.push(
          h('a', {
            class: 'p-menuitem-link',
            attrs: {
              href: item.url || '#',
              target: item.target,
              'aria-current': ariaCurrent
            },
            on: {
              click: onClick
            }
          }, childNodes)
        )

      } else {
        vNodes.push(
          templates.item({ item, label: label, props: getMenuItemProps })
        )
      }

      return h('li', { class: containerClass }, vNodes)
    }

    return null
  }
}

function isCurrentUrl(item) {
  const { to, url } = item
  const lastPath = typeof window !== 'undefined' ? window.location.pathname : ''

  return to === lastPath || url === lastPath ? 'page' : undefined
}
</script>
