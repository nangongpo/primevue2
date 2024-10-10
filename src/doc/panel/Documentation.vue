<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Panel is a container component that accepts content as its children.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Custom Header</h5>
    <p>Header of the panel is either defined with the <i>header</i> property or the header template.</p>
    <DocSectionCode :code="customHeaderCode" />

    <h5>Toggleable</h5>
    <p>Content of the panel can be expanded and collapsed using <i>toggleable</i> option.</p>
    <DocSectionCode :code="toggleableCode" />

    <p>To control the initial state of the toggleable panel, use the <i>collapsed</i> property.</p>
    <DocSectionCode :code="toggleableCode2" />

    <p>Use the sync operator to enable two-way binding.</p>
    <DocSectionCode :code="toggleableCode3" />

    <h5>Custom Icons</h5>
    <p>
      Additional icons can be placed at the header section of the panel using the special <i>icons</i> slot. For a
      unified look, it is suggest to add <i>.p-panel-header-icon</i> class to your icons.
    </p>
    <DocSectionCode :code="customIconsCode" />

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
            <td>header</td>
            <td>string</td>
            <td>null</td>
            <td>Header text of the panel.</td>
          </tr>
          <tr>
            <td>toggleable</td>
            <td>boolean</td>
            <td>null</td>
            <td>Defines if content of panel can be expanded and collapsed.</td>
          </tr>
          <tr>
            <td>collapsed</td>
            <td>boolean</td>
            <td>null</td>
            <td>Defines the initial state of panel content.</td>
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
            <td>toggle</td>
            <td>
              event.originalEvent: browser event <br />
              event.value: collapsed state as a boolean
            </td>
            <td>Callback to invoke when a tab toggle.</td>
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
            <td>icons</td>
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
            <td>p-panel</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-panel-header</td>
            <td>Header section.</td>
          </tr>
          <tr>
            <td>p-panel-title</td>
            <td>Title text of panel.</td>
          </tr>
          <tr>
            <td>p-panel-header-icon</td>
            <td>Action icons inside header.</td>
          </tr>
          <tr>
            <td>p-panel-toggler</td>
            <td>Toggle icon.</td>
          </tr>
          <tr>
            <td>p-panel-content</td>
            <td>Content of panel.</td>
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
import Panel from 'primevue2/panel';
        `
      },
      baseCode: {
        basic: `
<Panel header="Header">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Panel>
        `
      },
      customHeaderCode: {
        basic: `
<Panel>
    <template #header>
        Header Content
    </template>
	Content
</Panel>
        `
      },
      toggleableCode: {
        basic: `
<Panel header="Header" :toggleable="true">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Panel>
        `
      },
      toggleableCode2: {
        basic: `
<Panel header="Header Text" :toggleable="true" :collapsed="true">
	Content
</Panel>
        `
      },
      toggleableCode3: {
        basic: `
<button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically</button>
<Panel header="Header Text" :toggleable="true" :collapsed.sync="isCollapsed">
	Content
</Panel>
        `
      },
      customIconsCode: {
        basic: `
<h5>Advanced</h5>
<Panel header="Header">
    <template #icons>
        <button class="p-panel-header-icon p-link" @click="toggle">
            <span class="pi pi-cog"></span>
        </button>
        <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
    </template>
</Panel>
        `
      },
    }
  }
}
</script>
