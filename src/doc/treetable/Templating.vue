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
        FileSystem
    </template>
    <Column field="name" header="Name" :expander="true"></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
    <Column headerStyle="width: 8em" bodyStyle="text-align: center">
        <template #body="slotProps">
            <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
            <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
        </template>
    </Column>
    <template #footer>
        <div style="text-align:left">
            <Button icon="pi pi-refresh" />
        </div>
    </template>
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
