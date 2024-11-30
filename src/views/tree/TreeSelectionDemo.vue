<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Tree <span>Selection</span></h1>
        <p>Tree supports <b>single</b>, <b>multiple</b> and <b>checkbox</b> as selection modes.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Single Selection</h5>
        <Tree :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey1"></Tree>

        <h5>Multiple Selection with MetaKey</h5>
        <Tree :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys1"></Tree>

        <h5>Multiple Selection without MetaKey</h5>
        <Tree :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys2" :metaKeySelection="false">
        </Tree>

        <h5>Checkbox Selection</h5>
        <Tree :value="nodes" selectionMode="checkbox" :selectionKeys.sync="selectedKeys3"></Tree>

        <h5>Events</h5>
        <Tree :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey2" :metaKeySelection="false"
          @node-select="onNodeSelect" @node-unselect="onNodeUnselect"></Tree>
      </div>
    </div>

    <TreeSelectionDoc />
  </div>
</template>

<script>
import TreeSelectionDoc from '@/doc/tree/Selection.vue'
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
    this.nodeService.getTreeNodes().then(data => this.nodes = data)
  },
  methods: {
    onNodeSelect(node) {
      this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 })
    },
    onNodeUnselect(node) {
      this.$toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 })
    }
  },
  components: { TreeSelectionDoc }
}
</script>

<style scoped>
button {
  margin-right: .5rem;
}
</style>
