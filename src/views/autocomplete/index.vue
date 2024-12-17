<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>AutoComplete</h1>
        <p>
          AutoComplete is an input component that provides real-time suggestions
          when being typed.
        </p>
      </div>
      <AppInputStyleSwitch />
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Basic</h5>
        <AutoComplete
          v-model="selectedCountry1"
          :suggestions="filteredCountries1"
          optionLabel="name"
          optionValue="code"
          @complete="searchCountry1($event)" 
        />

        <h5>Group</h5>
        <AutoComplete
          v-model="selectedCity"
          :suggestions="filteredCities"
          @complete="searchCity($event)"
          optionLabel="label"
          optionValue="value"
          optionGroupLabel="label"
          optionGroupChildren="items"
          placeholder="Hint: type 'a'">
          <template #optiongroup="slotProps">
            <div class="flex align-items-center country-item">
              <img
                :alt="slotProps.option.label"
                src="../../assets/images/flag_placeholder.png"
                :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
                style="width: 18px" />
              <div>{{ slotProps.option.label }}</div>
            </div>
          </template>
        </AutoComplete>

        <h5>Dropdown, Templating and Force Selection</h5>
        <AutoComplete
          v-model="selectedCountry2"
          :suggestions="filteredCountries2"
          @complete="searchCountry2($event)"
          :dropdown="true"
          optionLabel="name"
          forceSelection>
          <template #option="slotProps">
            <div class="country-item">
              <img
                src="../../assets/images/flag_placeholder.png"
                :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </AutoComplete>

        <h5>Virtual Scroll</h5>
        <AutoComplete
          v-model="selectedCountry3"
          :suggestions="filteredCountries3"
          :virtualScrollerOptions="{ itemSize: 38 }"
          @complete="searchCountry3($event)"
          :dropdown="true"
          optionLabel="name"
          forceSelection>
          <template #option="slotProps">
            <div class="country-item">
              <img
                src="../../assets/images/flag_placeholder.png"
                :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </AutoComplete>

        <h5>Multiple</h5>
        <span class="p-fluid">
          <AutoComplete
            :multiple="true"
            v-model="selectedCountry4"
            :suggestions="filteredCountries4"
            @complete="searchCountry4($event)"
            optionLabel="name" />
        </span>
      </div>
    </div>

    <AutoCompleteDoc />
  </div>
</template>

<script>
import CountryService from '@/service/CountryService'
import AutoCompleteDoc from '@/doc/autocomplete/index.vue'
import { FilterMatchMode, FilterService } from 'primevue2/api'

export default {
  data() {
    return {
      countries: null,
      selectedCountry1: 'AF',
      filteredCountries1: null,
      selectedCountries: [],
      selectedCity: 'Berlin',
      selectedCountry2: null,
      filteredCountries2: null,
      selectedCountry3: null,
      filteredCountries3: null,
      filteredCities: null,
      selectedCountry4: null,
      filteredCountries4: null
    }
  },
  countryService: null,
  created() {
    this.countryService = new CountryService()
  },
  mounted() {
    this.countryService.getCountries().then((data) => {
      this.countries = data
      this.filteredCountries1 = data
      this.filteredCountries2 = data
      this.filteredCountries3 = data
    })
  },
  methods: {
    searchCountry1(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCountries1 = [...this.countries]
        } else {
          this.filteredCountries1 = this.countries.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase())
          })
        }
      }, 250)
    },
    searchCountry2(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCountries2 = [...this.countries]
        } else {
          this.filteredCountries2 = this.countries.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase())
          })
        }
      }, 250)
    },
    searchCountry3(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCountries3 = [...this.countries]
        } else {
          this.filteredCountries3 = this.countries.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase())
          })
        }
      }, 250)
    },
    searchCountry4(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCountries4 = [...this.countries]
        } else {
          this.filteredCountries4 = this.countries.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase())
          })
        }
      }, 250)
    },
    searchCity(event) {
      let query = event.query
      let newFilteredCities = []
      const groupedCities = [
        {
          label: 'Germany',
          code: 'DE',
          items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
          ]
        },
        {
          label: 'USA',
          code: 'US',
          items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
          ]
        },
        {
          label: 'Japan',
          code: 'JP',
          items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
          ]
        }
      ]

      for (let country of groupedCities) {
        let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS)
        if (filteredItems && filteredItems.length) {
          newFilteredCities.push({...country, ...{items: filteredItems}})
        }
      }

      this.filteredCities = newFilteredCities
    }
  },
  components: {
    AutoCompleteDoc: AutoCompleteDoc
  }
}
</script>
