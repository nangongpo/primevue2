<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/tooltip"
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
<h3>Positions</h3>
<div class="grid p-fluid">
    <div class="col-12 md:col-3">
        <InputText type="text" placeholder="Right" v-tooltip.right="'Enter your username'" />
    </div>
    <div class="col-12 md:col-3">
        <InputText type="text" placeholder="Top" v-tooltip.top="'Enter your username'" />
    </div>
    <div class="col-12 md:col-3">
        <InputText type="text" placeholder="Bottom" v-tooltip.bottom="'Enter your username'" />
    </div>
    <div class="col-12 md:col-3">
        <InputText type="text" placeholder="Left" v-tooltip.left="'Enter your username'" />
    </div>
</div>

<h3>Focus and Blur</h3>
<InputText type="text" placeholder="Focus" v-tooltip.bottom.focus="'Enter your username'" />

<h3>Button</h3>
<Button type="button" label="Save" icon="pi pi-check" v-tooltip="'Click to proceed'" />
        `
      },
      sourceCode2: {
        basic: `
export default {}
        `
      },
    }
  }
}
</script>
