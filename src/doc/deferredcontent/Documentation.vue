<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>DeferredContent is used as a wrapper element of its content..</p>
    <DocSectionCode :code="baseCode" />

    <h5>Load Event</h5>
    <p>onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.</p>
    <DocSectionCode :code="loadEventCode" />

    <h5>Properties</h5>
    <p>Component has no properties.</p>

    <h5>Events</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Parameters</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>load</td>
            <td>event: Event object</td>
            <td>Callback to invoke when deferred content is loaded..</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>Component does not apply any styling.</p>

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
import DeferredContent from 'primevue2/deferredcontent';
        `
      },
      baseCode: {
        basic: `
<DeferredContent>
    <DataTable :value="cars">
        <Column field="vin" header="Vin"></Column>
        <Column field="year" header="Year"></Column>
        <Column field="brand" header="Brand"></Column>
        <Column field="color" header="Color"></Column>
    </DataTable>
</DeferredContent>
        `
      },
      loadEventCode: {
        basic: `
<DeferredContent @load="onDataLoad">
    <DataTable :value="cars">
        <Column field="vin" header="Vin"></Column>
        <Column field="year" header="Year"></Column>
        <Column field="brand" header="Brand"></Column>
        <Column field="color" header="Color"></Column>
    </DataTable>
</DeferredContent>
        `
      },
    }
  }
}
</script>
