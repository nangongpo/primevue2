<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Toolbar provides <i>start</i> and <i>end</i> templates to place content at these sections.</p>
    <DocSectionCode :code="baseCode" />


    <h5>Slots</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Parameters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>start</td>
            <td>-</td>
          </tr>
          <tr>
            <td>end</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>Following is the list of structural style classes, for theming classes visit <router-link
        to="/theming">theming</router-link> page.</p>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Element</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>p-toolbar</td>
            <td>Main container element.</td>
          </tr>
          <tr>
            <td>p-toolbar-group-left</td>
            <td>Left content container.</td>
          </tr>
          <tr>
            <td>p-toolbar-group-right</td>
            <td>Right content container.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Dependencies</h5>
    <p>None.</p>
  </div>
</template>

<script>
export default {
  name: 'Documentation',
  data() {
    return {
      importCode: {
        basic: `
import Toolbar from 'primevue2/toolbar';
        `
      },
      baseCode: {
        basic: `
<Toolbar>
    <template #start>
        <Button label="New" icon="pi pi-plus" class="mr-2" />
        <Button label="Upload" icon="pi pi-upload" class="p-button-success" />
        <i class="pi pi-bars p-toolbar-separator mr-2" />
        <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>
    </template>

    <template #end>
        <Button icon="pi pi-search" class="mr-2" />
        <Button icon="pi pi-calendar" class="p-button-success mr-2" />
        <Button icon="pi pi-times" class="p-button-danger" />
    </template>
</Toolbar>
        `
      },
    }
  }
}
</script>
