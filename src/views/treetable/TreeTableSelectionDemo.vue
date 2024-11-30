<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>TreeTable <span>Selection</span></h1>
        <p>TreeTable supports <b>single</b>, <b>multiple</b> and <b>checkbox</b> as selection modes.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Single Selection</h5>
        <TreeTable :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey1">
          <Column field="name" header="Name" :expander="true"></Column>
          <Column field="size" header="Size"></Column>
          <Column field="type" header="Type"></Column>
        </TreeTable>
      </div>

      <div class="card">
        <h5>Multiple Selection with MetaKey</h5>
        <TreeTable :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys1">
          <Column field="name" header="Name" :expander="true"></Column>
          <Column field="size" header="Size"></Column>
          <Column field="type" header="Type"></Column>
        </TreeTable>
      </div>

      <div class="card">
        <h5>Multiple Selection without MetaKey</h5>
        <TreeTable :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys2"
          :metaKeySelection="false">
          <Column field="name" header="Name" :expander="true"></Column>
          <Column field="size" header="Size"></Column>
          <Column field="type" header="Type"></Column>
        </TreeTable>
      </div>

      <div class="card">
        <h5>Checkbox Selection</h5>
        <TreeTable :value="nodes" selectionMode="checkbox" :selectionKeys.sync="selectedKeys3">
          <Column field="name" header="Name" :expander="true"></Column>
          <Column field="size" header="Size"></Column>
          <Column field="type" header="Type"></Column>
        </TreeTable>
      </div>

      <div class="card">
        <h5>Events</h5>
        <TreeTable :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey2" @node-select="onNodeSelect"
          @node-unselect="onNodeUnselect">
          <Column field="name" header="Name" :expander="true"></Column>
          <Column field="size" header="Size"></Column>
          <Column field="type" header="Type"></Column>
        </TreeTable>
      </div>
    </div>

    <TreeTableSelectionDoc />
  </div>
</template>

<script>
import TreeTableSelectionDoc from '@/doc/treetable/Selection.vue'
import NodeService from '../../service/NodeService'

export default {
  data() {
    return {
      selectedKey1: null,
      selectedKey2: null,
      selectedKeys1: null,
      selectedKeys2: null,
      selectedKeys3: null,
      nodes: null
    }
  },
  nodeService: null,
  created() {
    this.nodeService = new NodeService()
  },
  mounted() {
    this.nodeService.getTreeTableNodes().then(data => this.nodes = data)
  },
  methods: {
    onNodeSelect(node) {
      this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.data.name, life: 3000 })
    },
    onNodeUnselect(node) {
      this.$toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.data.name, life: 3000 })
    }
  },
  components: { TreeTableSelectionDoc }
}
</script>
