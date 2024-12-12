<template>
  <div
    :class="containerClass"
    aria-haspopup="listbox"
    :aria-owns="listId"
    :aria-expanded="overlayVisible"
    @click="onContainerClick">
    <input
      ref="input"
      :class="inputClass"
      v-bind="$attrs"
      v-on="listeners"
      :value="inputValue"
      type="text"
      autoComplete="off"
      v-if="!multiple"
      role="searchbox"
      aria-autocomplete="list"
      :aria-controls="listId"
      :aria-labelledby="ariaLabelledBy" />
    <ul
      ref="multiContainer"
      :class="multiContainerClass"
      v-if="multiple"
      @click="onMultiContainerClick">
      <li v-for="(item, i) of value" :key="i" class="p-autocomplete-token">
        <span class="p-autocomplete-token-label">{{
          getItemContent(item)
        }}</span>
        <span
          class="p-autocomplete-token-icon pi pi-times-circle"
          @click="removeItem($event, i)"></span>
      </li>
      <li class="p-autocomplete-input-token">
        <input
          ref="input"
          type="text"
          autoComplete="off"
          v-bind="$attrs"
          v-on="listeners"
          role="searchbox"
          aria-autocomplete="list"
          :aria-controls="listId"
          :aria-labelledby="ariaLabelledBy" />
      </li>
    </ul>
    <i class="p-autocomplete-loader pi pi-spinner pi-spin" v-if="searching || loading"></i>
    <Button
      ref="dropdownButton"
      type="button"
      icon="pi pi-chevron-down"
      class="p-autocomplete-dropdown"
      :disabled="$attrs.disabled"
      @click="onDropdownClick"
      v-if="dropdown" />
    <transition
      name="p-connected-overlay"
      @enter="onOverlayEnter"
      @after-enter="onOverlayAfterEnter"
      @leave="onOverlayLeave"
      @after-leave="onOverlayAfterLeave">
      <div
        v-if="overlayVisible"
        :ref="overlayRef"
        class="p-autocomplete-panel p-component"
        :style="{ 'max-height': scrollHeight }">
        <ul :id="listId" class="p-autocomplete-items" role="listbox">
          <li
            v-for="(item, i) of suggestions"
            class="p-autocomplete-item"
            :key="i"
            @click="selectItem($event, item)"
            role="option"
            v-ripple>
            <slot name="item" :item="item" :index="i">
              {{ getItemContent(item) }}
            </slot>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  ConnectedOverlayScrollHandler,
  ObjectUtils,
  DomHandler,
  UniqueComponentId,
  ZIndexUtils
} from 'primevue2/utils'
import Button from 'primevue2/button'
import Ripple from 'primevue2/ripple'

