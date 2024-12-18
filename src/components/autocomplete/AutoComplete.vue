<template>
  <div ref="container" :class="containerClass" @click="onContainerClick">
    <input
      v-if="!multiple"
      ref="input"
      :id="inputId"
      type="text"
      :class="inputClass"
      v-bind="$attrs"
      :value="inputValue"
      :placeholder="placeholder"
      :tabindex="!$attrs.disabled ? tabindex : -1"
      autoComplete="off"
      role="searchbox"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      aria-haspopup="listbox"
      aria-autocomplete="list"
      :aria-expanded="overlayVisible"
      :aria-controls="id + '_list'"
      :aria-activedescendant="focused ? focusedOptionId : undefined"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      @input="onInput"
      @change="onChange"
    />
    <ul
      v-if="multiple"
      ref="multiContainer"
      :class="multiContainerClass"
      tabindex="-1"
      role="listbox"
      aria-orientation="horizontal"
      :aria-activedescendant="focused ? focusedMultipleOptionId : undefined"
      @focus="onMultipleContainerFocus"
      @blur="onMultipleContainerBlur"
      @keydown="onMultipleContainerKeyDown">
      <li 
        v-for="(option, i) of value" 
        :key="i"
        :id="id + '_multiple_option_' + i"
        class="p-autocomplete-token"
        role="option"
        :aria-label="getOptionLabel(option)"
        :aria-selected="true"
        :aria-setsize="value.length"
        :aria-posinset="i + 1">
        <slot name="chip" :value="option">
          <span class="p-autocomplete-token-label" >{{ getOptionLabel(option) }}</span>
        </slot>
        <slot name="removetokenicon" class="p-autocomplete-token-icon" :index="i" :removeCallback="(event) => removeOption(event, i)">
          <span class="p-autocomplete-token-icon pi pi-times-circle" aria-hidden="true" @click="removeOption($event, i)"></span>
        </slot>
      </li>
      <li class="p-autocomplete-input-token" role="option">
        <input
          ref="input"
          :id="inputId"
          type="text"
          :placeholder="placeholder"
          :tabindex="!$attrs.disabled ? tabindex : -1"
          autoComplete="off"
          v-bind="$attrs"
          role="searchbox"
          :aria-label="ariaLabel"
          :aria-labelledby="ariaLabelledBy"
          aria-haspopup="listbox"
          aria-autocomplete="list"
          :aria-expanded="overlayVisible"
          :aria-controls="id + '_list'"
          :aria-activedescendant="focused ? focusedOptionId : undefined"
          @focus="onFocus"
          @blur="onBlur"
          @keydown="onKeyDown"
          @input="onInput"
          @change="onChange" 
        />
      </li>
    </ul>
    <slot v-if="searching || loading" name="loadingicon" className="p-autocomplete-loader">
      <i class="p-autocomplete-loader pi pi-spin pi-spinner"></i>
    </slot>
    <Button
      v-if="dropdown"
      ref="dropdownButton"
      type="button"
      tabindex="-1"
      class="p-autocomplete-dropdown"
      icon="pi pi-chevron-down"
      :disabled="$attrs.disabled"
      @click="onDropdownClick"
    />
    <span role="status" aria-live="polite" class="p-hidden-accessible">
      {{ selectedMessageText }}
    </span>
    <Portal :appendTo="appendTo">
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
          :style="{ 'max-height': virtualScrollerDisabled ? scrollHeight : '' }"
          @click="onOverlayClick"
          @keydown="onOverlayKeyDown">
          <slot name="header" :value="value" :suggestions="visibleOptions"></slot>
          <VirtualScroller :ref="virtualScrollerRef" v-bind="virtualScrollerOptions" :style="{ height: scrollHeight }" :items="visibleOptions" :tabindex="-1" :disabled="virtualScrollerDisabled">
            <template v-slot:content="{ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }">
              <ul 
                :ref="(el) => listRef(el, contentRef)" 
                :id="id + '_list'"
                :class="['p-autocomplete-items', styleClass]" 
                :style="contentStyle"
                role="listbox" 
                :aria-label="listAriaLabel">
                <template v-for="(option, i) of items">
                  <li 
                    v-if="isOptionGroup(option)"
                    :key="getOptionRenderKey(option, getOptionIndex(i, getItemOptions))"
                    :id="id + '_' + getOptionIndex(i, getItemOptions)" 
                    :style="{ height: itemSize ? itemSize + 'px' : undefined }" 
                    class="p-autocomplete-item-group"
                    role="option">
                    <slot name="optiongroup" :option="option.optionGroup" :item="option.optionGroup" :index="getOptionIndex(i, getItemOptions)">{{ getOptionGroupLabel(option.optionGroup) }}</slot>
                  </li>

                  <li
                    v-else
                    :key="getOptionRenderKey(option, getOptionIndex(i, getItemOptions))"
                    :id="id + '_' + getOptionIndex(i, getItemOptions)"
                    :style="{ height: itemSize ? itemSize + 'px' : undefined }"
                    :class="['p-autocomplete-item', { 'p-focus': i === focusedOptionIndex, 'p-highlight': isSelected(option) }]"
                    role="option"
                    :aria-label="getOptionLabel(option)"
                    :aria-selected="isSelected(option)"
                    :aria-disabled="isOptionDisabled(option)"
                    :aria-setsize="ariaSetSize"
                    :aria-posinset="getAriaPosInset(getOptionIndex(i, getItemOptions))"
                    @click="onOptionSelect($event, option)"
                    @mousemove="onOptionMouseMove($event, getOptionIndex(i, getItemOptions))"
                    v-ripple>
                    <slot v-if="$scopedSlots.option" name="option" :option="option" :index="getOptionIndex(i, getItemOptions)">{{ getOptionLabel(option) }}</slot>
                    <slot v-else name="item" :item="option" :index="getOptionIndex(i, getItemOptions)">{{ getOptionLabel(option) }}</slot>
                  </li>
                </template>
                <li v-if="!items || (items && items.length === 0)" class="p-autocomplete-item p-autocomplete-empty-message" role="option">
                  <slot name="empty">{{ searchResultMessageText }}</slot>
                </li>
              </ul>
            </template>
            <template v-if="$scopedSlots.loader" v-slot:loader="{ options }">
              <slot name="loader" :options="options"></slot>
            </template>
          </VirtualScroller>
          <slot name="footer" :value="value" :suggestions="visibleOptions"></slot>
          <span role="status" aria-live="polite" class="p-hidden-accessible">
            {{ selectedMessageText }}
          </span>
        </div>
      </transition>
    </Portal>
  </div>
