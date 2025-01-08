<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>OrganizationChart</h1>
        <p>OrganizationChart visualizes hierarchical organization data.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Basic</h5>
        <OrganizationChart :value="data1">
          <template #default="slotProps">
            <span>{{ slotProps.node.label }}</span>
          </template>
        </OrganizationChart>
      </div>
      <div class="card">
        <h5>Advanced</h5>
        <OrganizationChart
          :value="data2"
          :collapsible="true"
          class="company"
          selectionMode="single"
          :selectionKeys.sync="selection"
          @node-select="onNodeSelect"
          @node-unselect="onNodeUnselect"
          @node-collapse="onNodeCollapse"
          @node-expand="onNodeExpand">
          <template #person="slotProps">
            <div class="node-header ui-corner-top">{{ slotProps.node.label }}</div>
            <div class="node-content">
              <img :src="slotProps.node.data.image" width="32" />
              <div>{{ slotProps.node.data.name }}</div>
            </div>
          </template>
          <template #default="slotProps">
            <span>{{ slotProps.node.label }}</span>
          </template>
        </OrganizationChart>
      </div>
    </div>

    <OrganizationChartDoc />
  </div>
</template>
<script>
import OrganizationChartDoc from '@/doc/organizationchart/index.vue'

export default {
  data() {
    return {
      data1: {
        label: 'Argentina',
        children: [
          {
            label: 'Argentina',
            children: [
              {
                label: 'Argentina'
              },
              {
                label: 'Croatia'
              }
            ]
          },
          {
            label: 'France',
            children: [
              {
                label: 'France'
              },
              {
                label: 'Morocco'
              }
            ]
          }
        ]
      },
      data2: {
        key: '0',
        type: 'person',
        data: {
          image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
          name: 'Amy Elsner',
          title: 'CEO'
        },
        children: [
          {
            key: '0_0',
            type: 'person',
            data: {
              image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
              name: 'Anna Fali',
              title: 'CMO'
            },
            children: [
              {
                key: '0_0_0',
                label: 'Sales'
              },
              {
                key: '0_0_1',
                label: 'Marketing'
              }
            ]
          },
          {
            key: '0_1',
            type: 'person',
            data: {
              image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
              name: 'Stephen Shaw',
              title: 'CTO'
            },
            children: [
              {
                key: '0_1_0',
                label: 'Development'
              },
              {
                key: '0_1_1',
                label: 'UI/UX Design'
              }
            ]
          }
        ]
      },
      selection: {}
    }
  },
  methods: {
    onNodeSelect(node) {
      this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.data.label, life: 3000 })
    },
    onNodeUnselect(node) {
      this.$toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.data.label, life: 3000 })
    },
    onNodeExpand(node) {
      this.$toast.add({ severity: 'success', summary: 'Node Expanded', detail: node.data.label, life: 3000 })
    },
    onNodeCollapse(node) {
      this.$toast.add({ severity: 'success', summary: 'Node Collapsed', detail: node.data.label, life: 3000 })
    }
  },
  components: {
    'OrganizationChartDoc': OrganizationChartDoc
  }
}
</script>

<style scoped lang="scss">
:deep(.p-organizationchart) {
  .p-person {
    padding: 0;
    border: 0 none;
  }

  .node-header,
  .node-content {
    padding: 0.5em 0.7rem;
  }

  .node-header {
    background-color: #495ebb;
    color: #ffffff;
  }

  .node-content {
    text-align: center;
    border: 1px solid #495ebb;
  }

  .node-content img {
    border-radius: 50%;
  }

  .department-cfo {
    background-color: #7247bc;
    color: #ffffff;
  }

  .department-coo {
    background-color: #a534b6;
    color: #ffffff;
  }

  .department-cto {
    background-color: #e9286f;
    color: #ffffff;
  }
}
</style>
