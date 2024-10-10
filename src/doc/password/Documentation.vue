<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>A model can be bound using the standard v-model directive.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Customization</h5>
    <p>Password components uses regular expressions for middle and strong passwords with the following defaults.</p>

    <h6>Medium</h6>
    <p><i>^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).</i></p>
    <ul>
      <li>At least one lowercase</li>
      <li>At least one uppercase or one number</li>
      <li>Minimum 6 characters</li>
    </ul>

    <h6>Strong</h6>
    <p><i>^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})</i></p>
    <ul>
      <li>At least one lowercase</li>
      <li>At least one uppercase</li>
      <li>At least one numeric</li>
      <li>Minimum 8 characters</li>
    </ul>

    <p>It is possible to define your own checks with the <i>mediumRegex</i> and <i>strongRegex</i> properties.</p>

    <h5>Templating</h5>
    <p>
      3 slots are included to customize the overlay. These are <i>header</i>, <i>content</i> and <i>footer</i>. Note
      that content overrides the default meter.
    </p>
    <DocSectionCode :code="templatingCode" />

    <p>It is possible to define your own checks with the <i>mediumRegex</i> and <i>strongRegex</i> properties.</p>

    <h5>Properties</h5>
    <p>
      Any property such as name and placeholder are passed to the underlying input element. Following are the additional
      properties to configure the component.
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
            <td>value</td>
            <td>any</td>
            <td>null</td>
            <td>Value of the component.</td>
          </tr>
          <tr>
            <td>promptLabel</td>
            <td>string</td>
            <td>null</td>
            <td>
              Text to prompt password entry. Defaults to PrimeVue
              <router-link to="/locale">Locale</router-link> configuration.
            </td>
          </tr>
          <tr>
            <td>mediumRegex</td>
            <td>string</td>
            <td>Regex for a medium level password.</td>
            <td>^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).</td>
          </tr>
          <tr>
            <td>strongRegex</td>
            <td>string</td>
            <td>Regex for a strong level password.</td>
            <td>^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})</td>
          </tr>
          <tr>
            <td>weakLabel</td>
            <td>string</td>
            <td>null</td>
            <td>
              Text for a weak password. Defaults to PrimeVue
              <router-link to="/locale">Locale</router-link> configuration.
            </td>
          </tr>
          <tr>
            <td>mediumLabel</td>
            <td>string</td>
            <td>null</td>
            <td>
              Text for a medium password. Defaults to PrimeVue
              <router-link to="/locale">Locale</router-link> configuration.
            </td>
          </tr>
          <tr>
            <td>strongLabel</td>
            <td>string</td>
            <td>null</td>
            <td>
              Text for a strong password. Defaults to PrimeVue
              <router-link to="/locale">Locale</router-link> configuration.
            </td>
          </tr>
          <tr>
            <td>feedback</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to show the strength indicator or not.</td>
          </tr>
          <tr>
            <td>toggleMask</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether to show an icon to display the password as plain text.</td>
          </tr>
          <tr>
            <td>appendTo</td>
            <td>string</td>
            <td>null</td>
            <td>Id of the element or "body" for document where the overlay should be appended to.</td>
          </tr>
          <tr>
            <td>inputId</td>
            <td>string</td>
            <td>null</td>
            <td>Identifier of the underlying input element.</td>
          </tr>
          <tr>
            <td>inputStyle</td>
            <td>any</td>
            <td>null</td>
            <td>Inline style of the input field.</td>
          </tr>
          <tr>
            <td>inputClass</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the input field.</td>
          </tr>
          <tr>
            <td>hideIcon</td>
            <td>string</td>
            <td>pi pi-eye-slash</td>
            <td>Icon to hide displaying the password as plain text.</td>
          </tr>
          <tr>
            <td>showIcon</td>
            <td>string</td>
            <td>pi pi-eye</td>
            <td>Icon to show displaying the password as plain text.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Events</h5>
    <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

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
            <td>header</td>
            <td>-</td>
          </tr>
          <tr>
            <td>content</td>
            <td>-</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>-</td>
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
            <td>p-password-panel</td>
            <td>Container of password panel</td>
          </tr>
          <tr>
            <td>p-password-meter</td>
            <td>Meter element of password strength</td>
          </tr>
          <tr>
            <td>p-password-info</td>
            <td>Text to display strength</td>
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
import Password from 'primevue2/password';
        `
      },
      baseCode: {
        basic: `
<Password v-model="value" />
        `
      },
      templatingCode: {
        basic: `
<Password v-model="value">
    <template #header>
        <h6>Pick a password</h6>
    </template>
    <template #footer>
        <Divider />
        <p class="mt-2">Suggestions</p>
        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </template>
</Password>
        `
      },
    }
  }
}
</script>
