<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Tree <span>Templating</span></h1>
        <p>Tree is used to display hierarchical data.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <Tree :value="nodes">
          <template #default="slotProps">
            <b>{{ slotProps.node.label }}</b>
          </template>
          <template #url="slotProps">
            <a :href="slotProps.node.data">{{ slotProps.node.label }}</a>
          </template>
        </Tree>
      </div>
    </div>

    <TreeTemplatingDoc />
  </div>
</template>

<script>
import TreeTemplatingDoc from '@/doc/tree/Templating.vue'
export default {
  data() {
    return {
      nodes: [
        {
          key: '0',
          label: 'Introduction',
          children: [
            { key: '0-0', label: 'What is Vue.js?', data: 'https://vuejs.org/v2/guide/#What-is-Vue-js', type: 'url' },
            { key: '0-1', label: 'Getting Started', data: 'https://vuejs.org/v2/guide/#Getting-Started', type: 'url' },
            { key: '0-2', label: 'Declarative Rendering', data: 'https://vuejs.org/v2/guide/#Declarative-Rendering', type: ' url' },
            { key: '0-3', label: 'Conditionals and Loops', data: 'https://vuejs.org/v2/guide/#Conditionals-and-Loops', type: 'url' }
          ]
        },
        {
          key: '1',
          label: 'Components In-Depth',
          children: [
            { key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/v2/guide/components-registration.html', type: 'url' },
            { key: '1-1', label: 'Props', data: 'https://vuejs.org/v2/guide/components-props.html', type: 'url' },
            { key: '1-2', label: 'Custom Events', data: 'https://vuejs.org/v2/guide/components-custom-events.html', type: 'url' },
            { key: '1-3', label: 'Slots', data: 'https://vuejs.org/v2/guide/components-slots.html', type: 'url' }
          ]
        }
      ]
    }
  },
  components: { TreeTemplatingDoc }
}
</script>

<style scoped lang="scss">
button {
  margin-right: .5rem;
}

:deep(.p-tree) {
  a {
    color: #2196f3;
  }

}
</style>
