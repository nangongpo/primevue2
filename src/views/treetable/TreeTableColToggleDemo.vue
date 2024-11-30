<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>TreeTable <span>Column Toggle</span></h1>
        <p>MultiSelect component can be used to implement column toggle functionality.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <TreeTable :value="nodes">
          <template #header>
            <div style="text-align:left">
              <MultiSelect v-model="columns" :options="columnOptions" optionLabel="header" placeholder="Select Columns"
                style="width: 20em" />
            </div>
          </template>
          <Column field="name" header="Name" :expander="true"></Column>
          <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </TreeTable>
      </div>
    </div>

    <TreeTableColToggleDoc />
  </div>
</template>

<script>
import TreeTableColToggleDoc from '@/doc/treetable/ColToggle.vue'
import NodeService from '../../service/NodeService'

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
    this.nodeService = new NodeService()

    this.columns = [
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ]

    this.columnOptions = [...this.columns]
  },
  mounted() {
    this.nodeService.getTreeTableNodes().then(data => this.nodes = data)
  },
  components: { TreeTableColToggleDoc }
}
</script>
