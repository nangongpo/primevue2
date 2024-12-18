<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      AutoComplete uses v-model for two-way binding, requires a list of
      suggestions and a complete method to query for the results. The complete
      method gets the query text as event.query property and should update the
      suggestions with the search results. Example below connects to a remote
      datasource to fetch the results;
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Dropdown</h5>
    <p>
      Enabling <i>dropdown</i> property displays a button next to the input
      field where click behavior of the button is defined using dropdownMode
      property that takes "blank" or "current" as possible values. "blank" is
      the default mode to send a query with an empty string whereas "current"
      setting sends a query with the current value of the input.
    </p>
    <DocSectionCode :code="dropdownCode" />

    <h5>Multiple Mode</h5>
    <p>
      Multiple mode is enabled using <i>multiple</i> property to select more
      than one value from the autocomplete. In this case, value reference should
      be an array.
    </p>
    <DocSectionCode :code="multipleModeCode" />

    <h5>Objects</h5>
    <p>
      AutoComplete can also work with objects using the <i>field</i> property
      that defines the label to display as a suggestion. The value passed to the
      model would still be the object instance of a suggestion. Here is an
      example with a Country object that has name and code fields such as
      &#123;name:"United States",code:"USA"&#125;.
    </p>
    <DocSectionCode :code="objectsCode" />

    <h5>Force Selection</h5>
    <p>
      ForceSelection mode validates the manual input to check whether it also
      exists in the suggestions list, if not the input value is cleared to make
      sure the value passed to the model is always one of the suggestions.
      Simply enable <i>forceSelection</i> to enforce that input is always from
      the suggestion list.
    </p>
    <DocSectionCode :code="forceSelectionCode" />

    <h5>Templating</h5>
    <p>
      Item template allows displaying custom content inside the suggestions
      panel. The slotProps variable passed to the template provides an item
      property to represent an item in the suggestions collection.
    </p>
    <DocSectionCode :code="templatingCode" />

    <h5>Properties</h5>
    <p>
      Any property such as name and placeholder are passed to the underlying
      input element. Following are the additional properties to configure the
      component.
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
            <td>suggestions</td>
            <td>array</td>
            <td>null</td>
            <td>An array of suggestions to display.</td>
          </tr>
          <tr>
            <td class="line-through">field</td>
            <td>string | Function</td>
            <td>null</td>
            <td></td>
          </tr>
          <tr>
            <td>optionLabel</td>
            <td>string | Function</td>
            <td>null</td>
            <td>
              Property name or getter function to use as the label of an option.
            </td>
          </tr>
          <tr>
            <td>optionValue</td>
            <td>string | Function</td>
            <td>null</td>
            <td>
              Property name or getter function to use as the value of an option.
            </td>
          </tr>
          <tr>
            <td>optionDisabled</td>
            <td>string | Function</td>
            <td>null</td>
            <td>
              Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.	
            </td>
          </tr>
          <tr>
            <td>optionGroupLabel</td>
            <td>string | Function</td>
            <td>null</td>
            <td>
              Property name or getter function to use as the label of an option group.	
            </td>
          </tr>
          <tr>
            <td>optionGroupChildren</td>
            <td>string | Function</td>
            <td>null</td>
            <td>
              Property name or getter function that refers to the children options of option group.	
            </td>
          </tr>
          <tr>
            <td>scrollHeight</td>
            <td>string</td>
            <td>200px</td>
            <td>Maximum height of the suggestions panel.</td>
          </tr>
          <tr>
            <td>dropdown</td>
            <td>boolean</td>
            <td>false</td>
            <td>Displays a button next to the input field when enabled.</td>
          </tr>
          <tr>
            <td>dropdownMode</td>
            <td>string</td>
            <td>blank</td>
            <td>
              Specifies the behavior dropdown button. Default "blank" mode sends
              an empty string and "current" mode sends the input value.
            </td>
          </tr>
          <tr>
            <td class="line-through">autoHighlight</td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>boolean</td>
            <td>false</td>
            <td>Specifies if multiple values can be selected.</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>string</td>
            <td>null</td>
            <td>Default text to display when no option is selected.</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether the autocomplete is in loading state.</td>
          </tr>
          <tr>
            <td>dataKey</td>
            <td>string</td>
            <td>null</td>
            <td>A property to uniquely identify an option.</td>
          </tr>
          <tr>
            <td>minLength</td>
            <td>number</td>
            <td>1</td>
            <td>Minimum number of characters to initiate a search.</td>
          </tr>
          <tr>
            <td>delay</td>
            <td>number</td>
            <td>300</td>
            <td>Delay between keystrokes to wait before sending a query.</td>
          </tr>
          <tr>
            <td>appendTo</td>
            <td>HTMLElement | HintedString&lt;"body" | "self"&gt;</td>
            <td>body</td>
            <td>
              Id of the element or "body" for document where the overlay should
              be appended to.
            </td>
          </tr>
          <tr>
            <td>forceSelection</td>
            <td>boolean</td>
            <td>false</td>
            <td>
              When present, autocomplete clears the manual input if it does not
              match of the suggestions to force only accepting values from the
              suggestions.
            </td>
          </tr>
          <tr>
            <td>completeOnFocus</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether to run a query when input receives focus.</td>
          </tr>
          <tr>
            <td>inputId</td>
            <td>string</td>
            <td>null</td>
            <td>Inline style of the input field.</td>
          </tr>
          <tr>
            <td>virtualScrollerOptions</td>
            <td>VirtualScrollerProps</td>
            <td>null</td>
            <td>Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.</td>
          </tr>
          <tr>
            <td>autoOptionFocus</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether to focus on the first visible or selected element when the overlay panel is shown.</td>
          </tr>
          <tr>
            <td>selectOnFocus</td>
            <td>boolean</td>
            <td>false</td>
            <td>When enabled, the focused option is selected.</td>
          </tr>
          <tr>
            <td>focusOnHover</td>
            <td>boolean</td>
            <td>true</td>
            <td>When enabled, the focus is placed on the hovered option.</td>
          </tr>
          <tr>
            <td>searchLocale</td>
            <td>string</td>
            <td>null</td>
            <td>Locale to use in searching. The default locale is the host environment's current locale.</td>
          </tr>
          <tr>
            <td>selectionMessage</td>
            <td>string</td>
            <td>'{0} results are available'</td>
            <td>Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.</td>
          </tr>
          <tr>
            <td>selectionMessage</td>
            <td>string</td>
            <td>'{0} items selected'</td>
            <td>Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration.</td>
          </tr>
          <tr>
            <td>emptySelectionMessage</td>
            <td>string</td>
            <td>No selected item</td>
            <td>Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration.</td>
          </tr>
          <tr>
            <td>emptySearchMessage</td>
            <td>string</td>
            <td>No results found</td>
            <td>Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration.</td>
          </tr>
          <tr>
            <td>tabindex</td>
            <td>string | number</td>
            <td>null</td>
            <td>Index of the element in tabbing order.</td>
          </tr>
          <tr>
            <td>ariaLabel</td>
            <td>string</td>
            <td>null</td>
            <td>Defines a string value that labels an interactive element.</td>
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
    <p>
      Any valid event such as focus, blur and input are passed to the underlying
      input element. Following are the additional events to configure the
      component.
    </p>
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
              event.originalEvent: Browser event <br />
              event.value: Selected item
            </td>
            <td>Callback to invoke on value change.</td>
          </tr>
          <tr>
            <td>focus</td>
            <td>
              event.originalEvent: Browser event
            </td>
            <td>Callback to invoke when the component receives focus.	</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>
              event.originalEvent: Browser event
            </td>
            <td>Callback to invoke when the component loses focus.</td>
          </tr>
          <tr>
            <td>item-select</td>
            <td>
              event.originalEvent: Browser event <br />
              event.value: Selected item
            </td>
            <td>Callback to invoke when a suggestion is selected.</td>
          </tr>
          <tr>
            <td>item-unselect</td>
            <td>
              event.originalEvent: Browser event <br />
              event.value: Unselected item
            </td>
            <td>Callback to invoke when a selected value is removed.</td>
          </tr>
          <tr>
            <td>dropdown-click</td>
            <td>
              event.originalEvent: browser event <br />
              event.query: Current value of the input field
            </td>
            <td>Callback to invoke to when dropdown button is clicked.</td>
          </tr>
          <tr>
            <td>clear</td>
            <td>event: Browser event</td>
            <td>Callback to invoke when input is cleared by the user.</td>
          </tr>
          <tr>
            <td>complete</td>
            <td>
              event.originalEvent: Browser event <br />
              event.query: Value to search with
            </td>
            <td>Callback to invoke to search for suggestions.</td>
          </tr>
          <tr>
            <td>before-show</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>before-hide</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>show</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>hide</td>
            <td></td>
            <td></td>
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
            <td>chip</td>
            <td>
              value: any // A value in the selection
            </td>
          </tr>
          <tr>
            <td>header</td>
            <td>
              value: any // Value of the component <br/>
              suggestions: any // Displayed options
            </td>
          </tr>
          <tr>
            <td>footer</td>
            <td>
                value: any // Value of the component <br/>
                suggestions: any // Displayed options
            </td>
          </tr>
          <tr>
            <td class="line-through">item</td>
            <td>
              item: Option instance <br />
              index: Index of the option
            </td>
          </tr>
          <tr>
            <td>option</td>
            <td>
              option: Option instance <br />
              index: Index of the option
            </td>
          </tr>
          <tr>
            <td>optiongroup</td>
            <td>
              item: any // undefined  <br />
              option: any // Option instance  <br />
              index: number // Index of the option
            </td>
          </tr>
          <tr>
            <td>content</td>
            <td>
              items: any, // An array of objects to display for virtualscroller <br />
              styleClass: string // Style class of the component <br />
              contentRef: (el: any) ⇒ void // Referance of the content <br />
              getItemOptions: (index: number) ⇒ VirtualScrollerItemOptions // Options of the items
            </td>
          </tr>
          <tr>
            <td>loader</td>
            <td>
              options: any // Options of the loader items for virtualscroller
            </td>
          </tr>
          <tr>
            <td>empty</td>
            <td></td>
          </tr>
          <tr>
            <td>removetokenicon</td>
            <td>
              class: string // Style class of the icon. <br />
              index: number // Index of the token. <br />
              removeCallback: (event: Event, index: number) ⇒ void, // Remove token icon function.
            </td>
          </tr>
          <tr>
            <td>loadingicon</td>
            <td>
              className: string, // Style class of the loading icon.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>Following is the list of structural style classes</p>
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
            <td>p-autocomplete</td>
            <td>Container element</td>
          </tr>
          <tr>
            <td>p-autocomplete-panel</td>
            <td>Overlay panel of suggestions.</td>
          </tr>
          <tr>
            <td>p-autocomplete-items</td>
            <td>List container of suggestions.</td>
          </tr>
          <tr>
            <td>p-autocomplete-item</td>
            <td>List item of a suggestion.</td>
          </tr>
          <tr>
            <td>p-autocomplete-token</td>
            <td>Element of a selected item in multiple mode.</td>
          </tr>
          <tr>
            <td>p-autocomplete-token-icon</td>
            <td>Close icon element of a selected item in multiple mode.</td>
          </tr>
          <tr>
            <td>p-autocomplete-token-label</td>
            <td>Label of a selected item in multiple mode.</td>
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
import AutoComplete from 'primevue2/autocomplete';
        `
      },
      baseCode: {
        basic: `
