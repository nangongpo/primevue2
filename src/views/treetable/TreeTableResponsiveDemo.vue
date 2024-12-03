<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>TreeTable - Responsive</h1>
        <p>TreeTable display can be optimized according for different screen sizes.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Scroll</h5>
        <p>Built-in responsiveness using the <b>responsiveLayout</b> property set to scroll.</p>
        <TreeTable :value="nodes" responsiveLayout="scroll">
          <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
          <Column field="size" header="Size" style="min-width:200px"></Column>
          <Column field="type" header="Type" style="min-width:200px"></Column>
        </TreeTable>
      </div>

      <div class="card">
        <h5>Custom</h5>
        <p>Custom implementation using media queries.</p>
        <TreeTable :value="nodes">
          <Column field="name" header="Name" :expander="true">
            <template #body="slotProps">
              {{ slotProps.node.data.name }}
              <span class="sm-visible">{{ slotProps.node.data.size }}</span>
              <span class="sm-visible">{{ slotProps.node.data.type }}</span>
            </template>
          </Column>
          <Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
          <Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
        </TreeTable>
      </div>
    </div>

    <TreeTableResponsiveDoc />
  </div>
</template>

<script>
import TreeTableResponsiveDoc from '@/doc/treetable/Responsive.vue'
import NodeService from '../../service/NodeService'

export default {
  data() {
    return {
      nodes: null
    }
  },
  nodeService: null,
  created() {
    this.nodeService = new NodeService()
  },
  mounted() {
    this.nodeService.getTreeTableNodes().then(data => this.nodes = data)
  },
  components: { TreeTableResponsiveDoc }
}
</script>

<style scoped lang="scss">
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
</style>