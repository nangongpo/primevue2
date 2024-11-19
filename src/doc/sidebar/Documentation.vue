<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      Sidebar is used as a container and visibility is controlled with
      <i>visible</i> property that requires the sync operator for two-way
      binding.
    </p>
    <DocSectionCode :code="baseCode" />

    <h5>Position</h5>
    <p>
      Sidebar can either be located on the left (default), right, top or bottom
      of the screen depending on the <i>position</i> property.
    </p>
    <DocSectionCode :code="positionCode" />

    <h5>Size</h5>
    <p>
      Sidebar size can be changed using a fixed value or using one of the three
      predefined ones.
    </p>
    <DocSectionCode :code="sizeCode" />

    <h5>Full Screen</h5>
    <p>Full screen mode allows the sidebar to cover whole screen.</p>
    <DocSectionCode :code="fullScreenCode" />

    <h5>Properties</h5>
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
            <td>visible</td>
            <td>boolean</td>
            <td>false</td>
            <td>Specifies the visibility of the dialog.</td>
          </tr>
          <tr>
            <td>position</td>
            <td>string</td>
            <td>left</td>
            <td>
              Specifies the position of the sidebar, valid values are "left",
              "right", "top", "bottom" and "full".
            </td>
          </tr>
          <tr>
            <td>baseZIndex</td>
            <td>number</td>
            <td>0</td>
            <td>Base zIndex value to use in layering.</td>
          </tr>
          <tr>
            <td>autoZIndex</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to automatically manage layering.</td>
          </tr>
          <tr>
            <td>dismissable</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether clicking outside closes the panel.</td>
          </tr>
          <tr>
            <td>showCloseIcon</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to display a close icon inside the panel.</td>
          </tr>
          <tr>
            <td>modal</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to a modal layer behind the sidebar.</td>
          </tr>
          <tr>
            <td>ariaCloseLabel</td>
            <td>string</td>
            <td>close</td>
            <td>Aria label of the close icon.</td>
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
            <td>hide</td>
            <td>-</td>
            <td>Callback to invoke when sidebar gets hidden.</td>
          </tr>
          <tr>
            <td>show</td>
            <td>-</td>
            <td>Callback to invoke when sidebar gets shown.</td>
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
            <td>p-sidebar</td>
            <td>Container element</td>
          </tr>
          <tr>
            <td>p-sidebar-left</td>
            <td>Container element of left sidebar.</td>
          </tr>
          <tr>
            <td>p-sidebar-right</td>
            <td>Container element of right sidebar.</td>
          </tr>
          <tr>
            <td>p-sidebar-top</td>
            <td>Container element of top sidebar.</td>
          </tr>
          <tr>
            <td>p-sidebar-bottom</td>
            <td>Container element of bottom sidebar.</td>
          </tr>
          <tr>
            <td>p-sidebar-full</td>
            <td>Container element of a full screen sidebar.</td>
          </tr>
          <tr>
            <td>p-sidebar-active</td>
            <td>Container element when sidebar is visible.</td>
          </tr>
          <tr>
            <td>p-sidebar-close</td>
            <td>Close anchor element.</td>
          </tr>
          <tr>
            <td>p-sidebar-sm</td>
            <td>Small sized sidebar.</td>
          </tr>
          <tr>
            <td>p-sidebar-md</td>
            <td>Medium sized sidebar.</td>
          </tr>
          <tr>
            <td>p-sidebar-lg</td>
            <td>Large sized sidebar.</td>
          </tr>
          <tr>
            <td>p-sidebar-mask</td>
            <td>Modal layer of the sidebar.</td>
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
import Sidebar from 'primevue2/sidebar';
        `
      },
      baseCode: {
        basic: `
<Sidebar :visible.sync="visibleLeft">
	Content
</Sidebar>

<Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
        `
      },
      positionCode: {
        basic: `
<Sidebar :visible.sync="visibleRight" position="right">
	Content
</Sidebar>
        `
      },
      sizeCode: {
        basic: `
<Sidebar :visible.sync="visibleLeft" class="p-sidebar-sm"></Sidebar>
<Sidebar :visible.sync="visibleLeft" class="p-sidebar-md"></Sidebar>
<Sidebar :visible.sync="visibleLeft" class="p-sidebar-lg"></Sidebar>
        `
      },
      fullScreenCode: {
        basic: `
<Sidebar :visible.sync="visibleFull" position="full">
	Content
</Sidebar>
        `
      }
    }
  }
}
</script>
