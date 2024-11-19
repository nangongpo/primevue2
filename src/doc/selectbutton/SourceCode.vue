<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/selectbutton"
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
<h5>Single Selection</h5>
<SelectButton v-model="value1" :options="options" />

<h5>Multiple Selection</h5>
<SelectButton v-model="value2" :options="paymentOptions" optionLabel="name" multiple />

<h5>Custom Content</h5>
<SelectButton v-model="value3" :options="justifyOptions" dataKey="value">
    <template #option="slotProps">
        <i :class="slotProps.option.icon"></i>
    </template>
</SelectButton>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            value1: 'Off',
            value2: null,
            value3: null,
            options: ['Off', 'On'],
            paymentOptions: [
                {name: 'Option 1', value: 1},
                {name: 'Option 2', value: 2},
                {name: 'Option 3', value: 3}
            ],
            justifyOptions: [
                {icon: 'pi pi-align-left', value: 'left'},
                {icon: 'pi pi-align-right', value: 'Right'},
                {icon: 'pi pi-align-center', value: 'Center'},
                {icon: 'pi pi-align-justify', value: 'Justify'}
            ]
        }
    }
}
        `
      },
    }
  }
}
</script>
