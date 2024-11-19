<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      SplitButton has a default command button and a collection of additional
      options defined by the <i>model</i> property.
    </p>
    <DocSectionCode :code="baseCode" importCode />
    <DocSectionCode :code="baseCode2" />

    <h5>MenuModel</h5>
    <p>
      SplitButton uses the common MenuModel API to define the items, visit
      <router-link to="/menumodel">MenuModel API</router-link> for details.
    </p>

    <h5>Severity</h5>
    <p>Different color options are available as severity levels.</p>

    <ul>
      <li>.p-button-secondary</li>
      <li>.p-button-success</li>
      <li>.p-button-info</li>
      <li>.p-button-warning</li>
      <li>.p-button-help</li>
      <li>.p-button-danger</li>
    </ul>
    <DocSectionCode :code="severityCode" />

    <h5>Raised and Rounded Buttons</h5>
    <p>
      SplitButton can be raised by having "p-button-raised" style class and
      similarly borders can be made rounded using "p-button-rounded" class.
    </p>
    <DocSectionCode :code="raisedAndRoundedButtonsCode" />

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
            <td>label</td>
            <td>string</td>
            <td>null</td>
            <td>Text of the button.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>null</td>
            <td>Name of the icon.</td>
          </tr>
          <tr>
            <td>model</td>
            <td>object</td>
            <td>null</td>
            <td>MenuModel instance to define the overlay items.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>
              When present, it specifies that the component should be disabled.
            </td>
          </tr>
          <tr>
            <td>tabindex</td>
            <td>string</td>
            <td>null</td>
            <td>Index of the element in tabbing order.</td>
          </tr>
          <tr>
            <td>autoZIndex</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to automatically manage layering.</td>
          </tr>
          <tr>
            <td>baseZIndex</td>
            <td>number</td>
            <td>0</td>
            <td>Base zIndex value to use in layering.</td>
          </tr>
          <tr>
            <td>appendTo</td>
            <td>string</td>
            <td>null</td>
            <td>
              Id of the element or "body" for document where the overlay should
              be appended to.
            </td>
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
            <td>click</td>
            <td>event: Browser event</td>
            <td>Callback to invoke when main button is clicked.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>
      Following is the list of structural style classes, for theming classes
      visit <router-link to="/theming">theming</router-link> page.
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
            <td>p-splitbutton</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-splitbutton-button</td>
            <td>Dropdown button.</td>
          </tr>
          <tr>
            <td>p-menu</td>
            <td>Overlay menu.</td>
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
import SplitButton from 'primevue2/splitbutton';
        `
      },
      baseCode: {
        basic: `
export default {
	data() {
		return {
			items: [
				{
					label: 'Update',
					icon: 'pi pi-refresh',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Delete',
					icon: 'pi pi-times',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				{
					label: 'Vue Website',
					icon: 'pi pi-external-link',
					command: () => {
						window.location.href = 'https://vuejs.org/'
					}
				},
				{
					label: 'Upload',
					icon: 'pi pi-upload',
					command: () => {
						window.location.hash = "/fileupload"
					}
				}
			]
		}
	}
}
        `
      },
      baseCode2: {
        basic: `
<SplitButton label="Save" icon="pi pi-plus" :model="items"></SplitButton>
        `
      },
      severityCode: {
        basic: `
<SplitButton label="Primary" :model="items"></SplitButton>
<SplitButton label="Secondary" :model="items" class="p-button-secondary"></SplitButton>
<SplitButton label="Success" :model="items" class="p-button-success"></SplitButton>
<SplitButton label="Info" :model="items" class="p-button-info"></SplitButton>
<SplitButton label="Warning" :model="items" class="p-button-warning"></SplitButton>
<SplitButton label="Help" :model="items" class="p-button-help"></SplitButton>
<SplitButton label="Danger" :model="items" class="p-button-danger"></SplitButton>
        `
      },
      raisedAndRoundedButtonsCode: {
        basic: `
<SplitButton label="Proceed" :model="items" class="p-button-raised p-button-rounded"></SplitButton>
        `
      },
    }
  }
}
</script>
