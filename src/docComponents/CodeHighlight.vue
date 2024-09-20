<template>
  <pre :class="languageClass"><code ref="code">
<slot></slot>
  </code></pre>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'markup'
    }
  },
  computed: {
    languageClass() {
      return 'language-' + this.lang
    }
  },
  mounted() {
    window.Prism.highlightElement(this.$el.children[0])
  }
}
</script>
