<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Card is used as a container.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Templates</h5>
    <p>
      Card provides <i>header</i>, <i>title</i>, <i>content</i> and <i>footer</i> as the named templates to place
      content.
    </p>
    <DocSectionCode :code="templatesCode" />

    <h5>Slots</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Parameters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>header</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>-</td>
          </tr>
          <tr>
            <td>subtitle</td>
            <td>-</td>
          </tr>
          <tr>
            <td>content</td>
            <td>-</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>
      Following is the list of structural style classes, for theming classes visit
      <router-link to="/theming">theming</router-link> page.
    </p>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Element</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>p-card</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-card-title</td>
            <td>Title element.</td>
          </tr>
          <tr>
            <td>p-card-subtitle</td>
            <td>Subtitle element.</td>
          </tr>
          <tr>
            <td>p-card-content</td>
            <td>Content of the card.</td>
          </tr>
          <tr>
            <td>p-card-footer</td>
            <td>Footer of the card.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Dependencies</h5>
    <p>None.</p>
  </div>
</template>

<script>
export default {
  name: 'Documentation',
  data() {
    return {
      importCode: {
        basic: `
import Card from 'primevue2/card';
        `
      },
      baseCode: {
        basic: `
<Card>
	Content
</Card>
        `
      },
      templatesCode: {
        basic: `
<Card>
    <template #header>
        <img alt="user header" src="demo/images/usercard.png">
    </template>
    <template #title>
        Advanced Card
    </template>
    <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
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
