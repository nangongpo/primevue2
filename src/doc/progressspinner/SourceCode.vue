<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/progressspinner"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<h3>Basic</h3>
<ProgressSpinner />

<h3>Custom</h3>
<ProgressSpinner style="width:50px;height:50px" strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
        `
      },
    }
  }
}
</script>