</template>

<script>
import {
  ConnectedOverlayScrollHandler,
  ObjectUtils,
  DomHandler,
  UniqueComponentId,
  ZIndexUtils,
  KeyboardHandler
} from 'primevue2/utils'
import Button from 'primevue2/button'
import VirtualScroller from 'primevue2/virtualscroller'
import Portal from 'primevue2/portal'
import OverlayEventBus from 'primevue2/overlayeventbus'
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
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
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
    autoHighlight: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    dataKey: {
      type: String,
      default: null
    },
    minLength: {
      type: Number,
      default: 1
    },
    delay: {
      type: Number,
      default: 300
    },
    appendTo: {
      type: String,
      default: 'body'
    },
    forceSelection: {
      type: Boolean,
      default: false
    },
    completeOnFocus: {
      type: Boolean,
      default: false
    },
    inputId: {
      type: String,
      default: null
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    autoOptionFocus: {
      type: Boolean,
      default: false
    },
    selectOnFocus: {
      type: Boolean,
      default: false
    },
    focusOnHover: {
      type: Boolean,
      default: true
    },
    searchLocale: {
      type: String,
      default: undefined
    },
    searchMessage: {
      type: String,
      default: null
    },
    selectionMessage: {
      type: String,
      default: null
    },
    emptySelectionMessage: {
      type: String,
      default: null
    },
    emptySearchMessage: {
      type: String,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    },
    ariaLabel: {
      type: String,
      default: null
    },
    ariaLabelledBy: {
      type: String,
      default: null
    },
  },
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  virtualScroller: null,
  searchTimeout: null,
  dirty: false,
  data() {
    return {
      id: this.$attrs.id,
      clicked: false,
      focused: false,
      focusedOptionIndex: -1,
      focusedMultipleOptionIndex: -1,
      overlayVisible: false,
      searching: false
    }
  },
  watch: {
    '$attrs.id': function (newValue) {
      this.id = newValue || UniqueComponentId()
    },
    suggestions() {
      if (this.searching) {
        this.show()
        this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1
        this.searching = false
      }

      this.autoUpdateModel()
    }
  },
  mounted() {
    this.id = this.id || UniqueComponentId()
    this.autoUpdateModel()
  },
  updated() {
    if (this.overlayVisible) {
      this.alignOverlay()
    }
  },
  beforeDestroy() {
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
  methods: {
    getOptionLabelByValue(value) {
      const { optionValue, getOptionLabel, getOptionValue } = this
      if (optionValue) {
        return this.visibleOptions.reduce((t, v) => {
          const curentValue = getOptionValue(v)
          return ObjectUtils.deepEquals(curentValue, value) ? getOptionLabel(v) : t
        }, value)
      }
      return value
    },
    getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)['index']
    },
    getOptionLabel(option) {
      return this.field || this.optionLabel ? ObjectUtils.resolveFieldData(option, this.field || this.optionLabel) : option
    },
    getOptionValue(option) {
      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option
    },
    getOptionRenderKey(option, index) {
      return (this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)) + '_' + index
    },
    isOptionDisabled(option) {
      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false
    },
    isOptionGroup(option) {
      return this.optionGroupLabel && option.optionGroup && option.group
    },
    getOptionGroupLabel(optionGroup) {
      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel)
    },
    getOptionGroupChildren(optionGroup) {
      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren)
    },
    getAriaPosInset(index) {
      return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1
    },
    show(isFocus) {
      this.$emit('before-show')
      this.dirty = true
      this.overlayVisible = true
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1

      isFocus && DomHandler.focus(this.$refs.input)
    },
    hide(isFocus) {
      const _hide = () => {
        this.$emit('before-hide')
        this.dirty = isFocus
        this.overlayVisible = false
        this.clicked = false
        this.focusedOptionIndex = -1

        isFocus && DomHandler.focus(this.$refs.input)
      }

      setTimeout(() => {
        _hide()
      }, 0) // For ScreenReaders
    },
    onFocus(event) {
      if (this.disabled) {
        // For ScreenReaders
        return
      }

      if (!this.dirty && this.completeOnFocus) {
        this.search(event, event.target.value, 'focus')
      }

      this.dirty = true
      this.focused = true

      if (this.overlayVisible) {
        this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1
        this.scrollInView(this.focusedOptionIndex)
      }

      this.$emit('focus', event)
    },
    onBlur(event) {
      this.dirty = false
      this.focused = false
      this.focusedOptionIndex = -1
      this.$emit('blur', event)
    },
    onKeyDown(event) {
      if (this.disabled) {
        event.preventDefault()
        return
      }
      const keyCode = KeyboardHandler.getKeyboardCode(event)

      switch (keyCode) {
      // ArrowDown
      case 40:
        this.onArrowDownKey(event)
        break
      // ArrowUp
      case 38:
        this.onArrowUpKey(event)
        break
      // ArrowLeft
      case 37:
        this.onArrowLeftKey(event)
        break
      // ArrowRight
      case 39:
        this.onArrowRightKey(event)
        break
      // Home
      case 36:
        this.onHomeKey(event)
        break
      // End
      case 35:
        this.onEndKey(event)
        break
      // PageDown
      case 34:
        this.onPageDownKey(event)
        break
      // PageUp
      case 33:
        this.onPageUpKey(event)
        break
      // Enter
      case 13:
        this.onEnterKey(event)
        break
      // Escape
      case 27:
        this.onEscapeKey(event)
        break
      // Tab
      case 9:
        this.onTabKey(event)
        break
      // Backspace
      case 8:
        this.onBackspaceKey(event)
        break
      // Shift
      case 16:
        break

      default:
        break
      }

      this.clicked = false
    },
    onInput(event) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout)
      }

      let query = event.target.value

      if (!this.multiple) {
        this.updateModel(event, query)
      }

      if (query.length === 0) {
        this.hide()
        this.$emit('clear')
      } else {
        if (query.length >= this.minLength) {
          this.focusedOptionIndex = -1

          this.searchTimeout = setTimeout(() => {
            this.search(event, query, 'input')
          }, this.delay)
        } else {
          this.hide()
        }
      }
    },
    onChange(event) {
      if (this.forceSelection) {
        let valid = false

        // when forceSelection is on, prevent called twice onOptionSelect()
        if (this.visibleOptions && !this.multiple) {
          const matchedValue = this.visibleOptions.find((option) => this.isOptionMatched(option, this.$refs.input.value || ''))

          if (matchedValue !== undefined) {
            valid = true
            !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue)
          }
        }

        if (!valid) {
          this.$refs.input.value = ''
          this.$emit('clear')
          !this.multiple && this.updateModel(event, null)
        }
      }
    },
    onMultipleContainerFocus() {
      if (this.disabled) {
        // For ScreenReaders
        return
      }

      this.focused = true
    },
    onMultipleContainerBlur() {
      this.focusedMultipleOptionIndex = -1
      this.focused = false
    },
    onMultipleContainerKeyDown(event) {
      if (this.disabled) {
        event.preventDefault()

        return
      }

      const keyCode = KeyboardHandler.getKeyboardCode(event)

      switch (keyCode) {
      // ArrowLeft
      case 37:
        this.onArrowLeftKeyOnMultiple(event)
        break
      // ArrowRight
      case 39:
        this.onArrowRightKeyOnMultiple(event)
        break
      // Backspace
      case 8:
        this.onBackspaceKeyOnMultiple(event)
        break

      default:
        break
      }
    },
    onContainerClick(event) {
      this.clicked = true

      if (this.disabled || this.searching || this.loading || this.isInputClicked(event) || this.isDropdownClicked(event)) {
        return
      }

      if (!this.overlay || !this.overlay.contains(event.target)) {
        DomHandler.focus(this.$refs.input)
      }
    },
    onDropdownClick(event) {
      let query = undefined

      if (this.overlayVisible) {
        this.hide(true)
      } else {
        DomHandler.focus(this.$refs.input)
        query = this.$refs.input.value

        if (this.dropdownMode === 'blank') this.search(event, '', 'dropdown')
        else if (this.dropdownMode === 'current') this.search(event, query, 'dropdown')
      }

      this.$emit('dropdown-click', { originalEvent: event, query })
    },
    onOptionSelect(event, option, isHide = true) {
      const value = this.getOptionValue(option)

      if (this.multiple) {
        this.$refs.input.value = ''

        if (!this.isSelected(option)) {
          this.updateModel(event, [...(this.value || []), value])
        }
      } else {
        this.updateModel(event, value)
      }

      this.$emit('item-select', { originalEvent: event, value: option })

      isHide && this.hide(true)
    },
    onOptionMouseMove(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index)
      }
    },
    onOverlayClick(event) {
      OverlayEventBus.emit('overlay-click', {
        originalEvent: event,
        target: this.$el
      })
    },
    onOverlayKeyDown(event) {
      const keyCode = KeyboardHandler.getKeyboardCode(event)
      switch (keyCode) {
      // Escape
      case 27:
        this.onEscapeKey(event)
        break

      default:
        break
      }
    },
    onArrowDownKey(event) {
      if (!this.overlayVisible) {
        return
      }

      const optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex()

      this.changeFocusedOptionIndex(event, optionIndex)

      event.preventDefault()
    },
    onArrowUpKey(event) {
      if (!this.overlayVisible) {
        return
      }

      if (event.altKey) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex])
        }

        this.overlayVisible && this.hide()
        event.preventDefault()
      } else {
        const optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex()

        this.changeFocusedOptionIndex(event, optionIndex)

        event.preventDefault()
      }
    },
    onArrowLeftKey(event) {
      const target = event.currentTarget

      this.focusedOptionIndex = -1

      if (this.multiple) {
        if (ObjectUtils.isEmpty(target.value) && this.hasSelectedOption) {
          DomHandler.focus(this.$refs.multiContainer)
          this.focusedMultipleOptionIndex = this.value.length
        } else {
          event.stopPropagation() // To prevent onArrowLeftKeyOnMultiple method
        }
      }
    },
    onArrowRightKey(event) {
      this.focusedOptionIndex = -1

      this.multiple && event.stopPropagation() // To prevent onArrowRightKeyOnMultiple method
    },
    onHomeKey(event) {
      const { currentTarget } = event
      const len = currentTarget.value.length

      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0)
      this.focusedOptionIndex = -1

      event.preventDefault()
    },
    onEndKey(event) {
      const { currentTarget } = event
      const len = currentTarget.value.length

      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len)
      this.focusedOptionIndex = -1

      event.preventDefault()
    },
    onPageUpKey(event) {
      this.scrollInView(0)
      event.preventDefault()
    },
    onPageDownKey(event) {
      this.scrollInView(this.visibleOptions.length - 1)
      event.preventDefault()
    },
    onEnterKey(event) {
      if (!this.overlayVisible) {
        this.focusedOptionIndex = -1 // reset
        this.onArrowDownKey(event)
      } else {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex])
        }

        this.hide()
      }
    },
    onEscapeKey(event) {
      this.overlayVisible && this.hide(true)
      event.preventDefault()
    },
    onTabKey(event) {
      if (this.focusedOptionIndex !== -1) {
        this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex])
      }

      this.overlayVisible && this.hide()
    },
    onBackspaceKey(event) {
      if (this.multiple) {
        if (ObjectUtils.isNotEmpty(this.value) && !this.$refs.input.value) {
          const removedValue = this.value[this.value.length - 1]
          const newValue = this.value.slice(0, -1)

          this.updateModel(event, newValue)
          this.$emit('item-unselect', { originalEvent: event, value: removedValue })
        }

        event.stopPropagation() // To prevent onBackspaceKeyOnMultiple method
      }
    },
    onArrowLeftKeyOnMultiple() {
      this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1
    },
    onArrowRightKeyOnMultiple() {
      this.focusedMultipleOptionIndex++

      if (this.focusedMultipleOptionIndex > this.value.length - 1) {
        this.focusedMultipleOptionIndex = -1
        DomHandler.focus(this.$refs.input)
      }
    },
    onBackspaceKeyOnMultiple(event) {
      if (this.focusedMultipleOptionIndex !== -1) {
        this.removeOption(event, this.focusedMultipleOptionIndex)
      }
    },
    onOverlayEnter(el) {
      ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay)

      DomHandler.addStyles(el, { position: 'absolute', top: '0', left: '0' })
      this.alignOverlay()
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

      if (this.appendTo === 'self') {
        DomHandler.relativePosition(this.overlay, target)
      } else {
        this.overlay.style.minWidth = DomHandler.getOuterWidth(target) + 'px'
        DomHandler.absolutePosition(this.overlay, target)
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
            this.hide()
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
            this.hide()
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
            this.hide()
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
    isOptionMatched(option, value) {
      return this.isValidOption(option) && this.getOptionLabel(option)?.toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale)
    },
    isValidOption(option) {
      return ObjectUtils.isNotEmpty(option) && !(this.isOptionDisabled(option) || this.isOptionGroup(option))
    },
    isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option)
    },
    isEquals(value1, value2) {
      return ObjectUtils.equals(value1, value2, this.equalityKey)
    },
    isSelected(option) {
      const optionValue = this.getOptionValue(option)

      return this.multiple ? (this.value || []).some((value) => this.isEquals(value, optionValue)) : this.isEquals(this.value, this.getOptionValue(option))
    },
    findFirstOptionIndex() {
      return this.visibleOptions.findIndex((option) => this.isValidOption(option))
    },
    findLastOptionIndex() {
      return ObjectUtils.findLastIndex(this.visibleOptions, (option) => this.isValidOption(option))
    },
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1

      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index
    },
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index), (option) => this.isValidOption(option)) : -1

      return matchedOptionIndex > -1 ? matchedOptionIndex : index
    },
    findSelectedOptionIndex() {
      return this.hasSelectedOption ? this.visibleOptions.findIndex((option) => this.isValidSelectedOption(option)) : -1
    },
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex()

      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex
    },
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex()

      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex
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
      this.$emit('complete', { originalEvent: event, query })
    },
    removeOption(event, index) {
      const { getOptionValue } = this
      const removedOption = this.value[index]
      const value = this.value.filter((_, i) => i !== index).map((option) => getOptionValue(option))

      this.updateModel(event, value)
      this.$emit('item-unselect', { originalEvent: event, value: removedOption })
      this.dirty = true
      DomHandler.focus(this.$refs.input)
    },
    changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index
        this.scrollInView()

        if (this.selectOnFocus || this.autoHighlight) {
          this.onOptionSelect(event, this.visibleOptions[index], false)
        }
      }
    },
    scrollInView(index = -1) {
      this.$nextTick(() => {
        const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId
        const element = DomHandler.findSingle(this.list, `li[id="${id}"]`)

        if (element) {
          element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' })
        } else if (!this.virtualScrollerDisabled) {
          this.virtualScroller && this.virtualScroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex)
        }
      })
    },
    autoUpdateModel() {
      if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex()
        this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], false)
      }
    },
    updateModel(event, value) {
      this.$emit('input', value)
      this.$emit('change', { originalEvent: event, value })
    },
    flatOptions(options) {
      return (options || []).reduce((result, option, index) => {
        result.push({ optionGroup: option, group: true, index })

        const optionGroupChildren = this.getOptionGroupChildren(option)

        optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o))

        return result
      }, [])
    },
    overlayRef(el) {
      this.overlay = el
    },
    listRef(el, contentRef) {
      this.list = el
      contentRef && contentRef(el) // For VirtualScroller
    },
    virtualScrollerRef(el) {
      this.virtualScroller = el
    }
  },
  computed: {
    containerClass() {
      return [
        'p-autocomplete p-component p-inputwrapper',
        {
          'p-autocomplete-dd': this.dropdown,
          'p-autocomplete-multiple': this.multiple,
          'p-inputwrapper-filled': this.value,
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
          'p-disabled': this.$attrs.disabled
        }
      ]
    },
    visibleOptions() {
      return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || []
    },
    inputValue({ value, optionValue }) {
      if (ObjectUtils.isNotEmpty(value)) {
        if (typeof value === 'object') {
          const label = this.getOptionLabel(value)
          return label != null ? label : value
        } else {
          return this.getOptionLabelByValue(value)
        }
      } else {
        return ''
      }
    },
    hasSelectedOption() {
      return ObjectUtils.isNotEmpty(this.value)
    },
    equalityKey() {
      return this.dataKey // TODO: The 'optionValue' properties can be added.
    },
    searchResultMessageText() {
      return ObjectUtils.isNotEmpty(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll('{0}', this.visibleOptions.length) : this.emptySearchMessageText
    },
    searchMessageText() {
      return this.searchMessage || this.$primevue.config.locale.searchMessage || ''
    },
    emptySearchMessageText() {
      return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || ''
    },
    selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || ''
    },
    emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || ''
    },
    selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll('{0}', this.multiple ? this.value.length : '1') : this.emptySelectionMessageText
    },
    listAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : undefined
    },
    focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? `${this.id}_${this.focusedOptionIndex}` : null
    },
    focusedMultipleOptionId() {
      return this.focusedMultipleOptionIndex !== -1 ? `${this.id}_multiple_option_${this.focusedMultipleOptionIndex}` : null
    },
    ariaSetSize() {
      return this.visibleOptions.filter((option) => !this.isOptionGroup(option)).length
    },
    virtualScrollerDisabled() {
      return !this.virtualScrollerOptions
    }
  },
  components: {
    Button: Button,
    VirtualScroller: VirtualScroller,
    Portal: Portal
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

.p-virtualscroller .p-autocomplete-item {
  display: flex;
  align-items: center;
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
