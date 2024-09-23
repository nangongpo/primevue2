<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      CascadeSelect requires a value to bind and a collection of arbitrary objects with a nested hierarchy.
      <i>optionGroupLabel</i> is used for the text of a category and <i>optionGroupChildren</i> is to define the
      children of the category. Note that order of the <i>optionGroupChildren</i> matters and it should correspond to
      the data hierarchy.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Templating</h5>
    <p>Content of an item can be customized with the <i>option</i> template.</p>

    <DocSectionCode :code="templatingCode" />

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
            <td>optionGroupLabel</td>
            <td>string | function</td>
            <td>null</td>
            <td>Property name or getter function to use as the label of an option group.</td>
          </tr>
          <tr>
            <td>optionGroupChildren</td>
            <td>string | function</td>
            <td>null</td>
            <td>Property name or getter function to retrieve the items of a group.</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>string</td>
            <td>null</td>
            <td>Default text to display when no option is selected.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>When present, it specifies that the component should be disabled.</td>
          </tr>
          <tr>
            <td>dataKey</td>
            <td>string</td>
            <td>null</td>
            <td>A property to uniquely identify an option.</td>
          </tr>
          <tr>
            <td>tabindex</td>
            <td>number</td>
            <td>null</td>
            <td>Index of the element in tabbing order.</td>
          </tr>
          <tr>
            <td>inputId</td>
            <td>string</td>
            <td>null</td>
            <td>Identifier of the underlying input element.</td>
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
            <td>change</td>
            <td>
              event.originalEvent: Original event <br />
              event.value: Selected option value
            </td>
            <td>Callback to invoke on value change.</td>
          </tr>
          <tr>
            <td>group-change</td>
            <td>
              event.originalEvent: Original event <br />
              event.value: Selected option group
            </td>
            <td>Callback to invoke when a group changes.</td>
          </tr>
          <tr>
            <td>before-show</td>
            <td>-</td>
            <td>Callback to invoke before the overlay is shown.</td>
          </tr>
          <tr>
            <td>before-hide</td>
            <td>-</td>
            <td>Callback to invoke before the overlay is hidden.</td>
          </tr>
          <tr>
            <td>show</td>
            <td>-</td>
            <td>Callback to invoke when the overlay is shown.</td>
          </tr>
          <tr>
            <td>hide</td>
            <td>-</td>
            <td>Callback to invoke when the overlay is hidden.</td>
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
            <td>value</td>
            <td>
              value: Value of the component <br />
              placeholder: Placeholder text to show
            </td>
          </tr>
          <tr>
            <td>option</td>
            <td>option: Option instance</td>
          </tr>
          <tr>
            <td>indicator</td>
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
            <td>p-cascadeselect</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-cascadeselect-label</td>
            <td>Element to display label of selected option.</td>
          </tr>
          <tr>
            <td>p-cascadeselect-trigger</td>
            <td>Icon element.</td>
          </tr>
          <tr>
            <td>p-cascadeselect-panel</td>
            <td>Icon element.</td>
          </tr>
          <tr>
            <td>p-cascadeselect-items-wrapper</td>
            <td>Wrapper element of items list.</td>
          </tr>
          <tr>
            <td>p-cascadeselect-items</td>
            <td>List element of items.</td>
          </tr>
          <tr>
            <td>p-cascadeselect-item</td>
            <td>An item in the list.</td>
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
import CascadeSelect from 'primevue2/cascadeselect';
        `
      },
      baseCode: {
        basic: `
<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" 
    :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem" />
        `
      },
      baseCode2: {
        basic: `
exports default {
	data() {
        return {
            selectedCity: null,
            countries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                {cname: 'Sydney', code: 'A-SY'},
                                {cname: 'Newcastle', code: 'A-NE'},
                                {cname: 'Wollongong', code: 'A-WO'}
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                {cname: 'Brisbane', code: 'A-BR'},
                                {cname: 'Townsville', code: 'A-TO'}
                            ]
                        },

                    ]
                },
                {
                    name: 'Canada',
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                {cname: 'Montreal', code: 'C-MO'},
                                {cname: 'Quebec City', code: 'C-QU'}
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                {cname: 'Ottawa', code: 'C-OT'},
                                {cname: 'Toronto', code: 'C-TO'}
                            ]
                        },

                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                {cname: 'Los Angeles', code: 'US-LA'},
                                {cname: 'San Diego', code: 'US-SD'},
                                {cname: 'San Francisco', code: 'US-SF'}
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                {cname: 'Jacksonville', code: 'US-JA'},
                                {cname: 'Miami', code: 'US-MI'},
                                {cname: 'Tampa', code: 'US-TA'},
                                {cname: 'Orlando', code: 'US-OR'}
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                {cname: 'Austin', code: 'US-AU'},
                                {cname: 'Dallas', code: 'US-DA'},
                                {cname: 'Houston', code: 'US-HO'}
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
        `
      },
      templatingCode: {
        basic: `
<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" 
    :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem">
    <template #option="slotProps">
        <div class="country-item">
            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" v-if="slotProps.option.states" />
            <i class="pi pi-compass mr-2" v-if="slotProps.option.cities"></i>
            <i class="pi pi-map-marker mr-2" v-if="slotProps.option.cname"></i>
            <span>{{slotProps.option.cname || slotProps.option.name}}</span>
        </div>
    </template>
</CascadeSelect>
        `
      }
    }
  }
}
</script>
