<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/checkbox"
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
<div class="field-checkbox">
    <Checkbox id="binary" v-model="checked" :binary="true" />
    <label for="binary">{{checked}}</label>
</div>

<h3>Multiple</h3>
<div class="field-checkbox">
    <Checkbox id="city1" name="city" value="Chicago" v-model="cities" />
    <label for="city1">Chicago</label>
</div>
<div class="field-checkbox">
    <Checkbox id="city2" name="city" value="Los Angeles" v-model="cities" />
    <label for="city2">Los Angeles</label>
</div>
<div class="field-checkbox">
    <Checkbox id="city3" name="city" value="New York" v-model="cities" />
    <label for="city3">New York</label>
</div>
<div class="field-checkbox">
    <Checkbox id="city4" name="city" value="San Francisco" v-model="cities" />
    <label for="city4">San Francisco</label>
</div>

<h3>Dynamic Values, Preselection, Value Binding and Disabled Option</h3>
<div v-for="category of categories" :key="category.key" class="field-checkbox">
    <Checkbox :id="category.key" name="category" :value="category" v-model="selectedCategories" :disabled="category.key === 'R'"/>
    <label :for="category.key">{{category.name}}</label>
</div>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            checked: false,
            cities: [],
            categories: [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}],
            selectedCategories: []
        }
    },
    created() {
        this.selectedCategories = this.categories.slice(1,3);
    }
}
        `
      },
    }
  }
}
</script>
