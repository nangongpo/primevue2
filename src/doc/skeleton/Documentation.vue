<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Skeleton displays a rectangle in its simplest form.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Circle</h5>
    <p>
      The other option is the circle by setting <i>shape</i> property as
      "circle".
    </p>
    <DocSectionCode :code="circleCode" />

    <h5>Size</h5>
    <p>
      In order to customize the size, use <i>width</i> and
      <i>height</i> properties for rectangles and <i>size</i> for Circle and
      Square shapes.
    </p>
    <DocSectionCode :code="sizeCode" />

    <h5>Border Radius</h5>
    <p>
      The default border radius of a rectangle is specified by the theme and can
      be overriden using the <i>borderRadius</i> property.
    </p>
    <DocSectionCode :code="borderRadiusCode" />

    <h5>Animation</h5>
    <p>Animation can be turned of by setting <i>animation</i> to "none".</p>
    <DocSectionCode :code="animationCode" />

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
            <td>shape</td>
            <td>string</td>
            <td>rectangle</td>
            <td>Shape of the element, options are "rectangle" and "circle".</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>null</td>
            <td>Size of the Circle or Square.</td>
          </tr>
          <tr>
            <td>width</td>
            <td>string</td>
            <td>100%</td>
            <td>Width of the element.</td>
          </tr>
          <tr>
            <td>height</td>
            <td>string</td>
            <td>1rem</td>
            <td>Height of the element.</td>
          </tr>
          <tr>
            <td>borderRadius</td>
            <td>string</td>
            <td>null</td>
            <td>Border radius of the element, defaults to value from theme.</td>
          </tr>
          <tr>
            <td>animation</td>
            <td>string</td>
            <td>wave</td>
            <td>Type of the animation, valid options are "wave" and "none".</td>
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
            <td>p-skeleton</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-skeleton-circle</td>
            <td>Container element of a determinate progressbar.</td>
          </tr>
          <tr>
            <td>p-skeleton-animation-none</td>
            <td>Container element of an indeterminate progressbar.</td>
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
import Skeleton from 'primevue2/skeleton';
        `
      },
      baseCode: {
        basic: `
<Skeleton />
        `
      },
      circleCode: {
        basic: `
<Skeleton shape="circle" />
        `
      },
      sizeCode: {
        basic: `
<Skeleton width="100%" height="2rem" />
<Skeleton shape="circle" size="50px" />
        `
      },
      borderRadiusCode: {
        basic: `
<Skeleton borderRadius="16px" />
        `
      },
      animationCode: {
        basic: `
<Skeleton animation="none" />
        `
      }
    }
  }
}
</script>
