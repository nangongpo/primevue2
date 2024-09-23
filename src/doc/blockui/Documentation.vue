<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      BlockUI is controlled using the <i>blocked</i> property, by default target
      element to block is the child component. In example below, panel gets
      blocked with a mask when blockedPanel is enabled and gets unblock when the
      bound variable is set to false.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Full Screen</h5>
    <p>
      In full screen mode, instead of a particular element, the whole document
      gets blocked. Set <i>fullScreen</i> as true in order to enable this
      functionality.
    </p>
    <DocSectionCode :code="fullScreenCode" />

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
            <td>blocked</td>
            <td>array</td>
            <td>null</td>
            <td>Controls the blocked state.</td>
          </tr>
          <tr>
            <td>fullscreen</td>
            <td>menuitem</td>
            <td>null</td>
            <td>When enabled, the whole document gets blocked.</td>
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
            <td>block</td>
            <td>-</td>
            <td>Fired when the element gets blocked.</td>
          </tr>
          <tr>
            <td>unblock</td>
            <td>-</td>
            <td>Fired when the element gets unblocked.</td>
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
            <td>p-blockui</td>
            <td>Mask element.</td>
          </tr>
          <tr>
            <td>p-blockui-document</td>
            <td>Mask element in full screen mode.</td>
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
import BlockUI from 'primevue2/blockui';
        `
      },
      baseCode: {
        basic: `
<BlockUI :blocked="blockedPanel">
    <Panel header="Header">
        Panel Content
    </Panel>
</BlockUI>
        `
      },
      baseCode2: {
        basic: `
export default {
    data() {
        return {
            blockedPanel: false
        }
    },
    methods: {
        blockPanel() {
            this.blockedPanel = true;
        },
        unblockPanel() {
            this.blockedPanel = false;
        }
    }
}
        `
      },
      fullScreenCode: {
        basic: `
<BlockUI :blocked="blockedDocument" :fullScreen="true"></BlockUI>
        `
      }
    }
  }
}
</script>
