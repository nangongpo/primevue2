<template>
  <div class="content-section documentation">
    <TabView>
      <TabPanel header="Source">
        <DocSectionCode :code="sourceCode1" />
        <DocSectionCode :code="sourceCode2" importCode />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sourceCode1: {
        basic: `
<h3>Single Selection</h3>
<Tree :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey1"></Tree>

<h3>Multiple Selection with MetaKey</h3>
<Tree :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys1"></Tree>

<h3>Multiple Selection without MetaKey</h3>
<Tree :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys2" :metaKeySelection="false"></Tree>

<h3>Checkbox Selection</h3>
<Tree :value="nodes" selectionMode="checkbox" :selectionKeys.sync="selectedKeys3"></Tree>

<h3>Events</h3>
<Tree :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey2" :metaKeySelection="false"
    @node-select="onNodeSelect" @node-unselect="onNodeUnselect"></Tree>
        `
      },
      sourceCode2: {
        basic: `
import NodeService from '../../service/NodeService';

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
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.label, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.label, life: 3000});
        }
    }
}
        `
      },
    }
  }
}
</script>
