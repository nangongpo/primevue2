<template>
  <transition name="p-contextmenusub" @enter="onEnter">
    <ul ref="container" :class="containerClass" role="menu" v-if="root ? true : parentActive">
      <template v-for="(item, i) of model">
        <li
          role="none"
          :class="getItemClass(item)"
          :style="item.style"
          v-if="visible(item) && !item.separator"
          :key="label(item) + i"
          @mouseenter="onItemMouseEnter($event, item)">
          <router-link
            v-if="item.to && !disabled(item)"
            :to="item.to"
            custom
            v-slot="{ navigate, href, isActive, isExactActive }">
            <a
              :href="href"
              :class="linkClass(item, { isActive, isExactActive })"
              @click="onItemClick($event, item, navigate)"
              role="menuitem"
              v-ripple>
              <span :class="['p-menuitem-icon', item.icon]"></span>
              <span class="p-menuitem-text">{{ label(item) }}</span>
            </a>
          </router-link>
          <a
            v-else
            :href="item.url"
            :class="linkClass(item)"
            :target="item.target"
            @click="onItemClick($event, item)"
            v-ripple
            :aria-haspopup="item.items != null"
            :aria-expanded="item === activeItem"
            role="menuitem"
            :tabindex="disabled(item) ? null : '0'">
            <span :class="['p-menuitem-icon', item.icon]"></span>
            <span class="p-menuitem-text">{{ label(item) }}</span>
            <span class="p-submenu-icon pi pi-angle-right" v-if="item.items"></span>
          </a>
          <ContextMenuSub
            :model="item.items"
            v-if="visible(item) && item.items"
            :key="label(item) + '_sub_'"
            @leaf-click="onLeafClick"
            :parentActive="item === activeItem" />
        </li>
        <li
          :class="['p-menu-separator', item.class]"
          :style="item.style"
          v-if="visible(item) && item.separator"
          :key="'separator' + i"
          role="separator"></li>
      </template>
    </ul>
  </transition>
</template>

<script>
import { DomHandler } from 'primevue2/utils'
import Ripple from 'primevue2/ripple'

export default {
  name: 'ContextMenuSub',
  props: {
    model: {
      type: Array,
      default: null
    },
    root: {
      type: Boolean,
      default: false
    },
    parentActive: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    parentActive(newValue) {
      if (!newValue) {
        this.activeItem = null
      }
    }
  },
  data() {
    return {
      activeItem: null
    }
  },
  methods: {
    onItemMouseEnter(event, item) {
      if (this.disabled(item)) {
        event.preventDefault()
        return
      }

      this.activeItem = item
    },
    onItemClick(event, item, navigate) {
      if (this.disabled(item)) {
        event.preventDefault()
        return
      }

      if (!item.url && !item.to) {
        event.preventDefault()
      }

      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        })
      }

      if (!item.items) {
        this.onLeafClick()
      }

      if (item.to && navigate) {
        navigate(event)
      }
    },
    onLeafClick() {
      this.activeItem = null
      this.$emit('leaf-click')
    },
    onEnter() {
      this.position()
    },
    position() {
      const parentItem = this.$refs.container.parentElement
      const containerOffset = DomHandler.getOffset(this.$refs.container.parentElement)
      const viewport = DomHandler.getViewport()
      const sublistWidth = this.$refs.container.offsetParent ? this.$refs.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.$refs.container)
      const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0])

      this.$refs.container.style.top = '0px'

      if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
        this.$refs.container.style.left = -1 * sublistWidth + 'px'
      }
      else {
        this.$refs.container.style.left = itemOuterWidth + 'px'
      }
    },
    getItemClass(item) {
      return [
        'p-menuitem', item.class, {
          'p-menuitem-active': this.activeItem === item
        }
      ]
    },
    linkClass(item, routerProps) {
      return ['p-menuitem-link', {
        'p-disabled': this.disabled(item),
        'router-link-active': routerProps && routerProps.isActive,
        'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
      }]
    },
    visible(item) {
      return (typeof item.visible === 'function' ? item.visible() : item.visible !== false)
    },
    disabled(item) {
      return (typeof item.disabled === 'function' ? item.disabled() : item.disabled)
    },
    label(item) {
      return (typeof item.label === 'function' ? item.label() : item.label)
    }
  },
  computed: {
    containerClass() {
      return { 'p-submenu-list': !this.root }
    }
  },
  directives: {
    'ripple': Ripple
  }
}
</script>
