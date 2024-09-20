<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/autocomplete"
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
<AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />

<h5>Dropdown, Templating and Force Selection</h5>
<AutoComplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" field="name" forceSelection>
    <template #item="slotProps">
        <div class="country-item">
            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.item.code.toLowerCase()" />
            <div>{{slotProps.item.name}}</div>
        </div>
    </template>
</AutoComplete>

<h5>Multiple</h5>
<span class="p-fluid">
    <AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
</span>
        `
      },
      sourceCode2: {
        basic: `
import CountryService from '../../service/CountryService';

export default {
    data() {
        return {
            countries: null,
            selectedCountry1: null,
            selectedCountry2: null,
            filteredCountries: null,
            selectedCountries: []
        }
    },
    countryService: null,
    created() {
        this.countryService = new CountryService();
    },
    mounted() {
        this.countryService.getCountries().then(data => this.countries = data);
    },
    methods: {
        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                }
                else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }
    }
}
        `
      },
    }
  }
}
</script>
