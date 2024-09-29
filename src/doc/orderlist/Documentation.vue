<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>OrderList requires an array as its value bound with the v-model directive and a template for its content.</p>
    <p>
      Header of the component is defined with the "header" template and to define the content of an item in the list a
      named template called "item" needs to be defined which gets the <i>item</i> and the <i>index</i> via slotProps.
    </p>
    <DocSectionCode :code="baseCode" />

    <h5>Selection</h5>
    <p>
      In case you'd need to access the selected items in the list, define a binding to the <i>selection</i> property
      with the sync operator so that it gets updated when the user makes a selection. Since it is two-way binding
      enabled, your changes to the selection will be reflected as well. Note that this is optional and only necessary
      when you need to access the selection.
    </p>

    <p>Use the sync operator to enable two-way binding.</p>
    <DocSectionCode :code="selectionCode" />

    <h5>DataKey</h5>
    <p>
      It is recommended to provide the name of the field that uniquely identifies the a record in the data via the
      <i>dataKey</i> property for better performance.
    </p>

    <h5>Templating</h5>
    <p>
      In addition to the <i>item</i> template, <i>header</i> is provided to place custom content at the list header.
      Controls section can also be customized to place content before and after the buttons with
      <i>controlsstart</i> and <i>controlsend</i> slots respectively.
    </p>

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
            <td>array</td>
            <td>null</td>
            <td>Value of the component.</td>
          </tr>
          <tr>
            <td>selection</td>
            <td>any</td>
            <td>null</td>
            <td>Selected items in the list.</td>
          </tr>
          <tr>
            <td>metaKeySelection</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              Defines whether metaKey is requred or not for the selection. <br />
              When true metaKey needs to be pressed to select or unselect an item and <br />
              when set to false selection of each item can be toggled individually. On touch enabled devices,
              metaKeySelection is turned off automatically.
            </td>
          </tr>
          <tr>
            <td>dataKey</td>
            <td>string</td>
            <td>null</td>
            <td>Name of the field that uniquely identifies the a record in the data.</td>
          </tr>
          <tr>
            <td>listStyle</td>
            <td>object</td>
            <td>null</td>
            <td>Inline style of the the list element.</td>
          </tr>
          <tr>
            <td>stripedRows</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether to displays rows with alternating colors.</td>
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
            <td>reorder</td>
            <td>
              event.originalEvent: browser event <br />
              event.value: Ordered list <br />
              event.direction: Direction of the change; "up", "down", "bottom", "top"
            </td>
            <td>Callback to invoke when the list is reordered.</td>
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
            <td>header</td>
            <td>-</td>
          </tr>
          <tr>
            <td>item</td>
            <td>
              item: Item of the component<br />
              index: Index of the item
            </td>
          </tr>
          <tr>
            <td>controlsstart</td>
            <td>-</td>
          </tr>
          <tr>
            ı
            <td>controlsend</td>
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
            <td>p-orderlist</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-orderlist-list</td>
            <td>List container.</td>
          </tr>
          <tr>
            <td>p-orderlist-item</td>
            <td>An item in the list</td>
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
import OrderList from 'primevue2/orderlist';
        `
      },
      baseCode: {
        basic: `
<OrderList v-model="cars" listStyle="height:auto" dataKey="vin">
    <template #header>
        List of Cars
    </template>
    <template #item="slotProps">
        <div class="p-caritem">
            <img :src="'demo/images/car/' + slotProps.item.brand + '.png'">
            <div>
                <span class="p-caritem-vin">{{slotProps.item.vin}}</span>
                <span>{{slotProps.item.year}} - {{slotProps.item.color}}</span>
            </div>
        </div>
    </template>
</OrderList>
        `
      },
      selectionCode: {
        basic: `
<OrderList v-model="cars" dataKey="vin" :selection.sync="selection">
    <template #header>
        List of Cars
    </template>
    <template #item="slotProps">
        <div class="p-caritem">
            <img :src="'demo/images/car/' + slotProps.item.brand + '.png'">
            <div>
                <span class="p-caritem-vin">{{slotProps.item.vin}}</span>
                <span>{{slotProps.item.year}} - {{slotProps.item.color}}</span>
            </div>
        </div>
    </template>
</OrderList>
        `
      },
    }
  }
}
</script>
