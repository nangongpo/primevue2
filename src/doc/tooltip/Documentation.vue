<template>
  <div>
    <h5>Getting Started</h5>
    <p>Tooltip is a directive that needs to be imported and configured with a name of your choice. Global configuration
      is done with the <i>Vue.directive</i> function.</p>
    <DocSectionCode :code="baseCode" importCode />

    <p>Tooltip can also be configured locally using the directives property of your component.</p>
    <DocSectionCode :code="baseCode2" importCode />

    <p>Once the tooltip is configured, it can be attached to a target using the v- prefix.</p>
    <DocSectionCode :code="baseCode3" />

    <p>Also, more than one value can be used.</p>
    <DocSectionCode :code="baseCode4" />

    <h5>Positions</h5>
    <p>There are four choices to position the tooltip, default value is "right" and alternatives are "top", "bottom",
      "left". Position is specified using a modifier.</p>
    <DocSectionCode :code="positionsCode" />

    <h5>Events</h5>
    <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and
      blur to hide.</p>
    <DocSectionCode :code="eventsCode" />

    <h5>Modifiers</h5>
    <p>As seen in positions and event sections, tooltip is configured via modifiers that can be chained. Tooltip below,
      gets displayed at the top of the input at focus event.
    </p>
    <DocSectionCode :code="modifiersCode" />

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
            <td>p-tooltip</td>
            <td>Input element.</td>
          </tr>
          <tr>
            <td>p-tooltip-arrow</td>
            <td>Arrow of the tooltip.</td>
          </tr>
          <tr>
            <td>p-tooltip-text</td>
            <td>Text of the tooltip</td>
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
      baseCode: {
        basic: `
import Tooltip from 'primevue2/tooltip';

Vue.directive('tooltip', Tooltip);
        `
      },
      baseCode2: {
        basic: `
directives: {
    'tooltip': Tooltip
}
        `
      },
      baseCode3: {
        basic: `
<InputText type="text" v-tooltip="'Enter your username'" />
        `
      },
      baseCode4: {
        basic: `
<InputText type="text" v-tooltip="{ value: 'Enter your username', disabled: true }" />
        `
      },
      positionsCode: {
        basic: `
<InputText type="text" v-tooltip.right="'Enter your username'" />
<InputText type="text" v-tooltip.top="'Enter your username'" />
<InputText type="text" v-tooltip.bottom="'Enter your username'" />
<InputText type="text" v-tooltip.top="'Enter your username'" />
        `
      },
      eventsCode: {
        basic: `
<InputText type="text" v-tooltip.focus="'Enter your username'" />
        `
      },
      modifiersCode: {
        basic: `
<InputText type="text" v-tooltip.top.focus="'Enter your username'" />
        `
      },
    }
  }
}
</script>