<AutoComplete v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountry($event)" field="name" />
        `
      },
      baseCode2: {
        basic: `
export default {
	data() {
		return {
			selectedCountry: null,
			filteredCountries: null
		}
	},
	countryService: null,
	created() {
		this.countryService = new CountryService();
	},
	methods: {
		searchCountry(event) {
            this.filteredCountriesBasic = this.countryService.search(event.query);
		}
	}
}
        `
      },
      dropdownCode: {
        basic: `
<AutoComplete v-model="brand" :dropdown="true" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type 'v' or 'f'" />
        `
      },
      multipleModeCode: {
        basic: `
<AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountriesMultiple" @complete="searchCountryMultiple($event)" field="name" />
        `
      },
      objectsCode: {
        basic: `
<AutoComplete field="label" v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountryBasic($event)" />
        `
      },
      forceSelectionCode: {
        basic: `
<AutoComplete forceSelection v-model="brand" :suggestions="filteredBrands" @complete="searchBrand($event)" />
        `
      },
      templatingCode: {
        basic: `
<AutoComplete v-model="brand" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type 'v' or 'f'" :dropdown="true">
	<template #item="slotProps">
		<img :alt="slotProps.item" :src="'demo/images/car/' + slotProps.item + '.png'" />
        <div>{{slotProps.item}}</div>
	</template>
</AutoComplete>
        `
      }
    }
  }
}
</script>
