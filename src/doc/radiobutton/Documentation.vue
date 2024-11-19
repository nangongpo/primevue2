<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Two-way value binding is defined using the standard v-model directive.</p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <p>As model is two-way binding enabled, giving a default value to the model is enough to display a radio button as
      checked by default.</p>
    <DocSectionCode :code="baseCode3" importCode />

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
            <td>p-radiobutton</td>
            <td>Container element</td>
          </tr>
          <tr>
            <td>p-radiobutton-box</td>
            <td>Container of icon.</td>
          </tr>
          <tr>
            <td>p-radiobutton-icon</td>
            <td>Icon element.</td>
          </tr>
          <tr>
            <td>p-radiobutton-label</td>
            <td>Label element.</td>
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
import RadioButton from 'primevue2/radiobutton';
        `
      },
      baseCode: {
        basic: `
<RadioButton inputId="city1" name="city" value="Chicago" v-model="city" />
<RadioButton inputId="city2" name="city" value="Los Angeles" v-model="city" />
        `
      },
      baseCode2: {
        basic: `
export default {
	data() {
		return {
			city: null
		}
	}
}
        `
      },
      baseCode3: {
        basic: `
export default {
	data() {
		return {
			city: 'Chicago'
		}
	}
}
        `
      },
    }
  }
}
</script>
