<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/treetable"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<h3>Basic</h3>
<TreeTable :value="nodes">
    <Column field="name" header="Name" :expander="true"></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>

<h3>Dynamic Columns</h3>
<TreeTable :value="nodes">
    <Column v-for="col of columns" :key="col.field"
        :field="col.field" :header="col.header" :expander="col.expander"></Column>
</TreeTable>

<h3>Programmatic Control</h3>
<div style="margin-bottom: 1em">
    <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
    <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
</div>
<TreeTable :value="nodes" :expandedKeys="expandedKeys">
    <Column field="name" header="Name" :expander="true"></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `
      },
      sourceCode2: {
        basic: `
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            columns: null,
            expandedKeys: {}
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();

        this.columns = [
            {field: 'name', header: 'Vin', expander: true},
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    },
    methods: {
        expandAll() {
            for (let node of this.nodes) {
                this.expandNode(node);
            }

            this.expandedKeys = {...this.expandedKeys};
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.children &amp;&amp; node.children.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
}
        `
      },
    }
  }
}
</script>
