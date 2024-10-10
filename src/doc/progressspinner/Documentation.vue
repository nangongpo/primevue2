<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>ProgressSpinner is defined using ProgressSpinner element.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Colors</h5>
    <p>Colors of the spinner can be changed by overriding the keyframes animation.</p>
    <DocSectionCode :code="colorsCode" importStyle />

    <h5>Properties</h5>
    <p>
      Any property as style and class are passed to the main container element. Following are the additional properties
      to configure the component.
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
            <td>strokeWidth</td>
            <td>string</td>
            <td>2</td>
            <td>Width of the circle stroke.</td>
          </tr>
          <tr>
            <td>fill</td>
            <td>string</td>
            <td>null</td>
            <td>Color for the background of the circle.</td>
          </tr>
          <tr>
            <td>animationDuration</td>
            <td>string</td>
            <td>2s</td>
            <td>Duration of the rotate animation.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>
      Following is the list of structural style classes, for theming classes visit
      <router-link to="/theming">theming</router-link> page.
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
            <td>p-progress-spinner</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-progress-circle</td>
            <td>SVG element.</td>
          </tr>
          <tr>
            <td>p-progress-path</td>
            <td>Circle element.</td>
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
import ProgressSpinner from 'primevue2/progressspinner';
        `
      },
      baseCode: {
        basic: `
<ProgressSpinner />
        `
      },
      colorsCode: {
        basic: `
@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
        `
      },
    }
  }
}
</script>
