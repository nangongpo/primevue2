<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Dismissable and CloseIcon</h5>
    <p>
      Clicking outside the overlay hides the panel, setting <i>dismissable</i> to false disables this behavior.
      Additionally enabling <i>showCloseIcon</i> property displays a close icon at the top right corner to close the
      panel.
    </p>
    <DocSectionCode :code="dismissableAndCloseIconCode" />

    <h5>Properties</h5>
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
            <td>dismissable</td>
            <td>boolean</td>
            <td>true</td>
            <td>Enables to hide the overlay when outside is clicked.</td>
          </tr>
          <tr>
            <td>showCloseIcon</td>
            <td>boolean</td>
            <td>false</td>
            <td>When enabled, displays a close icon at top right corner.</td>
          </tr>
          <tr>
            <td>appendTo</td>
            <td>string</td>
            <td>null</td>
            <td>Id of the element or "body" for document where the overlay should be appended to.</td>
          </tr>
          <tr>
            <td>baseZIndex</td>
            <td>number</td>
            <td>0</td>
            <td>Base zIndex value to use in layering.</td>
          </tr>
          <tr>
            <td>autoZIndex</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to automatically manage layering.</td>
          </tr>
          <tr>
            <td>ariaCloseLabel</td>
            <td>string</td>
            <td>close</td>
            <td>Aria label of the close icon.</td>
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
            <td>show</td>
            <td>-</td>
            <td>Callback to invoke when overlay panel is shown.</td>
          </tr>
          <tr>
            <td>hide</td>
            <td>-</td>
            <td>Callback to invoke when overlay panel is hidden.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Methods</h5>
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
            <td>toggle</td>
            <td>event: Browser event</td>
            <td>Toggles the visibility of the overlay.</td>
          </tr>
          <tr>
            <td>show</td>
            <td>
              event: Browser event <br />
              target: Optional target if event.target should not be used
            </td>
            <td>Shows the overlay.</td>
          </tr>
          <tr>
            <td>hide</td>
            <td>-</td>
            <td>Hides the overlay.</td>
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
            <td>p-overlaypanel</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-overlaypanel-content</td>
            <td>Content of the panel.</td>
          </tr>
          <tr>
            <td>p-overlaypanel-close</td>
            <td>Close icon.</td>
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
import OverlayPanel from 'primevue2/overlaypanel';
        `
      },
      baseCode: {
        basic: `
<Button type="button" label="Toggle" @click="toggle" />

<OverlayPanel ref="op">
	<img src="demo/images/nature/nature1.jpg" alt="Nature Image">
</OverlayPanel>
        `
      },
      baseCode2: {
        basic: `
toggle(event) {
    this.$refs.op.toggle(event);
}
        `
      },
      dismissableAndCloseIconCode: {
        basic: `
<OverlayPanel ref="op" :showCloseIcon="true" :dismissable="true">
	<img src="demo/images/nature/nature1.jpg" alt="Nature Image">
</OverlayPanel>
        `
      }
    }
  }
}
</script>
