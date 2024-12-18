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

  console.log(target)

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
    isTeleport({ disabled, appendTo }) {
      return !disabled && appendTo !== 'self'
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
      console.log(this)

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
    if (!this.isTeleport) {
      return this.$slots.default
    }

    if (this.mounted) {
      return h('div', {
        class: 'p-portal',
        ref: 'slotContent'
      }, this.$slots.default)
    }

    return null
  }
}
</script>
