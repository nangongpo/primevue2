<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Carousel requires a collection of items as its value along with a template to render each item.</p>
    <DocSectionCode :code="baseCode" />
    <h5>Items per page and Scroll Items</h5>
    <p>
      Number of items per page is defined using the <i>numVisible</i> property whereas number of items to scroll is
      defined with the <i>numScroll</i> property.
    </p>
    <DocSectionCode :code="baseCode2" />

    <h5>Responsive</h5>
    <p>
      For responsive design, <i>numVisible</i> and <i>numScroll</i> can be defined using the
      <i>responsiveOptions</i> property that should be an array of objects whose breakpoint defines the max-width to
      apply the settings.
    </p>
    <DocSectionCode :code="responsiveCode" />
    <DocSectionCode :code="responsiveCode2" importCode />

    <h5>Header and Footer</h5>
    <p>Custom content projection is available using the <i>header</i> and <i>footer</i> templates.</p>
    <DocSectionCode :code="headerAndFooterCode" />

    <h5>Orientation</h5>
    <p>
      Default layout of the Carousel is horizontal, other possible option is the vertical mode that is configured with
      the <i>orientation</i> property.
    </p>

    <DocSectionCode :code="orientationCode" />

    <h5>AutoPlay and Circular</h5>
    <p>
      When <i>autoplayInterval</i> is defined in milliseconds, items are scrolled automatically. In addition, for
      infinite scrolling <i>circular</i> property needs to be enabled. Note that in autoplay mode, circular is enabled
      by default.
    </p>
    <DocSectionCode :code="autoPlayAndCircularCode" />

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
            <td>array</td>
            <td>null</td>
            <td>An array of objects to display.</td>
          </tr>
          <tr>
            <td>page</td>
            <td>number</td>
            <td>null</td>
            <td>Index of the first item.</td>
          </tr>
          <tr>
            <td>circular</td>
            <td>boolean</td>
            <td>false</td>
            <td>Defines if scrolling would be infinite.</td>
          </tr>
          <tr>
            <td>autoplayInterval</td>
            <td>number</td>
            <td>null</td>
            <td>Time in milliseconds to scroll items automatically.</td>
          </tr>
          <tr>
            <td>numVisible</td>
            <td>number</td>
            <td>1</td>
            <td>Number of items per page.</td>
          </tr>
          <tr>
            <td>numScroll</td>
            <td>number</td>
            <td>1</td>
            <td>Number of items to scroll.</td>
          </tr>
          <tr>
            <td>responsiveOptions</td>
            <td>any</td>
            <td>null</td>
            <td>An array of options for responsive design.</td>
          </tr>
          <tr>
            <td>orientation</td>
            <td>string</td>
            <td>horizontal</td>
            <td>Specifies the layout of the component, valid values are "horizontal" and "vertical".</td>
          </tr>
          <tr>
            <td>verticalViewPortHeight</td>
            <td>string</td>
            <td>300px</td>
            <td>Height of the viewport in vertical layout.</td>
          </tr>
          <tr>
            <td>contentClass</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of main content.</td>
          </tr>
          <tr>
            <td>containerClass</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the viewport container.</td>
          </tr>
          <tr>
            <td>indicatorsContentClass</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the indicator items.</td>
          </tr>
        </tbody>
      </table>
    </div>

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
            <td>item</td>
            <td>
              data: Data of the component<br />
              index: Index of the item
            </td>
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
            <td>p-carousel</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-carousel-header</td>
            <td>Header section.</td>
          </tr>
          <tr>
            <td>p-carousel-footer</td>
            <td>Footer section.</td>
          </tr>
          <tr>
            <td>p-carousel-content</td>
            <td>Main content element. It contains the container of the viewport.</td>
          </tr>
          <tr>
            <td>p-carousel-container</td>
            <td>Container of the viewport. It contains navigation buttons and viewport.</td>
          </tr>
          <tr>
            <td>p-carousel-items-content</td>
            <td>Viewport.</td>
          </tr>
          <tr>
            <td>p-carousel-indicators</td>
            <td>Container of the indicators.</td>
          </tr>
          <tr>
            <td>p-carousel-indicator</td>
            <td>Indicator element.</td>
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
import Carousel from 'primevue2/carousel';
        `
      },
      baseCode: {
        basic: `
<Carousel :value="cars">
    <template #item="slotProps">
	</template>
</Carousel>
        `
      },
      baseCode2: {
        basic: `
<Carousel :value="cars" :numVisible="3" :numScroll="1">
	<template #item="slotProps">
	</template>
</Carousel>
        `
      },
      responsiveCode: {
        basic: `
<Carousel :value="cars" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions">
	<template #header>
		<h2>Basic</h2>
	</template>
	<template #item="slotProps">
		<div class="car-item">
            <div class="car-content">
                <div>
                    <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" />
                </div>
                <div>
                    <div class="car-title">{{slotProps.data.brand}}</div>
                    <div class="car-subtitle">{{slotProps.data.year}} | {{slotProps.data.color}}</div>

                    <div class="car-buttons">
                        <Button icon="pi pi-search" class="p-button-secondary" />
                        <Button icon="pi pi-star-fill" class="p-button-secondary" />
                        <Button icon="pi pi-cog" class="p-button-secondary" />
                    </div>
                </div>
            </div>
        </div>
	</template>
</Carousel>
        `
      },
      responsiveCode2: {
        basic: `
data() {
	return {
		responsiveOptions: [
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '600px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '480px',
				numVisible: 1,
				numScroll: 1
			}
		]
	}
}
        `
      },
      headerAndFooterCode: {
        basic: `
<Carousel :value="cars" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
	<template #header>
		<h2>Custom Header</h2>
	</template>
	<template #item="slotProps">
		Content
	</template>
	<template #footer>
		<h2>Custom Footer</h2>
	</template>
</Carousel>
        `
      },
      orientationCode: {
        basic: `
<Carousel :value="cars" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" :responsiveOptions="responsiveOptions">
	<template #item="slotProps">
		Content
	</template>
</Carousel>
        `
      },
      autoPlayAndCircularCode: {
        basic: `
<Carousel :value="cars" :numVisible="3" :numScroll="1" :circular="true" :autoplayInterval="3000">
	<template #header>
		<h2>Circular, AutoPlay</h2>
	</template>
	<template #item="slotProps">
		Content
	</template>
</Carousel>
        `
      },
    }
  }
}
</script>
