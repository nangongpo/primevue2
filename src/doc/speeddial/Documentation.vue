<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      When pressed, a floating action button can display multiple primary
      actions that can be performed on a page. It has a collection of additional
      options defined by the <i>model</i> property. SpeedDial's position is
      calculated according to the container element with the position type
      style.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>MenuModel API</h5>
    <p>
      SpeedDial uses the common MenuModel API to define the items, visit
      <router-link to="/menumodel">MenuModel API</router-link> for details.
    </p>

    <h5>Type</h5>
    <p>
      SpeedDial has 4 types; <i>linear</i>, <i>circle</i>,
      <i>semi-circle</i> and <i>quarter-circle</i>.
    </p>

    <h5>Direction</h5>
    <p>
      Specifies the opening direction of actions. For the
      <strong>linear</strong> and <strong>semi-circle</strong> types; <i>up</i>,
      <i>down</i>, <i>left</i> and <i>right</i>. For the
      <strong>quarter-circle</strong> type; <i>up-left</i>, <i>up-right</i>,
      <i>down-left</i> and <i>down-right</i>.
    </p>

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
            <td>model</td>
            <td>object</td>
            <td>null</td>
            <td>MenuModel instance to define the action items.</td>
          </tr>
          <tr>
            <td>visible</td>
            <td>boolean</td>
            <td>false</td>
            <td>Specifies the visibility of the overlay.</td>
          </tr>
          <tr>
            <td>direction</td>
            <td>string</td>
            <td>up</td>
            <td>
              Specifies the opening direction of actions. Valid values are 'up',
              'down', 'left', 'right', 'up-left', 'up-right', 'down-left' and
              'down-right'
            </td>
          </tr>
          <tr>
            <td>transitionDelay</td>
            <td>number</td>
            <td>30</td>
            <td>Transition delay step for each action item.</td>
          </tr>
          <tr>
            <td>type</td>
            <td>string</td>
            <td>linear</td>
            <td>Specifies the opening type of actions.</td>
          </tr>
          <tr>
            <td>radius</td>
            <td>number</td>
            <td>0</td>
            <td>Radius for *circle types.</td>
          </tr>
          <tr>
            <td>mask</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether to show a mask element behind the speeddial</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether the component is disabled.</td>
          </tr>
          <tr>
            <td>hideOnClickOutside</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether the actions close when clicked outside.</td>
          </tr>
          <tr>
            <td>buttonClass</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the button element.</td>
          </tr>
          <tr>
            <td>maskClass</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the mask element.</td>
          </tr>
          <tr>
            <td>maskStyle</td>
            <td>object</td>
            <td>null</td>
            <td>Inline style of the mask element.</td>
          </tr>
          <tr>
            <td>showIcon</td>
            <td>string</td>
            <td>pi pi-plus</td>
            <td>Show icon of the button element.</td>
          </tr>
          <tr>
            <td>hideIcon</td>
            <td>string</td>
            <td>null</td>
            <td>Hide icon of the button element.</td>
          </tr>
          <tr>
            <td>rotateAnimation</td>
            <td>boolean</td>
            <td>true</td>
            <td>Defined to rotate showIcon when hideIcon is not present.</td>
          </tr>
          <tr>
            <td>class</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the element.</td>
          </tr>
          <tr>
            <td>style</td>
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
              <router-link to="/tooltip">Tooltip</router-link> can be used like
              an object in it. Valid keys are 'event' and 'position'.
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
            <td>click</td>
            <td>event: Browser event.</td>
            <td>Fired when the button element clicked.</td>
          </tr>
          <tr>
            <td>show</td>
            <td>-</td>
            <td>Fired when the actions are visible.</td>
          </tr>
          <tr>
            <td>hide</td>
            <td>-</td>
            <td>Fired when the actions are hidden.</td>
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
            <td>item: Custom template for item</td>
          </tr>
          <tr>
            <td>button</td>
            <td>toggle: toggle metadata</td>
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
            <td>p-speeddial</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-speeddial-button</td>
            <td>Button element of speeddial.</td>
          </tr>
          <tr>
            <td>p-speeddial-mask</td>
            <td>Mask element of speeddial.</td>
          </tr>
          <tr>
            <td>p-speeddial-list</td>
            <td>List of the actions.</td>
          </tr>
          <tr>
            <td>p-speeddial-item</td>
            <td>Each action item of list.</td>
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
import SpeedDial from 'primevue2/speeddial';
        `
      },
      baseCode: {
        basic: `
<SpeedDial :model="items" />
        `
      },
      baseCode2: {
        basic: `
items: [
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            window.location.hash = "/fileupload"
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
]
        `
      }
    }
  }
}
</script>
