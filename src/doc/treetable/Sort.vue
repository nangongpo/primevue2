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
<h3>Single Column Sorting</h3>
<TreeTable :value="nodes" sortMode="single">
    <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
    <Column field="size" header="Size" :sortable="true"></Column>
    <Column field="type" header="Type" :sortable="true"></Column>
</TreeTable>

<h3>Multiple Column Sorting</h3>
<TreeTable :value="nodes" sortMode="multiple">
    <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
    <Column field="size" header="Size" :sortable="true"></Column>
    <Column field="type" header="Type" :sortable="true"></Column>
</TreeTable>

<h3>Removable Sort</h3>
<TreeTable :value="nodes" sortMode="single" removableSort>
    <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
    <Column field="size" header="Size" :sortable="true"></Column>
    <Column field="type" header="Type" :sortable="true"></Column>
</TreeTable>
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
    }
  }
}
</script>
