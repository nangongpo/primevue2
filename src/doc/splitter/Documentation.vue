<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Splitter requires two SplitterPanel components to wrap.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Multiple Panels</h5>
    <p>Any number of panels can be nested inside a Splitter.</p>
    <DocSectionCode :code="multiplePanelsCode" />

    <h5>Layout</h5>
    <p>
      Default orientation is configured with the <i>layout</i> property and
      default is the "horizontal" whereas other alternative is the "vertical".
    </p>
    <DocSectionCode :code="layoutCode" />

    <h5>Initial Sizes</h5>
    <p>
      When no size is defined, panels are split 50/50, use the
      <i>size</i> property to give relative widths e.g. 20/80.
    </p>
    <DocSectionCode :code="initialSizesCode" />

    <h5>Minimum Size</h5>
    <p>Minimum size defines the lowest boundary for the size of a panel.</p>
    <DocSectionCode :code="minimumSizeCode" />

    <h5>Nested Panels</h5>
    <p>Splitters can be combined to create advanced layouts.</p>
    <DocSectionCode :code="nestedPanelsCode" />

    <h5>Stateful</h5>
    <p>
      Splitters can be configured as stateful so that when the user visits the
      page again, the adjusts sizes can be restored. Define a <i>stateKey</i> to
      enable this feature. Default location of the state is session storage and
      other option is the local storage which can be configured using the
      <i>stateStorage</i> property.
    </p>
    <DocSectionCode :code="statefulCode" />

    <h5>Properties of SplitterPanel</h5>
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
            <td>size</td>
            <td>number</td>
            <td>null</td>
            <td>Size of the element relative to 100%.</td>
          </tr>
          <tr>
            <td>minSize</td>
            <td>number</td>
            <td>null</td>
            <td>Minimum size of the element relative to 100%.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Properties of Splitter</h5>
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
            <td>layout</td>
            <td>string</td>
            <td>horizontal</td>
            <td>
              Orientation of the panels, valid values are "horizontal" and
              "vertical".
            </td>
          </tr>
          <tr>
            <td>gutterSize</td>
            <td>number</td>
            <td>4</td>
            <td>Size of the divider in pixels.</td>
          </tr>
          <tr>
            <td>stateKey</td>
            <td>string</td>
            <td>null</td>
            <td>Storage identifier of a stateful Splitter.</td>
          </tr>
          <tr>
            <td>stateStorage</td>
            <td>string</td>
            <td>session</td>
            <td>
              Defines where a stateful splitter keeps its state, valid values
              are "session" for sessionStorage and "local" for localStorage.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Events of Splitter</h5>
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
            <td>resizeend</td>
            <td>
              event.originalEvent: Original event <br />
              event.sizes: Sizes of the panels as an array
            </td>
            <td>Callback to invoke when resize ends.</td>
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
            <td>p-splitter</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-splitter-resizing</td>
            <td>Container element during resize.</td>
          </tr>
          <tr>
            <td>p-splitter-horizontal</td>
            <td>Container element with horizontal layout.</td>
          </tr>
          <tr>
            <td>p-splitter-vertical</td>
            <td>Container element with vertical layout.</td>
          </tr>
          <tr>
            <td>p-splitter-panel</td>
            <td>Splitter panel element.</td>
          </tr>
          <tr>
            <td>p-splitter-gutter</td>
            <td>Gutter element to use when resizing the panels.</td>
          </tr>
          <tr>
            <td>p-splitter-gutter-handle</td>
            <td>Handle element of the gutter.</td>
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
import Splitter from 'primevue2/splitter';
import SplitterPanel from 'primevue2/splitterpanel';
        `
      },
      baseCode: {
        basic: `
<Splitter style="height: 300px">
	<SplitterPanel>
		Panel 1
	</SplitterPanel>
	<SplitterPanel>
		Panel 2
	</SplitterPanel>
</Splitter>
        `
      },
      multiplePanelsCode: {
        basic: `
<Splitter style="height: 300px">
	<SplitterPanel v-for="item of items" :key="item.key">
		{{item.content}}
	</SplitterPanel>
</Splitter>
        `
      },
      layoutCode: {
        basic: `
<Splitter style="height: 300px" layout="vertical">
	<SplitterPanel>
		Panel 1
	</SplitterPanel>
	<SplitterPanel>
		Panel 2
	</SplitterPanel>
</Splitter>
        `
      },
      initialSizesCode: {
        basic: `
<Splitter style="height: 300px">
	<SplitterPanel :size="20" >
		Panel 1
	</SplitterPanel>
	<SplitterPanel  :size="80">
		Panel 2
	</SplitterPanel>
</Splitter>
        `
      },
      minimumSizeCode: {
        basic: `
<Splitter style="height: 300px">
	<SplitterPanel :size="20" :minSize="10">
		Panel 1
	</SplitterPanel>
	<SplitterPanel  :size="80" :minSize="20">
		Panel 2
	</SplitterPanel>
</Splitter>
        `
      },
      nestedPanelsCode: {
        basic: `
<Splitter style="height: 300px">
	<SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10">
		Panel 1
	</SplitterPanel>
	<SplitterPanel :size="80">
		<Splitter layout="vertical">
			<SplitterPanel class="flex align-items-center justify-content-center" :size="15">
				Panel 2
			</SplitterPanel>
			<SplitterPanel :size="85">
				<Splitter>
					<SplitterPanel class="flex align-items-center justify-content-center" :size="20">
						Panel 3
					</SplitterPanel>
					<SplitterPanel class="flex align-items-center justify-content-center" :size="80">
						Panel 4
					</SplitterPanel>
				</Splitter>
			</SplitterPanel>
		</Splitter>
	</SplitterPanel>
</Splitter>
        `
      },
      statefulCode: {
        basic: `
<Splitter stateKey="mykey" stateStorage="local">
	<SplitterPanel>
		Panel 1
	</SplitterPanel>
	<SplitterPanel>
		Panel 2
	</SplitterPanel>
</Splitter>
        `
      },
    }
  }
}
</script>
