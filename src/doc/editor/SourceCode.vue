<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/editor"
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
<h3>Default</h3>
<Editor v-model="value1" editorStyle="height: 320px"/>

<h3>Customized</h3>
<Editor v-model="value2" editorStyle="height: 320px">
    <template #toolbar>
    <span class="ql-formats">
        <button class="ql-bold" v-tooltip.bottom="'Bold'"></button>
        <button class="ql-italic" v-tooltip.bottom="'Italic'"></button>
        <button class="ql-underline" v-tooltip.bottom="'Underline'"></button>
    </span>
    </template>
</Editor>
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			value1: '<div>Welcome to PrimeVue <b>Editor</b></div><div><br></div>',
			value2: ''
		}
	}
}
        `
      },
    }
  }
}
</script>
