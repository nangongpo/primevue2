<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>A model can be bound using the standard v-model directive.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Mask</h5>
    <p>Mask format can be a combination of the the following built-in definitions.</p>

    <ul>
      <li>a - Alpha character (A-Z,a-z)</li>
      <li>9 - Numeric character (0-9)</li>
      <li>* - Alpha numberic character (A-Z,a-z,0-9)</li>
    </ul>
    <DocSectionCode :code="maskCode" />

    <h5>SlotChar</h5>
    <p>Underscore is the default placeholder for a mask and this can be customized using <i>slotChart</i> option.</p>
    <DocSectionCode :code="slotCharCode" />

    <h5>Optional Values</h5>
    <p>
      If the input does not complete the mask definition, it is cleared by default. Use <i>autoClear</i> property to
      control this behavior. In addition, certain part of a mask can be made optional by using ? symbol where anything
      after the question mark becomes optional.
    </p>
    <DocSectionCode :code="optionalValuesCode" />

    <h5>Properties</h5>
    <p>InputText passes any valid attribute to the underlying input element. In addition;</p>
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
            <td>mask</td>
            <td>string</td>
            <td>null</td>
            <td>Mask pattern.</td>
          </tr>
          <tr>
            <td>slotChar</td>
            <td>string</td>
            <td>-</td>
            <td>Placeholder character in mask, default is underscore.</td>
          </tr>
          <tr>
            <td>autoClear</td>
            <td>boolean</td>
            <td>true</td>
            <td>Clears the incomplete value on blur.</td>
          </tr>
          <tr>
            <td>unmask</td>
            <td>boolean</td>
            <td>false</td>
            <td>Defines if model sets the raw unmasked value to bound value or the formatted mask value.</td>
          </tr>
          <tr>
            <td>trueValue</td>
            <td>any</td>
            <td>null</td>
            <td>Value in checked state.</td>
          </tr>
          <tr>
            <td>falseValue</td>
            <td>any</td>
            <td>null</td>
            <td>Value in unchecked state.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Events</h5>
    <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

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
            <td>p-inputmask p-inputtext</td>
            <td>Input element</td>
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
import InputMask from 'primevue2/inputmask';
        `
      },
      baseCode: {
        basic: `
<InputMask v-model="value" mask="99-999999" />
        `
      },
      maskCode: {
        basic: `
<InputMask v-model="value" mask="a*-999-a999" />
        `
      },
      slotCharCode: {
        basic: `
<InputMask v-model="value" mask="99/99/9999" slotChar="mm/dd/yyyy" />
        `
      },
      optionalValuesCode: {
        basic: `
<InputMask v-model="value" mask="(999) 999-9999? x99999" />
        `
      },
    }
  }
}
</script>
