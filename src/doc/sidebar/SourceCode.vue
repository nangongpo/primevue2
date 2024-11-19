<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/sidebar"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="mr-2" />
<Button icon="pi pi-arrow-left" @click="visibleRight = true" class="mr-2"  />
<Button icon="pi pi-arrow-down" @click="visibleTop = true" class="mr-2"  />
<Button icon="pi pi-arrow-up" @click="visibleBottom = true" class="mr-2"  />
<Button icon="pi pi-th-large" @click="visibleFull = true"  />

<Sidebar :visible.sync="visibleLeft" :baseZIndex="1000">
    <h3>Left Sidebar</h3>
</Sidebar>

<Sidebar :visible.sync="visibleRight" :baseZIndex="1000" position="right">
    <h3>Right Sidebar</h3>
</Sidebar>

<Sidebar :visible.sync="visibleTop" :baseZIndex="1000" position="top">
    <h3>Top Sidebar</h3>
</Sidebar>

<Sidebar :visible.sync="visibleBottom" :baseZIndex="1000" position="bottom">
    <h3>Bottom Sidebar</h3>
</Sidebar>

<Sidebar :visible.sync="visibleFull" :baseZIndex="1000" position="full">
    <h3>Full Screen</h3>
</Sidebar>
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			visibleLeft: false,
			visibleRight: false,
			visibleTop: false,
			visibleBottom: false,
			visibleFull: false
		}
	}
}
        `
      },
    }
  }
}
</script>
