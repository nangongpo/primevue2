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
            <td>modelValue</td>
            <td>any</td>
            <td>null</td>
            <td>Value binding of the checkbox.</td>
          </tr>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>null</td>
            <td>Name of the input element.</td>
          </tr>
          <tr>
            <td>binary</td>
            <td>boolean</td>
            <td>null</td>
            <td>Allows to select a boolean value.</td>
          </tr>
          <tr>
            <td>invalid</td>
            <td>boolean</td>
            <td>false</td>
            <td>When present, it specifies that the component should have invalid state style.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>When present, it specifies that the component should be disabled.</td>
          </tr>
          <tr>
            <td>variant</td>
            <td>"filled" | "outlined"</td>
            <td>outlined</td>
            <td>Specifies the input variant of the component.</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>boolean</td>
            <td>null</td>
            <td>When present, it specifies that an input field is read-only.</td>
          </tr>
          <tr>
            <td>tabindex</td>
            <td>number</td>
            <td>null</td>
            <td>Index of the element in tabbing order.</td>
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
          <tr>
            <td>inputId</td>
            <td>string</td>
            <td>null</td>
            <td>Identifier of the underlying input element.</td>
          </tr>
          <tr>
            <td>inputStyle</td>
            <td>object</td>
            <td>null</td>
            <td>Inline style of the input field.</td>
          </tr>
          <tr>
            <td>inputClass</td>
            <td>string | object</td>
            <td>null</td>
            <td>Style class of the input field.</td>
          </tr>
          <tr>
            <td>ariaLabelledby</td>
            <td>string</td>
            <td>null</td>
            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
          </tr>
          <tr>
            <td>ariaLabel</td>
            <td>string</td>
            <td>null</td>
            <td>Establishes a string value that labels the component.</td>
          </tr>
          <tr>
            <td>ariaLabel</td>
            <td>string</td>
            <td>null</td>
            <td>Establishes a string value that labels the component.</td>
          </tr>
          <tr>
            <td>pt</td>
            <td>object</td>
            <td>null</td>
            <td>Used to pass attributes to DOM elements inside the component.</td>
          </tr>
          <tr>
            <td>ptOptions</td>
            <td>object</td>
            <td>null</td>
            <td>Used to configure passthrough(pt) options of the component.</td>
          </tr>
          <tr>
            <td>unstyled</td>
            <td>boolean</td>
            <td>false</td>
            <td>When enabled, it removes component related styles in the core.</td>
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
            <td>input</td>
            <td>event: Value of checkbox</td>
            <td>Callback to invoke on click.</td>
          </tr>
          <tr>
            <td>change</td>
            <td>event: Browser event</td>
            <td>Callback to invoke on value change.</td>
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
