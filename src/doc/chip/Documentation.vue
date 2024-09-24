<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Chip can display labels, icons and images.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Removable</h5>
    <p>
      Setting <i>removable</i> property displays an icon to close the chip, the optional <i>remove</i> event is
      available to get notified when a chip is hidden.
    </p>
    <DocSectionCode :code="removableCode" />

    <h5>Templating</h5>
    <p>Content can easily be customized with the default slot instead of using the built-in modes.</p>
    <DocSectionCode :code="templatingCode" />

    <h5>Properties</h5>
    <p>
      Any property as style and class are passed to the main container element. Following are the additional properties
      to configure the component.
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
            <td>label</td>
            <td>string</td>
            <td>null</td>
            <td>Defines the text to display.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>null</td>
            <td>Defines the icon to display.</td>
          </tr>
          <tr>
            <td>image</td>
            <td>string</td>
            <td>null</td>
            <td>Defines the image to display.</td>
          </tr>
          <tr>
            <td>removable</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether to display a remove icon.</td>
          </tr>
          <tr>
            <td>removeIconClass</td>
            <td>string</td>
            <td>pi pi-times-circle</td>
            <td>Icon of the remove element.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Events</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Parameters</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>remove</td>
            <td>event: Browser event</td>
            <td>Callback to invoke when a chip is removed.</td>
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
            <td>p-chip</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-chip-image</td>
            <td>Container element in image mode.</td>
          </tr>
          <tr>
            <td>p-chip-text</td>
            <td>Text of the chip.</td>
          </tr>
          <tr>
            <td>p-chip-remove-icon</td>
            <td>Remove icon.</td>
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
import Chip from 'primevue2/chip';
        `
      },
      baseCode: {
        basic: `
<Chip label="Text Only" />
<Chip label="Text with icon" icon="pi pi-check" />
<Chip label="Text with image" image="user.png" />
        `
      },
      removableCode: {
        basic: `
<Chip label="Text" removable />
        `
      },
      templatingCode: {
        basic: `
<Chip>
   Content
</Chip>
        `
      },
    }
  }
}
</script>
