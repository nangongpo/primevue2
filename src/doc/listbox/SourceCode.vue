<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/listbox"
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
<h5>Single</h5>
<Listbox v-model="selectedCity" :options="cities" optionLabel="name" style="width:15rem" />

<h5>Advanced with Templating, Filtering and Multiple Selection</h5>
<Listbox v-model="selectedCountries" :options="countries" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:250px" style="width:15rem">
    <template #option="slotProps">
        <div class="country-item">
            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
            <div>{{slotProps.option.name}}</div>
        </div>
    </template>
</Listbox>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            selectedCity: null,
            selectedCountries: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            countries: [
                {name: 'Australia', code: 'AU'},
                {name: 'Brazil', code: 'BR'},
                {name: 'China', code: 'CN'},
                {name: 'Egypt', code: 'EG'},
                {name: 'France', code: 'FR'},
                {name: 'Germany', code: 'DE'},
                {name: 'India', code: 'IN'},
                {name: 'Japan', code: 'JP'},
                {name: 'Spain', code: 'ES'},
                {name: 'United States', code: 'US'}
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
