<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/slider"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
    <DocSectionCode :code="sourceCode3" importStyle />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<h3>Basic: {{value1}}</h3>
<Slider v-model="value1" />

<h3>Input: {{value2}}</h3>
<InputText v-model.number="value2" />
<Slider v-model="value2" />

<h3>Step: {{value3}}</h3>
<Slider v-model="value3" :step="20" />

<h3>Range: {{value4}}</h3>
<Slider v-model="value4" :range="true" />

<h3>Vertical: {{value5}}</h3>
<Slider v-model="value5" orientation="vertical" />
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			value1: null,
			value2: 50,
			value3: 20,
			value4: [20,80],
			value5: 50
		}
	}
}
        `
      },
      sourceCode3: {
        basic: `
.p-slider-horizontal, .p-inputtext {
	width: 14rem;
}

.p-slider-vertical {
	height: 14rem;
}
        `
      }
    }
  }
}
</script>
