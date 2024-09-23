<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Button is created using the Button element.</p>
    <DocSectionCode :code="buttonCode" />

    <h5>Label</h5>
    <p>Text of the button is defined using the <i>label</i> property.</p>
    <DocSectionCode :code="labelCode" />

    <h5>Icons</h5>
    <p>
      Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute.
      Default icon position is "left" and alternative is "right". To display only an icon, leave the label as undefined.
    </p>
    <DocSectionCode :code="iconsCode" />

    <h5>Events</h5>
    <p>Events are defined with the standard notation.</p>
    <DocSectionCode :code="eventsCode" />

    <h5>Severity</h5>
    <p>Different options are available as severity levels.</p>

    <ul>
      <li>.p-button-secondary</li>
      <li>.p-button-success</li>
      <li>.p-button-info</li>
      <li>.p-button-warning</li>
      <li>.p-button-help</li>
      <li>.p-button-danger</li>
    </ul>
    <DocSectionCode :code="severityCode" />
    <h5>Text Buttons</h5>

    <p>
      Text buttons have transparent background and borders, use <i>p-button-text</i> to apply text button styling. In
      addition when used with <i>.p-button-plain</i> text buttons ignore severity levels and displayed as a regular
      text.
    </p>
    <DocSectionCode :code="textButtonsCode" />

    <h5>Raised and Rounded Buttons</h5>
    <p>
      A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using
      "p-button-rounded" class.
    </p>
    <DocSectionCode :code="raisedAndRoundedButtonCode" />

    <h5>Outlined Buttons</h5>
    <p>
      An alternate styling for a button is the outlined option where background becomes transparent. Apply
      "p-button-outlined" to style a button as outlined.
    </p>
    <DocSectionCode :code="outlinedButtonsCode" />

    <h5>Link Buttons</h5>
    <p>Use "p-button-link" class to render the button as a link.</p>
    <DocSectionCode :code="linkButtonsCode" />

    <h5>Badges</h5>
    <p>
      Badge is a small status indicator for a button. Refer to the
      <router-link to="/badge">badge</router-link> documentation for available styling options.
    </p>
    <DocSectionCode :code="badgesCode" />

    <h5>Loading State</h5>
    <p>Button displays a <i>loadingIcon</i> when <i>loading</i> property is enabled.</p>
    <DocSectionCode :code="loadingStateCode" />

    <h5>ButtonSet</h5>
    <p>Wrapping the buttons in a container having a <i>.p-buttonset</i> class, groups the buttons side to side.</p>
    <DocSectionCode :code="buttonSetCode" />

    <h5>Sizes</h5>
    <p>
      2 more sizes are available in addition to a regular button, for a smaller input add <i>p-button-sm</i> and for a
      larger one, use <i>p-button-lg</i>. Note that these classes available to change the size of a particular button,
      for global scaling see the <router-link to="/theming">theming</router-link> page.
    </p>
    <DocSectionCode :code="sizesCode" />

    <h5>Slot</h5>
    <p>
      Custom content can be placed inside the button via the default slot. Note that when slot is used, label, icon and
      badge properties are not included.
    </p>
    <DocSectionCode :code="slotCode" />

    <h5>Properties</h5>
    <p>
      Any property such as style and class are passed to the underlying button element. Following are the additional
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
            <td>label</td>
            <td>string</td>
            <td>null</td>
            <td>Text of the button.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>null</td>
            <td>Name of the icon.</td>
          </tr>
          <tr>
            <td>iconPos</td>
            <td>string</td>
            <td>left</td>
            <td>Position of the icon, valid values are "left", "right", "bottom" and "top".</td>
          </tr>
          <tr>
            <td>badge</td>
            <td>string</td>
            <td>null</td>
            <td>Value of the badge.</td>
          </tr>
          <tr>
            <td>badgeClass</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the badge.</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether the button is in loading state.</td>
          </tr>
          <tr>
            <td>loadingIcon</td>
            <td>string</td>
            <td>pi pi-spinner pi-spin</td>
            <td>Icon to display in loading state.</td>
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
            <td>p-button</td>
            <td>Button element</td>
          </tr>
          <tr>
            <td>p-button-icon</td>
            <td>Icon element</td>
          </tr>
          <tr>
            <td>p-button-label</td>
            <td>Label element of the button</td>
          </tr>
          <tr>
            <td>p-button-sm</td>
            <td>Smaller button element</td>
          </tr>
          <tr>
            <td>p-button-lg</td>
            <td>Larger button element</td>
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
import Button from 'primevue2/button';
        `
      },
      buttonCode: {
        basic: `
<Button />
        `
      },
      labelCode: {
        basic: `
<Button label="Submit" />
        `
      },
      iconsCode: {
        basic: `
<Button label="Submit" icon="pi pi-check" iconPos="right" />
        `       
      },
      eventsCode: {
        basic: `
<Button label="Submit" @click="handleClick($event)" />
        `       
      },
      severityCode: {
        basic: `
<Button label="Primary" />
<Button label="Secondary" class="p-button-secondary" />
<Button label="Success" class="p-button-success" />
<Button label="Info" class="p-button-info" />
<Button label="Warning" class="p-button-warning" />
<Button label="Warning" class="p-button-help" />
<Button label="Danger" class="p-button-danger" />
        `       
      },
      textButtonsCode: {
        basic: `
<Button label="Submit" class="p-button-text" />
<Button icon="pi pi-check" class="p-button-text" />
<Button label="Cancel" icon="pi pi-times" class="p-button-text" />
<Button label="Search" icon="pi pi-search" iconPos="right" class="p-button-text p-button-text" />
        `
      },
      raisedAndRoundedButtonCode: {
        basic: `
<Button label="Primary" class="p-button-raised p-button-rounded" />
        `      
      },
      outlinedButtonsCode: {
        basic: `
<Button label="Primary" class="p-button-outlined" />
        `      
      },
      linkButtonsCode: {
        basic: `
<Button label="Link" class="p-button-link" />
        `      
      },
      badgesCode: {
        basic: `
<Button type="button" label="Emails" badge="8" />
<Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-info" />
        `      
      },
      loadingStateCode: {
        basic: `
<Button label="Save" icon="pi pi-check" :loading="isLoading" />
        `      
      },
      buttonSetCode: {
        basic: `
<span class="p-buttonset">
    <Button label="Save" icon="pi pi-check" />
    <Button label="Delete" icon="pi pi-trash" />
    <Button label="Cancel" icon="pi pi-times" />
</span>
        `      
      },
      sizesCode: {
        basic: `
<Button label="Small" icon="pi pi-check" class="p-button-sm"  />
<Button label="Normal" icon="pi pi-check" class="p-button"  />
<Button label="Large" icon="pi pi-check" class="p-button-lg" />
        `
      },
      slotCode: {
        basic: `
<Button>
    Custom Content
</Button>
        `
      }
    }
  }
}
</script>