export default {
  name: 'AutoComplete',
  inheritAttrs: false,
  props: {
    value: null,
    suggestions: {
      type: Array,
      default: null
    },
    field: {
      type: [String, Function],
      default: null
    },
    scrollHeight: {
      type: String,
      default: '200px'
    },
    dropdown: {
      type: Boolean,
      default: false
    },
    dropdownMode: {
      type: String,
      default: 'blank'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    minLength: {
      type: Number,
      default: 1
    },
    delay: {
      type: Number,
      default: 300
    },
    ariaLabelledBy: {
      type: String,
      default: null
    },
    appendTo: {
      type: String,
      default: null
    },
    forceSelection: {
      type: Boolean,
      default: false
    },
    autoHighlight: {
      type: Boolean,
      default: false
    }
  },
  timeout: null,
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  data() {
    return {
      clicked: false,
      searching: false,
      focused: false,
      overlayVisible: false,
      inputTextValue: null
    }
  },
  watch: {
    suggestions() {
      if (this.searching) {
        if (this.suggestions && this.suggestions.length) {
          this.showOverlay()
        } else {
          this.hideOverlay()
        }

        this.searching = false
      }
    }
  },
  beforeDestroy() {
    this.restoreAppend()
    this.unbindOutsideClickListener()
    this.unbindResizeListener()

    if (this.scrollHandler) {
      this.scrollHandler.destroy()
      this.scrollHandler = null
    }

    if (this.overlay) {
      ZIndexUtils.clear(this.overlay)
      this.overlay = null
    }
  },
  updated() {
    if (this.overlayVisible) {
      this.alignOverlay()
    }
  },
  methods: {
    onOverlayEnter(el) {
      ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay)
      DomHandler.addStyles(el, { position: 'absolute', top: '0', left: '0' })
      this.appendContainer()
      this.alignOverlay()

      if (this.autoHighlight && this.suggestions && this.suggestions.length) {
        DomHandler.addClass(
          this.overlay.firstElementChild.firstElementChild,
          'p-highlight'
        )
      }
    },
    onOverlayAfterEnter() {
      this.bindOutsideClickListener()
      this.bindScrollListener()
      this.bindResizeListener()

      this.$emit('show')
    },
    onOverlayLeave() {
      this.unbindOutsideClickListener()
      this.unbindScrollListener()
      this.unbindResizeListener()

      this.$emit('hide')
      this.overlay = null
    },
    onOverlayAfterLeave(el) {
      ZIndexUtils.clear(el)
    },
    alignOverlay() {
      let target = this.multiple ? this.$refs.multiContainer : this.$refs.input
      if (this.appendTo) {
        this.overlay.style.minWidth = DomHandler.getOuterWidth(target) + 'px'
        DomHandler.absolutePosition(this.overlay, target)
      } else {
        DomHandler.relativePosition(this.overlay, target)
      }
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = (event) => {
          if (
            this.overlayVisible &&
            this.overlay &&
            this.isOutsideClicked(event)
          ) {
            this.hideOverlay()
          }
        }
        document.addEventListener('click', this.outsideClickListener)
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener)
        this.outsideClickListener = null
      }
    },
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, () => {
          if (this.overlayVisible) {
            this.hideOverlay()
          }
        })
      }

      this.scrollHandler.bindScrollListener()
    },
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener()
      }
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = () => {
          if (this.overlayVisible && !DomHandler.isTouchDevice()) {
            this.hideOverlay()
          }
        }
        window.addEventListener('resize', this.resizeListener)
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener)
        this.resizeListener = null
      }
    },
    isOutsideClicked(event) {
      return (
        !this.overlay.contains(event.target) &&
        !this.isInputClicked(event) &&
        !this.isDropdownClicked(event)
      )
    },
    isInputClicked(event) {
      if (this.multiple)
        return (
          event.target === this.$refs.multiContainer ||
          this.$refs.multiContainer.contains(event.target)
        )
      else return event.target === this.$refs.input
    },
    isDropdownClicked(event) {
      return this.$refs.dropdownButton
        ? event.target === this.$refs.dropdownButton ||
            this.$refs.dropdownButton.$el.contains(event.target)
        : false
    },
    selectItem(event, item) {
      if (this.multiple) {
        this.$refs.input.value = ''
        this.inputTextValue = ''

        if (!this.isSelected(item)) {
          let newValue = this.value ? [...this.value, item] : [item]
          this.updateValue(event, newValue)
        }
      } else {
        this.updateValue(event, item)
      }

      this.$emit('item-select', {
        originalEvent: event,
        value: item
      })

      this.focus()
      this.hideOverlay()
    },
    onMultiContainerClick() {
      this.focus()
    },
    removeItem(event, index) {
      let removedValue = this.value[index]
      let newValue = this.value.filter((val, i) => index !== i)
      this.updateValue(event, newValue)
      this.$emit('item-unselect', {
        originalEvent: event,
        value: removedValue
      })
    },
    onContainerClick(event) {
      this.clicked = true

      if (
        this.disabled ||
        this.searching ||
        this.loading ||
        this.isInputClicked(event) ||
        this.isDropdownClicked(event)
      ) {
        return
      }

      if (!this.overlay || !this.overlay.contains(event.target)) {
        DomHandler.focus(this.$refs.input)
      }
    },
    onDropdownClick(event) {
      this.focus()
      const query = this.$refs.input.value

      if (this.dropdownMode === 'blank') this.search(event, '', 'dropdown')
      else if (this.dropdownMode === 'current')
        this.search(event, query, 'dropdown')

      this.$emit('dropdown-click', {
        originalEvent: event,
        query: query
      })
    },
    getItemContent(item) {
      return this.field ? ObjectUtils.resolveFieldData(item, this.field) : item
    },
    showOverlay(isFocus) {
      this.$emit('before-show')
      this.overlayVisible = true

      isFocus && DomHandler.focus(this.$refs.input)
    },
    hideOverlay(isFocus) {
      const _hide = () => {
        this.$emit('before-hide')
        this.overlayVisible = false

        isFocus && DomHandler.focus(this.$refs.input)
      }
      setTimeout(() => {
        _hide()
      }, 0)
    },
    focus() {
      this.$refs.input.focus()
    },
    search(event, query, source) {
      //allow empty string but not undefined or null
      if (query === undefined || query === null) {
        return
      }

      //do not search blank values on input change
      if (source === 'input' && query.trim().length === 0) {
        return
      }

      this.searching = true
      this.$emit('complete', {
        originalEvent: event,
        query: query
      })
    },
    onInput(event) {
      this.inputTextValue = event.target.value

      if (this.timeout) {
        clearTimeout(this.timeout)
      }

      let query = event.target.value
      if (!this.multiple) {
        this.updateValue(event, query)
      }

      if (query.length === 0) {
        this.hideOverlay()
        this.$emit('clear')
      } else {
        if (query.length >= this.minLength) {
          this.timeout = setTimeout(() => {
            this.search(event, query, 'input')
          }, this.delay)
        } else {
          this.hideOverlay()
        }
      }
    },
    onFocus(event) {
      this.focused = true
      this.$emit('focus', event)
    },
    onBlur(event) {
      this.focused = false
      this.$emit('blur', event)
    },
    onKeyDown(event) {
      const keyCode = ObjectUtils.getKeyboardCode(event)
      if (this.overlayVisible) {
        let highlightItem = DomHandler.findSingle(
          this.overlay,
          'li.p-highlight'
        )

        switch (keyCode) {
        //down
        case 40:
          if (highlightItem) {
            let nextElement = highlightItem.nextElementSibling
            if (nextElement) {
              DomHandler.addClass(nextElement, 'p-highlight')
              DomHandler.removeClass(highlightItem, 'p-highlight')
              DomHandler.scrollInView(this.overlay, nextElement)
            }
          } else {
            DomHandler.addClass(
              this.overlay.firstChild.firstElementChild,
              'p-highlight'
            )
          }

          event.preventDefault()
          break

          //up
        case 38:
          if (highlightItem) {
            let previousElement = highlightItem.previousElementSibling
            if (previousElement) {
              DomHandler.addClass(previousElement, 'p-highlight')
              DomHandler.removeClass(highlightItem, 'p-highlight')
              DomHandler.scrollInView(this.overlay, previousElement)
            }
          }

          event.preventDefault()
          break

          //enter,tab
        case 13:
          if (highlightItem) {
            this.selectItem(
              event,
              this.suggestions[DomHandler.index(highlightItem)]
            )
            this.hideOverlay()
          }

          event.preventDefault()
          break

          //escape
        case 27:
          this.hideOverlay()
          event.preventDefault()
          break

          //tab
        case 9:
          if (highlightItem) {
            this.selectItem(
              event,
              this.suggestions[DomHandler.index(highlightItem)]
            )
          }

          this.hideOverlay()
          break

        default:
          break
        }
      }

      if (this.multiple) {
        switch (keyCode) {
        //backspace
        case 8:
          if (this.value && this.value.length && !this.$refs.input.value) {
            let removedValue = this.value[this.value.length - 1]
            let newValue = this.value.slice(0, -1)

            this.updateValue(event, newValue)
            this.$emit('item-unselect', {
              originalEvent: event,
              value: removedValue
            })
          }
          break

        default:
          break
        }
      }
    },
    onChange(event) {
      if (this.forceSelection) {
        let valid = false
        let inputValue = event.target.value.trim()

        if (this.suggestions) {
          for (let item of this.suggestions) {
            let itemValue = this.field
              ? ObjectUtils.resolveFieldData(item, this.field)
              : item
            if (itemValue && inputValue === itemValue.trim()) {
              valid = true
              this.selectItem(event, item)
              break
            }
          }
        }

        if (!valid) {
          this.$refs.input.value = ''
          this.inputTextValue = ''
          this.$emit('clear')
          !this.multiple && this.updateValue(event, null)
        }
      }
    },
    isSelected(val) {
      let selected = false
      if (this.value && this.value.length) {
        for (let i = 0; i < this.value.length; i++) {
          if (ObjectUtils.equals(this.value[i], val)) {
            selected = true
            break
          }
        }
      }

      return selected
    },
    appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') document.body.appendChild(this.overlay)
        else document.getElementById(this.appendTo).appendChild(this.overlay)
      }
    },
    restoreAppend() {
      if (this.overlay && this.appendTo) {
        if (this.appendTo === 'body') document.body.removeChild(this.overlay)
        else document.getElementById(this.appendTo).removeChild(this.overlay)
      }
    },
    overlayRef(el) {
      this.overlay = el
    },
    updateValue(event, value) {
      this.$emit('input', value)
      this.$emit('change', { originalEvent: event, value })
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        focus: this.onFocus,
        blur: this.onBlur,
        keydown: this.onKeyDown,
        change: this.onChange
      }
    },
    containerClass() {
      return [
        'p-autocomplete p-component p-inputwrapper',
        {
          'p-autocomplete-dd': this.dropdown,
          'p-autocomplete-multiple': this.multiple,
          'p-inputwrapper-filled':
            this.value || (this.inputTextValue && this.inputTextValue.length),
          'p-inputwrapper-focus': this.focused
        }
      ]
    },
    inputClass() {
      return [
        'p-autocomplete-input p-inputtext p-component',
        {
          'p-autocomplete-dd-input': this.dropdown,
          'p-disabled': this.$attrs.disabled
        }
      ]
    },
    multiContainerClass() {
      return [
        'p-autocomplete-multiple-container p-component p-inputtext',
        {
          'p-disabled': this.$attrs.disabled,
          'p-focus': this.focused
        }
      ]
    },
    inputValue() {
      if (this.value) {
        if (this.field && typeof this.value === 'object') {
          const resolvedFieldData = ObjectUtils.resolveFieldData(
            this.value,
            this.field
          )
          return resolvedFieldData != null ? resolvedFieldData : this.value
        } else return this.value
      } else {
        return ''
      }
    },
    listId() {
      return UniqueComponentId() + '_list'
    }
  },
  components: {
    Button: Button
  },
  directives: {
    ripple: Ripple
  }
}
</script>

