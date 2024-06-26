<template>
  <button :class="buttonClass" v-on="$listeners" type="button" v-ripple>
    <slot>
      <span v-if="loading && !icon" :class="iconClass"></span>
      <span v-if="icon" :class="iconClass"></span>
      <span class="p-button-label">{{ label || "&nbsp;" }}</span>
      <span class="p-badge" v-if="badge" :class="badgeStyleClass">{{ badge }}</span>
    </slot>
  </button>
</template>

<script>
import Ripple from 'primevue2/ripple'

export default {
  name: 'Button',
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    },
    iconPos: {
      type: String,
      default: 'left'
    },
    badge: {
      type: String
    },
    badgeClass: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: 'pi pi-spinner pi-spin'
    }
  },
  computed: {
    buttonClass() {
      return {
        'p-button p-component': true,
        'p-button-icon-only': this.icon && !this.label,
        'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
        'p-disabled': this.disabled
      }
    },
    iconClass() {
      return [
        this.loading ? this.loadingIcon : this.icon,
        'p-button-icon',
        {
          'p-button-icon-left': this.iconPos === 'left' && this.label,
          'p-button-icon-right': this.iconPos === 'right' && this.label,
          'p-button-icon-top': this.iconPos === 'top' && this.label,
          'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
        }
      ]
    },
    badgeStyleClass() {
      return [
        'p-badge p-component', this.badgeClass, {
          'p-badge-no-gutter': this.badge && String(this.badge).length === 1
        }]
    }
  },
  directives: {
    'ripple': Ripple
  }
}
</script>
