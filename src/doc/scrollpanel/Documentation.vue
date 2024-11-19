<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>ScrollPanel usage is similar to any container element.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Customization</h5>
    <p>
      Look and feel can easily be customized, here is an example with custom
      scrollbars.
    </p>
    <DocSectionCode :code="customizationCode" />
    <DocSectionCode :code="customizationCode2" importStyle />

    <h5>Properties</h5>
    <p>
      Any property such as style and class are passed to the main container
      element. There are no component specific properties.
    </p>

    <h5>Styling</h5>
    <p>
      Following is the list of structural style classes, for theming classes
      visit <router-link to="/theming">theming</router-link> page.
    </p>
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
            <td>p-scrollpanel</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-scrollpanel-wrapper</td>
            <td>Wrapper of content section.</td>
          </tr>
          <tr>
            <td>p-scrollpanel-content</td>
            <td>Content section.</td>
          </tr>
          <tr>
            <td>p-scrollpanel-bar</td>
            <td>Scrollbar handle.</td>
          </tr>
          <tr>
            <td>p-scrollpanel-bar-x</td>
            <td>Scrollbar handle of a horizontal bar.</td>
          </tr>
          <tr>
            <td>p-scrollpanel-bar-y</td>
            <td>Scrollbar handle of a vertical bar</td>
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
import ScrollPanel from 'primevue2/scrollpanel';
        `
      },
      baseCode: {
        basic: `
<ScrollPanel style="width: 100%; height: 200px">
    content
</ScrollPanel>
        `
      },
      customizationCode: {
        basic: `
<ScrollPanel style="width: 100%; height: 200px" class="custom">
    content
</ScrollPanel>
        `
      },
      customizationCode2: {
        basic: `
.custom .p-scrollpanel-wrapper {
    border-right: 9px solid #f4f4f4;
}

.custom .p-scrollpanel-bar {
    background-color: #1976d2;
    opacity: 1;
    transition: background-color .3s;
}

.custom .p-scrollpanel-bar:hover {
    background-color: #135ba1;
}
        `
      }
    }
  }
}
</script>
