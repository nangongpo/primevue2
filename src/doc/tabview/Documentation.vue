<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Tabview element consists of one or more TabPanel elements. Header of the tab is defined using header attribute.
    </p>
    <DocSectionCode :code="baseCode" />

    <h5>Active</h5>
    <p>Visibility of the content is specified with the active property that supports one or two-way binding.</p>
    <DocSectionCode :code="activeCode" />

    <p>Two-way binding requires the sync operator.</p>
    <DocSectionCode :code="activeCode2" />

    <h5>Disabled</h5>
    <p>A tab can be disabled to prevent the content to be displayed by setting the disabled property on a panel.</p>
    <DocSectionCode :code="disabledCode" />

    <h5>Header Template</h5>
    <p>Custom content for the title section of a panel is defined using the header template.</p>
    <DocSectionCode :code="headerTemplateCode" />

    <h5>Programmatic Control</h5>
    <p>Tabs can be controlled programmatically using active property that defines the active tab.</p>
    <DocSectionCode :code="programmaticControlCode" />
    <DocSectionCode :code="programmaticControlCode2" importCode />

    <h5>Dynamic Tabs</h5>
    <DocSectionCode :code="dynamicTabsCode" />
    <DocSectionCode :code="dynamicTabsCode2" importCode />

    <h5>Scrollable</h5>
    <p>Enable <i>scrollable</i> property to display buttons at each side of the tab headers that scrolls the tab list.
    </p>
    <DocSectionCode :code="scrollableCode" />

    <h5>Properties of TabPanel</h5>
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
            <td>Orientation of tab headers.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>null</td>
            <td>Whether the tab is disabled.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Properties of TabView</h5>
    <p>Any additional properties like style and class are passed to the main container element.</p>
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
            <td>activeIndex</td>
            <td>Number</td>
            <td>0</td>
            <td>Index of the active tab.</td>
          </tr>
          <tr>
            <td>scrollable</td>
            <td>boolean</td>
            <td>false</td>
            <td>When enabled displays buttons at each side of the tab headers to scroll the tab list.</td>
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
            <td>tab-change</td>
            <td>event.originalEvent: Browser event <br />
              event.index: Index of the selected tab
            </td>
            <td>Callback to invoke when an active tab is changed.</td>
          </tr>
          <tr>
            <td>tab-click</td>
            <td>event.originalEvent: Browser event <br />
              event.index: Index of the clicked tab
            </td>
            <td>Callback to invoke when an active tab is clicked.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>Following is the list of structural style classes, for theming classes visit <router-link
        to="/theming">theming</router-link> page.</p>
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
            <td>p-tabview</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-tabview-nav</td>
            <td>Container of headers.</td>
          </tr>
          <tr>
            <td>p-tabview-selected</td>
            <td>Selected tab header.</td>
          </tr>
          <tr>
            <td>p-tabview-panels</td>
            <td>Container panels.</td>
          </tr>
          <tr>
            <td>p-tabview-panel</td>
            <td>Content of a tab.</td>
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
import TabView from 'primevue2/tabview';
import TabPanel from 'primevue2/tabpanel';
        `
      },
      baseCode: {
        basic: `
<TabView>
	<TabPanel header="Header I">
		Content I
	</TabPanel>
	<TabPanel header="Header II">
		Content II
	</TabPanel>
	<TabPanel header="Header III">
		Content III
	</TabPanel>
</TabView>
        `
      },
      activeCode: {
        basic: `
<TabView :activeIndex="active">
	<TabPanel header="Header I">
		Content I
	</TabPanel>
	<TabPanel header="Header II">
		Content II
	</TabPanel>
	<TabPanel header="Header III">
		Content III
	</TabPanel>
</TabView>
        `
      },
      activeCode2: {
        basic: `
<TabView :activeIndex.sync="active">
	<TabPanel header="Header I">
		Content I
	</TabPanel>
	<TabPanel header="Header II">
		Content II
	</TabPanel>
	<TabPanel header="Header III">
		Content III
	</TabPanel>
</TabView>
        `
      },
      disabledCode: {
        basic: `
<TabView>
	<TabPanel header="Header I">
		Content I
	</TabPanel>
	<TabPanel header="Header II">
		Content II
	</TabPanel>
	<TabPanel header="Header III" :disabled="true">
		Content III
	</TabPanel>
</TabView>
        `
      },
      headerTemplateCode: {
        basic: `
<TabView class="tabview-custom">
	<TabPanel>
		<template #header>
			<i class="pi pi-calendar"></i>
			<span>Header I</span>
		</template>
		Content I
	</TabPanel>
	<TabPanel>
		<template #header>
			<span>Header II</span>
			<i class="pi pi-user"></i>
		</template>
		Content II
	</TabPanel>
</TabView>
        `
      },
      programmaticControlCode: {
        basic: `
<Button @click="active = 0" class="p-button-text" label="Activate 1st" />
<Button @click="active = 1" class="p-button-text mr-2" label="Activate 2nd" />
<Button @click="active = 2" class="p-button-text mr-2" label="Activate 3rd" />

<TabView :activeIndex="active">
    <TabPanel header="Header I">
        Content I
    </TabPanel>
    <TabPanel header="Header II">
        Content II
    </TabPanel>
    <TabPanel header="Header III">
       Content III
    </TabPanel>
</TabView>
        `
      },
      programmaticControlCode2: {
        basic: `
export default {
    data() {
        return {
            active: 0
        }
    }
}
        `
      },
      dynamicTabsCode: {
        basic: `
<TabView>
    <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <p>{{tab.content}}</p>
    </TabPanel>
</TabView>
        `
      },
      dynamicTabsCode2: {
        basic: `
export default {
    data() {
        return {
            {title: 'Title 1', content: 'Content 1'},
			{title: 'Title 3', content: 'Content 2'},
			{title: 'Title 3', content: 'Content 3'}
        }
    }
}
        `
      },
      scrollableCode: {
        basic: `
<TabView scrollable>
	<TabPanel header="Header I">
		Content I
	</TabPanel>
	<TabPanel header="Header II">
		Content II
	</TabPanel>
	<TabPanel header="Header III">
		Content III
	</TabPanel>
</TabView>
        `
      },
    }
  }
}
</script>
