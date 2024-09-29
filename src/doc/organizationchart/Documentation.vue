<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      OrganizationChart requires an OrganizationChartNode instance as its root value and at least one template to
      display node content where node instance is passed via slotProps.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>OrganizationChartNode</h5>
    <p>API of the OrganizationChartNode has the properties below.</p>
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
            <td>key</td>
            <td>any</td>
            <td>null</td>
            <td>Unique identifier of the node. (required)</td>
          </tr>
          <tr>
            <td>type</td>
            <td>string</td>
            <td>null</td>
            <td>Type of the node to match a template.</td>
          </tr>
          <tr>
            <td>styleClass</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the node content.</td>
          </tr>
          <tr>
            <td>data</td>
            <td>any</td>
            <td>null</td>
            <td>Data represented by the node.</td>
          </tr>
          <tr>
            <td>selectable</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether node is selectable when selection is enabled.</td>
          </tr>
          <tr>
            <td>collapsible</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether node is collapsible when node expansion is enabled.</td>
          </tr>
          <tr>
            <td>children</td>
            <td>array</td>
            <td>null</td>
            <td>Children nodes array.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Collapsible Nodes</h5>
    <p>
      All nodes are expanded by default however they can be expanded and collapsed when <i>collapsible</i> is enabled.
      The optional <i>collapsedKeys</i> property defines the keys that are collapsed, this property is two-way binding
      enabled so that user changes or programmatic changes are reflected to the UI.
    </p>
    <p>
      Example below displays the root of chart in previous example as collapsed. Notice that the collapsedKeys is a map
      whose key is the key of the node and value is true.
    </p>
    <DocSectionCode :code="collapsibleNodesCode" />
    <DocSectionCode :code="collapsibleNodesCode2" importCode />

    <h5>Selection</h5>
    <p>
      Selection is enabled by defining the <i>selectionMode</i> to either "single" or "multiple" and specifying the
      <i>selectionKeys</i> with the sync operator. Note that selection on a particular node can be disabled if the
      <i>selectable</i> is false on the node instance.
    </p>
    <DocSectionCode :code="selectionCode" />
    <DocSectionCode :code="selectionCode" importCode />

    <h5>Templating</h5>
    <p>
      The <i>type</i> property of an OrganizationChartNode is used to map a template to a node. If it is undefined, the
      default template is used.
    </p>
    <DocSectionCode :code="templatingCode" />
    <DocSectionCode :code="templatingCode2" importCode />

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
            <td>OrganizationChartNode</td>
            <td>null</td>
            <td>Value of the component.</td>
          </tr>
          <tr>
            <td>selectionKeys</td>
            <td>object</td>
            <td>null</td>
            <td>A map instance of key-value pairs to represented the selected nodes.</td>
          </tr>
          <tr>
            <td>selectionMode</td>
            <td>string</td>
            <td>null</td>
            <td>Type of the selection, valid values are "single" and "multiple".</td>
          </tr>
          <tr>
            <td>collapsible</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether the nodes can be expanded or toggled.</td>
          </tr>
          <tr>
            <td>collapsedKeys</td>
            <td>object</td>
            <td>null</td>
            <td>A map instance of key-value pairs to represented the collapsed nodes.</td>
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
            <td>node-select</td>
            <td>node: Node instance</td>
            <td>Callback to invoke when a node is selected.</td>
          </tr>
          <tr>
            <td>node-unselect</td>
            <td>node: Node instance</td>
            <td>Callback to invoke when a node is unselected.</td>
          </tr>
          <tr>
            <td>node-expand</td>
            <td>node: Node instance</td>
            <td>Callback to invoke when a node is expanded.</td>
          </tr>
          <tr>
            <td>node-collapse</td>
            <td>node: Node instance</td>
            <td>Callback to invoke when a node is collapsed.</td>
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
            <td>p-organizationchart</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-organizationchart-table</td>
            <td>Table container of a node.</td>
          </tr>
          <tr>
            <td>p-organizationchart-lines</td>
            <td>Connector lines container.</td>
          </tr>
          <tr>
            <td>p-organizationchart-nodes</td>
            <td>Contained of node children.</td>
          </tr>
          <tr>
            <td>p-organizationchart-line-right</td>
            <td>Right side line of a node connector.</td>
          </tr>
          <tr>
            <td>p-organizationchart-line-left</td>
            <td>Left side line of a node connector.</td>
          </tr>
          <tr>
            <td>p-organizationchart-line-top</td>
            <td>Top side line of a node connector.</td>
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
import OrganizationChart from 'primevue2/organizationchart';
        `
      },
      baseCode: {
        basic: `
 <OrganizationChart :value="data">
    <template #default="slotProps">
        <span>{{slotProps.node.data.label}}</span>
    </template>
</OrganizationChart>
        `
      },
      baseCode2: {
        basic: `
