<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/styleclass"
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
<div class="card">
    <h5>Toggle Class</h5>
    <Button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" />
    <InputText class="block mt-3" />

    <h5>Animations</h5>
    <Button label="Show" class="mr-2" v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" />
    <Button label="Hide" v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" />
    <div class="box hidden">Content</div>
</div>
        `
      },
    }
  }
}
</script>
