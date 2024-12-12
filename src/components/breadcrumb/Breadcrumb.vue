<script>
import BreadcrumbItem from './BreadcrumbItem.vue'

export default {
  name: 'Breadcrumb',
  props: {
    model: {
      type: Array,
      default: null
    },
    home: {
      type: null,
      default: null
    }
  },
  components: {
    'BreadcrumbItem': BreadcrumbItem
  },
  render (h) {
    const { model = [], home, $scopedSlots } = this
    const separatorNodes =  $scopedSlots.separator
      ? $scopedSlots.separator()
      : [h('i', { class: 'pi pi-chevron-right' })]

    const vNodes = []

    if (home) {
      vNodes.push(
        h('BreadcrumbItem', {
          class: 'p-breadcrumb-home',
          props: {
            item: home,
            templates: $scopedSlots
          }
        })
      )
    }

    model.map((item, index) => {
      if (item) {
        vNodes.push(
          h('li', {
            class: 'p-breadcrumb-separator',
            key: 'separator' + '_' + index,
          }, separatorNodes),
          h('BreadcrumbItem', {
            props: {
              item: item,
              index: index,
              templates: $scopedSlots
            },
            key: item.label + '_' + index,
          })
        )
      }
    })

    return h('nav', {
      staticClass: 'p-breadcrumb p-component',
      attrs: {
        'aria-label': 'Breadcrumb'
      }
    }, [
      h('ul', vNodes)
    ])
  }
}
</script>

<style>
.p-breadcrumb {
  overflow-x: auto;
}

.p-breadcrumb ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.p-breadcrumb .p-menuitem-text {
  line-height: 1;
}

.p-breadcrumb .p-menuitem-link {
  text-decoration: none;
}
</style>
