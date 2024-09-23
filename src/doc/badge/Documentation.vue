<template>
  <div>
    <h5>Getting Started</h5>
    <p>Badge can either be used as a standalone component or as a directive.</p>
    <h6>Component</h6>
    <DocSectionCode :code="importCode" importCode />

    <p>Content of the badge is specified using the <i>value</i> property.</p>
    <DocSectionCode :code="baseCode" />

    <h6>Directive</h6>
    <DocSectionCode :code="directiveCode" importCode />

    <p>
      When used as a directive, badge needs to be configured at the application
      with a name of your choice.
    </p>
    <DocSectionCode :code="directiveCode2" importCode />

    <h5>Severities</h5>
    <p>
      Different color options are available as severity levels. When used as a
      component use the <i>severity</i> property to apply a severity and use a
      <i>modifier</i> as the severity value in directive mode.
    </p>
    <ul>
      <li>success</li>
      <li>info</li>
      <li>warning</li>
      <li>danger</li>
    </ul>
    <DocSectionCode :code="severitiesCode" />

    <h5>Button Badges</h5>
    <p>
      Buttons provide integrated badge support with the <i>badge</i> and
      <i>badgeClass</i> properties.
    </p>
    <DocSectionCode :code="buttonBadgesCode" />

    <h5>Sizes</h5>
    <p>
      Badge sizes are adjusted with the <i>size</i> property that accepts
      "large" and "xlarge" as the possible alternatives to the default size.
      Currently sizes only apply to component mode.
    </p>
    <DocSectionCode :code="sizesCode" />

    <p>
      In addition, when placed inside another element, badge sizes can also
      derive their size from their parent.
    </p>
    <DocSectionCode :code="sizesCode2" />

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
            <td>value</td>
            <td>any</td>
            <td>null</td>
            <td>Value to display inside the badge.</td>
          </tr>
          <tr>
            <td>severity</td>
            <td>string</td>
            <td>null</td>
            <td>Severity type of the badge.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>null</td>
            <td>Size of the badge, valid options are "large" and "xlarge".</td>
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
            <td>p-badge</td>
            <td>Badge element</td>
          </tr>
          <tr>
            <td>p-overlay-badge</td>
            <td>Wrapper of a badge and its target.</td>
          </tr>
          <tr>
            <td>p-badge-dot</td>
            <td>Badge element with no value.</td>
          </tr>
          <tr>
            <td>p-badge-success</td>
            <td>Badge element with success severity.</td>
          </tr>
          <tr>
            <td>p-badge-info</td>
            <td>Badge element with info severity.</td>
          </tr>
          <tr>
            <td>p-badge-warning</td>
            <td>Badge element with warning severity.</td>
          </tr>
          <tr>
            <td>p-badge-danger</td>
            <td>Badge element with danger severity.</td>
          </tr>
          <tr>
            <td>p-badge-lg</td>
            <td>Large badge element</td>
          </tr>
          <tr>
            <td>p-badge-xl</td>
            <td>Extra large badge element</td>
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
import Badge from 'primevue2/badge';
        `
      },
      baseCode: {
        basic: `
<Badge value="2"></Badge>
        `
      },
      directiveCode: {
        basic: `
import BadgeDirective from 'primevue2/badgedirective';
        `
      },
      directiveCode2: {
        basic: `
<i class="pi pi-bell" v-badge="2"></i>
        `
      },
      severitiesCode: {
        basic: `
<Badge value="2" severity="success"></Badge>

<i class="pi pi-bell" v-badge.success="2"></i>
        `
      },
      buttonBadgesCode: {
        basic: `
<Button type="button" label="Emails" badge="8" />
<Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />
        `
      },
      sizesCode: {
        basic: `
<Badge value="2"></Badge>
<Badge value="4" size="large" severity="warning"></Badge>
<Badge value="6" size="xlarge" severity="success"></Badge>
        `
      },
      sizesCode2: {
        basic: `
<h1>Heading 1 <Badge value="New"></Badge></h1>
<h2>Heading 2 <Badge value="New"></Badge></h2>
        `
      },
    }
  }
}
</script>
