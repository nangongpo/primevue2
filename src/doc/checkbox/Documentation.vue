<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      Checkbox can either be used in multiple selection with other checkboxes or as a single checkbox to provide a
      boolean value.
    </p>
    <DocSectionCode :code="baseCode" />

    <h5>Multiple Values</h5>
    <p>Multiple mode is enabled by default, v-model property refers to an array to bind the selected values.</p>
    <DocSectionCode :code="multipleValuesCode" />

    <DocSectionCode :code="multipleValuesCode2" importCode />

    <p>
      As v-model is two-way binding enabled, prepopulating the model array with values is enough to display the related
      checkboxes as checked by default.
    </p>

    <h5>Properties</h5>
    <p>
      Any property such as name and autofocus are passed to the underlying input element. Following are the additional
      properties to configure the component.
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
            <td>Value of the checkbox.</td>
          </tr>
          <tr>
            <td>binary</td>
            <td>boolean</td>
            <td>false</td>
            <td>Allows to select a boolean value instead of multiple values.</td>
          </tr>
          <tr>
            <td>trueValue</td>
            <td>any</td>
            <td>null</td>
            <td>Value in checked state.</td>
          </tr>
          <tr>
            <td>falseValue</td>
            <td>any</td>
            <td>null</td>
            <td>Value in unchecked state.</td>
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
            <td>event: Browser event</td>
            <td>Callback to invoke on value change.</td>
          </tr>
          <tr>
            <td>input</td>
            <td>event: Value of checkbox</td>
            <td>Callback to invoke on click.</td>
          </tr>
          <tr>
            <td>click</td>
            <td>event: Browser event</td>
            <td>Callback to invoke click.</td>
          </tr>
          <tr>
            <td>focus</td>
            <td>event: Browser event</td>
            <td>Callback to invoke on focus.</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>event: Browser event</td>
            <td>Callback to invoke on blur.</td>
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
            <td>p-chkbox</td>
            <td>Container element</td>
          </tr>
          <tr>
            <td>p-chkbox-box</td>
            <td>Container of icon.</td>
          </tr>
          <tr>
            <td>p-chkbox-icon</td>
            <td>Icon element.</td>
          </tr>
          <tr>
            <td>p-chkbox-label</td>
            <td>Label element.</td>
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
import Checkbox from 'primevue2/checkbox';
        `
      },
      baseCode: {
        basic: `
<Checkbox v-model="checked" :binary="true" />
        `
      },
      multipleValuesCode: {
        basic: `
<Checkbox id="city1" inputId="city1" name="city" value="Chicago" v-model="cities" />
<Checkbox id="city2" inputId="city2" name="city" value="Los Angeles" v-model="cities" />
<Checkbox id="city3" inputId="city3" name="city" value="New York" v-model="cities" />
<Checkbox id="city4" inputId="city4" name="city" value="San Francisco" v-model="cities" />
        `
      },
      multipleValuesCode2: {
        basic: `
export default {
	data() {
		return {
			cities: []
		}
	}
}
        `
      },
    }
  }
}
</script>
