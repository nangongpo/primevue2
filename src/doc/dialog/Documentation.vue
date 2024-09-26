<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      Dialog is used as a container and visibility is managed with <i>visible</i> property that requires the sync
      operator for two-way binding.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Header and Footer</h5>
    <p>
      Header and Footer sections are defined using properties with the same name that accept simple strings or with the
      <i>header</i> and <i>footer</i> templates for custom content.
    </p>
    <DocSectionCode :code="headerAndFooterCode" />
    <DocSectionCode :code="headerAndFooterCode2" />

    <h5>Positioning</h5>
    <p>
      Dialog location is controlled with the <i>position</i> property whose default value is center. Other valid values
      are top", "bottom", "left", "right", "topleft", "topright", "bottomleft" and "bottomright"
    </p>
    <DocSectionCode :code="positioningCode" />

    <h5>Popup Content inside the Dialog</h5>
    <p>
      If the dialog contains components with popup elements such as Dropdown or Calendar, set <i>contentStyle</i> to
      overflow:visible so that overlays can be displayed outside of the content area.
    </p>
    <DocSectionCode :code="popupContentInsideTheDialogCode" />

    <h5>Initial Focus</h5>
    <p>Adding <i>autofocus</i> to an element in the dialog makes it the initial focus target when dialog gets shown.</p>
    <DocSectionCode :code="initialFocusCode" />

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
            <td>header</td>
            <td>any</td>
            <td>null</td>
            <td>Title content of the dialog.</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>any</td>
            <td>null</td>
            <td>Footer content of the dialog.</td>
          </tr>
          <tr>
            <td>visible</td>
            <td>boolean</td>
            <td>false</td>
            <td>Specifies the visibility of the dialog.</td>
          </tr>
          <tr>
            <td>modal</td>
            <td>boolean</td>
            <td>null</td>
            <td>Defines if background should be blocked when dialog is displayed.</td>
          </tr>
          <tr>
            <td>closeOnEscape</td>
            <td>boolean</td>
            <td>true</td>
            <td>Specifies if pressing escape key should hide the dialog.</td>
          </tr>
          <tr>
            <td>dismissableMask</td>
            <td>boolean</td>
            <td>false</td>
            <td>Specifies if clicking the modal background should hide the dialog.</td>
          </tr>
          <tr>
            <td>position</td>
            <td>string</td>
            <td>center</td>
            <td>
              Position of the dialog, options are "center", "top", "bottom", "left", "right", "topleft", "topright",
              "bottomleft" or "bottomright".
            </td>
          </tr>
          <tr>
            <td>containerStyle</td>
            <td>string</td>
            <td>null</td>
            <td>Inline style of the component.</td>
          </tr>
          <tr>
            <td>contentStyle</td>
            <td>object</td>
            <td>null</td>
            <td>Style of the content section.</td>
          </tr>
          <tr>
            <td>rtl</td>
            <td>boolean</td>
            <td>null</td>
            <td>When enabled dialog is displayed in RTL direction.</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>boolean</td>
            <td>true</td>
            <td>Adds a close icon to the header to hide the dialog.</td>
          </tr>
          <tr>
            <td>showHeader</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to show the header or not.</td>
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
          <tr>
            <td>maximizable</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether the dialog can be displayed full screen.</td>
          </tr>
          <tr>
            <td>appendTo</td>
            <td>string</td>
            <td>null</td>
            <td>Id of the element or "body" for document where the overlay should be appended to.</td>
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
            <td>hide</td>
            <td>event: Event object</td>
            <td>Callback to invoke when dialog is hidden.</td>
          </tr>
          <tr>
            <td>show</td>
            <td>event: Event object</td>
            <td>Callback to invoke when dialog is showed.</td>
          </tr>
        </tbody>
      </table>
    </div>

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
            <td>p-dialog</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-dialog-titlebar</td>
            <td>Container of header.</td>
          </tr>
          <tr>
            <td>p-dialog-title</td>
            <td>Header element.</td>
          </tr>
          <tr>
            <td>p-dialog-titlebar-icon</td>
            <td>Icon container inside header.</td>
          </tr>
          <tr>
            <td>p-dialog-titlebar-close</td>
            <td>Close icon element.</td>
          </tr>
          <tr>
            <td>p-dialog-content</td>
            <td>Content element</td>
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
import Dialog from 'primevue2/dialog';
        `
      },
      baseCode: {
        basic: `
<Dialog header="Header" :visible.sync="display" >
	Content
</Dialog>
        `
      },
      baseCode2: {
        basic: `
export default {
	data() {
		return {
			display: false
		}
	}
}
        `
      },
      headerAndFooterCode: {
        basic: `
<Dialog header="Header" footer="Footer" :visible.sync="display">
	Content
</Dialog>
        `
      },
      headerAndFooterCode2: {
        basic: `
<Dialog :visible.sync="display">
    <template #header>
		<h3>Header</h3>
	</template>

	Content

	<template #footer>
		<Button label="No" icon="pi pi-times" class="p-button-text"/>
        <Button label="Yes" icon="pi pi-check" autofocus />
	</template>
</Dialog>
        `
      },
      positioningCode: {
        basic: `
<Dialog position="top" :visible.sync="display">
	Content
</Dialog>

        `
      },
      popupContentInsideTheDialogCode: {
        basic: `
<Dialog :visible.sync="display" :contentStyle="{overflow: 'visible'}">
	Content
</Dialog>
        `
      },
      initialFocusCode: {
        basic: `
<Dialog :visible.sync="display">
    Content
	<template #footer>
        <Button label="No" />
        <Button label="Yes" autofocus/>
    </template>
</Dialog>
        `
      },
    }
  }
}
</script>
