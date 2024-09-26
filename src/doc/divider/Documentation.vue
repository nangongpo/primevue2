<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      Divider has two orientations defined with the <i>layout</i> property, default is "horizontal" and the alternative
      is "vertical".
    </p>
    <DocSectionCode :code="baseCode" />

    <h5>Border Style</h5>
    <p>
      Style of the border is configured with the <i>type</i> property and supports 3 values; default is "solid" and
      other possibilities are "dashed" and "dotted".
    </p>
    <DocSectionCode :code="borderStyleCode" />

    <h5>Vertical Divider</h5>
    <p>Vertical divider is enabled by setting the <i>layout</i> property as "vertical".</p>
    <DocSectionCode :code="verticalDividerCode" />

    <h5>Content</h5>
    <p>
      Any content placed inside is rendered within the boundaries of the divider. In addition, location of the content
      is configured with the <i>align</i> property. In horizontal layout, alignment options are "left", "center" and
      "right" whereas vertical mode supports "top", "center" and "bottom".
    </p>
    <DocSectionCode :code="contentCode" />

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
            <td>align</td>
            <td>string</td>
            <td>null</td>
            <td>
              Alignment of the content, options are "left", "center", "right" for horizontal layout and "top", "center",
              "bottom" for vertical.
            </td>
          </tr>
          <tr>
            <td>layout</td>
            <td>string</td>
            <td>horizontal</td>
            <td>Specifies the orientation, valid values are "horizontal" and "vertical".</td>
          </tr>
          <tr>
            <td>type</td>
            <td>String</td>
            <td>solid</td>
            <td>Border style type, default is "solid" and other options are "dashed" and "dotted".</td>
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
            <td>p-divider</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-divider-horizontal</td>
            <td>Container element in horizontal layout.</td>
          </tr>
          <tr>
            <td>p-divider-vertical</td>
            <td>Container element in vertical layout.</td>
          </tr>
          <tr>
            <td>p-divider-solid</td>
            <td>Container element with solid border.</td>
          </tr>
          <tr>
            <td>p-divider-dashed</td>
            <td>Container element with dashed border.</td>
          </tr>
          <tr>
            <td>p-divider-dotted</td>
            <td>Container element with dotted border.</td>
          </tr>
          <tr>
            <td>p-divider-left</td>
            <td>Container element with content aligned to left.</td>
          </tr>
          <tr>
            <td>p-divider-right</td>
            <td>Container element with content aligned to right.</td>
          </tr>
          <tr>
            <td>p-divider-center</td>
            <td>Container element with content aligned to center.</td>
          </tr>
          <tr>
            <td>p-divider-bottom</td>
            <td>Container element with content aligned to bottom.</td>
          </tr>
          <tr>
            <td>p-divider-top</td>
            <td>Container element with content aligned to top.</td>
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
import Divider from 'primevue2/divider';
        `
      },
      baseCode: {
        basic: `
<div>Content 1</div>
<Divider />
<div>Content 2</div>
        `
      },
      borderStyleCode: {
        basic: `
<div>Content 1</div>
<Divider type="dashed"/>
<div>Content 2</div>
        `
      },
      verticalDividerCode: {
        basic: `
<div class="flex">
    <div>Content 1</div>
    <Divider layout="vertical" />
    <div>Content 2</div>
    <Divider layout="vertical" />
    <div>Content 3</div>
</div>
        `
      },
      contentCode: {
        basic: `
<div>Content 1</div>

<Divider align="left">
    <div class="inline-flex align-items-center">
        <i class="pi pi-user mr-2"></i>
        <b>Icon</b>
    </div>
</Divider>

<div>Content 2</div>

<Divider align="center">
    <span class="p-tag">Badge</span>
</Divider>

<div>Content 3</div>

<Divider align="right">
    <Button label="Button" icon="pi pi-search" class="p-button-outlined"></Button>
</Divider>

<div>Content 4</div>
        `
      }
    }
  }
}
</script>
