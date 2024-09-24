<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/chips"
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
<h5>Basic</h5>
<Chips v-model="value1" />

<h5>Comma Separator</h5>
<Chips v-model="value2" separator="," />

<h5>Template</h5>
<Chips v-model="value3">
    <template #chip="slotProps">
        <div>
            <span>{{slotProps.value}} - (active) </span>
            <i class="pi pi-user-plus" style="font-size: 14px"></i>
        </div>
    </template>
</Chips>
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			value1: null,
			value2: null,
            value3: null
		}
	}
}
        `
      },
    }
  }
}
</script>