export default {
    data() {
        return {
            data: {
                key: '0',
                data: {label: 'F.C. Barcelona'},
                children: [
                    {
                        key: '0_0',
                        data: {label: 'F.C. Barcelona'},
                        children: [
                            {
                                key: '0_0_0',
                                data: {label: 'Chelsea F.C.'}
                            },
                            {
                                key: '0_0_1',
                                data: {label: 'F.C. Barcelona'}
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        data: {label: 'Real Madrid'},
                        children: [
                            {
                                key: '0_1_0',
                                data: {label: 'Bayern Munich'}
                            },
                            {
                                key: '0_1_1',
                                data: {label: 'Real Madrid'}
                            }
                        ]
                    }
                ]
            }
        }
    }
}
        `
      },
      collapsibleNodesCode: {
        basic: `
 <OrganizationChart :value="data" :collapsible="true" :collapsedKeys="collapsedKeys">
    <template #default="slotProps">
        <span>{{slotProps.node.data.label}}</span>
    </template>
</OrganizationChart>
        `
      },
      collapsibleNodesCode2: {
        basic: `
export default {
    data() {
        return {
            collapsedKeys: {
                '0': true
            },
            data: {
                key: '0',
                data: {label: 'F.C. Barcelona'},
                children: [
                    {
                        key: '0_0',
                        data: {label: 'F.C. Barcelona'},
                        children: [
                            {
                                key: '0_0_0',
                                data: {label: 'Chelsea F.C.'}
                            },
                            {
                                key: '0_0_1',
                                data: {label: 'F.C. Barcelona'}
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        data: {label: 'Real Madrid'},
                        children: [
                            {
                                key: '0_1_0',
                                data: {label: 'Bayern Munich'}
                            },
                            {
                                key: '0_1_1',
                                data: {label: 'Real Madrid'}
                            }
                        ]
                    }
                ]
            }
        }
    }
}
        `
      },
      selectionCode: {
        basic: `
<OrganizationChart :value="data" selecionMode="single" :selectionKeys.sync="selectionKeys">
    <template #default="slotProps">
        <span>{{slotProps.node.data.label}}</span>
    </template>
</OrganizationChart>
        `
      },
      selectionCode2: {
        basic: `
export default {
    data() {
        return {
            selectionKeys: null,
            data: {
                key: '0',
                data: {label: 'F.C. Barcelona'},
                children: [
                    {
                        key: '0_0',
                        data: {label: 'F.C. Barcelona'},
                        children: [
                            {
                                key: '0_0_0',
                                data: {label: 'Chelsea F.C.'}
                            },
                            {
                                key: '0_0_1',
                                data: {label: 'F.C. Barcelona'}
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        data: {label: 'Real Madrid'},
                        children: [
                            {
                                key: '0_1_0',
                                data: {label: 'Bayern Munich'}
                            },
                            {
                                key: '0_1_1',
                                data: {label: 'Real Madrid'}
                            }
                        ]
                    }
                ]
            }
        }
    }
}
        `
      },
      templatingCode: {
        basic: `
<OrganizationChart :value="data">
    <template #person="slotProps">
        <div class="node-header ui-corner-top">{{slotProps.node.data.label}}</div>
        <div class="node-content">
            <img :src="'demo/images/organization/' + slotProps.node.data.avatar" width="32">
            <div>{{slotProps.node.data.name}}</div>
        </div>
    </template>
    <template #default="slotProps">
        <span>{{slotProps.node.data.label}}</span>
    </template>
</OrganizationChart>
        `
      },
      templatingCode2: {
        basic: `
export default {
    data() {
        return {
            data: {
                key: '0',
                type: 'person',
                styleClass: 'p-person',
                data: {label: 'CEO', name: 'Walter White', avatar: 'walter.jpg'},
                children: [
                    {
                        key: '0_0',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'CFO', name:'Saul Goodman', avatar: 'saul.jpg'},
                        children:[{
                            key: '0_0_0',
                            data: {label: 'Tax'},
                            selectable: false,
                            styleClass: 'department-cfo'
                        },
                        {
                            key: '0_0_1',
                            data: {label: 'Legal'},
                            selectable: false,
                            styleClass: 'department-cfo'
                        }],
                    },
                    {
                        key: '0_1',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'COO', name:'Mike E.', avatar: 'mike.jpg'},
                        children:[{
                            key: '0_1_0',
                            data: {label: 'Operations'},
                            selectable: false,
                            styleClass: 'department-coo'
                        }]
                    },
                    {
                        key: '0_2',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'CTO', name:'Jesse Pinkman', avatar: 'jesse.jpg'},
                        children:[{
                            key: '0_2_0',
                            data: {label: 'Development'},
                            selectable: false,
                            styleClass: 'department-cto',
                            children:[{
                                key: '0_2_0_0',
                                data: {label: 'Analysis'},
                                selectable: false,
                                styleClass: 'department-cto'
                            },
                            {
                                key: '0_2_0_1',
                                data: {label: 'Front End'},
                                selectable: false,
                                styleClass: 'department-cto'
                            },
                            {
                                key: '0_2_0_2',
                                data: {label: 'Back End'},
                                selectable: false,
                                styleClass: 'department-cto'
                            }]
                        },
                        {
                            key: '0_2_1',
                            data: {label: 'QA'},
                            selectable: false,
                            styleClass: 'department-cto'
                        },
                        {
                            key: '0_2_2',
                            data: {label: 'R&D'},
                            selectable: false,
                            styleClass: 'department-cto'
                        }]
                    }
                ]
            }
        }
    }
}
        `
      }
    }
  }
}
</script>
