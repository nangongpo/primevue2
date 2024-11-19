<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/rating"
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
<h3>Basic {{val1}}</h3>
<Rating v-model="val1" />

<h3>Without Cancel</h3>
<Rating v-model="val2" :cancel="false" />

<h3>ReadOnly</h3>
<Rating :value="5" :readonly="true" :stars="10" :cancel="false" />

<h3>Disabled</h3>
<Rating :value="8" :disabled="true" :stars="10" />
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			val1: null,
			val2: 3,
		}
	}
}
        `
      },
    }
  }
}
</script>
