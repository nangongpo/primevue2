<template>
  <div class="p-splitbutton p-component">
    <PVSButton
      type="button"
      class="p-splitbutton-defaultbutton"
      :icon="icon"
      :label="label"
      @click="onDefaultButtonClick"
      :disabled="disabled"
      :tabindex="tabindex" />
    <PVSButton
      type="button"
      class="p-splitbutton-menubutton"
      icon="pi pi-chevron-down"
      @click="onDropdownButtonClick"
      :disabled="disabled"
      aria-haspopup="true"
      :aria-controls="ariaId + '_overlay'" />
    <PVSMenu
      :id="ariaId + '_overlay'"
      ref="menu"
      :model="model"
      :popup="true"
      :autoZIndex="autoZIndex"
      :baseZIndex="baseZIndex"
      :appendTo="appendTo" />
  </div>
</template>

<script>
import Button from 'primevue2/button'
import Menu from 'primevue2/menu'
import { UniqueComponentId } from 'primevue2/utils'

export default {
  name: 'SplitButton',
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    model: {
      type: Array,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: String,
      default: null
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    appendTo: {
      type: String,
      default: null
    }
  },
  methods: {
    onDefaultButtonClick(event) {
      this.$emit('click', event)
      this.$refs.menu.hide()
    },
    onDropdownButtonClick() {
      this.$refs.menu.toggle({ currentTarget: this.$el, relativeAlign: this.appendTo == null })
    }
  },
  computed: {
    ariaId() {
      return UniqueComponentId()
    }
  },
  components: {
    'PVSButton': Button,
    'PVSMenu': Menu
  }
}
</script>

<style>
.p-splitbutton {
  display: inline-flex;
  position: relative;
}

.p-splitbutton .p-splitbutton-defaultbutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button {
  flex: 1 1 auto;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0 none;
}

.p-splitbutton-menubutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button  {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
  min-width: 100%;
}

.p-fluid .p-splitbutton  {
  display: flex;
}
</style>
