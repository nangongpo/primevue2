<script>
import { DomHandler } from 'primevue2/utils'

const getTargetElement = (appendTo) => {
  let target
  if (typeof appendTo === 'string') {
    target = document.querySelector(appendTo) || document.body
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
  slotContent: null,
  data() {
    return {
      mounted: false
    }
  },
  computed: {
    isTeleport({ appendTo }) {
      return appendTo && appendTo !== 'self'
    }
  },
  mounted() {
    this.mounted = DomHandler.isClient()

    this.$nextTick(() => {
      this.slotContent = this.$refs.slotContent

      if (this.isTeleport) {
        this.appendToElement()
      }
    })
  },
  beforeDestroy() {
    if (this.isTeleport) {
      this.removeFromElement()
    }
  },
  methods: {
    appendToElement() {
      const target = getTargetElement(this.appendTo)

      if (this.slotContent && target) {
        target.appendChild(this.slotContent)
      }
    },
    removeFromElement() {
      const target = getTargetElement(this.appendTo)
      if (this.slotContent && target && target.contains(this.slotContent)) {
        target.removeChild(this.slotContent)
      }

      this.slotContent = null
    }
  },
  render(h) {
    const { inline, mounted, disabled } = this

    if (inline) {
      return this.$slots.default
    }

    if (mounted) {
      if (!disabled) {
        return h('div', {
          class: 'p-portal',
          ref: 'slotContent'
        }, this.$slots.default)
      }
    }

    return null
  }
}
</script>
