<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/imagepreview"
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
<h5>Basic</h5>
<ImagePreview src="demo/images/galleria/galleria1.jpg" alt="Image" width="250" />

<h5>Preview</h5>
<ImagePreview src="demo/images/galleria/galleria11.jpg" alt="Image" width="250" preview />
        `
      },
    }
  }
}
</script>
