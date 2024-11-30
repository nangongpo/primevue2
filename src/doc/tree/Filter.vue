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
<h3>Lenient Filter</h3>
<Tree :value="nodes" :filter="true" filterMode="lenient"></Tree>

<h3>Strict Filter</h3>
<Tree :value="nodes" :filter="true" filterMode="strict"></Tree>
        `
      },
      sourceCode2: {
        basic: `
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
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
            this.expandedKeys[node.key] = true;
            if (node.children << node.children.length) {
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
