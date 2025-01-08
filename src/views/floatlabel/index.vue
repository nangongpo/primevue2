<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Float Label</h1>
        <p>All input text components support floating labels.</p>
      </div>
      <AppInputStyleSwitch />
    </div>

    <div class="content-section implementation">
      <div class="card">
        <div class="p-fluid grid">
          <div class="field col-12 md:col-4">
            <FloatLabel>
              <InputText id="inputtext" type="text" v-model="value1" />
              <label for="inputtext">InputText</label>
            </FloatLabel>
          </div>
          <div class="field col-12 md:col-4">
            <FloatLabel>
              <AutoComplete
                v-model="value2"
                :suggestions="filteredCountries"
                @complete="searchCountry($event)"
                field="name" />
              <label for="autocomplete">AutoComplete</label>
            </FloatLabel>
          </div>
          <div class="field col-12 md:col-4">
            <FloatLabel>
              <Calendar id="calendar" v-model="value3" />
              <label for="calendar">Calendar</label>
            </FloatLabel>
          </div>
          <div class="field col-12 md:col-4">
            <FloatLabel>
              <chips id="chips" v-model="value4" />
              <label for="chips">Chips</label>
            </FloatLabel>
          </div>
          <div class="field col-12 md:col-4">
              <FloatLabel>
                <InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" />
                <label for="inputmask">InputMask</label>
              </FloatLabel>
          </div>
          <div class="field col-12 md:col-4">
            <span class="p-float-label">
              <InputNumber id="inputnumber" v-model="value6" />
              <label for="inputnumber">InputNumber</label>
            </span>
          </div>
          <div class="field col-12 md:col-4">
            <InputGroup>
              <InputGroupAddon><i class="pi pi-user"></i></InputGroupAddon>
              <FloatLabel>
                <InputText id="inputgroup" type="text" v-model="value7" />
                <label for="inputgroup">InputGroup</label>
              </FloatLabel>
            </InputGroup>
          </div>
          <div class="field col-12 md:col-4">
            <FloatLabel>
              <CascadeSelect
                id="cascadeSelect"
                v-model="selectedCity"
                :options="cascadeCountries"
                optionLabel="cname"
                optionGroupLabel="name"
                :optionGroupChildren="['states', 'cities']" />
              <label for="multiselect">CascadeSelect</label>
            </FloatLabel>
          </div>
          <div class="field col-12 md:col-4">
            <FloatLabel>
              <Dropdown id="dropdown" v-model="value8" :options="cities" optionLabel="name" />
              <label for="dropdown">Dropdown</label>
            </FloatLabel>
          </div>
          <div class="field col-12 md:col-4">
            <FloatLabel>
              <MultiSelect id="multiselect" v-model="value9" :options="cities" optionLabel="name" />
              <label for="multiselect">MultiSelect</label>
            </FloatLabel>
          </div>
          <div class="field col-12 md:col-4">
            <FloatLabel>
              <Textarea id="textarea" v-model="value10" rows="3" />
              <label for="textarea">Textarea</label>
            </FloatLabel>
          </div>
          <div class="field col-12 md:col-4">
            <FloatLabel>
              <Password id="password" v-model="value11" />
              <label for="password">Password</label>
            </FloatLabel>
          </div>
        </div>
      </div>
    </div>

    <FloatLabelDoc />
  </div>
</template>

<script>
import CountryService from '../../service/CountryService'
import FloatLabelDoc from '@/doc/floatlabel/index.vue'

export default {
  components: { FloatLabelDoc },
  data() {
    return {
      countries: null,
      filteredCountries: null,
      cities: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
      ],
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
      value7: null,
      value8: null,
      value9: null,
      value10: null,
      value11: null,
      selectedCity: null,
      cascadeCountries: [
        {
          name: 'Australia',
          code: 'AU',
          states: [
            {
              name: 'New South Wales',
              cities: [
                { cname: 'Sydney', code: 'A-SY' },
                { cname: 'Newcastle', code: 'A-NE' },
                { cname: 'Wollongong', code: 'A-WO' }
              ]
            },
            {
              name: 'Queensland',
              cities: [
                { cname: 'Brisbane', code: 'A-BR' },
                { cname: 'Townsville', code: 'A-TO' }
              ]
            },
          ]
        },
        {
          name: 'Canada',
          code: 'CA',
          states: [
            {
              name: 'Quebec',
              cities: [
                { cname: 'Montreal', code: 'C-MO' },
                { cname: 'Quebec City', code: 'C-QU' }
              ]
            },
            {
              name: 'Ontario',
              cities: [
                { cname: 'Ottawa', code: 'C-OT' },
                { cname: 'Toronto', code: 'C-TO' }
              ]
            },
          ]
        },
        {
          name: 'United States',
          code: 'US',
          states: [
            {
              name: 'California',
              cities: [
                { cname: 'Los Angeles', code: 'US-LA' },
                { cname: 'San Diego', code: 'US-SD' },
                { cname: 'San Francisco', code: 'US-SF' }
              ]
            },
            {
              name: 'Florida',
              cities: [
                { cname: 'Jacksonville', code: 'US-JA' },
                { cname: 'Miami', code: 'US-MI' },
                { cname: 'Tampa', code: 'US-TA' },
                { cname: 'Orlando', code: 'US-OR' }
              ]
            },
            {
              name: 'Texas',
              cities: [
                { cname: 'Austin', code: 'US-AU' },
                { cname: 'Dallas', code: 'US-DA' },
                { cname: 'Houston', code: 'US-HO' }
              ]
            }
          ]
        }
      ]
    }
  },
  countryService: null,
  created() {
    this.countryService = new CountryService()
  },
  mounted() {
    this.countryService.getCountries().then(data => this.countries = data)
  },
  methods: {
    searchCountry(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCountries = [...this.countries]
        }
        else {
          this.filteredCountries = this.countries.filter((country) => {
            return country.name.toLowerCase().startsWith(event.query.toLowerCase())
          })
        }
      }, 250)
    }
  },
}
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
}
</style>
