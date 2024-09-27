<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Knob is an input component and used with the standard <i>v-model</i> directive.</p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Minimum and Maximum</h5>
    <p>
      Boundaries are configured with the <i>min</i> and <i>max</i> values whose defaults are 0 and 100 respectively.
    </p>
    <DocSectionCode :code="minimumAndMaximumCode" />

    <h5>Step</h5>
    <p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
    <DocSectionCode :code="stepCode" />

    <h5>Styling</h5>
    <p>
      <i>valueColor</i> defines the value color, <i>rangeColor</i> defines the range background and similarly
      <i>textColor</i> configures the color of the value text. In addition, <i>strokeWidth</i> is used to determine the
      width of the stroke of range and value sections.
    </p>
    <DocSectionCode :code="stylingCode" />

    <h5>Size</h5>
    <p>
      Default size of the Knob is 100 pixels for width and height, use the <i>size</i> property to customize it per your
      requirements.
    </p>
    <DocSectionCode :code="sizeCode" />

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
            <td>number</td>
            <td>null</td>
            <td>Value of the component.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>number</td>
            <td>100</td>
            <td>Size of the component in pixels.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>When present, it specifies that the component should be disabled.</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>boolean</td>
            <td>false</td>
            <td>When present, it specifies that the component value cannot be edited.</td>
          </tr>
          <tr>
            <td>step</td>
            <td>number</td>
            <td>null</td>
            <td>Step factor to increment/decrement the value.</td>
          </tr>
          <tr>
            <td>min</td>
            <td>number</td>
            <td>0</td>
            <td>Mininum boundary value.</td>
          </tr>
          <tr>
            <td>max</td>
            <td>number</td>
            <td>100</td>
            <td>Maximum boundary value.</td>
          </tr>
          <tr>
            <td>valueColor</td>
            <td>string</td>
            <td>null</td>
            <td>Background of the value.</td>
          </tr>
          <tr>
            <td>rangeColor</td>
            <td>number</td>
            <td>null</td>
            <td>Background color of the range.</td>
          </tr>
          <tr>
            <td>textColor</td>
            <td>number</td>
            <td>null</td>
            <td>Color of the value text.</td>
          </tr>
          <tr>
            <td>strokeWidth</td>
            <td>number</td>
            <td>14</td>
            <td>Width of the knob stroke.</td>
          </tr>
          <tr>
            <td>showValue</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether the show the value inside the knob.</td>
          </tr>
          <tr>
            <td>valueTemplate</td>
            <td>string</td>
            <td>{value}</td>
            <td>Template string of the value.</td>
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
            <td>value: New value</td>
            <td>Callback to invoke when the value changes.</td>
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
            <td>p-knob</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-knob-text</td>
            <td>Text element.</td>
          </tr>
          <tr>
            <td>p-knob-value</td>
            <td>Value element.</td>
          </tr>
          <tr>
            <td>p-knob-text</td>
            <td>Text element.</td>
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
import Knob from 'primevue2/knob';
        `
      },
      baseCode: {
        basic: `
<Knob v-model="value" />
        `
      },
      baseCode2: {
        basic: `
data() {
	return {
		value: 0
	}
}
        `
      },
      minimumAndMaximumCode: {
        basic: `
<Knob v-model="value" :min="-50" :max="10" />
        `
      },
      stepCode: {
        basic: `
<Knob v-model="value" :step="10" />
        `
      },
      stylingCode: {
        basic: `
<Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise"  />
        `
      },
      sizeCode: {
        basic: `
<Knob v-model="value" :size="200" />
        `
      },
    }
  }
}
</script>
