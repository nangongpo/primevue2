<template>
  <JTPDropdown
    :value="page"
    :options="pageOptions"
    optionLabel="label"
    optionValue="value"
    @input="onChange($event)"
    class="p-paginator-page-options"
    :disabled="disabled"></JTPDropdown>
</template>

<script>
import Dropdown from 'primevue2/dropdown'

export default {
  inheritAttrs: false,
  props: {
    page: Number,
    pageCount: Number,
    disabled: Boolean
  },
  methods: {
    onChange(value) {
      this.$emit('page-change', value)
    }
  },
  computed: {
    pageOptions() {
      let opts = []
      for (let i = 0; i < this.pageCount; i++) {
        opts.push({ label: String(i + 1), value: i })
      }
      return opts
    }
  },
  components: {
    'JTPDropdown': Dropdown
  }
}
</script>
