<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Content of the tag is specified using the <i>value</i> property.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Icon</h5>
    <p>An icon can also be configured to be displayed next to the value with the <i>icon</i> property.</p>
    <DocSectionCode :code="iconCode" />

    <h5>Severities</h5>
    <p>Different color options are available as severity levels.</p>

    <ul>
      <li>success</li>
      <li>info</li>
      <li>warning</li>
      <li>danger</li>
    </ul>

    <h5>Templating</h5>
    <p>Content can easily be customized with the default slot instead of using the built-in display.</p>
    <DocSectionCode :code="templatingCode" />

    <h5>Properties</h5>
    <p>Any property as style and class are passed to the main container element. Following are the additional properties
      to configure the component.</p>
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
            <td>Value to display inside the tag.</td>
          </tr>
          <tr>
            <td>severity</td>
            <td>string</td>
            <td>null</td>
            <td>Severity type of the tag.</td>
          </tr>
          <tr>
            <td>rounded</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether the corners of the tag are rounded.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>null</td>
            <td>Icon of the tag to display next to the value.</td>
          </tr>
        </tbody>
      </table>
    </div>

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
            <td>p-tag</td>
            <td>Tag element</td>
          </tr>
          <tr>
            <td>p-tag-rounded</td>
            <td>Rounded element</td>
          </tr>
          <tr>
            <td>p-tag-icon</td>
            <td>Icon of the tag</td>
          </tr>
          <tr>
            <td>p-tag-value</td>
            <td>Value of the tag</td>
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
import Tag from 'primevue2/tag';
        `
      },
      baseCode: {
        basic: `
<Tag value="New"></Tag>
        `
      },
      iconCode: {
        basic: `
<Tag value="New" icon="pi pi-plus"></Tag>
        `
      },
      templatingCode: {
        basic: `
<Tag>
   Content
</Tag>
        `
      },
    }
  }
}
</script>
