<template>
  <div class="content-section documentation">
    <TabView>
      <TabPanel header="Documentation">
        <h5>Import</h5>
        <DocSectionCode :code="importCode" importCode hideToggleCode />

        <h5>Getting Started</h5>
        <p>
          Accordion element consists of one or more AccordionTab elements. Title of the tab is defined using header
          attribute.
        </p>
        <DocSectionCode :code="baseCode" hideToggleCode />

        <h5>Active</h5>
        <p>Visibility of the content is specified with the active property that supports one or two-way binding.</p>
        <DocSectionCode :code="activeCode1" hideToggleCode />

        <p>Two-way binding requires the sync operator.</p>
        <DocSectionCode :code="activeCode2" hideToggleCode />

        <h5>Multiple</h5>
        <p>
          By default only one tab at a time can be active, enabling multiple property changes this behavior to allow
          multiple tabs be active at the same time.
        </p>
        <DocSectionCode :code="multipleCode" hideToggleCode />

        <h5>Disabled</h5>
        <p>A tab can be disabled by setting the disabled property to true.</p>
        <DocSectionCode :code="disabledCode" hideToggleCode />

        <h5>Custom Content at Headers</h5>
        <p>Custom content for the title section of a panel is defined using the header template.</p>
        <DocSectionCode :code="customHeaderCode" hideToggleCode />

        <h5>Programmatic Control</h5>
        <p>Tabs can be controlled programmatically using active property.</p>
        <DocSectionCode :code="programmaticControlCode" hideToggleCode />

        <h5>Dynamic Tabs</h5>
        <p>
          Tabs can be generated dynamically using the standard
          <i>v-for</i> directive.
        </p>
        <DocSectionCode :code="dynamicTabsCode1" hideToggleCode />
        <DocSectionCode :code="dynamicTabsCode2" importCode hideToggleCode />

        <h5>Properties of AccordionTab</h5>
        <div class="doc-tablewrapper mt-4">
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
                <td>false</td>
                <td>Whether the tab is disabled.</td>
              </tr>
              <tr>
                <td>expandIcon</td>
                <td>string</td>
                <td>pi-chevron-right</td>
                <td>Icon of a collapsed tab.</td>
              </tr>
              <tr>
                <td>collapseIcon</td>
                <td>string</td>
                <td>pi-chevron-down</td>
                <td>Icon of an expanded tab.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5>Properties of Accordion</h5>
        <p>
          Any property as style and class are passed to the main container element. Following is the additional property
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
                <td>multiple</td>
                <td>boolean</td>
                <td>false</td>
                <td>When enabled, multiple tabs can be activated at the same time.</td>
              </tr>
              <tr>
                <td>activeIndex</td>
                <td>number|array</td>
                <td>null</td>
                <td>Index of the active tab or an array of indexes in multiple mode.</td>
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
                <td>tab-open</td>
                <td>
                  event.originalEvent: Browser event <br />
                  event.tab: opened tab
                </td>
                <td>Callback to invoke when a tab gets expanded.</td>
              </tr>
              <tr>
                <td>tab-close</td>
                <td>
                  event.originalEvent: Browser event <br />
                  event.tab: closed tab
                </td>
                <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
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
                <td>p-accordion</td>
                <td>Container element.</td>
              </tr>
              <tr>
                <td>p-accordion-header</td>
                <td>Header of a tab.</td>
              </tr>
              <tr>
                <td>p-accordion-content</td>
                <td>Container of a tab.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5>Dependencies</h5>
        <p>None.</p>
      </TabPanel>

      <TabPanel header="Source">
        <a
          href="https://github.com/nangongpo/primevue2/tree/main/src/views/accordion"
          class="btn-viewsource"
          target="_blank"
          rel="noopener noreferrer">
          <span>View on GitHub</span>
        </a>

        <DocSectionCode :code="sourceCode1" hideToggleCode />
        <DocSectionCode :code="sourceCode2" hideToggleCode importCode />
        <DocSectionCode :code="sourceCode3" hideToggleCode importStyle />
      </TabPanel>
    </TabView>
  </div>
