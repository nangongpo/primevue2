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
<TreeTable :value="nodes" class="p-treetable-sm" style="margin-bottom: 2rem">
    <template #header>
        Small Table
    </template>
    <Column field="name" header="Name" :expander="true"></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>

<TreeTable :value="nodes" style="margin-bottom: 2rem">
    <template #header>
        Small Table
    </template>
    <Column field="name" header="Name" :expander="true"></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>

<TreeTable :value="nodes" class="p-treetable-lg">
    <template #header>
        Small Table
    </template>
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
    }
  }
}
</script>
