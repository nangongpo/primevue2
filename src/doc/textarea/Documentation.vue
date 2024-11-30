<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>A model can be bound using the standard v-model directive.</p>
    <DocSectionCode :code="baseCode" />

    <h5>AutoResize</h5>
    <p>In auto resize mode, textarea grows instead of displaying a scrollbar.</p>
    <DocSectionCode :code="autoResizeCode" />

    <h5>Properties</h5>
    <p>InputTextarea passes any attribute to the underlying textarea element, additional attributes are the following.
    </p>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>any</td>
            <td>null</td>
            <td>Value of the component.</td>
          </tr>
          <tr>
            <td>autoResize</td>
            <td>boolean</td>
            <td>false</td>
            <td>When present, height of textarea changes as being typed.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Events</h5>
    <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

    <h5>Styling</h5>
    <p>Following is the list of structural style classes, for theming classes visit <router-link
        to="/theming">theming</router-link> page.</p>
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
            <td>p-inputtextarea</td>
            <td>Textarea element</td>
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
import Textarea from 'primevue2/textarea';
        `
      },
      baseCode: {
        basic: `
<Textarea v-model="value" rows="5" cols="30" />
        `
      },
      autoResizeCode: {
        basic: `
<Textarea v-model="value" :autoResize="true" rows="5" cols="30" />
        `
      },
    }
  }
}
</script>
