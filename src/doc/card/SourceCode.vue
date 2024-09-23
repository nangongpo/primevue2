<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/card"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<Card style="width: 25rem; margin-bottom: 2em">
    <template #title>
        Simple Card
    </template>
    <template #content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
    </template>
</Card>

<Card style="width: 25em">
    <template #header>
        <img alt="user header" src="demo/images/usercard.png">
    </template>
    <template #title>
        Advanced Card
    </template>
    <template #subtitle>
        Card subtitle
    </template>
    <template #content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
    </template>
</Card>
        `
      },
    }
  }
}
</script>
