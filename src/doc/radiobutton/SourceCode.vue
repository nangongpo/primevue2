<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/radiobutton"
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
    <div class="field-radiobutton">
    <RadioButton id="city1" name="city" value="Chicago" v-model="city" />
    <label for="city1">Chicago</label>
</div>
<div class="field-radiobutton">
    <RadioButton id="city2" name="city" value="Los Angeles" v-model="city" />
    <label for="city2">Los Angeles</label>
</div>
<div class="field-radiobutton">
    <RadioButton id="city3" name="city" value="New York" v-model="city" />
    <label for="city3">New York</label>
</div>
<div class="field-radiobutton">
    <RadioButton id="city4" name="city" value="San Francisco" v-model="city" />
    <label for="city4">San Francisco</label>
</div>

<h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
<div v-for="category of categories" :key="category.key" class="field-radiobutton">
    <RadioButton :id="category.key" name="category" :value="category" v-model="selectedCategory" :disabled="category.key === 'R'" />
    <label :for="category.key">{{category.name}}</label>
</div>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            city: null,
            categories: [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}],
            selectedCategory: null
        }
    },
    created() {
        this.selectedCategory = this.categories[1];
    }
}
        `
      },
    }
  }
}
</script>
