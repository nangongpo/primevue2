<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Without any configuration, ScrollTop listens window scroll.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Threshold</h5>
    <p>
      When the vertical scroll position reaches a certain value, ScrollTop gets
      displayed. This value is defined with the <i>threshold</i> property that
      defaults to 400.
    </p>
    <DocSectionCode :code="thresholdCode" />

    <h5>Target Element</h5>
    <p>
      ScrollTop can also be assigned to its parent element by setting
      <i>target</i> as "parent".
    </p>
    <DocSectionCode :code="targetElementCode" />

    <h5>Properties</h5>
    <p>
      Any property as style and class are passed to the main container element.
      Following are the additional properties to configure the component.
    </p>
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
            <td>target</td>
            <td>string</td>
            <td>window</td>
            <td>
              Target of the ScrollTop, valid values are "window" and "parent".
            </td>
          </tr>
          <tr>
            <td>threshold</td>
            <td>number</td>
            <td>400</td>
            <td>
              Defines the threshold value of the vertical scroll position of the
              target to toggle the visibility.
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>pi pi-chevron-up</td>
            <td>Icon to display.</td>
          </tr>
          <tr>
            <td>behavior</td>
            <td>string</td>
            <td>smooth</td>
            <td>
              Defines the scrolling behavi, "smooth" adds an animation and
              "auto" scrolls with a jump.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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
            <td>p-scrolltop</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-scrolltop-sticky</td>
            <td>Container element when attached to its parent.</td>
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
import ScrollTop from 'primevue2/scrolltop';
        `
      },
      baseCode: {
        basic: `
<ScrollTop />
        `
      },
      thresholdCode: {
        basic: `
<ScrollTop :threshold="200" />
        `
      },
      targetElementCode: {
        basic: `
<div style="height: 400px; overflow: auto">
	Content that overflows to container
	<ScrollTop />
</div>
        `
      }
    }
  }
}
</script>
