<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>A model can be bound using the standard v-model directive.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Properties</h5>
    <p>Any property such as name and autofocus are passed to the underlying input element. Following is the additional
      property to configure the component.</p>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>boolean</td>
            <td>null</td>
            <td>Value of the component.</td>
          </tr>
          <tr>
            <td>ariaLabelledBy</td>
            <td>string</td>
            <td>null</td>
            <td>Establishes relationships between the component and label(s) where its value should be one or more
              element IDs.</td>
          </tr>
        </tbody>
      </table>
    </div>

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
            <td>change</td>
            <td>event: Browser event</td>
            <td>Callback to invoke on value change.</td>
          </tr>
          <tr>
            <td>input</td>
            <td>event: Value of checkbox</td>
            <td>Callback to invoke on click.</td>
          </tr>
          <tr>
            <td>click</td>
            <td>event: Browser event</td>
            <td>Callback to invoke click.</td>
          </tr>
          <tr>
            <td>focus</td>
            <td>event: Browser event</td>
            <td>Callback to invoke on focus.</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>event: Browser event</td>
            <td>Callback to invoke on blur.</td>
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
            <td>p-chkbox</td>
            <td>Container element</td>
          </tr>
          <tr>
            <td>p-tristatechkbox</td>
            <td>Container element</td>
          </tr>
          <tr>
            <td>p-chkbox-box</td>
            <td>Container of icon.</td>
          </tr>
          <tr>
            <td>p-chkbox-icon</td>
            <td>Icon element.</td>
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
import TriStateCheckbox from 'primevue2/tristatecheckbox';
        `
      },
      baseCode: {
        basic: `
<TriStateCheckbox v-model="value" />
        `
      },
    }
  }
}
</script>
