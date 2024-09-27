<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/inputswitch"
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
<InputSwitch v-model="checked1" />

<h3>Preselection</h3>
<InputSwitch v-model="checked2" />
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
