<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      Dock is a navigation component consisting of menuitems. It has a collection of additional options defined by the
      <i>model</i> property.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>MenuModel API</h5>
    <p>
      Dock uses the common MenuModel API to define the items, visit
      <router-link to="/menumodel">MenuModel API</router-link> for details.
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
            <td>model</td>
            <td>object</td>
            <td>null</td>
            <td>MenuModel instance to define the action items.</td>
          </tr>
          <tr>
            <td>position</td>
            <td>string</td>
            <td>bottom</td>
            <td>Position of element. Valid values are 'bottom', 'top', 'left' and 'right'.</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the element.</td>
          </tr>
          <tr>
            <td>styles</td>
            <td>object</td>
            <td>null</td>
            <td>Inline style of the element.</td>
          </tr>
          <tr>
            <td>tooltipOptions</td>
            <td>object</td>
            <td>null</td>
            <td>
              Whether to display the tooltip on items. The modifiers of
              <router-link to="/tooltip">Tooltip</router-link> can be used like an object in it. Valid keys are 'event'
              and 'position'.
            </td>
          </tr>
          <tr>
            <td>exact</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to apply 'router-link-active-exact' class if route exactly matches the item path.</td>
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
            <td>p-dock</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-dock-list</td>
            <td>List of items.</td>
          </tr>
          <tr>
            <td>p-dock-item</td>
            <td>Each items in list.</td>
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
            <td>item</td>
            <td>item: Custom content for item</td>
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
import Dock from 'primevue2/dock';
        `
      },
      baseCode: {
        basic: `
<Dock :model="items" />
        `
      },
      baseCode2: {
        basic: `
export default {
    data() {
        return {
            items: [
                {
                    label: 'Finder',
                    icon: () => <img alt="Finder" src="demo/images/dock/finder.svg" style="width: 100%" />
                },
                {
                    label: 'App Store',
                    icon: () => <img alt="App Store" src="demo/images/dock/appstore.svg" style="width: 100%" />
                },
                {
                    label: 'Photos',
                    icon: () => <img alt="Photos" src="demo/images/dock/photos.svg" style="width: 100%" />
                },
                {
                    label: 'Trash',
                    icon: () => <img alt="trash" src="demo/images/dock/trash.png" style="width: 100%" />
                }
            ]
        }
    }
}
        `
      },
    }
  }
}
</script>