<style>
.p-autocomplete {
  display: inline-flex;
  position: relative;
}

.p-autocomplete-loader {
  position: absolute;
  top: 50%;
  margin-top: -0.5rem;
}

.p-autocomplete-dd .p-autocomplete-input {
  flex: 1 1 auto;
  width: 1%;
}

.p-autocomplete-dd .p-autocomplete-input,
.p-autocomplete-dd .p-autocomplete-multiple-container {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.p-autocomplete-dd .p-autocomplete-dropdown {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0px;
}

.p-autocomplete .p-autocomplete-panel {
  min-width: 100%;
}

.p-autocomplete-panel {
  position: absolute;
  overflow: auto;
}

.p-autocomplete-items {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.p-autocomplete-item {
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.p-autocomplete-multiple-container {
  margin: 0;
  padding: 0;
  list-style-type: none;
  cursor: text;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.p-autocomplete-token {
  cursor: default;
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}

.p-autocomplete-token-icon {
  cursor: pointer;
}

.p-autocomplete-input-token {
  flex: 1 1 auto;
  display: inline-flex;
}

.p-autocomplete-input-token input {
  border: 0 none;
  outline: 0 none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  box-shadow: none;
  border-radius: 0;
  width: 100%;
}

.p-fluid .p-autocomplete {
  display: flex;
}

.p-fluid .p-autocomplete-dd .p-autocomplete-input {
  width: 1%;
}
</style>
