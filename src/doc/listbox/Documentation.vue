<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      Listbox requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property
      to specify the label property of the option.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Selection</h5>
    <p>
      Listbox allows selection of either single or multiple items. In single case, model should be a single object
      reference whereas in multiple case should be an array. Multiple items can either be selected using metaKey or
      toggled individually depending on the value of <i>metaKeySelection</i> property value which is true by default. On
      touch enabled devices metaKeySelection is turned off automatically.
    </p>
    <DocSectionCode :code="selectionCode" />

    <h5>Custom Content</h5>
    <p>
      Label of an option is used as the display text of an item by default, for custom content support define an
      <i>option</i> template that gets the option instance as a parameter.
    </p>
    <DocSectionCode :code="customContentCode" />

    <h5>Filter</h5>
    <p>
      Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable
      <i>filter</i> property.
    </p>
    <DocSectionCode :code="filterCode" />

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
            <td>any</td>
            <td>null</td>
            <td>Value of the component.</td>
          </tr>
          <tr>
            <td>options</td>
            <td>array</td>
            <td>null</td>
            <td>An array of selectitems to display as the available options.</td>
          </tr>
          <tr>
            <td>optionLabel</td>
            <td>string | function</td>
            <td>null</td>
            <td>Property name or getter function to use as the label of an option.</td>
          </tr>
          <tr>
            <td>optionValue</td>
            <td>string | function</td>
            <td>null</td>
            <td>
              Property name or getter function to use as the value of an option, defaults to the option itself when not
              defined.
            </td>
          </tr>
          <tr>
            <td>optionDisabled</td>
            <td>string | function</td>
            <td>null</td>
            <td>
              Property name or getter function to use as the disabled flag of an option, defaults to false when not
              defined.
            </td>
          </tr>
          <tr>
            <td>listStyle</td>
            <td>string</td>
            <td>null</td>
            <td>Inline style of inner list element.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>When specified, disables the component.</td>
          </tr>
          <tr>
            <td>dataKey</td>
            <td>string</td>
            <td>false</td>
            <td>A property to uniquely identify an option.</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>boolean</td>
            <td>false</td>
            <td>When specified, allows selecting multiple values.</td>
          </tr>
          <tr>
            <td>metaKeySelection</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an
              item and when set to false selection of each item can be toggled individually. On touch enabled devices,
              metaKeySelection is turned off automatically.
            </td>
          </tr>
          <tr>
            <td>filter</td>
            <td>boolean</td>
            <td>false</td>
            <td>When specified, displays a filter input at header.</td>
          </tr>
          <tr>
            <td>filterPlaceholder</td>
            <td>string</td>
            <td>null</td>
            <td>Placeholder text to show when filter input is empty.</td>
          </tr>
          <tr>
            <td>filterLocale</td>
            <td>string</td>
            <td>undefined</td>
            <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
          </tr>
          <tr>
            <td>emptyFilterMessage</td>
            <td>string</td>
            <td>No results found</td>
            <td>Text to display when filtering does not return any results.</td>
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
            <td>filter</td>
            <td>
              event.originalEvent: Original event <br />
              event.value: Filter value
            </td>
            <td>Callback to invoke on filter input.</td>
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
              option: Option instance <br />
              index: Index of the option
            </td>
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
            <td>p-listbox</td>
            <td>Main container element.</td>
          </tr>
          <tr>
            <td>p-listbox-header</td>
            <td>Header element.</td>
          </tr>
          <tr>
            <td>p-listbox-list-wrapper</td>
            <td>Container of list element.</td>
          </tr>
          <tr>
            <td>p-listbox-list</td>
            <td>List element.</td>
          </tr>
          <tr>
            <td>p-listbox-item</td>
            <td>An item in the list element.</td>
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
import Listbox from 'primevue2/listbox';
        `
      },
      baseCode: {
        basic: `
<Listbox v-model="selectedCity" :options="cities" optionLabel="name" />
        `
      },
      baseCode2: {
        basic: `
data() {
	return {
		selectedCity: null,
		cities: [
			{name: 'New York', code: 'NY'},
			{name: 'Rome', code: 'RM'},
			{name: 'London', code: 'LDN'},
			{name: 'Istanbul', code: 'IST'},
			{name: 'Paris', code: 'PRS'}
		]
	}
}
        `
      },
      selectionCode: {
        basic: `
<Listbox v-model="selectedCity" :options="cities" optionLabel="name" :multiple="true"/>
        `
      },
      customContentCode: {
        basic: `
<Listbox v-model="selectedCars" :options="cars" :multiple="true" :filter="true" optionLabel="brand" listStyle="max-height:250px" style="width:15em">
	<template #option="slotProps">
		<div>
			<img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" />
			<span>{{slotProps.option.brand}}</span>
		</div>
	</template>
</Listbox>
        `
      },
      filterCode: {
        basic: `
<Listbox v-model="selectedCity" :options="cities" optionLabel="name" :filter="true"/>
        `
      },
    }
  }
}
</script>
