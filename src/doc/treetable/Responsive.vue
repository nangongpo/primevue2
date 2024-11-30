<template>
  <div class="content-section documentation">
    <TabView>
      <TabPanel header="Source">
        <DocSectionCode :code="sourceCode1" />
        <DocSectionCode :code="sourceCode2" importCode />
        <DocSectionCode :code="sourceCode3" importStyle />
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
<div class="card">
    <h5>Scroll</h5>
    <TreeTable :value="nodes" responsiveLayout="scroll">
        <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
        <Column field="size" header="Size" style="min-width:200px"></Column>
        <Column field="type" header="Type" style="min-width:200px"></Column>
    </TreeTable>
</div>

<div class="card">
    <h5>Custom></h5>
    <TreeTable :value="nodes">
        <Column field="name" header="Name" :expander="true">
            <template #body="slotProps">
                {{slotProps.node.data.name}}
                <span class="sm-visible">{{slotProps.node.data.size}}</span>
                <span class="sm-visible">{{slotProps.node.data.type}}</span>
            </template>
        </Column>
        <Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
        <Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
    </TreeTable>
</div>
        `
      },
      sourceCode2: {
        basic: `
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    }
}
        `
      },
      sourceCode3: {
        basic: `
.sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    :deep(.sm-invisible) {
        display: none;
    }

    :deep(.sm-visible) {
        display: inline;
        margin-right: .5rem;
    }
}
        `
      },
    }
  }
}
</script>
