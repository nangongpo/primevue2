<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Inplace requires <i>display</i> and <i>content</i> templates to define the content of each state.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Closable</h5>
    <p>
      <i>closable</i> property is handy within forms as it enables to switch back to output mode after editing is
      completed using a button displayed next to the form field.
    </p>
    <DocSectionCode :code="closableCode" />

    <h5>Lazy Data</h5>
    <p>
      Inplace allows lazy loading content so that the content gets initialized after getting opened instead of on load.
      Here is an example that loads, data of a table if the user decides to open the inplace.
    </p>
    <DocSectionCode :code="lazyDataCode" />
    <DocSectionCode :code="lazyDataCode2" importCode />

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
            <td>active</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether the content is displayed or not.</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>boolean</td>
            <td>false</td>
            <td>Displays a button to switch back to display mode.</td>
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
            <td>open</td>
            <td>event: browser event</td>
            <td>Callback to invoke when inplace is opened.</td>
          </tr>
          <tr>
            <td>close</td>
            <td>event: browser event</td>
            <td>Callback to invoke when inplace is closed.</td>
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
            <td>display</td>
            <td>-</td>
          </tr>
          <tr>
            <td>content</td>
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
            <td>p-inplace</td>
            <td>Container element</td>
          </tr>
          <tr>
            <td>p-inplace-display</td>
            <td>Display container</td>
          </tr>
          <tr>
            <td>p-inplace-content</td>
            <td>Content container</td>
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
import Inplace from 'primevue2/inplace';
        `
      },
      baseCode: {
        basic: `
<Inplace>
    <template #display>
        <span class="pi pi-search" style="vertical-align: middle"></span>
        <span style="margin-left:.5rem; vertical-align: middle">View Picture</span>
    </template>
    <template #content>
        <img src="demo/images/nature/nature1.jpg" />
    </template>
</Inplace>
        `
      },
      closableCode: {
        basic: `
<Inplace :closable="true">
    <template #display>
        {{text || 'Click to Edit'}}
    </template>
    <template #content>
        <InputText v-model="text" autoFocus />
    </template>
</Inplace>
        `
      },
      lazyDataCode: {
        basic: `
<Inplace @open="loadData">
    <template #display>
        View Data
    </template>
    <template #content>
        <DataTable :value="cars">
            <Column field="vin" header="Vin"></Column>
            <Column field="year" header="Year"></Column>
            <Column field="brand" header="Brand"></Column>
            <Column field="color" header="Color"></Column>
        </DataTable>
    </template>
</Inplace>
        `
      },
      lazyDataCode2: {
        basic: `
import CarService from '../../service/CarService';

export default {
     data() {
        return {
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    methods: {
        loadData() {
             this.carService.getCarsSmall().then(data => this.cars = data);
        }
    }
}
        `
      }
    }
  }
}
</script>
