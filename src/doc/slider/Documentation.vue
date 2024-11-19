<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Two-way binding is defined using the standard v-model directive.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Range</h5>
    <p>
      Range slider provides two handles to define two values. Enable
      <i>range</i> property and bind an array to implement a range slider.
    </p>
    <DocSectionCode :code="rangeCode" />
    <DocSectionCode :code="rangeCode2" importCode />

    <h5>Orientation</h5>
    <p>
      Default layout of slider is horizontal, use <i>orientation</i> property
      for the alternative vertical mode.
    </p>
    <DocSectionCode :code="orientationCode" />

    <h5>Step</h5>
    <p>
      Step factor is 1 by default and can be customized with <i>step</i> option.
    </p>
    <DocSectionCode :code="stepCode" />

    <h5>Min-Max</h5>
    <p>Boundaries are specified with min and max attributes.</p>
    <DocSectionCode :code="minMaxCode" />

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
            <td>value</td>
            <td>number</td>
            <td>0</td>
            <td>Value of the component.</td>
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
            <td>orientation</td>
            <td>string</td>
            <td>horizontal</td>
            <td>
              Orientation of the slider, valid values are horizontal and
              vertical.
            </td>
          </tr>
          <tr>
            <td>step</td>
            <td>number</td>
            <td>1</td>
            <td>Step factor to increment/decrement the value.</td>
          </tr>
          <tr>
            <td>range</td>
            <td>boolean</td>
            <td>false</td>
            <td>When speficed, allows two boundary values to be picked.</td>
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
            <td>ariaLabelledBy</td>
            <td>string</td>
            <td>null</td>
            <td>
              Establishes relationships between the component and label(s) where
              its value should be one or more element IDs.
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
            <td>
              event.originalEvent: Original event <br />
              event.value: Selected option value
            </td>
            <td>Callback to invoke on value change.</td>
          </tr>
          <tr>
            <td>input</td>
            <td>value: New value</td>
            <td>Callback to invoke on value change.</td>
          </tr>
          <tr>
            <td>slideEnd</td>
            <td>
              event.originalEvent: Slide event <br />
              event.value: New value.
            </td>
            <td>Callback to invoke when slide ends.</td>
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
            <td>p-slider</td>
            <td>Container element</td>
          </tr>
          <tr>
            <td>p-slider-handle</td>
            <td>Handle element.</td>
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
import Slider from 'primevue2/slider';
        `
      },
      baseCode: {
        basic: `
<Slider v-model="value" />
        `
      },
      rangeCode: {
        basic: `
<Slider v-model="value" :range="true" />
        `
      },
      rangeCode2: {
        basic: `
export default {
	data() {
		return {
			value: [20,80]
		}
	}
}
        `
      },
      orientationCode: {
        basic: `
<Slider v-model="value" orientation="vertical" />
        `
      },
      stepCode: {
        basic: `
<Slider v-model="value" :step="20" />
        `
      },
      minMaxCode: {
        basic: `
<Slider v-model="value" :step="20" :min="50" :max="200" />
        `
      },
    }
  }
}
</script>
