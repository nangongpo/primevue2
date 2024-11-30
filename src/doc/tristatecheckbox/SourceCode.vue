<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/tristatecheckbox"
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
<div class="field-checkbox m-0">
    <TriStateCheckbox v-model="value" />
    <label>{{value == null ? 'null' : value}}</label>
</div>
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			value: null
		}
	}
}
        `
      },
    }
  }
}
</script>
