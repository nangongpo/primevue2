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
<div class="card">
    <h5>Lenient Filter</h5>
    <TreeTable :value="nodes" :filters="filters1" filterMode="lenient">
        <template #header>
            <div class="text-right">
                <div class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText v-model="filters1['global']" placeholder="Global Search" size="50" />
                </div>
            </div>
        </template>
        <Column field="name" header="Name" :expander="true">
            <template #filter>
                <InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Filter by name" />
            </template>
        </Column>
        <Column field="size" header="Size">
            <template #filter>
                <InputText type="text" v-model="filters1['size']" class="p-column-filter" placeholder="Filter by size"/>
            </template>
        </Column>
        <Column field="type" header="Type">
            <template #filter>
                <InputText type="text" v-model="filters1['type']" class="p-column-filter" placeholder="Filter by type"/>
            </template>
        </Column>
    </TreeTable>
</div>

<div class="card">
    <h5>Strict Filter</h5>
    <TreeTable :value="nodes" :filters="filters2" filterMode="strict">
        <template #header>
            <div class="text-right">
                <div class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText v-model="filters2['global']" placeholder="Global Search" size="50" />
                </div>
            </div>
        </template>
        <Column field="name" header="Name" :expander="true">
            <template #filter>
                <InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Filter by name" />
            </template>
        </Column>
        <Column field="size" header="Size">
            <template #filter>
                <InputText type="text" v-model="filters2['size']" class="p-column-filter" placeholder="Filter by size" />
            </template>
        </Column>
        <Column field="type" header="Type">
            <template #filter>
                <InputText type="text" v-model="filters2['type']" class="p-column-filter" placeholder="Filter by type" />
            </template>
        </Column>
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
            filters1: {},
            filters2: {},
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
