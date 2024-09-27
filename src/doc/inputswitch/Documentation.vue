<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Two-way binding to a boolean property is defined using the standard v-model directive.</p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <p>
      As model is two-way binding enabled, setting the bound value as true displays the state as checked by default.
    </p>
    <DocSectionCode :code="baseCode3" />

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
            <td>value</td>
            <td>boolean</td>
            <td>null</td>
            <td>Specifies whether a inputswitch should be checked or not.</td>
          </tr>
          <tr>
            <td>inputId</td>
            <td>string</td>
            <td>null</td>
            <td>Identifier of the input element.</td>
          </tr>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>null</td>
            <td>Name of the input element.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>When present, it specifies that the component should be disabled.</td>
          </tr>
          <tr>
            <td>ariaLabelledBy</td>
            <td>string</td>
            <td>null</td>
            <td>
              Establishes relationships between the component and label(s) where its value should be one or more element
              IDs.
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
            <td>change</td>
            <td>event: Browser event.</td>
            <td>Callback to invoke on value change.</td>
          </tr>
          <tr>
            <td>click</td>
            <td>event: Browser event.</td>
            <td>Callback to invoke on click.</td>
          </tr>
          <tr>
            <td>input</td>
            <td>event: Checked state as a boolean.</td>
            <td>Callback to invoke on value change.</td>
          </tr>
          <tr>
            <td>focus</td>
            <td>event: Browser event.</td>
            <td>Callback to invoke when the element receives focus.</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>event: Browser event.</td>
            <td>Callback to invoke when the element loses focus.</td>
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
            <td>p-inputswitch</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-inputswitch-checked</td>
            <td>Container element in active state.</td>
          </tr>
          <tr>
            <td>p-inputswitch-slider</td>
            <td>Slider element behind the handle.</td>
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
import InputSwitch from 'primevue2/inputswitch';
        `
      },
      baseCode: {
        basic: `
<InputSwitch v-model="checked" />
        `
      },
      baseCode2: {
        basic: `
export default {
	data() {
		return {
			checked: false
		}
	}
}
        `
      },
      baseCode3: {
        basic: `
export default {
	data() {
		return {
			checked: true
		}
	}
}
        `
      },
    }
  }
}
</script>
