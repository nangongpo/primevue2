<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Filters are accessed with <i>FilterService.filters</i>.</p>
    <DocSectionCode :code="baseCode" importCode />

    <h5>Custom Constraint</h5>
    <p>FilterService can be extended by adding new constraints using the <span>register</span> function.</p>
    <DocSectionCode :code="customConstraintCode" importCode />

    <h5>Built-in Constraints</h5>
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
            <td>startsWith</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value starts with the filter value</td>
          </tr>
          <tr>
            <td>contains</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value contains the filter value</td>
          </tr>
          <tr>
            <td>endsWith</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value ends with the filter value</td>
          </tr>
          <tr>
            <td>equals</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value equals the filter value</td>
          </tr>
          <tr>
            <td>notEquals</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value does not equal the filter value</td>
          </tr>
          <tr>
            <td>in</td>
            <td>
              value: Value to filter<br />
              filter[]: An array of filter values<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value contains the filter value</td>
          </tr>
          <tr>
            <td>lt</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value is less than the filter value</td>
          </tr>
          <tr>
            <td>lte</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value is less than or equals to the filter value</td>
          </tr>
          <tr>
            <td>gt</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value is greater than the filter value</td>
          </tr>
          <tr>
            <td>gte</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value is greater than or equals to the filter value</td>
          </tr>
          <tr>
            <td>is</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value equals the filter value, alias to equals</td>
          </tr>
          <tr>
            <td>isNot</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the value does not equal the filter value, alias to notEquals.</td>
          </tr>
          <tr>
            <td>before</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the date value is before the filter date.</td>
          </tr>
          <tr>
            <td>after</td>
            <td>
              value: Value to filter<br />
              filter: Filter value<br />
              filterLocale: Locale to use in filtering
            </td>
            <td>Whether the date value is after the filter date.</td>
          </tr>
        </tbody>
      </table>

      <h5>FilterService API</h5>
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
              <td>filter</td>
              <td>
                value[]: An array of values to filter<br />
                fields[]: An array of properties in the value object<br />
                filterValue: Filter value<br />
                filterMatchMode: Constraint<br />
                filterLocale: Locale to use in filtering
              </td>
              <td>Whether the property values of the given value collection matches the filter.</td>
            </tr>
            <tr>
              <td>filters</td>
              <td>-</td>
              <td>Property to access constraints collection.</td>
            </tr>
            <tr>
              <td>register</td>
              <td>
                name: string <br />
                fn: Filter callback
              </td>
              <td>Registers a new constraint in filters.</td>
            </tr>
          </tbody>
        </table>
      </div>
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
import {FilterService} from 'primevue2/api';
        `
      },
      baseCode: {
        basic: `
const value = 'PrimeVue';

FilterService.filters.equals(value, 'Vue');                           //false
FilterService.filters.equals(value, 8);                               //false
FilterService.filters.equals(value, new Date());                      //false
FilterService.filters.contains(value, 'Vue');                         //true
FilterService.filters.startsWith(value, 'Vue');                       //false
FilterService.filters.endsWith(value, 'Vue');                         //true
FilterService.filters.lt(10, 20);                                     //true
FilterService.filters.gt(50, 20);                                     //true
FilterService.filters.in(value, ['PrimeFaces', 'PrimeVue']);          //true
        `
      },
      customConstraintCode: {
        basic: `
FilterService.register('isPrimeNumber', (value, filter): boolean => {
    if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
    }

    if (value === undefined || value === null) {
        return false;
    }

    return value.toString() === filter.toString();
});

FilterService.filters['isPrimeNumber'](3);                      //true
FilterService.filters['isPrimeNumber'](5);                      //true
FilterService.filters['isPrimeNumber'](568985673);              //false
        `
      },
    }
  }
}
</script>
