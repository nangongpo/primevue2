<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/togglebutton"
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
<h3>Basic</h3>
<ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" />

<h3>Customized</h3>
<ToggleButton v-model="checked2" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style="width: 10em" />
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			checked1: false,
			checked2: true
		}
	}
}
        `
      },
    }
  }
}
</script>
