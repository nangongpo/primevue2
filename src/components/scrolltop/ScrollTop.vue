<template>
  <transition name="p-scrolltop" appear @enter="onEnter">
    <button :class="containerClass" v-if="visible" @click="onClick" type="button" ref="button">
      <span :class="iconClass"></span>
    </button>
  </transition>
</template>

<script>
import { DomHandler } from 'primevue2/utils'
export default {
  name: 'ScrollTop',
  scrollListener: null,
  data() {
    return {
      visible: false
    }
  },
  props: {
    target: {
      type: String,
      default: 'window'
    },
    threshold: {
      type: Number,
      default: 400
    },
    icon: {
      type: String,
      default: 'pi pi-chevron-up'
    },
    behavior: {
      type: String,
      default: 'smooth'
    }
  },
  mounted() {
    if (this.target === 'window')
      this.bindDocumentScrollListener()
    else if (this.target === 'parent')
      this.bindParentScrollListener()
  },
  beforeDestroy() {
    if (this.target === 'window')
      this.unbindDocumentScrollListener()
    else if (this.target === 'parent')
      this.unbindParentScrollListener()
  },
  methods: {
    onClick() {
      let scrollElement = this.target === 'window' ? window : this.$el.parentElement
      scrollElement.scroll({
        top: 0,
        behavior: this.behavior
      })
    },
    checkVisibility(scrollY) {
      if (scrollY > this.threshold)
        this.visible = true
      else
        this.visible = false
    },
    bindParentScrollListener() {
      this.scrollListener = () => {
        this.checkVisibility(this.$el.parentElement.scrollTop)
      }

      this.$el.parentElement.addEventListener('scroll', this.scrollListener)
    },
    bindDocumentScrollListener() {
      this.scrollListener = () => {
        this.checkVisibility(DomHandler.getWindowScrollTop())
      }

      window.addEventListener('scroll', this.scrollListener)
    },
    unbindParentScrollListener() {
      if (this.scrollListener) {
        this.$el.parentElement.removeEventListener('scroll', this.scrollListener)
        this.scrollListener = null
      }
    },
    unbindDocumentScrollListener() {
      if (this.scrollListener) {
        window.removeEventListener('scroll', this.scrollListener)
        this.scrollListener = null
      }
    },
    onEnter() {
      this.$refs.button.style.zIndex = String(DomHandler.generateZIndex())
    }
  },
  computed: {
    containerClass() {
      return ['p-scrolltop p-link p-component', { 'p-scrolltop-sticky': this.target !== 'window' }]
    },
    iconClass() {
      return ['p-scrolltop-icon', this.icon]
    }
  }
}
</script>

<style>
.p-scrolltop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.p-scrolltop-sticky {
  position: sticky;
}
.p-scrolltop-sticky.p-link {
  margin-left: auto;
}
.p-scrolltop-enter-from {
  opacity: 0;
}
.p-scrolltop-enter-active {
  transition: opacity .15s;
}
.p-scrolltop.p-scrolltop-leave-to {
  opacity: 0;
}
.p-scrolltop-leave-active {
  transition: opacity .15s;
}
</style>