</template>
<script>
export default {
  data() {
    return {
      importCode: {
        basic: `
import Accordion from 'primevue2/accordion';
import AccordionTab from 'primevue2/accordiontab';
        `
      },
      baseCode: {
        basic: `
<Accordion>
	<AccordionTab header="Header I">
		Content
	</AccordionTab>
	<AccordionTab header="Header II">
		Content
	</AccordionTab>
	<AccordionTab header="Header III">
		Content
	</AccordionTab>
</Accordion>
        `
      },
      activeCode1: {
        basic: `
<Accordion :activeIndex="active">
	<AccordionTab header="Header I">
		Content
	</AccordionTab>
	<AccordionTab header="Header II">
		Content
	</AccordionTab>
	<AccordionTab header="Header III">
		Content
	</AccordionTab>
</Accordion>
        `
      },
      activeCode2: {
        basic: `
<Accordion :activeIndex.sync="active">
	<AccordionTab header="Header I">
		Content
	</AccordionTab>
	<AccordionTab header="Header II">
		Content
	</AccordionTab>
	<AccordionTab header="Header III">
		Content
	</AccordionTab>
</Accordion>
        `
      },
      multipleCode: {
        basic: `
<Accordion :multiple="true" :activeIndex="[0]" >
	<AccordionTab header="Header I">
		Content
	</AccordionTab>
	<AccordionTab header="Header II">
		Content
	</AccordionTab>
	<AccordionTab header="Header III">
		Content
	</AccordionTab>
</Accordion>
        `
      },
      disabledCode: {
        basic: `
<Accordion>
	<AccordionTab header="Header I">
		Content
	</AccordionTab>
	<AccordionTab header="Header II">
		Content
	</AccordionTab>
	<AccordionTab header="Header III" :disabled="true">
		Content
	</AccordionTab>
</Accordion>
        `
      },
      customHeaderCode: {
        basic: `
<Accordion>
	<AccordionTab>
		<template #header>
			<i class="pi pi-calendar"></i>
			<span>Header I</span>
		</template>
		Content
	</AccordionTab>
	<AccordionTab>
		<template #header>
			<i class="pi pi-calendar"></i>
			<span>Header II</span>
		</template>
		Content
	</AccordionTab>
	<AccordionTab>
		<template #header>
			<i class="pi pi-calendar"></i>
			<span>Header III</span>
		</template>
		Content
	</AccordionTab>
</Accordion>
        `
      },
      programmaticControlCode: {
        basic: `
<div>
	<Button @click="active = 0" class="p-button-text" label="Activate 1st" />
	<Button @click="active = 1" class="p-button-text  mr-2" label="Activate 2nd" />
	<Button @click="active = 2" class="p-button-text  mr-2" label="Activate 3nd" />
</div>

<Accordion :activeIndex="active">
	<AccordionTab header="Header I">
		Content
	</AccordionTab>
	<AccordionTab header="Header II">
		Content
	</AccordionTab>
	<AccordionTab header="Header III">
		Content
	</AccordionTab>
</Accordion>
        `
      },
      dynamicTabsCode1: {
        basic: `
<Accordion>
	<AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
		<p>{{tab.content}}</p>
	</AccordionTab>
</Accordion>
        `
      },
      dynamicTabsCode2: {
        basic: `
export default {
	data() {
		return {
			active: 0,
			tabs: [
				{title: 'Title 1', content: 'Content 1'},
				{title: 'Title 3', content: 'Content 2'},
				{title: 'Title 3', content: 'Content 3'}
			]
		}
	}
}
        `
      },
      sourceCode1: {
        basic: `
<h5>Default</h5>
<Accordion :activeIndex="0">
    <AccordionTab header="Header I">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
    </AccordionTab>
</Accordion>

<h5>Multiple</h5>
<Accordion :multiple="true" :activeIndex="[0]">
    <AccordionTab header="Header I">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
    </AccordionTab>
    <AccordionTab header="Header IV" :disabled="true">
    </AccordionTab>
</Accordion>

<h5>Programmatic</h5>
<div style="padding: .5em 0 1em 0">
    <Button @click="active = 0" class="p-button-text" label="Activate 1st" />
    <Button @click="active = 1" class="p-button-text mr-2" label="Activate 2nd" />
    <Button @click="active = 2" class="p-button-text mr-2" label="Activate 3rd" />
</div>

<Accordion :activeIndex="active">
    <AccordionTab header="Header I">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
    </AccordionTab>
</Accordion>

<h5>Custom Headers</h5>
<Accordion class="accordion-custom" :activeIndex="0">
    <AccordionTab>
        <template #header>
            <i class="pi pi-calendar"></i>
            <span>Header I</span>
        </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </AccordionTab>
    <AccordionTab>
        <template #header>
            <i class="pi pi-user"></i>
            <span>Header II</span>
        </template>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
    </AccordionTab>
    <AccordionTab>
        <template #header>
            <i class="pi pi-search"></i>
            <span>Header III</span>
            <i class="pi pi-cog"></i>
        </template>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
    </AccordionTab>
</Accordion>

<h5>Dynamic Tabs</h5>
<Accordion>
	<AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
		<p>{{tab.content}}</p>
    </AccordionTab>
</Accordion>
        `
      },
      sourceCode2: {
        basic: `
export default {
  data() {
    return {
      active: 0,
      tabs: [
        {
          title: 'Header I',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Header II',
          content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.'
        },
        {
          title: 'Header III',
          content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.'
        }
      ]
    }
  }
}
        `
      },
      sourceCode3: {
        basic: `
.accordion-custom {
	i, span {
		vertical-align: middle;
	}

	span {
		margin: 0 .5rem;
	}
}
        `
      }
    }
  }
}
</script>
