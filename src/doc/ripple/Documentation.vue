<template>
  <div>
    <h5>Getting Started</h5>
    <p>Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs
      to be enabled at
      while installing PrimeVue.
    </p>
    <DocSectionCode :code="baseCode" importCode />

    <p><span class="font-bold">Note</span>: That would be it to enable ripple on PrimeVue components, next section
      describes how to use it with your own components and standard elements.</p>

    <h5>Directive</h5>
    <p>Ripple is a directive that needs to be imported and configured with a name of your choice. Global configuration
      is done with the <i>Vue.directive</i> function.</p>
    <DocSectionCode :code="directiveCode" importCode />

    <p>Ripple can also be configured locally using the directives property of your component.</p>
    <DocSectionCode :code="directiveCode2" importCode />

    <p>Once the ripple is configured, add <i>.p-ripple</i> class to the target and attach the directive with the v-
      prefix.</p>
    <DocSectionCode :code="directiveCode3" />

    <h5>Styling</h5>
    <p>Default styling of the animation adds a shade of white. This can easily be customized using css that changes the
      color of <i>.p-ink</i> element.</p>
    <DocSectionCode :code="stylingCode" />

    <DocSectionCode :code="stylingCode2" />

    <h5>Styling</h5>
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
            <td>p-ripple</td>
            <td>Host element.</td>
          </tr>
          <tr>
            <td>p-ink</td>
            <td>Ripple element.</td>
          </tr>
          <tr>
            <td>p-ink-active</td>
            <td>Ripple element during animating.</td>
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
import PrimeVue from 'primevue2/config';

Vue.use(PrimeVue, {ripple: true});
        `
      },
      directiveCode: {
        basic: `
import Ripple from 'primevue2/ripple';

Vue.directive('ripple', Ripple);
        `
      },
      directiveCode2: {
        basic: `
directives: {
    'ripple': Ripple
}
        `
      },
      directiveCode3: {
        basic: `
<div class="p-ripple" v-ripple></div>
        `
      },
      stylingCode: {
        basic: `
<div class="p-ripple purple" v-ripple></div>
        `
      },
      stylingCode2: {
        basic: `
<div class="p-ripple" v-ripple></div>
        `
      }
    }
  }
}
</script>
