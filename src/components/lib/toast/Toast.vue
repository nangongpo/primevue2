<template>
  <div ref="container" :class="containerClass">
    <transition-group name="p-toast-message" tag="div" @enter="onEnter">
      <ToastMessage v-for="msg of messages" :key="msg.id" :message="msg" :templates="$scopedSlots"
        @close="remove($event)" />
    </transition-group>
  </div>
</template>

<script>
import ToastEventBus from 'primevue2/toasteventbus'
import ToastMessage from './ToastMessage.vue'
import { UniqueComponentId, DomHandler } from 'primevue2/utils'

let messageIdx = 0

export default {
  name: 'Toast',
  props: {
    group: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: 'top-right'
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    breakpoints: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      messages: []
    }
  },
  styleElement: null,
  mounted() {
    ToastEventBus.on('add', (message) => {
      if (this.group == message.group) {
        this.add(message)
      }
    })
    ToastEventBus.on('remove-group', (group) => {
      if (this.group === group) {
        this.messages = []
      }
    })
    ToastEventBus.on('remove-all-groups', () => {
      this.messages = []
    })

    this.updateZIndex()

    if (this.breakpoints) {
      this.createStyle()
    }
  },
  beforeUpdate() {
    this.updateZIndex()
  },
  beforeDestroy() {
    this.destroyStyle()
  },
  methods: {
    add(message) {
      if (message.id == null) {
        message.id = messageIdx++
      }

      this.messages = [...this.messages, message]
    },
    remove(message) {
      let index = -1
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i] === message) {
          index = i
          break
        }
      }

      this.messages.splice(index, 1)
    },
    updateZIndex() {
      if (this.autoZIndex) {
        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex())
      }
    },
    onEnter() {
      this.$refs.container.setAttribute(this.attributeSelector, '')
    },
    createStyle() {
      if (!this.styleElement) {
        this.styleElement = document.createElement('style')
        this.styleElement.type = 'text/css'
        document.head.appendChild(this.styleElement)
        let innerHTML = ''
        for (let breakpoint in this.breakpoints) {
          let breakpointStyle = ''
          for (let styleProp in this.breakpoints[breakpoint]) {
            breakpointStyle += styleProp + ':' + this.breakpoints[breakpoint][styleProp] + '!important;'
          }
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-toast[${this.attributeSelector}] {
                                ${breakpointStyle}
                            }
                        }
                    `
        }
        this.styleElement.innerHTML = innerHTML
      }
    },
    destroyStyle() {
      if (this.styleElement) {
        document.head.removeChild(this.styleElement)
        this.styleElement = null
      }
    }
  },
  components: {
    'ToastMessage': ToastMessage
  },
  computed: {
    containerClass() {
      return 'p-toast p-component p-toast-' + this.position
    },
    attributeSelector() {
      return UniqueComponentId()
    }
  }
}
</script>
