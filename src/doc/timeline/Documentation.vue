<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Timeline receives the events with the <i>value</i> property as a collection of arbitrary objects. In addition,
      <i>content</i> template is required to display the representation of an event.
      Example below is a sample events array that is used throughout the documentation.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Layout</h5>
    <p>Default layout of the timeline is vertical, setting <i>layout</i> to "horizontal" displays the items
      horizontally.</p>
    <DocSectionCode :code="layoutCode" />

    <h5>Alignment</h5>
    <p>Location of the timeline bar is defined using the <i>align</i> property.</p>
    <DocSectionCode :code="alignmentCode" />

    <p>In addition, the "alternate" alignment option make the contents take turns around the timeline bar.</p>
    <DocSectionCode :code="alignmentCode2" />

    <h5>Opposite</h5>
    <p>Content to be placed at the other side of the bar is defined with the <i>opposite</i> template.</p>
    <DocSectionCode :code="oppositeCode" />

    <h5>Custom Markers</h5>
    <p><i>marker</i> template allows placing a custom event marker instead of the default one. Below is an example with
      custom markers and content.</p>
    <DocSectionCode :code="customMarkersCode" />

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
            <td>An array of events to display.</td>
          </tr>
          <tr>
            <td>align</td>
            <td>string</td>
            <td>left</td>
            <td>Position of the timeline bar relative to the content. Valid values are "left", "right for vertical
              layout and "top", "bottom" for horizontal layout.</td>
          </tr>
          <tr>
            <td>layout</td>
            <td>string</td>
            <td>vertical</td>
            <td>Orientation of the timeline, valid values are "vertical" and "horizontal".</td>
          </tr>
          <tr>
            <td>dataKey</td>
            <td>string</td>
            <td>null</td>
            <td>Name of the field that uniquely identifies the a record in the data.</td>
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
            <td>opposite</td>
            <td>item: Position of the component<br />
              index: Index of the item</td>
          </tr>
          <tr>
            <td>marker</td>
            <td>item: Custom marker of the component<br />
              index: Index of the item</td>
          </tr>
          <tr>
            <td>content</td>
            <td>item: Content of the component<br />
              index: Index of the item</td>
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
            <td>p-timeline</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-timeline-left</td>
            <td>Container element when alignment is left.</td>
          </tr>
          <tr>
            <td>p-timeline-right</td>
            <td>Container element when alignment is right.</td>
          </tr>
          <tr>
            <td>p-timeline-top</td>
            <td>Container element when alignment is top.</td>
          </tr>
          <tr>
            <td>p-timeline-bottom</td>
            <td>Container element when alignment is bottom.</td>
          </tr>
          <tr>
            <td>p-timeline-alternate</td>
            <td>Container element when alignment is alternating.</td>
          </tr>
          <tr>
            <td>p-timeline-vertical</td>
            <td>Container element of a vertical timeline.</td>
          </tr>
          <tr>
            <td>p-timeline-horizontal</td>
            <td>Container element of a horizontal timeline.</td>
          </tr>
          <tr>
            <td>p-timeline-event</td>
            <td>Event element.</td>
          </tr>
          <tr>
            <td>p-timeline-event-opposite</td>
            <td>Opposite of an event content.</td>
          </tr>
          <tr>
            <td>p-timeline-event-content</td>
            <td>Event content.</td>
          </tr>
          <tr>
            <td>p-timeline-event-separator</td>
            <td>Separator element of an event.</td>
          </tr>
          <tr>
            <td>p-timeline-event-marker</td>
            <td>Marker element of an event.</td>
          </tr>
          <tr>
            <td>p-timeline-event-connector</td>
            <td>Connector element of an event.</td>
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
import Timeline from 'primevue2/timeline';
        `
      },
      baseCode: {
        basic: `
export default {
    data() {
        return {
            events: [
                {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
            ],
            events2: [
                "2020", "2021", "2022", "2023"
            ]
        }
    }
}
        `
      },
      baseCode2: {
        basic: `
<Timeline :value="events">
	<template #content="slotProps">
		{{slotProps.item.status}}
	</template>
</Timeline>
        `
      },
      layoutCode: {
        basic: `
<Timeline :value="events">
	<template #content="slotProps">
		{{slotProps.item.status}}
	</template>
</Timeline>
        `
      },
      alignmentCode: {
        basic: `
<Timeline :value="events" align="right">
	<template #content="slotProps">
		{{slotProps.item.status}}
	</template>
</Timeline>
        `
      },
      alignmentCode2: {
        basic: `
<Timeline :value="events" align="alternate">
	<template #content="slotProps">
		{{slotProps.item.status}}
	</template>
</Timeline>
        `
      },
      oppositeCode: {
        basic: `
<Timeline :value="events">
	<template #opposite="slotProps">
		<small class="p-text-secondary">{{slotProps.item.date}}</small>
	</template>
	<template #content="slotProps">
		{{slotProps.item.status}}
	</template>
</Timeline>
        `
      },
      customMarkersCode: {
        basic: `
<Timeline :value="events" align="alternate" class="customized-timeline">
	<template #marker="slotProps">
		<span class="custom-marker shadow-2" :style="{backgroundColor: slotProps.item.color}">
			<i :class="slotProps.item.icon"></i>
		</span>
	</template>
	<template #content="slotProps">
		<Card>
			<template #title>
				{{slotProps.item.status}}
			</template>
			<template #subtitle>
				{{slotProps.item.date}}
			</template>
			<template #content>
				<img v-if="slotProps.item.image" :src="'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" width="200" class="shadow-2" />
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
					quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
				<Button label="Read more" class="p-button-text"></Button>
			</template>
		</Card>
	</template>
</Timeline>
        `
      },
    }
  }
}
</script>
