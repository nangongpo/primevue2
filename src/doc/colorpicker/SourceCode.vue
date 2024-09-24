<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/colorpicker"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<h3>Inline</h3>
<ColorPicker v-model="color1" :inline="true" />

<h3>Overlay</h3>
<ColorPicker v-model="color2" />
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            color1: null,
            color2: '1976D2'
        }
    }
}
        `
      },
    }
  }
}
</script>
