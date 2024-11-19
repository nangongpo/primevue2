<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      SelectButton requires a value to bind and a collection of arbitrary
      objects along with the <i>optionLabel</i> property to specify the label
      property of the option.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Multiple</h5>
    <p>
      SelectButton allows selecting only one item by default and setting
      <i>multiple</i> option enables choosing more than one item. In multiple
      case, model property should be an array.
    </p>
    <DocSectionCode :code="multipleCode" />

    <h5>Templating</h5>
    <p>
      Label of an option is used as the display text of an item by default, for
      custom content support define an <i>option</i> template that gets the
      option instance as a parameter.
    </p>
    <DocSectionCode :code="templatingCode" />

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
            <td>any</td>
            <td>null</td>
            <td>Value of the component.</td>
          </tr>
          <tr>
            <td>options</td>
            <td>array</td>
            <td>null</td>
            <td>
              An array of selectitems to display as the available options.
            </td>
          </tr>
          <tr>
            <td>optionLabel</td>
            <td>string | function</td>
            <td>null</td>
            <td>
              Property name or getter function to use as the label of an option.
            </td>
          </tr>
          <tr>
            <td>optionValue</td>
            <td>string | function</td>
            <td>null</td>
            <td>
              Property name or getter function to use as the value of an option,
              defaults to the option itself when not defined.
            </td>
          </tr>
          <tr>
            <td>optionDisabled</td>
            <td>string | function</td>
            <td>null</td>
            <td>
              Property name or getter function to use as the disabled flag of an
              option, defaults to false when not defined.
            </td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>boolean</td>
            <td>false</td>
            <td>When specified, allows selecting multiple values.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>
              When present, it specifies that the element should be disabled.
            </td>
          </tr>
          <tr>
            <td>dataKey</td>
            <td>string</td>
            <td>null</td>
            <td>A property to uniquely identify an option.</td>
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
            <td>input</td>
            <td>
              event: Single value or an array of values that are selected.
            </td>
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
            <td>option</td>
            <td>
              option: Option instance<br />
              index: Index of the option
            </td>
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
import SelectButton from 'primevue2/selectbutton';
        `
      },
      baseCode: {
        basic: `
<SelectButton v-model="selectedCity" :options="cities" optionLabel="name" />
        `
      },
      baseCode2: {
        basic: `
export default {
	data() {
		return {
			selectedCity: null,
			cities: [
				{name: 'London', code: 'LND'},
				{name: 'Paris', code: 'PRS'},
				{name: 'Rome', code: 'RM'}
			]
		}
	}
}
        `
      },
      multipleCode: {
        basic: `
<SelectButton v-model="selectedCity" :options="cities" optionLabel="brand" :multiple="true" />
        `
      },
      templatingCode: {
        basic: `
<SelectButton v-model="selectedCar" :options="cars" optionLabel="brand">
	<template #option="slotProps">
        <div class="car-option">
            <img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" />
            <div>{{slotProps.option.brand}}</div>
        </div>
	</template>
</SelectButton>
        `
      }
    }
  }
}
</script>
