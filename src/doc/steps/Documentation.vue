<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>MenuModel</h5>
    <p>
      Steps uses the common MenuModel API to define the items, visit
      <router-link to="/menumodel">MenuModel API</router-link> for details.
    </p>

    <h5>Getting Started</h5>
    <p>
      Steps is integrated with Vue Router and requires a collection of menuitems
      as its model.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Interactive</h5>
    <p>
      Items are readonly by default, if you'd like to make them interactive then
      disable <i>readonly</i> property.
    </p>
    <DocSectionCode :code="interactiveCode" />

    <h5>Properties</h5>
    <p>
      Any property as style and class are passed to the main container element.
      Following are the additional properties to configure the component.
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
            <td>id</td>
            <td>string</td>
            <td>null</td>
            <td>Unique identifier of the element.</td>
          </tr>
          <tr>
            <td>model</td>
            <td>array</td>
            <td>null</td>
            <td>An array of menuitems.</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether the items are clickable or not.</td>
          </tr>
          <tr>
            <td>exact</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              Whether to apply 'router-link-active-exact' class if route exactly
              matches the item path.
            </td>
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
            <td>p-steps</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-steps-item</td>
            <td>Menuitem element.</td>
          </tr>
          <tr>
            <td>p-steps-number</td>
            <td>Number of menuitem.</td>
          </tr>
          <tr>
            <td>p-steps-title</td>
            <td>Label of menuitem.</td>
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
import Steps from 'primevue2/steps';
        `
      },
      baseCode: {
        basic: `
<Steps :model="items" />
<router-view />
        `
      },
      baseCode2: {
        basic: `
export default {
	data() {
		return {
			items: [{
                label: 'Personal',
                to: '/steps'
            },
            {
                label: 'Seat',
                to: '/steps/seat'
            },
            {
                label: 'Payment',
                to: '/steps/payment'
            },
            {
                label: 'Confirmation',
                to: '/steps/confirmation'
            }]
		}
	}
}
        `
      },
      interactiveCode: {
        basic: `
<Steps :model="items" :readonly="false" />
<router-view />
        `
      },
    }
  }
}
</script>
