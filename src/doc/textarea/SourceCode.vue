<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/textarea"
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
<Textarea v-model="value1" rows="5" cols="30" />

<h3>Auto Resize</h3>
<Textarea v-model="value2" :autoResize="true" rows="5" cols="30" />

<h3>Disabled</h3>
<Textarea v-model="value3" disabled rows="5" cols="30" />
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			value1: '',
			value2: '',
			value3: ''
		}
	}
}
        `
      },
    }
  }
}
</script>
