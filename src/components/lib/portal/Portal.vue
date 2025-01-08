<script>
import { DomHandler } from 'primevue2/utils'

const getTargetElement = (appendTo) => {
  let target

  if (typeof appendTo === 'string') {
    target = appendTo ? document.querySelector(appendTo) : document.body
  } else if (appendTo instanceof HTMLElement) {
    target = appendTo
  } else {
    target = document.body
  }

  return target
}

export default {
  name: 'Portal',
  props: {
    appendTo: {
      type: [String, Object],
      default: 'body'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lastTarget: null,
      mounted: false
    }
  },
  computed: {
    isTeleport({ disabled, appendTo }) {
      return !disabled && appendTo !== 'self'
    }
  },
  mounted() {
    this.mounted = DomHandler.isClient()

    if (this.isTeleport) {
      this.appendToElement()
    }
  },
  updated() {
    // 只有在目标元素变化时才重新附加
    const target = getTargetElement(this.appendTo)
    if (this.isTeleport && target !== this.lastTarget) {
      this.appendToElement()
    }
  },
  beforeDestroy() {
    if (this.isTeleport) {
      this.removeFromElement()
    }
    // 手动清理可能的注释节点
    const parentNode = this.$el.parentNode
    if (parentNode) {
      const commentNodes = Array.from(parentNode.childNodes).filter(node => node.nodeType === 8) // 注释节点
      commentNodes.forEach(node => parentNode.removeChild(node))
    }
  },
  methods: {
    appendToElement() {
      const target = getTargetElement(this.appendTo)

      if (this.$el && target) {
        target.appendChild(this.$el)

        // 缓存目标元素
        this.lastTarget = target
      }
    },
    removeFromElement() {
      const target = getTargetElement(this.appendTo)
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
        this.lastTarget = null
      }
    }
  },
  render(h) {
    if (!this.isTeleport) {
      return this.$slots.default
    }

    if (this.mounted) {
      return h('div', { 
        ref: 'slotContent',
        attrs: { 'data-portal-from': this.$parent.$options.name.toLowerCase() }
      }, this.$slots.default)
    }

    return null
  }
}
</script>
