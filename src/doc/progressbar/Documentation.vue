<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      ProgressBar has two modes; "determinate" (default) and "indeterminate". In determinate mode, a value between 0 and
      100 is required to display the progress.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <p>Indeterminate is simplly enabled using <i>mode</i> property.</p>
    <DocSectionCode :code="baseCode3" />

    <h5>Slot</h5>
    <p>A custom label can be placed inside the progress bar via the default slot.</p>
    <DocSectionCode :code="slotCode" />

    <h5>Properties</h5>
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
            <td>number</td>
            <td>null</td>
            <td>Current value of the progress.</td>
          </tr>
          <tr>
            <td>mode</td>
            <td>string</td>
            <td>determinate</td>
            <td>Defines the mode of the progress, valid values are "determinate" and "indeterminate".</td>
          </tr>
          <tr>
            <td>showValue</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to display the progress bar value.</td>
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
            <td>p-progressbar</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-progressbar-determinate</td>
            <td>Container element of a determinate progressbar.</td>
          </tr>
          <tr>
            <td>p-progressbar-indeterminate</td>
            <td>Container element of an indeterminate progressbar.</td>
          </tr>
          <tr>
            <td>p-progressbar-value</td>
            <td>Element whose width changes according to value.</td>
          </tr>
          <tr>
            <td>p-progressbar-label</td>
            <td>Label element that displays the current value.</td>
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
import ProgressBar from 'primevue2/progressbar';
        `
      },
      baseCode: {
        basic: `
<ProgressBar :value="value" />
        `
      },
      baseCode2: {
        basic: `
data() {
	return {
		value: 0
	}
}

        `
      },
      baseCode3: {
        basic: `
<ProgressBar mode="indeterminate"/>
        `
      },
      slotCode: {
        basic: `
<ProgressBar :value="value">
    Percent Complete: {{value}}%
</ProgressBar>
        `
      },
    }
  }
}
</script>
