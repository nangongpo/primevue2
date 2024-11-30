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
<TreeTable :value="nodes">
    <template #header>
        <div style="text-align:left">
            <MultiSelect v-model="columns" :options="columnOptions" optionLabel="header" placeholder="Select Columns" style="width: 20em"/>
        </div>
    </template>
    <Column field="name" header="Name" :expander="true"></Column>
    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
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
            columnOptions: null,
            columns: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();

        this.columns = [
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        this.columnOptions = [...this.columns];
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
